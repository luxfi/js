/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlockchainId } from '../models/BlockchainId';
import type { GetPrimaryNetworkBlockResponse } from '../models/GetPrimaryNetworkBlockResponse';
import type { ListPrimaryNetworkBlocksResponse } from '../models/ListPrimaryNetworkBlocksResponse';
import type { Network } from '../models/Network';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PrimaryNetworkBlocksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get block
     * Gets a block by block height or block hash on one of the Primary Network chains.
     * @returns GetPrimaryNetworkBlockResponse
     * @throws ApiError
     */
    public getBlockById({
        blockchainId,
        network,
        blockId,
    }: {
        /**
         * A primary network blockchain id or alias.
         */
        blockchainId: BlockchainId,
        /**
         * Either mainnet or a testnet.
         */
        network: Network,
        /**
         * A block identifier which is either a block number or the block hash.
         */
        blockId: string,
    }): CancelablePromise<GetPrimaryNetworkBlockResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/blocks/{blockId}',
            path: {
                'blockchainId': blockchainId,
                'network': network,
                'blockId': blockId,
            },
        });
    }

    /**
     * List blocks proposed by node
     * Lists the latest blocks proposed by a given NodeID on one of the Primary Network chains.
     * @returns ListPrimaryNetworkBlocksResponse
     * @throws ApiError
     */
    public listPrimaryNetworkBlocksByNodeId({
        blockchainId,
        network,
        nodeId,
        pageSize = 10,
        pageToken,
    }: {
        /**
         * A primary network blockchain id or alias.
         */
        blockchainId: BlockchainId,
        /**
         * Either mainnet or a testnet.
         */
        network: Network,
        /**
         * A primary network (P or X chain) nodeId.
         */
        nodeId: string,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
    }): CancelablePromise<ListPrimaryNetworkBlocksResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/nodes/{nodeId}/blocks',
            path: {
                'blockchainId': blockchainId,
                'network': network,
                'nodeId': nodeId,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
            },
        });
    }

    /**
     * List latest blocks
     * Lists latest blocks on one of the Primary Network chains.
     * @returns ListPrimaryNetworkBlocksResponse
     * @throws ApiError
     */
    public listLatestPrimaryNetworkBlocks({
        blockchainId,
        network,
        pageSize = 10,
        pageToken,
    }: {
        /**
         * A primary network blockchain id or alias.
         */
        blockchainId: BlockchainId,
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
    }): CancelablePromise<ListPrimaryNetworkBlocksResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/blocks',
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

}
