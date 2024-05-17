/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc1155TokenBalance } from './Erc1155TokenBalance';
import type { Erc721TokenBalance } from './Erc721TokenBalance';

export type ListCollectibleBalancesResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of ERC-721 and ERC-1155 token balances for the address.
     */
    collectibleBalances: Array<(Erc721TokenBalance | Erc1155TokenBalance)>;
};

