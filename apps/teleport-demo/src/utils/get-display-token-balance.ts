import type { Erc20TokenBalance, NativeTokenBalance } from "@luxdefi/glacier";

export const getDisplayTokenBalance = ({
  balance,
  decimals,
}: Erc20TokenBalance | NativeTokenBalance) => {
  const balanceBig = BigInt(balance);
  return (balanceBig / BigInt(10 ** decimals)).toString();
};
