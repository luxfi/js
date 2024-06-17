/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProposerDetails } from './ProposerDetails';

export type GetPrimaryNetworkBlockResponse = {
    blockNumber: string;
    blockHash: string;
    parentHash: string;
    blockTimestamp: number;
    blockType: string;
    txCount: number;
    transactions: Array<string>;
    blockSizeBytes: number;
    proposerDetails?: ProposerDetails;
};

