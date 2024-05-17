/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InternalTransactionOpCall } from './InternalTransactionOpCall';
import type { RichAddress } from './RichAddress';

export type InternalTransaction = {
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
     * The transaction hash identifier.
     */
    txHash: string;
    from: RichAddress;
    to: RichAddress;
    internalTxType: InternalTransactionOpCall;
    value: string;
    /**
     * True if the internal transaction was reverted.
     */
    isReverted: boolean;
    gasUsed: string;
    gasLimit: string;
};

