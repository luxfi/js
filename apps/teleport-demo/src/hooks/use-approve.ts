import { NATIVE_ERC20_ABI } from "@/constants/abis/native-erc-20";
import type { EvmChain } from "@/types/chain";
import { toast } from "@/ui/hooks/use-toast";
import { useContractWrite, type Address } from "wagmi";

const MAXIMUM_ALLOWANCE = BigInt(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
);

export const useApprove = ({
  chain,
  tokenAddress,
  addressToApprove,
}: {
  chain: EvmChain;
  tokenAddress?: Address;
  addressToApprove?: Address;
}) => {
  const { writeAsync } = useContractWrite({
    address: tokenAddress,
    functionName: "approve",
    abi: NATIVE_ERC20_ABI,
    args:
      chain && tokenAddress && addressToApprove
        ? [addressToApprove, MAXIMUM_ALLOWANCE]
        : undefined,
    chainId: Number(chain?.chainId),
  });

  return {
    approve: async () => {
      try {
        if (!chain) {
          throw new Error("Missing source subnet.");
        }

        if (!writeAsync) {
          throw new Error("writeAsync is undefined.");
        }

        const approveResponse = await writeAsync?.();
        console.info("Successfully approved token.", approveResponse);
        toast({
          title: "Success",
          description: `Approval successful!`,
        });
        return approveResponse;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        console.warn(e?.message ?? e);

        return undefined;
      }
    },
  };
};
