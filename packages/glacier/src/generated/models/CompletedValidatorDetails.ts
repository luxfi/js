/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Rewards } from './Rewards';
import type { ValidationStatusType } from './ValidationStatusType';

export type CompletedValidatorDetails = {
    nodeId: string;
    amountStaked: string;
    delegationFee: string;
    startTimestamp: number;
    endTimestamp: number;
    validationStatus: ValidationStatusType;
    delegatorCount: number;
    rewards: Rewards;
};

