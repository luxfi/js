import { formatters } from "@poppinss/intl-formatter";

export const bigToDisplayString = (
  bigNum?: Big,
  options?: Intl.NumberFormatOptions,
): string =>
  bigNum
    ? formatters
        .number("en-US", options)
        .format(bigNum.toString() as unknown as number)
    : "";

export const formatStringNumber = (
  num: string,
  options?: Intl.NumberFormatOptions,
): string => {
  return formatters.number("en-US", options).format(Number(num));
};
