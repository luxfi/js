import {
  AMPLIFY_CHAIN,
  BULLETIN_CHAIN,
  CONDUIT_CHAIN,
} from "@/constants/chains";

import { FancyAvatar } from "./fancy-avatar";
import { memo, useState } from "react";
import { LoadingButton } from "./loading-button";
import { useMintAmplify } from "@/hooks/use-mint-amplify";
import { AutoAnimate } from "@/ui/auto-animate";
import { useAccount, useBalance } from "wagmi";
import { MIN_AMOUNT_FOR_GAS } from "@/constants/token";
import { formatStringNumber } from "@/utils/format-string";
import { FlashingUpdate } from "./flashing-update";
import { isNil } from "lodash-es";
import { NotConnectedCard } from "./not-connected-card";
import { OutOfGasCard } from "./out-of-gas-card";
import { Card, CardContent } from "@/ui/card";
import type { EvmChain } from "@/types/chain";
import { useErc20Balance } from "@/hooks/use-erc20-balance";
import { cn } from "@/utils/cn";
import { TransactionSuccessAlert } from "./transaction-success-alert";
import { buttonVariants } from "@/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useSwitchChain } from "@/hooks/use-switch-chain";

const BalancesCard = ({
  chain,
  isBigLayout = false,
}: {
  chain: EvmChain;
  isBigLayout?: boolean;
}) => {
  const { address } = useAccount();
  const { data: gasBalance } = useBalance({
    address,
    chainId: Number(chain.chainId),
  });

  const { formattedErc20Balance } = useErc20Balance({
    chain: chain,
  });

  return (
    <Card
      className={cn(
        "border-0 w-full",
        isBigLayout ? "bg-neutral-800" : "bg-neutral-900",
      )}
    >
      <CardContent>
        <div className="flex flex-nowrap items-center">
          <FancyAvatar
            className="col-span-6 w-6 h-6"
            src={chain.logoUrl}
            label={chain.utilityContracts.demoErc20.symbol}
          />
          <p className="text-md font-medium ml-2">{chain.name}</p>
        </div>
        <div
          className={cn(
            "mt-4 flex gap-2",
            isBigLayout
              ? "sm:flex-row flex-col align-center justify-around"
              : "flex-col",
          )}
        >
          <p className="whitespace-nowrap ">
            <FlashingUpdate
              className={cn(
                "font-semibold ml-2",
                isBigLayout ? "text-4xl" : "text-xl",
              )}
            >
              {formatStringNumber(gasBalance?.formatted ?? "0")}
            </FlashingUpdate>
            <span className="text-md text-neutral-400 font-semibold ml-1">
              {chain.networkToken.name}
            </span>
          </p>
          <p className="whitespace-nowrap">
            <FlashingUpdate
              className={cn(
                "font-semibold ml-2",
                isBigLayout ? "text-4xl" : "text-xl",
              )}
            >
              {formatStringNumber(formattedErc20Balance ?? "0")}
            </FlashingUpdate>
            <span className="text-md text-neutral-400 font-semibold ml-1">
              {chain.utilityContracts.demoErc20.symbol}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const MintForm = memo(() => {
  const { address, isConnected } = useAccount();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mintTxHash, setMintTxHash] = useState<string>();

  const { mintToken } = useMintAmplify();

  const { refetch } = useErc20Balance({
    chain: AMPLIFY_CHAIN,
  });

  const { switchChain } = useSwitchChain();
  const handleMint = async () => {
    setIsSubmitting(true);
    setMintTxHash(undefined);
    try {
      await switchChain(AMPLIFY_CHAIN);
      const response = await mintToken();
      setIsSubmitting(false);
      setMintTxHash(response?.hash);
      refetch();
    } catch {
      setIsSubmitting(false);
      return;
    }
  };

  const { data: gasBalance } = useBalance({
    address,
    chainId: Number(AMPLIFY_CHAIN.chainId),
  });
  const hasGas = !isNil(gasBalance)
    ? gasBalance.value > MIN_AMOUNT_FOR_GAS
    : true;
  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <BalancesCard chain={AMPLIFY_CHAIN} isBigLayout />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <BalancesCard chain={BULLETIN_CHAIN} />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <BalancesCard chain={CONDUIT_CHAIN} />
        </div>
      </div>
      <div className="mt-4">
        <LoadingButton
          variant={isConnected && hasGas ? "primary-gradient" : "secondary"}
          className="w-full"
          isLoading={isSubmitting}
          onClick={handleMint}
          disabled={!isConnected || !hasGas || isSubmitting}
        >
          MINT
        </LoadingButton>
        <AutoAnimate>
          {!isConnected ? (
            <NotConnectedCard actionLabel="mint" className="mt-4" />
          ) : !hasGas ? (
            <OutOfGasCard chain={AMPLIFY_CHAIN} className="mt-4" />
          ) : null}
        </AutoAnimate>
        <AutoAnimate>
          {!!mintTxHash && (
            <TransactionSuccessAlert
              explorerBaseUrl={AMPLIFY_CHAIN.explorerUrl}
              txHash={mintTxHash}
              className="mt-4"
            >
              <Link
                to="/"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full mt-4",
                )}
              >
                <ArrowLeft size={16} className="mr-1" />
                Go to Teleporter
              </Link>
            </TransactionSuccessAlert>
          )}
        </AutoAnimate>
      </div>
    </>
  );
});
