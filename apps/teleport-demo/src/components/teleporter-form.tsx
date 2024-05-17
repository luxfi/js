import { AMPLIFY_CHAIN, BULLETIN_CHAIN, CHAINS } from "@/constants/chains";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

import { FancyAvatar } from "./fancy-avatar";
import { memo, useEffect, useMemo, useState } from "react";
import { LoadingButton } from "./loading-button";

import { useAccount, useBalance } from "wagmi";
import { Card, CardContent } from "@/ui/card";

import type { EvmChain } from "@/types/chain";
import { InputWithMax } from "@/ui/input";
import { AutoAnimate } from "@/ui/auto-animate";
import { useErc20Balance } from "@/hooks/use-erc20-balance";
import { Skeleton } from "@/ui/skeleton";
import { isNil } from "lodash-es";
import { formatStringNumber } from "@/utils/format-string";
import { MIN_AMOUNT_FOR_GAS } from "@/constants/token";
import { parseNumberInput } from "@/utils/parse-number-input";
import { useTeleport } from "@/hooks/use-teleport";
import Big from "big.js";
import { NotConnectedCard } from "./not-connected-card";
import { OutOfGasCard } from "./out-of-gas-card";
import { toast } from "@/ui/hooks/use-toast";
import { TransactionSuccessAlert } from "./transaction-success-alert";
import { GoToMintCard } from "./go-to-mint-card";
import { useConnectedChain } from "@/hooks/use-connected-chain";

// Keeping this here for easy debugging.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DebugResetAllowanceButton } from "./debug-reset-allowance";
import { useSwitchChain } from "@/hooks/use-switch-chain";

const findChain = (chainId: string) => {
  const chain = CHAINS.find((chain) => chain.chainId === chainId);
  if (!chain) {
    throw new Error("Invalid selected chain");
  }
  return chain;
};

export const TeleporterForm = memo(() => {
  /**
   * Chain state
   */
  const [fromChain, setFromChain] = useState<EvmChain>(AMPLIFY_CHAIN);
  const [toChain, setToChain] = useState<EvmChain>(BULLETIN_CHAIN);
  const toChainsList = useMemo(
    () => CHAINS.filter((chain) => chain.chainId !== fromChain.chainId),
    [fromChain],
  );

  /**
   * If fromChain is changed to same as toChain,
   * update toChain to be a different chain.
   */
  useEffect(() => {
    if (fromChain.chainId !== toChain.chainId) {
      return;
    }
    const nextToChain = toChainsList[0];
    if (!nextToChain) {
      throw new Error("Invalid toChainList");
    }
    setToChain(nextToChain);
  }, [fromChain, toChainsList]);

  /**
   * When the connected chain changes, switch to that.
   */
  const { connectedChain } = useConnectedChain();
  useEffect(() => {
    if (!connectedChain) {
      return;
    }
    setFromChain(connectedChain);
  }, [connectedChain]);

  /**
   * Form state
   */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [amount, setAmount] = useState("");
  const amountBigInt = useMemo(() => {
    try {
      return fromChain
        ? BigInt(
            new Big(amount)
              .mul(10 ** fromChain.utilityContracts.demoErc20.decimals)
              .toString(),
          )
        : undefined;
    } catch {
      return undefined;
    }
  }, [amount]);
  const [completedTeleportTx, setCompletedTeleportTx] = useState<{
    txHash: string;
    chain: EvmChain;
  }>();

  /**
   * Wallet state
   */
  const { address, isConnected } = useAccount();
  const { data: gasBalance, refetch: refetchGasBalance } = useBalance({
    address,
  });
  const {
    erc20Balance,
    formattedErc20Balance,
    isLoading: isLoadingErc20Balance,
    refetch: refetchErc20Balance,
  } = useErc20Balance({ chain: fromChain });
  const { erc20Balance: amplifyErc20Balance } = useErc20Balance({
    chain: AMPLIFY_CHAIN,
  });

  const hasErc20Balance = !isNil(erc20Balance) ? erc20Balance > 0 : true;
  const hasAmplifyErc20Balance = !isNil(amplifyErc20Balance)
    ? amplifyErc20Balance > 0
    : true;

  const { switchChain } = useSwitchChain();
  const { teleportToken } = useTeleport({
    amount: amountBigInt,
    fromChain,
    toChain,
  });

  const handleTeleport = async () => {
    if (!fromChain) {
      toast({
        title: "Teleport failed",
        description: "Invalid source chain.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    setCompletedTeleportTx(undefined);
    try {
      await switchChain(fromChain);
      const res = await teleportToken();
      setIsSubmitting(false);
      if (!res) {
        toast({
          title: "Teleport failed",
          description: "Please try again",
          variant: "destructive",
        });
        return;
      }
      refetchGasBalance();
      refetchErc20Balance();
      setCompletedTeleportTx({
        chain: fromChain,
        txHash: res.hash,
      });

      toast({
        title: "Teleport success!",
        description: "View your transaction on the explorer",
      });
    } catch {
      setIsSubmitting(false);
      return;
    }
  };

  const hasGas = !isNil(gasBalance)
    ? gasBalance.value > MIN_AMOUNT_FOR_GAS
    : true;
  const hasSufficientErc20Balance =
    !isNil(erc20Balance) && !isNil(amountBigInt)
      ? erc20Balance >= amountBigInt
      : true;

  const isReadyToTeleport =
    isConnected &&
    hasGas &&
    amountBigInt &&
    hasSufficientErc20Balance &&
    !isSubmitting;

  return (
    <>
      <Card className="border-0 bg-neutral-900 rounded-b-none">
        <CardContent>
          <div className="grid grid-cols-12 gap-y-4 gap-x-4">
            <p className="font-semibold text-md col-span-3 sm:col-span-6">
              From
            </p>
            <Select
              onValueChange={async (chainId) =>
                setFromChain(findChain(chainId))
              }
              value={fromChain?.chainId ?? ""}
              disabled={isSubmitting}
            >
              <SelectTrigger
                disabled={!isConnected}
                className="col-span-9 sm:col-span-6 border-neutral-700"
              >
                <SelectValue placeholder="Select a subnet" />
              </SelectTrigger>
              <SelectContent>
                {CHAINS.map((chain) => (
                  <SelectItem value={chain.chainId} key={chain.chainId}>
                    <div className="flex items-center space-x-2 flex-nowrap p-1">
                      <FancyAvatar
                        src={chain.logoUrl}
                        label={chain.name}
                        className="w-6 h-6"
                      />
                      <p>{chain.name}</p>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="col-span-12 text-sm text-right text-gray-400">
              <div>
                Balance:{" "}
                {isLoadingErc20Balance ? (
                  <Skeleton className="w-6 h-2 inline-flex" />
                ) : isNil(formattedErc20Balance) ? (
                  "N/A"
                ) : (
                  formatStringNumber(formattedErc20Balance)
                )}{" "}
              </div>
            </div>
            <div className="flex flex-col justify-center col-span-3 sm:col-span-6">
              <p className="font-semibold text-md text-right">
                {(fromChain ?? AMPLIFY_CHAIN).utilityContracts.demoErc20.symbol}
              </p>
            </div>
            <div className="col-span-9 sm:col-span-6">
              <InputWithMax
                placeholder="0.0"
                value={amount}
                onChange={(e) => setAmount(parseNumberInput(e.target.value))}
                disabled={isSubmitting || !isConnected}
                maxButtonProps={{
                  onClick: () => {
                    formattedErc20Balance && setAmount(formattedErc20Balance);
                  },
                  disabled: !erc20Balance,
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-0 bg-neutral-800 rounded-t-none">
        <CardContent>
          <div className="grid grid-cols-12 gap-y-4 gap-x-4">
            <p className="font-semibold text-md col-span-3 sm:col-span-6">To</p>
            <Select
              onValueChange={(chainId) => setToChain(findChain(chainId))}
              value={toChain?.chainId}
              disabled={isSubmitting}
            >
              <SelectTrigger
                disabled={!isConnected}
                className="col-span-9 sm:col-span-6 border-neutral-600"
              >
                <SelectValue placeholder="Select a subnet" />
              </SelectTrigger>
              <SelectContent>
                {toChainsList.map((chain) => (
                  <SelectItem value={chain.chainId} key={chain.chainId}>
                    <div className="flex items-center space-x-2 flex-nowrap p-1">
                      <FancyAvatar
                        src={chain.logoUrl}
                        label={chain.name}
                        className="w-6 h-6"
                      />
                      <p>{chain.name}</p>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4">
        <LoadingButton
          variant={isReadyToTeleport ? "primary-gradient" : "secondary"}
          className="w-full"
          onClick={handleTeleport}
          isLoading={isSubmitting}
          disabled={!isReadyToTeleport}
          loadingText="Bridging..."
          tooltipContent={
            !isConnected
              ? "Please connect your wallet."
              : !hasGas
              ? "Insufficient gas balance."
              : !amount
              ? "Please enter an amount."
              : !hasSufficientErc20Balance
              ? "Insufficient balance. Please enter a lower amount."
              : undefined
          }
        >
          BRIDGE
        </LoadingButton>
        <AutoAnimate>
          {!isConnected ? (
            <NotConnectedCard actionLabel="teleport" className="mt-4" />
          ) : !hasGas && fromChain ? (
            <OutOfGasCard chain={fromChain} className="mt-4" />
          ) : !hasAmplifyErc20Balance && !hasErc20Balance ? (
            <GoToMintCard className="mt-4" />
          ) : null}
        </AutoAnimate>
        <AutoAnimate>
          {!!completedTeleportTx && (
            <TransactionSuccessAlert
              explorerBaseUrl={completedTeleportTx.chain.explorerUrl}
              txHash={completedTeleportTx.txHash}
              className="mt-4"
            />
          )}
        </AutoAnimate>
      </div>
      {/* Use this to debug handling allowances */}
      {/* <DebugResetAllowanceButton chain={fromChain} /> */}
    </>
  );
});
