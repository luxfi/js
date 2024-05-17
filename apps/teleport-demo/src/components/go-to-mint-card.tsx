import { Card, CardContent } from "@/ui/card";
import { memo, type HtmlHTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import { buttonVariants } from "@/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AMPLIFY_CHAIN } from "@/constants/chains";

export const GoToMintCard = memo(
  ({ ...rest }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
      <Card {...rest}>
        <CardContent className="flex flex-col gap-1">
          <p className="text-sm text-neutral-400 text-center">
            Mint some{" "}
            <span className="font-semibold">
              {AMPLIFY_CHAIN.utilityContracts.demoErc20.symbol}
            </span>{" "}
            to get started.
          </p>
          <Link
            to="/mint"
            className={cn(buttonVariants({ variant: "default" }), "mt-1")}
          >
            Go to Mint
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </CardContent>
      </Card>
    );
  },
);
