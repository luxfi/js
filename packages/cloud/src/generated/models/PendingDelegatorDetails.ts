/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelegationStatusType } from './DelegationStatusType';

export type PendingDelegatorDetails = {
    txHash: string;
    rewardAddresses: Array<string>;
    amountDelegated: string;
    delegationFee: string;
    startTimestamp: number;
    endTimestamp: number;
    delegationStatus: DelegationStatusType;
    estimatedGrossReward: string;
    estimatedNetReward: string;
};

