/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrimaryNetworkOptions } from './PrimaryNetworkOptions';

export type CreatePrimaryNetworkTransactionExportRequest = {
    type: 'TRANSACTION_EXPORT_PRIMARY_NETWORK';
    firstDate: string;
    lastDate: string;
    /**
     * @deprecated
     */
    startDate: string;
    /**
     * @deprecated
     */
    endDate: string;
    options: PrimaryNetworkOptions;
};

