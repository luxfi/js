/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Money } from './Money';

export type Erc20Token = {
    /**
     * A wallet or contract address in mixed-case checksum encoding.
     */
    address: string;
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
    ercType: 'ERC-20';
    /**
     * The token price, if available.
     */
    price?: Money;
};

