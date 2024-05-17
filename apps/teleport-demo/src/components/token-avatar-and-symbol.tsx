import type { HtmlHTMLAttributes } from "react";
import { FancyAvatar } from "./fancy-avatar";
import type { AvatarProps } from "@radix-ui/react-avatar";
import { cn } from "@/utils/cn";

export const TokenAvatarAndSymbol = ({
  src,
  symbol,
  avatarProps,
  className,
  ...rest
}: HtmlHTMLAttributes<HTMLSpanElement> & {
  src?: string;
  symbol: string;
  avatarProps?: AvatarProps;
}) => {
  return (
    <span
      className={cn(
        "inline-flex flex-nowrap justify-center items-center gap-1 font-semibold",
        className,
      )}
      {...rest}
    >
      <FancyAvatar
        src={src}
        label={symbol}
        className="w-6 h-6"
        {...avatarProps}
      />
      {symbol}
    </span>
  );
};
