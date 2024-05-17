import { Card, CardContent } from "@/ui/card";
import { memo, type HtmlHTMLAttributes } from "react";
import type { EvmChain } from "@/types/chain";
import { cn } from "@/utils/cn";
import { buttonVariants } from "@/ui/button";
import { ExternalLink } from "lucide-react";

export const OutOfGasCard = memo(
  ({
    chain,
    ...rest
  }: { chain: EvmChain } & HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
      <Card {...rest}>
        <CardContent className="flex flex-col gap-1">
          <p className="text-sm text-neutral-400 text-center">
            Out of gas! Go to the faucet to mint some{" "}
            <span className="font-semibold">{chain.networkToken.symbol}</span>.
          </p>
          <a
            className={cn(buttonVariants({ variant: "default" }), "mt-1")}
            href={chain.faucetUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Faucet
            <ExternalLink size={16} className="ml-1" />
          </a>
        </CardContent>
      </Card>
    );
  },
);
