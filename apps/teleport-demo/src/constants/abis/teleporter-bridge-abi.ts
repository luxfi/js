export const TELEPORTER_BRIDGE_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "destinationChainID",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "teleporterMessageID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destinationBridgeAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BridgeTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "nativeChainID",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nativeBridgeAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nativeContractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bridgeTokenAddress",
        type: "address",
      },
    ],
    name: "CreateBridgeToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "MintBridgeTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "destinationChainID",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "destinationBridgeAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nativeContractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "teleporterMessageID",
        type: "uint256",
      },
    ],
    name: "SubmitCreateBridgeToken",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "destinationChainID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "destinationBridgeAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenContractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "primaryFeeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondaryFeeAmount",
        type: "uint256",
      },
    ],
    name: "bridgeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "destinationChainID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "destinationBridgeAddress",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "nativeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "messageFeeAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "messageFeeAmount",
        type: "uint256",
      },
    ],
    name: "submitCreateBridgeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
