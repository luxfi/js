/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc1155Contract } from './Erc1155Contract';
import type { Erc20Contract } from './Erc20Contract';
import type { Erc721Contract } from './Erc721Contract';
import type { UnknownContract } from './UnknownContract';

export type ListContractsResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    contracts: Array<(UnknownContract | Erc20Contract | Erc721Contract | Erc1155Contract)>;
};

