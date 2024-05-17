import { NATIVE_ERC20_ABI } from "@/constants/abis/native-erc-20";
import type { EvmChain } from "@/types/chain";
import Big from "big.js";
import { isNil } from "lodash-es";
import { useMemo } from "react";
import { useContractRead, useAccount } from "wagmi";

export const useErc20Balance = ({ chain }: { chain?: EvmChain }) => {
  const { address } = useAccount();
  const { data: erc20Balance, ...rest } = useContractRead({
    abi: NATIVE_ERC20_ABI,
    functionName: "balanceOf",
    address: chain?.utilityContracts.demoErc20.address,
    args: address ? [address] : undefined,
    chainId: chain ? Number(chain.chainId) : undefined,
  });
  const formattedErc20Balance = useMemo(() => {
    if (isNil(chain) || isNil(erc20Balance)) {
      return undefined;
    }

    return new Big(erc20Balance.toString())
      .div(10 ** chain?.utilityContracts.demoErc20.decimals)
      .toString();
  }, [erc20Balance]);

  return {
    erc20Balance,
    formattedErc20Balance,
    ...rest,
  };
};
