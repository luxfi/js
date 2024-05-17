import { CORE_CONNECTOR_NAME, ConnectorId } from "@/constants";
import { useMemo } from "react";
import { useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export const useConnectWallet = () => {
  const { connect, connectors, ...rest } = useConnect({
    connector: new InjectedConnector(),
  });

  const myConnectors = useMemo(() => {
    return {
      coinbase: connectors.find((el) => el.id === ConnectorId.COINBASE),
      injected: connectors.find(
        (el) =>
          el.id === ConnectorId.INJECTED && el.name !== CORE_CONNECTOR_NAME,
      ),
      core: connectors.find((el) => el.name === CORE_CONNECTOR_NAME),
      metamask: connectors.find((el) => el.id === ConnectorId.METAMASK),
    };
  }, [connectors]);

  return {
    connect,
    connectors: myConnectors,
    ...rest,
  };
};
