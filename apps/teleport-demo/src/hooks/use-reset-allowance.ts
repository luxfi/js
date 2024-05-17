import { NATIVE_ERC20_ABI } from "@/constants/abis/native-erc-20";
import type { EvmChain } from "@/types/chain";
import { toast } from "@/ui/hooks/use-toast";
import {
  useContractWrite,
  useSwitchNetwork,
  type Address,
  useContractRead,
  useAccount,
} from "wagmi";
import { useConnectedChain } from "./use-connected-chain";

const MAXIMUM_ALLOWANCE = BigInt(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
);

export const useResetAllowance = ({
  chain,
  tokenAddress,
  addressToReset,
}: {
  chain: EvmChain;
  tokenAddress?: Address;
  addressToReset?: Address;
}) => {
  const { connectedChain } = useConnectedChain();
  const { switchNetworkAsync } = useSwitchNetwork({
    chainId: Number(chain.chainId),
  });

  const { address } = useAccount();
  const { data: allowance } = useContractRead({
    address: chain?.utilityContracts.demoErc20.address,
    functionName: "allowance",
    abi: NATIVE_ERC20_ABI,
    args:
      address && chain
        ? [address, chain?.utilityContracts.bridge.address]
        : undefined,
    enabled: false, // Disable auto-fetch since we fetch manually right before teleporting.
    chainId: Number(chain?.chainId),
  });

  const { writeAsync: resetAllowance } = useContractWrite({
    address: tokenAddress,
    functionName: "decreaseAllowance",
    abi: NATIVE_ERC20_ABI,
    args:
      chain && tokenAddress && addressToReset
        ? [addressToReset, allowance ? allowance : MAXIMUM_ALLOWANCE]
        : undefined,
    chainId: Number(chain?.chainId),
  });

  return {
    resetAllownce: async () => {
      try {
        if (!switchNetworkAsync) {
          throw new Error("switchNetworkAsync is undefined.");
        }
        if (!chain) {
          throw new Error("Missing source subnet.");
        }

        if (connectedChain?.chainId !== chain.chainId) {
          const chainSwitchRes = await switchNetworkAsync(
            Number(chain.chainId),
          );
          if (String(chainSwitchRes.id) !== chain.chainId) {
            throw new Error(`Must be connected to ${chain.name}.`);
          }
        }

        if (!resetAllowance) {
          throw new Error("resetAllowance is undefined.");
        }

        const resetAllowanceResponse = await resetAllowance?.();
        console.info("Successfully reset allowance.", resetAllowanceResponse);
        toast({
          title: "Success",
          description: `Allowance reset successful!`,
        });
        return resetAllowanceResponse;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        console.warn(e?.message ?? e);

        return undefined;
      }
    },
  };
};
