/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc1155Transfer } from './Erc1155Transfer';
import type { Erc20Transfer } from './Erc20Transfer';
import type { Erc721Transfer } from './Erc721Transfer';

export type ListTransfersResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    transfers: (Array<Erc20Transfer> | Array<Erc721Transfer> | Array<Erc1155Transfer>);
};

