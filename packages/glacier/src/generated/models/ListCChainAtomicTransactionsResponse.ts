/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CChainExportTransaction } from './CChainExportTransaction';
import type { CChainImportTransaction } from './CChainImportTransaction';
import type { PrimaryNetworkChainInfo } from './PrimaryNetworkChainInfo';

export type ListCChainAtomicTransactionsResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    transactions: Array<(CChainExportTransaction | CChainImportTransaction)>;
    chainInfo: PrimaryNetworkChainInfo;
};

