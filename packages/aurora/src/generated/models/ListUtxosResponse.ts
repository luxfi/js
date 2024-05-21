/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrimaryNetworkChainInfo } from './PrimaryNetworkChainInfo';
import type { Utxo } from './Utxo';

export type ListUtxosResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    utxos: Array<Utxo>;
    chainInfo: PrimaryNetworkChainInfo;
};

