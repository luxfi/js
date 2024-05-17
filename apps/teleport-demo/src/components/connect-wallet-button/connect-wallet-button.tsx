import { useConnectWallet } from "@/hooks/use-connect-wallet";
import { Button, buttonVariants, type ButtonProps } from "@/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { MetaMaskIcon } from "@/icons/metamask";
import { CheckCircle, WalletIcon } from "lucide-react";
import { CoinbaseWalletIcon } from "@/icons/coinbase";

import { CoreText } from "../core-text";
import { useToast } from "@/ui/hooks/use-toast";
import { type Connector, useAccount } from "wagmi";
import { AutoAnimate } from "@/ui/auto-animate";
import { SettingsMenu } from "./settings-menu";
import { LoadingSpinner } from "@/ui/loading-spinner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { cn } from "@/utils/cn";
import { CORE_CHROME_DOWNLOAD_URL } from "@/constants";

const ConnectorButton = ({
  handleConnect,
  connector,
  label,
  icon,
}: {
  handleConnect: (connector?: Connector) => void;
  connector?: Connector;
  label: string;
  icon: React.ReactNode;
}) => {
  const isDisabled = !connector?.ready;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className={cn("w-full", isDisabled ? "cursor-not-allowed" : "")}>
          <Button
            variant="outline"
            onClick={() => handleConnect(connector)}
            disabled={isDisabled}
            className="w-full rounded-md"
          >
            <span className="space-x-2 inline-flex items-center">
              {icon}
              <span>{label}</span>
            </span>
          </Button>
        </div>
      </TooltipTrigger>
      {isDisabled && (
        <TooltipContent>
          <p>{label} not installed</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
};

export const ConnectWalletButton = ({ className, ...rest }: ButtonProps) => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isLoading } = useConnectWallet();

  const { toast } = useToast();

  const handleConnect = (connector?: Connector) => {
    if (connector?.ready) {
      // @ts-expect-error -- I'm not sure why it expects ConnectArgs instead of Connector since this works.
      connect(connector);
    } else {
      const strippedName = connector?.name.split("Wallet").join("");
      toast({
        title: "Can't Connect",
        description: `${strippedName} Wallet not found.`,
      });
    }
  };

  if (isConnected && address) {
    return <SettingsMenu />;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("rounded-full", className)}
          {...rest}
        >
          Connect Wallet
        </Button>
      </PopoverTrigger>
      <PopoverContent className="sm:max-w-[425px]" align="end">
        <AutoAnimate>
          {!isLoading && !isConnected && (
            <>
              <p className="text-sm text-gray-200">Connect with:</p>

              <div className="grid gap-4 py-4">
                {connectors.core?.ready ? (
                  <Button
                    variant="outline"
                    className="h-24 rounded-lg"
                    onClick={() => handleConnect(connectors.core)}
                  >
                    <CoreText />
                  </Button>
                ) : (
                  <a
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-24 rounded-lg",
                    )}
                    href={CORE_CHROME_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CoreText />
                  </a>
                )}
                <ConnectorButton
                  handleConnect={handleConnect}
                  connector={connectors.metamask}
                  icon={<MetaMaskIcon />}
                  label="MetaMask"
                />
                <ConnectorButton
                  handleConnect={handleConnect}
                  connector={connectors.coinbase}
                  icon={<CoinbaseWalletIcon />}
                  label="Coinbase Wallet"
                />
                <ConnectorButton
                  handleConnect={handleConnect}
                  connector={connectors.injected}
                  icon={<WalletIcon />}
                  label="Other"
                />
              </div>
            </>
          )}
        </AutoAnimate>

        <AutoAnimate>
          {isLoading && !isConnected && (
            <div className="flex-col space-y-4">
              <p className="text-sm text-center">
                Waiting for Approval in Wallet...
              </p>
              <LoadingSpinner className="block mx-auto" />
            </div>
          )}
        </AutoAnimate>

        <AutoAnimate>
          {isConnected && (
            <div className="center flex justify-center">
              <p className="text-sm">Connected</p>
              <CheckCircle className="stroke-emerald-500 ml-3" />
            </div>
          )}
        </AutoAnimate>
      </PopoverContent>
    </Popover>
  );
};
