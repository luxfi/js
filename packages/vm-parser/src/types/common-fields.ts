export const COMMON_FIELDS = {
  BLOCK_NUMBER: {
    label: "Block Number",
    description: "The block number of the transaction.",
  },
  BLOCK_HASH: {
    label: "Block Hash",
    description: "The block hash of the transaction.",
  },
  TRANSACTION_HASH: {
    label: "Transaction Hash",
    description: "The unique ID of this transaction",
  },
  STATUS: {
    label: "Status",
    description: "The status of the transaction.",
  },
  FROM: {
    label: "From",
    description: "The address of the sender of this transaction.",
  },
  TO: {
    label: "To",
    description: "The address of the receiver of this transaction.",
  },
  VALUE: {
    label: "Value",
    description: "The amount transferred of this transaction.",
  },
} as const;
