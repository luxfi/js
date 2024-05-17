import { useMediaQuery } from "react-responsive";
// apps/teleporter-demo/tailwind.config.js
import partialTailwindConfig from "../../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const fullTailwindConfig = resolveConfig(partialTailwindConfig);

const breakpoints = fullTailwindConfig.theme!.screens!;
console.log("breakpoints", breakpoints);

export function useBreakpoint<K extends "sm" | "md" | "lg" | "xl" | "2xl">(
  breakpointKey: K,
) {
  const bool = useMediaQuery({
    // @ts-expect-error test
    // eslint-disable-next-line security/detect-object-injection
    query: `(min-width: ${breakpoints[breakpointKey]})`,
  });
  const capitalizedKey =
    breakpointKey[0]!.toUpperCase() + breakpointKey.substring(1);
  type Key = `is${Capitalize<K>}Up` | `is${Capitalize<K>}Down`;
  return {
    [`is${capitalizedKey}Up`]: bool,
    [`is${capitalizedKey}Down`]: !bool,
  } as Record<Key, boolean>;
}
