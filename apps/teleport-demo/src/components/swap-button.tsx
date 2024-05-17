import { AutoAnimate } from "@/ui/auto-animate";
import { Button, type ButtonProps } from "@/ui/button";
import { cn } from "@/utils/cn";
import { ArrowLeftRight, ArrowRight } from "lucide-react";
import { useState } from "react";

export const SwapButton = ({ className, ...rest }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      variant="ghost"
      className={cn("rounded-full w-10 h-10", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {isHovered ? (
        <AutoAnimate config={{ duration: 150 }}>
          <ArrowLeftRight />
        </AutoAnimate>
      ) : (
        <AutoAnimate config={{ duration: 150 }}>
          <ArrowRight />
        </AutoAnimate>
      )}
    </Button>
  );
};
