/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetChainResponse } from '../models/GetChainResponse';
import type { ListChainsResponse } from '../models/ListChainsResponse';
import type { NetworkType } from '../models/NetworkType';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EvmChainsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List chains
     * Lists the supported EVM-compatible chains. Filterable by network.
     * @returns ListChainsResponse
     * @throws ApiError
     */
    public supportedChains({
        network,
    }: {
        /**
         * mainnet or testnet.
         */
        network?: NetworkType,
    }): CancelablePromise<ListChainsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains',
            query: {
                'network': network,
            },
        });
    }

    /**
     * Get chain information
     * Gets chain information for the EVM-compatible chain if supported by the api.
     * @returns GetChainResponse
     * @throws ApiError
     */
    public getChainInfo({
        chainId,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
    }): CancelablePromise<GetChainResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}',
            path: {
                'chainId': chainId,
            },
        });
    }

}
