/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PChainAsset } from './PChainAsset';
import type { RewardType } from './RewardType';

export type HistoricalReward = {
    /**
     * An array of P-Chain wallet addresses.
     */
    addresses: Array<string>;
    txHash: string;
    amountStaked: string;
    nodeId: string;
    startTimestamp: number;
    endTimestamp: number;
    rewardType: RewardType;
    utxoId: string;
    outputIndex: number;
    /**
     * An object containing P-chain Asset ID and the amount of that Asset ID.
     */
    reward: PChainAsset;
    rewardTxHash: string;
};

