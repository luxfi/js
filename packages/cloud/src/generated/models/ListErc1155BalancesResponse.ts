/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc1155TokenBalance } from './Erc1155TokenBalance';

export type ListErc1155BalancesResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of ERC-1155 token balances for the address.
     */
    erc1155TokenBalances: Array<Erc1155TokenBalance>;
};

