/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc721TokenBalance } from './Erc721TokenBalance';

export type ListErc721BalancesResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of ERC-721 token balances for the address.
     */
    erc721TokenBalances: Array<Erc721TokenBalance>;
};

