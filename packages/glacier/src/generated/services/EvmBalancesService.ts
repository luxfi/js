/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyCode } from '../models/CurrencyCode';
import type { GetNativeBalanceResponse } from '../models/GetNativeBalanceResponse';
import type { ListCollectibleBalancesResponse } from '../models/ListCollectibleBalancesResponse';
import type { ListErc1155BalancesResponse } from '../models/ListErc1155BalancesResponse';
import type { ListErc20BalancesResponse } from '../models/ListErc20BalancesResponse';
import type { ListErc721BalancesResponse } from '../models/ListErc721BalancesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EvmBalancesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get native token balance
     * Gets native token balance of a wallet address.
     *
     * Balance at a given block can be retrieved with the `blockNumber` parameter.
     * @returns GetNativeBalanceResponse
     * @throws ApiError
     */
    public getNativeBalance({
        chainId,
        address,
        blockNumber,
        currency,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A wallet address.
         */
        address: string,
        /**
         * The block number, if not defined the block number will be the latest block.
         */
        blockNumber?: string,
        /**
         * The currency that return values should use. Defaults to USD.
         */
        currency?: CurrencyCode,
    }): CancelablePromise<GetNativeBalanceResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/balances:getNative',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'blockNumber': blockNumber,
                'currency': currency,
            },
        });
    }

    /**
     * List ERC-20 balances
     * Lists ERC-20 token balances of a wallet address.
     *
     * Balance at a given block can be retrieved with the `blockNumber` parameter.
     *
     * Balance for specific contracts can be retrieved with the `contractAddresses` parameter.
     * @returns ListErc20BalancesResponse
     * @throws ApiError
     */
    public listErc20Balances({
        chainId,
        address,
        blockNumber,
        pageSize = 10,
        pageToken,
        contractAddresses,
        currency,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A wallet address.
         */
        address: string,
        /**
         * The block number, if not defined the block number will be the latest block.
         */
        blockNumber?: string,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
        /**
         * A comma separated list of contract addresses to filter by.
         */
        contractAddresses?: string,
        /**
         * The currency that return values should use. Defaults to USD.
         */
        currency?: CurrencyCode,
    }): CancelablePromise<ListErc20BalancesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/balances:listErc20',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'blockNumber': blockNumber,
                'pageSize': pageSize,
                'pageToken': pageToken,
                'contractAddresses': contractAddresses,
                'currency': currency,
            },
        });
    }

    /**
     * List ERC-721 balances
     * Lists ERC-721 token balances of a wallet address.
     *
     * Balance for a specific contract can be retrieved with the `contractAddress` parameter.
     * @returns ListErc721BalancesResponse
     * @throws ApiError
     */
    public listErc721Balances({
        chainId,
        address,
        pageSize = 10,
        pageToken,
        contractAddress,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A wallet address.
         */
        address: string,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
        /**
         * A contract addresses to filter by.
         */
        contractAddress?: string,
    }): CancelablePromise<ListErc721BalancesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/balances:listErc721',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
                'contractAddress': contractAddress,
            },
        });
    }

    /**
     * List ERC-1155 balances
     * Lists ERC-1155 token balances of a wallet address.
     *
     * Balance at a given block can be retrieved with the `blockNumber` parameter.
     *
     * Balance for a specific contract can be retrieved with the `contractAddress` parameter.
     * @returns ListErc1155BalancesResponse
     * @throws ApiError
     */
    public listErc1155Balances({
        chainId,
        address,
        blockNumber,
        pageSize = 10,
        pageToken,
        contractAddress,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A wallet address.
         */
        address: string,
        /**
         * The block number, if not defined the block number will be the latest block.
         */
        blockNumber?: string,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
        /**
         * A contract addresses to filter by.
         */
        contractAddress?: string,
    }): CancelablePromise<ListErc1155BalancesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/balances:listErc1155',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'blockNumber': blockNumber,
                'pageSize': pageSize,
                'pageToken': pageToken,
                'contractAddress': contractAddress,
            },
        });
    }

    /**
     * List collectible (ERC-721/ERC-1155) balances
     * Lists ERC-721 and ERC-1155 token balances of a wallet address.
     *
     * Balance for a specific contract can be retrieved with the `contractAddress` parameter.
     * @returns ListCollectibleBalancesResponse
     * @throws ApiError
     */
    public listCollectibleBalances({
        chainId,
        address,
        pageSize = 10,
        pageToken,
        contractAddress,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A wallet address.
         */
        address: string,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
        /**
         * A contract addresses to filter by.
         */
        contractAddress?: string,
    }): CancelablePromise<ListCollectibleBalancesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/balances:listCollectibles',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
                'contractAddress': contractAddress,
            },
        });
    }

}
