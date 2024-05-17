/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlockchainInfo } from './BlockchainInfo';

export type Subnet = {
    createBlockTimestamp: number;
    createBlockIndex: string;
    subnetId: string;
    ownerAddresses: Array<string>;
    threshold: number;
    locktime: number;
    blockchains: Array<BlockchainInfo>;
};

