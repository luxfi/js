import type { Address } from "viem";
import { z } from "zod";

export type EvmChain = z.infer<typeof evmChainSchema>;

const utilityContract = z.object({
  address: z.string().transform((val) => val as Address),
  name: z.string(),
});

const erc20Contract = z.object({
  universalTokenId: z.string(),
  address: z.string().transform((val) => val as Address),
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
});

export const evmChainSchema = z.object({
  platformChainId: z.string(),
  platformChainIdHex: z.string().transform((val) => val as `0x${string}`),
  subnetId: z.string(),
  slug: z.string(),
  explorerUrl: z.string(),
  rpcUrl: z.string(),
  faucetUrl: z.string(),
  isTestnet: z.boolean(),
  logoUrl: z.string(),
  name: z.string(),
  shortName: z.string(),
  networkToken: z.object({
    universalTokenId: z.string(),
    decimals: z.number(),
    name: z.string(),
    symbol: z.string(),
  }),
  primaryColor: z.string(),
  chainId: z.string(),
  utilityContracts: z.object({
    demoErc20: erc20Contract,
    bridge: utilityContract,
  }),
});
