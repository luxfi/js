import { TELEPORTER_BRIDGE_ABI } from "@/constants/abis/teleporter-bridge-abi";
import { useAccount, useContractWrite, useContractRead } from "wagmi";
import { useApprove } from "./use-approve";
import { NATIVE_ERC20_ABI } from "@/constants/abis/native-erc-20";
import { isNil } from "lodash-es";
import type { EvmChain } from "@/types/chain";
import { useLatestTeleporterTransactions } from "./use-transactions";

export const useTeleport = ({
  fromChain,
  toChain,
  amount,
}: {
  fromChain: EvmChain;
  toChain: EvmChain;
  amount?: bigint;
}) => {
  const { address } = useAccount();

  const { mutate: refetchTxs } = useLatestTeleporterTransactions();

  const { refetch: fetchAllowance } = useContractRead({
    address: fromChain?.utilityContracts.demoErc20.address,
    functionName: "allowance",
    abi: NATIVE_ERC20_ABI,
    args:
      address && fromChain
        ? [address, fromChain?.utilityContracts.bridge.address]
        : undefined,
    enabled: false, // Disable auto-fetch since we fetch manually right before teleporting.
    chainId: Number(fromChain.chainId),
  });

  const { approve } = useApprove({
    chain: fromChain,
    addressToApprove: fromChain?.utilityContracts.bridge.address,
    tokenAddress: fromChain?.utilityContracts.demoErc20.address,
  });

  const { writeAsync } = useContractWrite({
    address: fromChain?.utilityContracts.bridge.address,
    functionName: "bridgeTokens",
    abi: TELEPORTER_BRIDGE_ABI,
    args:
      fromChain && toChain && address && amount
        ? [
            toChain?.platformChainIdHex,
            toChain?.utilityContracts.bridge.address,
            fromChain?.utilityContracts.demoErc20.address,
            address,
            amount,
            BigInt(0),
            BigInt(0),
          ]
        : undefined,
    chainId: fromChain ? Number(fromChain.chainId) : undefined,
  });

  return {
    teleportToken: async () => {
      try {
        /**
         * Validate inputs.
         */
        if (!amount) {
          throw new Error("Missing amount.");
        }

        /**
         * Get approval if allowance is insuffient.
         */
        const { data: currentAllowance, refetch: fetchAllowanceAgain } =
          await fetchAllowance();
        if (isNil(currentAllowance)) {
          throw new Error("Unable to detect current allowance.");
        }

        const hasSufficientAllowance = amount < currentAllowance;
        if (!hasSufficientAllowance) {
          const approveResponse = await approve();
          console.info("Approve successful.", approveResponse);
          await fetchAllowanceAgain();
        }

        /**
         * Teleport tokens.
         */
        if (!writeAsync) {
          throw new Error("writeAsync is undefined.");
        }
        setTimeout(refetchTxs, 3000); // Wait since glacier is behind the RPC by a few seconds
        return await writeAsync();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        console.error(e?.message ?? e);

        return undefined;
      }
    },
  };
};
