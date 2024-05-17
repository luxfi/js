/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Asset } from './Asset';

export type EVMOutput = {
    /**
     * EVM address to which the asset is imported in ImportTx
     */
    toAddress: string;
    /**
     * Asset details for the asset being transferred.
     */
    asset: Asset;
};

