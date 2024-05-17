/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrimaryNetworkChainInfo } from './PrimaryNetworkChainInfo';
import type { XChainLinearTransaction } from './XChainLinearTransaction';
import type { XChainNonLinearTransaction } from './XChainNonLinearTransaction';

export type ListXChainTransactionsResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    transactions: Array<(XChainNonLinearTransaction | XChainLinearTransaction)>;
    chainInfo: PrimaryNetworkChainInfo;
};

