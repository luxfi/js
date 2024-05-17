/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Asset } from './Asset';
import type { UtxoCredential } from './UtxoCredential';

export type Utxo = {
    /**
     * UTXO ID for this output.
     */
    utxoId: string;
    asset: Asset;
    /**
     * Type of output.
     */
    utxoType: string;
    /**
     * Blockchain ID on which this output is created on.
     */
    createdOnChainId: string;
    /**
     * Blockchain ID on which this output is consumed on.
     */
    consumedOnChainId: string;
    /**
     * Transaction ID that created this output.
     */
    creationTxHash: string;
    /**
     * Transaction ID that consumed this output.
     */
    consumingTxHash?: string;
    /**
     * Timestamp in seconds this output is consumed.
     */
    consumingTxTimestamp?: number;
    /**
     * Postion of this output in a list of lexiographically sorted outputs of a transaction.
     */
    outputIndex: string;
    /**
     * Timestamp in seconds this outptut is created on.
     */
    timestamp: number;
    /**
     * Locktime in seconds after which this output can be consumed.
     */
    locktime: number;
    /**
     * Minimum number of signatures required to consume this output.
     */
    threshold: number;
    /**
     * Addresses that are eligible to sign the consumption of this output.
     */
    addresses: Array<string>;
    /**
     * Hex encoded data for NFT assets
     */
    payload?: string;
    /**
     * Index representing the minting set for the NFT mint output
     */
    groupId?: number;
    /**
     * Credentials that signed the transaction to consume this utxo
     */
    credentials?: Array<UtxoCredential>;
};

