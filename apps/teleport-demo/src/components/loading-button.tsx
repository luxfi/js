import { AutoAnimate } from "@/ui/auto-animate";
import { Button, type ButtonProps } from "@/ui/button";
import { LoadingSpinner } from "@/ui/loading-spinner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { cn } from "@/utils/cn";
import { isNil } from "lodash-es";
import type { ReactNode } from "react";

export const LoadingButton = ({
  isLoading,
  children,
  loadingText,
  className,
  disabled,
  tooltipContent,
  ...rest
}: ButtonProps & {
  isLoading: boolean;
  loadingText?: string;
  tooltipContent?: ReactNode;
}) => {
  return (
    <Tooltip delayDuration={150}>
      <TooltipTrigger
        className={cn(disabled ? "cursor-default" : "", "w-full")}
      >
        <Button
          className={cn("rounded-full", className)}
          disabled={disabled}
          {...rest}
        >
          {isLoading ? (
            <AutoAnimate config={{ duration: 150 }}>
              <span className="inline-flex flex-nowrap items-center gap-2">
                <LoadingSpinner className="my-2" />
                {!isNil(loadingText) && loadingText}
              </span>
            </AutoAnimate>
          ) : (
            <AutoAnimate config={{ duration: 150 }}>{children}</AutoAnimate>
          )}
        </Button>
      </TooltipTrigger>

      {tooltipContent && (
        <TooltipContent side="bottom">{tooltipContent}</TooltipContent>
      )}
    </Tooltip>
  );
};
