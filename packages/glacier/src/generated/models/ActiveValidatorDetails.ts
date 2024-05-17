/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Rewards } from './Rewards';
import type { ValidationStatusType } from './ValidationStatusType';

export type ActiveValidatorDetails = {
    nodeId: string;
    amountStaked: string;
    delegationFee: string;
    startTimestamp: number;
    endTimestamp: number;
    validationStatus: ValidationStatusType;
    stakePercentage: number;
    delegatorCount: number;
    amountDelegated: string;
    uptimePerformance: number;
    avalancheGoVersion: string;
    delegationCapacity: string;
    potentialRewards: Rewards;
};

