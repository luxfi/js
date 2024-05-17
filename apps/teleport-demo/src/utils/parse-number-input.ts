export const parseNumberInput = (input: string): string => {
  // 1. Strip the string of all non-integer or decimal characters.
  const strippedString = input.replace(/[^0-9.]/g, "");

  // 2. Remove all decimal points after the first one.
  return strippedString.replace(/(\.\d*?)\./g, "$1");
};
