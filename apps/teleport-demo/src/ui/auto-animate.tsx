import { memo, type HtmlHTMLAttributes, type PropsWithChildren } from "react";
import {
  type AutoAnimateOptions,
  type AutoAnimationPlugin,
} from "@formkit/auto-animate";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export type AutoAnimateProps = {
  config?: Partial<AutoAnimateOptions> | AutoAnimationPlugin;
} & HtmlHTMLAttributes<HTMLDivElement>;

export const AutoAnimate = memo(function AutoAnimate({
  children,
  config,
  ...rest
}: PropsWithChildren<AutoAnimateProps>) {
  const [parent] = useAutoAnimate(config);

  return (
    <div ref={parent} {...rest}>
      {children}
    </div>
  );
});
