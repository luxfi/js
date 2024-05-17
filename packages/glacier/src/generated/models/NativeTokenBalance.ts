/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Money } from './Money';

export type NativeTokenBalance = {
    /**
     * The contract name.
     */
    name: string;
    /**
     * The contract symbol.
     */
    symbol: string;
    /**
     * The number of decimals the token uses. For example `6`, means to divide the token amount by `1000000` to get its user representation.
     */
    decimals: number;
    /**
     * The logo uri for the address.
     */
    logoUri?: string;
    /**
     * The evm chain id.
     */
    chainId: string;
    /**
     * The token price, if available.
     */
    price?: Money;
    /**
     * The address balance for the token, in units specified by the `decimals` value for the contract.
     */
    balance: string;
    /**
     * The monetary value of the balance, if a price is available for the token.
     */
    balanceValue?: Money;
};

