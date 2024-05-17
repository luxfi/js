/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { XChainAssetBalance } from './XChainAssetBalance';
import type { XChainSharedAssetBalance } from './XChainSharedAssetBalance';

export type XChainBalances = {
    /**
     * A list of objects containing X-chain Asset balance information.
     */
    locked: Array<XChainAssetBalance>;
    /**
     * A list of objects containing X-chain Asset balance information.
     */
    unlocked: Array<XChainAssetBalance>;
    atomicMemoryUnlocked: Array<XChainSharedAssetBalance>;
    atomicMemoryLocked: Array<XChainSharedAssetBalance>;
};

