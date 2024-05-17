/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OperationStatusCode } from './OperationStatusCode';

export type TransactionExportMetadata = {
    code?: OperationStatusCode;
    /**
     * File download URL. Provided only for COMPLETED and COMPLETED_WITH_WARNING operations.
     */
    downloadUrl?: string;
    /**
     * The next date (YYYY-MM-DD) to use as the firstDate in follow up requests if a request results in a transaction history exceeding the max size and has been reported as `COMPLETED_WITH_WARNING` with the warning 'WarnTruncatedExport'.
     */
    nextDate?: string;
};

