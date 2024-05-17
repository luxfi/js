import { memo, useEffect, useState, type HtmlHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type FlashingUpdateProps = {
  shouldFlash?: boolean;
} & HtmlHTMLAttributes<HTMLSpanElement>;

export const FlashingUpdate = memo(function FlashingUpdate({
  className,
  children,
  ...rest
}: FlashingUpdateProps) {
  const [flashing, setFlashing] = useState<boolean>(false);

  useEffect(() => {
    if (children) {
      setFlashing(true);
      setTimeout(() => {
        setFlashing(false);
      }, 1000);
    }
  }, [children]);

  return (
    <span
      className={cn(
        flashing ? "animate-pulse-flashing" : "",
        "rounded-md px-1",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
});
