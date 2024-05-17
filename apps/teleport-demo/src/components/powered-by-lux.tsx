import { cn } from "@/utils/cn";
import { memo, type HtmlHTMLAttributes } from "react";
import { LuxColorIcon } from "./avalanche-icon";
import { SUBNET_EXPLORER_URL } from "@/constants";
import { buttonVariants } from "@/ui/button";

export type PoweredByLuxProps = {
  subnetVariant?: boolean;
} & HtmlHTMLAttributes<HTMLAnchorElement>;

export const PoweredByLux = memo(({ ...rest }: PoweredByLuxProps) => {
  return (
    <a
      className={cn(
        buttonVariants({ variant: "outline" }),
        "inline-flex rounded-lg px-2",
      )}
      href={SUBNET_EXPLORER_URL}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      <div className="flex items-center gap-2 flex-nowrap">
        <div className="flex">
          <LuxColorIcon
            size={24}
            backgroundFill={"#FFFFFF"}
            foregroundFill={"#000000"}
          />
        </div>
        <div className="flex">
          <span className="text-sm whitespace-nowrap">
            Powered by <span className="font-semibold">Lux</span>
          </span>
        </div>
      </div>
    </a>
  );
});
