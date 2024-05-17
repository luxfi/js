/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Asset } from './Asset';
import type { EVMInput } from './EVMInput';
import type { Utxo } from './Utxo';

export type CChainExportTransaction = {
    /**
     * Unique ID for this transaction.
     */
    txHash: string;
    /**
     * Height of the block this transaction belongs to.
     */
    blockHeight: number;
    /**
     * Hash of the block this transaction belongs to.
     */
    blockHash: string;
    /**
     * Latest timestamp in seconds this transaction was accepted.
     */
    timestamp: number;
    /**
     * Hex encoded memo bytes for this transaction.
     */
    memo: string;
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
    sourceChain: string;
    /**
     * Destination chain for an atomic transaction.
     */
    destinationChain: string;
    /**
     * Type of transaction.
     */
    txType: 'ExportTx';
    evmInputs: Array<EVMInput>;
    emittedUtxos: Array<Utxo>;
};

