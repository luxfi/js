/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrimaryNetworkChainInfo } from './PrimaryNetworkChainInfo';
import type { XChainVertex } from './XChainVertex';

export type ListXChainVerticesResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    vertices: Array<XChainVertex>;
    chainInfo: PrimaryNetworkChainInfo;
};

