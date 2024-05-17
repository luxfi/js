/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc20TokenBalance } from './Erc20TokenBalance';

export type ListErc20BalancesResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of ERC-20 token balances for the address.
     */
    erc20TokenBalances: Array<Erc20TokenBalance>;
};

