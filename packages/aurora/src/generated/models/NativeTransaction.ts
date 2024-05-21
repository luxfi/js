/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Method } from './Method';
import type { RichAddress } from './RichAddress';

export type NativeTransaction = {
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
     * The index at which the transaction occured in the block (0-indexed).
     */
    blockIndex: number;
    /**
     * The transaction hash identifier.
     */
    txHash: string;
    /**
     * The transaction status, which is either 0 (failed) or 1 (successful).
     */
    txStatus: string;
    /**
     * The transaction type.
     */
    txType: number;
    /**
     * The gas limit set for the transaction.
     */
    gasLimit: string;
    /**
     * The amount of gas used.
     */
    gasUsed: string;
    /**
     * The gas price denominated by the number of decimals of the native token.
     */
    gasPrice: string;
    /**
     * The nonce used by the sender of the transaction.
     */
    nonce: string;
    from: RichAddress;
    to: RichAddress;
    method?: Method;
    value: string;
};

