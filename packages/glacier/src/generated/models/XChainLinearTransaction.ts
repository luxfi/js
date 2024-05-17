/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Asset } from './Asset';
import type { Utxo } from './Utxo';
import type { XChainAssetDetails } from './XChainAssetDetails';

export type XChainLinearTransaction = {
    /**
     * Unique ID for this transaction.
     */
    txHash: string;
    /**
     * Represents chain format this transaction is included in.
     */
    chainFormat: 'non-linear' | 'linear';
    /**
     * Latest timestamp in seconds this transaction was accepted out of the same transaction accepted in other vertices.
     */
    timestamp: number;
    /**
     * Type of transaction.
     */
    txType: string;
    /**
     * Hex encoded memo bytes for this transaction.
     */
    memo: string;
    consumedUtxos: Array<Utxo>;
    emittedUtxos: Array<Utxo>;
    /**
     * Assets unlocked by inputs of this transaction.
     */
    amountUnlocked: Array<Asset>;
    /**
     * Assets created by outputs of this transaction.
     */
    amountCreated: Array<Asset>;
    /**
     * Source chain for an atomic transaction.
     */
    sourceChain?: string;
    /**
     * Destination chain for an atomic transaction.
     */
    destinationChain?: string;
    /**
     * Asset details of the asset created in CreateAssetTx
     */
    assetCreated?: XChainAssetDetails;
    /**
     * Height of the block this transaction belongs to.
     */
    blockHeight: number;
    /**
     * Hash of the block this transaction belongs to.
     */
    blockHash: string;
};

