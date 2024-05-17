import { CHAINS } from "@/constants/chains";
import { useMemo } from "react";
import { useNetwork } from "wagmi";

export const useConnectedChain = () => {
  const { chain: wagmiConnectedChain } = useNetwork();

  return {
    connectedChain: useMemo(() => {
      return CHAINS.find(
        (chain) =>
          wagmiConnectedChain &&
          chain.chainId === String(wagmiConnectedChain.id),
      );
    }, [wagmiConnectedChain]),
  };
};
