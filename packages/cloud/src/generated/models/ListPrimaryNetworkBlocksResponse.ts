/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrimaryNetworkBlock } from './PrimaryNetworkBlock';
import type { PrimaryNetworkChainInfo } from './PrimaryNetworkChainInfo';

export type ListPrimaryNetworkBlocksResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    blocks: Array<PrimaryNetworkBlock>;
    chainInfo: PrimaryNetworkChainInfo;
};

