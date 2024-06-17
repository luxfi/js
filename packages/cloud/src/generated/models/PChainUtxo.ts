/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RewardType } from './RewardType';
import type { UtxoType } from './UtxoType';

export type PChainUtxo = {
    /**
     * An array of P-Chain wallet addresses.
     */
    addresses: Array<string>;
    utxoId: string;
    txHash: string;
    outputIndex: number;
    blockNumber: string;
    blockTimestamp: number;
    consumingTxHash?: string;
    consumingBlockTimestamp?: number;
    consumingBlockNumber?: string;
    assetId: string;
    utxoType: UtxoType;
    amount: string;
    stakeableLocktime?: number;
    platformLocktime?: number;
    threshold?: number;
    createdOnChainId: string;
    consumedOnChainId: string;
    staked?: boolean;
    utxoStartTimestamp?: number;
    utxoEndTimestamp?: number;
    rewardType?: RewardType;
};

