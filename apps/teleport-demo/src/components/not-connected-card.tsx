import { Card, CardContent } from "@/ui/card";
import { memo, type HtmlHTMLAttributes } from "react";
import { ConnectWalletButton } from "./connect-wallet-button";

export const NotConnectedCard = memo(
  ({
    actionLabel,
    ...rest
  }: { actionLabel: string } & HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
      <Card {...rest}>
        <CardContent className="flex flex-col gap-1">
          <p className="text-sm text-neutral-400 text-center">
            Must connect wallet to {actionLabel}.
          </p>
          <ConnectWalletButton variant="default" className="mt-1" />
        </CardContent>
      </Card>
    );
  },
);
