/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Asset } from './Asset';
import type { UtxoCredential } from './UtxoCredential';

export type EVMInput = {
    /**
     * EVM address from which the asset is exported in ExportTx.
     */
    fromAddress: string;
    /**
     * Asset details for the asset being transferred.
     */
    asset: Asset;
    /**
     * Credentials that signed this transaction.
     */
    credentials: Array<UtxoCredential>;
};

