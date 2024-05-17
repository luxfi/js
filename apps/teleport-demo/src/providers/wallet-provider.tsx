import { WAGMI_CHAINS } from "@/constants/chains";
import { publicProvider } from "wagmi/providers/public";
import { WagmiConfig, configureChains } from "wagmi";
import { w3mProvider } from "@web3modal/ethereum";
import { useMemo, type PropsWithChildren } from "react";
import { WALLETCONNECT_V2_CORE_PROJECT_ID } from "@/constants";
import { APP_CONFIG } from "@/config";
import { createWagmiConfig } from "@/utils/create-wagmi-config";

export const WalletProvider = ({ children }: PropsWithChildren) => {
  const config = useMemo(() => {
    const {
      chains: wagmiChains,
      webSocketPublicClient,
      publicClient,
    } = configureChains(WAGMI_CHAINS, [
      publicProvider(),
      w3mProvider({ projectId: WALLETCONNECT_V2_CORE_PROJECT_ID }),
    ]);

    return createWagmiConfig({
      appName: APP_CONFIG.appName,
      chains: wagmiChains,
      webSocketPublicClient,
      publicClient,
      isWalletConnectEnabled: true,
    });
  }, []);

  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};
