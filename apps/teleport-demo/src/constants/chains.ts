import type { EvmChain } from "@/types/chain";
import type { Chain } from "wagmi";
import { FAUCET_URL } from "./urls";

export const AMPLIFY_CHAIN = {
  chainId: "78430",
  name: "Amplify Subnet",
  shortName: "Amplify",
  subnetId: "2PsShLjrFFwR51DMcAh8pyuwzLn1Ym3zRhuXLTmLCR1STk2mL6",
  platformChainId: "2nFUad4Nw4pCgEF6MwYgGuKrzKbHJzM8wF29jeVUL41RWHgNRa",
  platformChainIdHex:
    "0xea70d815f0232f5419dabafe36c964ffe5c22d17ac367b60b556ab3e17a36458",
  networkToken: {
    universalTokenId: "78430-AMP",
    decimals: 18,
    name: "AMP",
    symbol: "AMP",
  },
  slug: "amplify",
  explorerUrl: "https://subnets-test.lux.network/amplify",
  rpcUrl: "https://subnets.lux.network/amplify/testnet/rpc",
  faucetUrl: `${FAUCET_URL}/?subnet=amplify&token=amplify`,
  isTestnet: true,
  logoUrl:
    "https://images.ctfassets.net/gcj8jwzm6086/5fZAVhKA9gMyf6p5pRt0pV/bc1f2b3e2f4e7413602f6b868df81546/Screenshot_2023-07-27_at_10.17.25_AM_-_Cameron_Schultz.png?h=250",
  primaryColor: "#FF7C43",
  utilityContracts: {
    demoErc20: {
      universalTokenId: "78430-0x127be3D46138500Dc85ae22485e67D0263c09829",
      address: "0x127be3D46138500Dc85ae22485e67D0263c09829",
      name: "Teleporter Example Token",
      symbol: "TLP",
      decimals: 18,
    },
    bridge: {
      address: "0x297C4dCBB51839caEBB550C8387a52b4F3676d35",
      name: "Teleporter Bridge",
    },
  },
} as const satisfies EvmChain;

export const BULLETIN_CHAIN = {
  chainId: "78431",
  name: "Bulletin Subnet",
  shortName: "Bulletin",
  subnetId: "cbXsFGWSDWUYTmRXUoCirVDdQkZmUWrkQQYoVc2wUoDm8eFup",
  platformChainId: "2e3RJ3ub9Pceh8fJ3HX3gZ6nSXJLvBJ9WoXLcU4nwdpZ8X2RLq",
  platformChainIdHex:
    "0xd7cdc6f08b167595d1577e24838113a88b1005b471a6c430d79c48b4c89cfc53",
  networkToken: {
    universalTokenId: "78431-BLT",
    decimals: 18,
    name: "BLT",
    symbol: "BLT",
  },
  slug: "bulletin",
  explorerUrl: "https://subnets-test.lux.network/bulletin",
  rpcUrl: "https://subnets.lux.network/bulletin/testnet/rpc",
  faucetUrl: `${FAUCET_URL}/?subnet=bulletin&token=bulletin`,
  isTestnet: true,
  logoUrl:
    "https://images.ctfassets.net/gcj8jwzm6086/5B7Vfj3t6r3ZqlEyyAaKRI/da8ec29ddfdf7eaacd3298c01f9c798e/Screenshot_2023-07-27_at_10.17.35_AM_-_Cameron_Schultz.png?h=250",
  primaryColor: "#A05195",
  utilityContracts: {
    demoErc20: {
      universalTokenId: "78431-0xD70a4bF82cCc20413ca8C264aF7A6919c8935C01",
      address: "0xD70a4bF82cCc20413ca8C264aF7A6919c8935C01",
      name: "Teleporter Example Token",
      symbol: "TLP",
      decimals: 18,
    },
    bridge: {
      address: "0x48Db0f37e1Bfb569b420aEf96bcaaE9b889Bd2E9",
      name: "Teleporter Bridge",
    },
  },
} as const satisfies EvmChain;

export const CONDUIT_CHAIN = {
  chainId: "78432",
  name: "Conduit Subnet",
  shortName: "Conduit",
  subnetId: "wW7JVmjXp8SKrpacGzM81RBXdfcLDVY6M2DkFyArEXgtkyozK",
  platformChainId: "9asUA3QckLh7vGnFQiiUJGPTx8KE4nFtP8c1wTWJuP8XiWW75",
  platformChainIdHex:
    "0x137daedb40251e7c196fd9711f6cd4a787d154cdc59fb7777d4d079cc116e5f1",
  networkToken: {
    universalTokenId: "78432-CON",
    decimals: 18,
    name: "CON",
    symbol: "CON",
  },
  slug: "conduit",
  explorerUrl: "https://subnets-test.lux.network/conduit",
  rpcUrl: "https://subnets.lux.network/conduit/testnet/rpc",
  faucetUrl: `${FAUCET_URL}/?subnet=conduit&token=conduit`,
  isTestnet: true,
  logoUrl:
    "https://images.ctfassets.net/gcj8jwzm6086/IeLUEqVDIv4npUjEIOkSB/7d37730f211ff6449a29103c5f22b463/Screenshot_2023-07-27_at_10.17.43_AM_-_Cameron_Schultz.png?h=250",
  primaryColor: "#00C2B4",
  utilityContracts: {
    demoErc20: {
      universalTokenId: "78432-0x5712f185FEb983bBdf4bfF1A2D9d705217924c3d",
      address: "0x5712f185FEb983bBdf4bfF1A2D9d705217924c3d",
      name: "Teleporter Example Token",
      symbol: "TLP",
      decimals: 18,
    },
    bridge: {
      address: "0xa415AAC7979a0b68E1c3117763C8978F7e89C9E0",
      name: "Teleporter Bridge",
    },
  },
} as const satisfies EvmChain;

export const mapChainToWagmiChain = (chain: EvmChain): Chain => ({
  id: Number(chain.chainId),
  name: chain.name,
  nativeCurrency: {
    name: chain.networkToken.name,
    symbol: chain.networkToken.symbol,
    decimals: chain.networkToken.decimals,
  },
  network: "avalanche",
  rpcUrls: {
    default: {
      http: [chain.rpcUrl],
    },
    public: {
      http: [chain.rpcUrl],
    },
  },
  blockExplorers: {
    default: {
      name: "Lux Subnet Explorer",
      url: chain.explorerUrl,
    },
  },
  testnet: chain.isTestnet,
});

export const AMPLIFY_WAGMI_CHAIN = mapChainToWagmiChain(AMPLIFY_CHAIN);
export const BULLETIN_WAGMI_CHAIN = mapChainToWagmiChain(BULLETIN_CHAIN);
export const CONDUIT_WAGMI_CHAIN = mapChainToWagmiChain(CONDUIT_CHAIN);

export const CHAIN = {
  AMPLIFY: {
    info: AMPLIFY_CHAIN,
    wagmi: AMPLIFY_WAGMI_CHAIN,
  },
  BULLETIN: {
    info: BULLETIN_CHAIN,
    wagmi: BULLETIN_WAGMI_CHAIN,
  },
  CONDUIT: {
    info: CONDUIT_CHAIN,
    wagmi: CONDUIT_WAGMI_CHAIN,
  },
} as const satisfies Record<
  string,
  {
    info: EvmChain;
    wagmi: Chain;
  }
>;

export const CHAINS = Object.values(CHAIN).map(({ info }) => info);
export const WAGMI_CHAINS = Object.values(CHAIN).map(({ wagmi }) => wagmi);
