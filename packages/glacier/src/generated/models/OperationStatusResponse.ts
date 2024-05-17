/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OperationStatus } from './OperationStatus';
import type { OperationType } from './OperationType';
import type { TransactionExportMetadata } from './TransactionExportMetadata';

export type OperationStatusResponse = {
    operationId: string;
    operationType: OperationType;
    operationStatus: OperationStatus;
    message?: string;
    metadata: TransactionExportMetadata;
    createdAtTimestamp: number;
    updatedAtTimestamp: number;
};

