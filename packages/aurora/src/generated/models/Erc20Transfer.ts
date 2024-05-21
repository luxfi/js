/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc20Token } from './Erc20Token';
import type { RichAddress } from './RichAddress';

export type Erc20Transfer = {
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
    logIndex: number;
    value: string;
    erc20Token: Erc20Token;
};

