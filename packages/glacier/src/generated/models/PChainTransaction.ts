/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PChainAsset } from './PChainAsset';
import type { PChainTransactionType } from './PChainTransactionType';
import type { PChainUtxo } from './PChainUtxo';

export type PChainTransaction = {
    /**
     * A P-Chain transaction hash.
     */
    txHash: string;
    txType: PChainTransactionType;
    /**
     * The block finality timestamp.
     */
    blockTimestamp: number;
    blockNumber: string;
    blockHash: string;
    consumedUtxos: Array<PChainUtxo>;
    emittedUtxos: Array<PChainUtxo>;
    /**
     * Source chain for an atomic transaction.
     */
    sourceChain?: string;
    /**
     * Destination chain for an atomic transaction.
     */
    destinationChain?: string;
    /**
     * A list of objects containing P-chain Asset ID and the amount of that Asset ID.
     */
    value: Array<PChainAsset>;
    /**
     * A list of objects containing P-chain Asset ID and the amount of that Asset ID.
     */
    amountBurned: Array<PChainAsset>;
    /**
     * A list of objects containing P-chain Asset ID and the amount of that Asset ID. Present for AddValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx
     */
    amountStaked: Array<PChainAsset>;
    /**
     * Present for AddValidatorTx, AddSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx
     */
    startTimestamp?: number;
    /**
     * Present for AddValidatorTx, AddSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx
     */
    endTimestamp?: number;
    /**
     * Present for AddValidatorTx, AddPermissionlessValidatorTx
     */
    delegationFeePercent?: string;
    /**
     * Present for AddValidatorTx, AddSubnetValidatorTx, RemoveSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx
     */
    nodeId?: string;
    /**
     * Present for AddValidatorTx, AddSubnetValidatorTx, RemoveSubnetValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx, CreateChainTx, CreateSubnetTx
     */
    subnetId?: string;
    /**
     * Present for AddValidatorTx, AddPermissionlessValidatorTx, AddDelegatorTx
     */
    estimatedReward?: string;
    rewardTxHash?: string;
    memo?: string;
    /**
     * Present for RewardValidatorTx
     */
    stakingTxHash?: string;
};

