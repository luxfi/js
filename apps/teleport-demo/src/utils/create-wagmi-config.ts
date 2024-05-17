import {
  CORE_CONNECTOR_NAME,
  WALLETCONNECT_V2_CORE_PROJECT_ID,
} from "@/constants";
import { w3mConnectors } from "@web3modal/ethereum";
import {
  type Chain,
  createConfig,
  type CreateConfigParameters,
  type WindowProvider,
} from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

export const createWagmiConfig = ({
  appName, // e.g. "Core"
  chains,
  publicClient,
}: CreateConfigParameters & {
  appName: string;
  chains: Chain[];
  isWalletConnectEnabled?: boolean;
}) =>
  createConfig({
    autoConnect: true,
    connectors: [
      ...w3mConnectors({ projectId: WALLETCONNECT_V2_CORE_PROJECT_ID, chains }), // KEEP THIS ONE FIRST
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName,
        },
      }),
      new MetaMaskConnector({
        chains,
      }),
      new InjectedConnector({
        chains,
        options: {
          name: CORE_CONNECTOR_NAME,
          getProvider: () => window.avalanche as WindowProvider,
          shimDisconnect: true,
        },
      }),
    ],
    publicClient,
  });
