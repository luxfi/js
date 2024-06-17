/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListXChainVerticesResponse } from '../models/ListXChainVerticesResponse';
import type { Network } from '../models/Network';
import type { SortOrder } from '../models/SortOrder';
import type { XChainId } from '../models/XChainId';
import type { XChainVertex } from '../models/XChainVertex';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PrimaryNetworkVerticesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List vertices
     * Lists latest vertices on the X-Chain.
     * @returns ListXChainVerticesResponse
     * @throws ApiError
     */
    public listLatestXChainVertices({
        blockchainId,
        network,
        pageSize = 10,
        pageToken,
    }: {
        /**
         * A primary network blockchain id or alias.
         */
        blockchainId: XChainId,
        /**
         * Either mainnet or a testnet.
         */
        network: Network,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
    }): CancelablePromise<ListXChainVerticesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/vertices',
            path: {
                'blockchainId': blockchainId,
                'network': network,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
            },
        });
    }

    /**
     * Get vertex
     * Gets a single vertex on the X-Chain.
     * @returns XChainVertex
     * @throws ApiError
     */
    public getVertexByHash({
        vertexHash,
        blockchainId,
        network,
    }: {
        /**
         * A vertex hash string.
         */
        vertexHash: string,
        /**
         * A primary network blockchain id or alias.
         */
        blockchainId: XChainId,
        /**
         * Either mainnet or a testnet.
         */
        network: Network,
    }): CancelablePromise<XChainVertex> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/vertices/{vertexHash}',
            path: {
                'vertexHash': vertexHash,
                'blockchainId': blockchainId,
                'network': network,
            },
        });
    }

    /**
     * List vertices by height
     * Lists vertices at the given vertex height on the X-Chain.
     * @returns ListXChainVerticesResponse
     * @throws ApiError
     */
    public getVertexByHeight({
        vertexHeight,
        blockchainId,
        network,
        pageSize = 10,
        pageToken,
        sortOrder,
    }: {
        /**
         * The height of a vertex.
         */
        vertexHeight: number,
        /**
         * A primary network blockchain id or alias.
         */
        blockchainId: XChainId,
        /**
         * Either mainnet or a testnet.
         */
        network: Network,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
        /**
         * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
         */
        sortOrder?: SortOrder,
    }): CancelablePromise<ListXChainVerticesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/vertices:listByHeight',
            path: {
                'blockchainId': blockchainId,
                'network': network,
            },
            query: {
                'vertexHeight': vertexHeight,
                'pageSize': pageSize,
                'pageToken': pageToken,
                'sortOrder': sortOrder,
            },
        });
    }

}
