/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EvmBlock = {
    /**
     * The block number on the chain.
     */
    blockNumber: string;
    /**
     * The block finality timestamp.
     */
    blockTimestamp: number;
    /**
     * The block hash identifier.
     */
    blockHash: string;
    /**
     * The number of evm transactions in the block.
     */
    txCount: number;
    /**
     * The base gas fee for a transaction to be included in the block.
     */
    baseFee: string;
    /**
     * The gas used for transactions in the block.
     */
    gasUsed: string;
    /**
     * The total gas limit set for transactions in the block.
     */
    gasLimit: string;
    gasCost: string;
    /**
     * The hash of the parent block.
     */
    parentHash: string;
    /**
     * The amount of fees spent/burned for transactions in the block.
     */
    feesSpent: string;
    /**
     * The cumulative number of transactions for the chain including this block.
     */
    cumulativeTransactions: string;
};

