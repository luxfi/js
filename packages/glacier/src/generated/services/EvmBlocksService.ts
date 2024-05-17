/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetEvmBlockResponse } from '../models/GetEvmBlockResponse';
import type { ListEvmBlocksResponse } from '../models/ListEvmBlocksResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EvmBlocksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List latest blocks
     * Lists the latest indexed blocks on the EVM-compatible chain sorted in descending order by block timestamp.
     * @returns ListEvmBlocksResponse
     * @throws ApiError
     */
    public getLatestBlocks({
        chainId,
        pageSize = 10,
        pageToken,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
    }): CancelablePromise<ListEvmBlocksResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/blocks',
            path: {
                'chainId': chainId,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
            },
        });
    }

    /**
     * Get block
     * Gets the details of an individual block on the EVM-compatible chain.
     * @returns GetEvmBlockResponse
     * @throws ApiError
     */
    public getBlock({
        chainId,
        blockId,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A block identifier which is either a block number or the block hash.
         */
        blockId: string,
    }): CancelablePromise<GetEvmBlockResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/blocks/{blockId}',
            path: {
                'chainId': chainId,
                'blockId': blockId,
            },
        });
    }

}
