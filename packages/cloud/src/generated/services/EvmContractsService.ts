/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContractSubmissionBody } from '../models/ContractSubmissionBody';
import type { UpdateContractResponse } from '../models/UpdateContractResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EvmContractsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Update contract information
     * Update contract information. Updates will be reviewed by the Ava Labs team before they are published.
     * @returns UpdateContractResponse
     * @throws ApiError
     */
    public updateContractInfo({
        chainId,
        address,
        requestBody,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * Contract address on the relevant chain.
         */
        address: string,
        requestBody: ContractSubmissionBody,
    }): CancelablePromise<UpdateContractResponse> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/chains/{chainId}/contracts/{address}',
            path: {
                'chainId': chainId,
                'address': address,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
