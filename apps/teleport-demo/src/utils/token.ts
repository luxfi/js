import {
  type Erc20TokenBalance as CloudErc20TokenBalance,
  type NativeTokenBalance as CloudNativeTokenBalance,
} from "@luxfi/cloud";
import type Big from "big.js";
import { isNil } from "lodash-es";
import { type Except } from "type-fest";

export type Erc20TokenBalance = Except<CloudErc20TokenBalance, "balance"> & {
  balance: Big;
  rawBalance: bigint;
  displayBalance: string;
  universalTokenId: string;
};

export type NativeTokenBalance = Except<
  CloudNativeTokenBalance,
  "balance"
> & {
  balance: Big;
  rawBalance: bigint;
  displayBalance: string;
  universalTokenId: string;
};

export type TokenBalance = Erc20TokenBalance | NativeTokenBalance;

export const isErc20TokenBalance = (
  token?: TokenBalance,
): token is Erc20TokenBalance => {
  return !isNil(token) && (token as Erc20TokenBalance).ercType === "ERC-20";
};

export const isNativeTokenBalance = (
  token?: TokenBalance,
): token is NativeTokenBalance => {
  return !isNil(token) && !isErc20TokenBalance(token);
};

export const getUniveralTokenId = (
  token: TokenBalance | CloudErc20TokenBalance | CloudNativeTokenBalance,
) => {
  if ("ercType" in token) {
    return `${token.chainId}-${token.address}`;
  }

  return `${token.chainId}-${token.symbol}`;
};
