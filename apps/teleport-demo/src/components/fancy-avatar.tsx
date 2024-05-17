import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import { getAvatarInitials } from "@/utils/get-avatar-initials";
import type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarProps,
} from "@radix-ui/react-avatar";
import { memo, useMemo } from "react";

export const FancyAvatar = memo(
  ({
    fallbackProps,
    imageProps,
    src,
    label,
    ...rest
  }: AvatarProps & {
    src?: string;
    label: string;
    fallbackProps?: AvatarFallbackProps;
    imageProps?: AvatarImageProps;
  }) => {
    const initials = useMemo(() => getAvatarInitials(label), [label]);
    return (
      <Avatar {...rest}>
        {src && <AvatarImage src={src} alt={label} {...imageProps} />}

        <AvatarFallback {...fallbackProps}>{initials}</AvatarFallback>
      </Avatar>
    );
  },
);
