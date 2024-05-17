import {
  isExportTx,
  isImportTx,
  useLatestTeleporterTransactions,
} from "@/hooks/use-transactions";
import { buttonVariants } from "@/ui/button";
import { Card } from "@/ui/card";
import { cn } from "@/utils/cn";
import { truncateAddress } from "@/utils/truncate-address";
import { isEmpty, isNil } from "lodash-es";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useAccount } from "wagmi";
import { FancyAvatar } from "./fancy-avatar";
import Big from "big.js";
import { bigToDisplayString } from "@/utils/format-string";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const ActivityFeed = () => {
  const { address } = useAccount();
  const { data: transactions, isLoading } = useLatestTeleporterTransactions();

  if (isLoading || !address || isNil(transactions) || isEmpty(transactions)) {
    return null;
  }

  return (
    <div className="px-14 max-sm:px-1 my-12">
      <h2 className="ml-2 text-lg font-medium">Your Activity</h2>
      <div className="flex flex-col mt-2">
        {transactions.map((tx) => {
          const isExport = isExportTx(tx, address);
          const isImport = isImportTx(tx, address);
          return (
            <Card className="border-0 rounded-none px-2 py-3 border-b-2 flex items-center">
              <div className=" flex">
                <FancyAvatar
                  src={tx.chain.logoUrl}
                  label={tx.chain.shortName}
                  className="w-8 h-8"
                />
              </div>
              <div className="flex flex-col items-start ml-2">
                <div className="flex justify-center items-center">
                  <a
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-primary-foreground text-sm font-normal h-2 px-0 whitespace-nowrap",
                    )}
                    href={`${tx.chain.explorerUrl}/tx/${tx.txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {truncateAddress(tx.txHash)}
                  </a>
                  <CheckCircle className="ml-3 w-4 h-4 stroke-emerald-500" />
                  <span className="text-neutral-400 text-sm ml-1">
                    {dayjs(tx.blockTimestamp * 1000).fromNow()}
                  </span>
                </div>
                <Card
                  className={cn(
                    "rounded-full py-0.5 px-1 bg-neutral-800 border-0 mt-1 text-xs inline-flex items-center",
                    isExport ? "bg-amber-700" : "bg-sky-800",
                  )}
                >
                  {isExport ? (
                    <>
                      <ArrowRight className="w-3 h-3 mx-1" />
                      Export
                    </>
                  ) : isImport ? (
                    <>
                      <ArrowLeft className="w-3 h-3 mx-1" />
                      Import
                    </>
                  ) : (
                    "huh"
                  )}
                </Card>
              </div>
              <div className="flex grow items-center justify-end">
                <p className="text-xl">
                  {bigToDisplayString(
                    new Big(tx.value).div(10 ** tx.erc20Token.decimals),
                  )}{" "}
                  <span className="font-semibold text-sm text-neutral-400">
                    {tx.erc20Token.symbol}
                  </span>
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
