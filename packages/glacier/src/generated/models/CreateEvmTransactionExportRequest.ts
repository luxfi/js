/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EvmNetworkOptions } from './EvmNetworkOptions';

export type CreateEvmTransactionExportRequest = {
    type: 'TRANSACTION_EXPORT_EVM';
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
    options: EvmNetworkOptions;
};

