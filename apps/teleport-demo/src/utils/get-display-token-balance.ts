import type { Erc20TokenBalance, NativeTokenBalance } from "@luxfi/cloud";

export const getDisplayTokenBalance = ({
  balance,
  decimals,
}: Erc20TokenBalance | NativeTokenBalance) => {
  const balanceBig = BigInt(balance);
  return (balanceBig / BigInt(10 ** decimals)).toString();
};
