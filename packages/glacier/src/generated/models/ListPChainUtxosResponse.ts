/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PChainUtxo } from './PChainUtxo';
import type { PrimaryNetworkChainInfo } from './PrimaryNetworkChainInfo';

export type ListPChainUtxosResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    utxos: Array<PChainUtxo>;
    chainInfo: PrimaryNetworkChainInfo;
};

