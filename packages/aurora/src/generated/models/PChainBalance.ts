/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PChainAsset } from './PChainAsset';
import type { PChainSharedAsset } from './PChainSharedAsset';

export type PChainBalance = {
    /**
     * A list of objects containing P-chain Asset ID and the amount of that Asset ID. Denotes the amount of unstaked Lux that is consumable by any transaction.
     */
    unlockedUnstaked: Array<PChainAsset>;
    /**
     * A list of objects containing P-chain Asset ID and the amount of that Asset ID. Denotes the amount of staked Lux that is consumable by any transaction when the staking period ends.
     */
    unlockedStaked: Array<PChainAsset>;
    /**
     * A list of objects containing P-chain Asset ID and the amount of that Asset ID. Denotes the amount of unstaked Lux that is locked at the platform level and not consumable by any transaction at the current time.
     */
    lockedPlatform: Array<PChainAsset>;
    /**
     * A list of objects containing P-chain Asset ID and the amount of that Asset ID. Denotes the amount of unstaked Lux that is locked at the platform level and only consumeable for staking transactions.
     */
    lockedStakeable: Array<PChainAsset>;
    /**
     * A list of objects containing P-chain Asset ID and the amount of that Asset ID. Denotes the amount of staked Lux that will be locked when the staking period ends.
     */
    lockedStaked: Array<PChainAsset>;
    /**
     * A list of objects containing P-chain Asset ID and the amount of that Asset ID. Denotes the amount of staked Lux whose staking period has not yet started.
     */
    pendingStaked: Array<PChainAsset>;
    /**
     * A list of objects containing P-chain Asset ID and the amount of that Asset ID. Denotes the amount of unlocked Lux in the atomic memory between P-Chain and other chain.
     */
    atomicMemoryUnlocked: Array<PChainSharedAsset>;
    /**
     * A list of objects containing P-chain Asset ID and the amount of that Asset ID. Denotes the amount of locked Lux in the atomic memory between P-Chain and other chain.
     */
    atomicMemoryLocked: Array<PChainSharedAsset>;
};

