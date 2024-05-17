/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InternalTransactionOpCall } from './InternalTransactionOpCall';
import type { RichAddress } from './RichAddress';

export type InternalTransactionDetails = {
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

