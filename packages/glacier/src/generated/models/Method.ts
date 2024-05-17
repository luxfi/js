/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionMethodType } from './TransactionMethodType';

export type Method = {
    /**
     * The contract call type. NATIVE_TRANSFER indicates a transfer of the native token without any smart-contract interaction. CONTRACT_CALL indicates a smart-contract interaction. CONTRACT_CREATION indicates a smart-contract creation.
     */
    callType: TransactionMethodType;
    /**
     * The contract method hash identifier. The method hash is only set if the `callType` is `CONTRACT_CALL`.
     */
    methodHash: string;
    /**
     * The contract method name including parameter types. If the `callType` is `NATIVE_TRANSFER` this is set to 'Native Transfer'. If the `callType` is `CONTRACT_CREATION` this is set to 'Contract Created'.
     */
    methodName?: string;
};

