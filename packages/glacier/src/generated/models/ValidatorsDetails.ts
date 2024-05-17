/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StakingDistribution } from './StakingDistribution';

export type ValidatorsDetails = {
    validatorCount: number;
    totalAmountStaked: string;
    estimatedAnnualStakingReward: string;
    stakingDistributionByVersion: Array<StakingDistribution>;
    stakingRatio: string;
};

