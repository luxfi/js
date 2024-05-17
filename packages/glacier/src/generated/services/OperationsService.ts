/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEvmTransactionExportRequest } from '../models/CreateEvmTransactionExportRequest';
import type { CreatePrimaryNetworkTransactionExportRequest } from '../models/CreatePrimaryNetworkTransactionExportRequest';
import type { OperationStatusResponse } from '../models/OperationStatusResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OperationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create transaction export operation
     * Trigger a transaction export operation with given parameters.
     *
     * The transaction export operation runs asynchronously in the background. The status of the job can be retrieved from the `/v1/operations/:operationId` endpoint using the `operationId` returned from this endpoint.
     * @returns OperationStatusResponse
     * @throws ApiError
     */
    public postTransactionExportJob({
        requestBody,
    }: {
        requestBody: (CreateEvmTransactionExportRequest | CreatePrimaryNetworkTransactionExportRequest),
    }): CancelablePromise<OperationStatusResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/operations/transactions:export',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get operation
     * Gets operation details for the given operation id.
     * @returns OperationStatusResponse
     * @throws ApiError
     */
    public getOperationResult({
        operationId,
    }: {
        /**
         * UUID of given operation
         */
        operationId: string,
    }): CancelablePromise<OperationStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/operations/{operationId}',
            path: {
                'operationId': operationId,
            },
        });
    }

}
