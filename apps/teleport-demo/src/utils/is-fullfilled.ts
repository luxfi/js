export const isFullfilled = <T>(
  result: PromiseSettledResult<T>,
): result is PromiseFulfilledResult<T> => result.status === "fulfilled";

export const filterFullfilled = <T>(results: PromiseSettledResult<T>[]) => {
  return results.filter(isFullfilled).map((result) => result.value);
};
