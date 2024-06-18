/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChainAddressChainIdMapListResponse } from '../models/ChainAddressChainIdMapListResponse';
import type { DelegationStatusType } from '../models/DelegationStatusType';
import type { GetNetworkDetailsResponse } from '../models/GetNetworkDetailsResponse';
import type { ListBlockchainsResponse } from '../models/ListBlockchainsResponse';
import type { ListDelegatorDetailsResponse } from '../models/ListDelegatorDetailsResponse';
import type { ListSubnetsResponse } from '../models/ListSubnetsResponse';
import type { ListValidatorDetailsResponse } from '../models/ListValidatorDetailsResponse';
import type { Network } from '../models/Network';
import type { SortOrder } from '../models/SortOrder';
import type { ValidationStatusType } from '../models/ValidationStatusType';
import type { XChainAssetDetails } from '../models/XChainAssetDetails';
import type { XChainId } from '../models/XChainId';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PrimaryNetworkService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get asset details
     * Gets asset details corresponding to the given asset id on the X-Chain.
     * @returns XChainAssetDetails
     * @throws ApiError
     */
    public getAssetDetails({
        blockchainId,
        network,
        assetId,
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
         * Asset ID for any asset on X-Chain
         */
        assetId: string,
    }): CancelablePromise<XChainAssetDetails> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/assets/{assetId}',
            path: {
                'blockchainId': blockchainId,
                'network': network,
                'assetId': assetId,
            },
        });
    }

    /**
     * Get chain interactions for addresses
     * Returns Primary Network chains that each address has touched in the form of an address mapped array. If an address has had any on-chain interaction for a chain, that chain's chain id will be returned.
     * @returns ChainAddressChainIdMapListResponse
     * @throws ApiError
     */
    public getChainIdsForAddresses({
        addresses,
        network,
    }: {
        /**
         * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "lux"/"testnet", "P-lux"/"P-testnet" or "X-lux"/"X-testnet".
         */
        addresses: string,
        /**
         * Either mainnet or a testnet.
         */
        network: Network,
    }): CancelablePromise<ChainAddressChainIdMapListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/addresses:listChainIds',
            path: {
                'network': network,
            },
            query: {
                'addresses': addresses,
            },
        });
    }

    /**
     * Get network details
     * Gets network details such as validator and delegator stats.
     * @returns GetNetworkDetailsResponse
     * @throws ApiError
     */
    public getNetworkDetails({
        network,
    }: {
        /**
         * Either mainnet or a testnet.
         */
        network: Network,
    }): CancelablePromise<GetNetworkDetailsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}',
            path: {
                'network': network,
            },
        });
    }

    /**
     * List blockchains
     * Lists all blockchains registered on the network.
     * @returns ListBlockchainsResponse
     * @throws ApiError
     */
    public listBlockchains({
        network,
        pageSize = 10,
        pageToken,
        sortOrder,
    }: {
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
    }): CancelablePromise<ListBlockchainsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains',
            path: {
                'network': network,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
                'sortOrder': sortOrder,
            },
        });
    }

    /**
     * List subnets
     * Lists all subnets registered on the network.
     * @returns ListSubnetsResponse
     * @throws ApiError
     */
    public listSubnets({
        network,
        pageSize = 10,
        pageToken,
        sortOrder,
    }: {
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
    }): CancelablePromise<ListSubnetsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/subnets',
            path: {
                'network': network,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
                'sortOrder': sortOrder,
            },
        });
    }

    /**
     * List validators
     * Lists details for validators. By default, returns details for all validators. Filterable by validator node ids and minimum delegation capacity.
     * @returns ListValidatorDetailsResponse
     * @throws ApiError
     */
    public listValidators({
        network,
        pageSize = 10,
        pageToken,
        nodeIds,
        sortOrder,
        validationStatus,
        minDelegationCapacity,
    }: {
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
         * A comma separated list of node ids to filter by.
         */
        nodeIds?: string,
        /**
         * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
         */
        sortOrder?: SortOrder,
        /**
         * Validation status of the node.
         */
        validationStatus?: ValidationStatusType,
        /**
         * The minimum delegation capacity, used to filter the set of nodes being returned (Units - nLUX). Default is 0.
         */
        minDelegationCapacity?: any,
    }): CancelablePromise<ListValidatorDetailsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/validators',
            path: {
                'network': network,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
                'nodeIds': nodeIds,
                'sortOrder': sortOrder,
                'validationStatus': validationStatus,
                'minDelegationCapacity': minDelegationCapacity,
            },
        });
    }

    /**
     * Get single validator details
     * List validator details for a single validator.  Filterable by validation status.
     * @returns ListValidatorDetailsResponse
     * @throws ApiError
     */
    public getSingleValidatorDetails({
        network,
        nodeId,
        pageSize = 10,
        pageToken,
        sortOrder,
        validationStatus,
    }: {
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
        /**
         * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
         */
        sortOrder?: SortOrder,
        /**
         * Validation status of the node.
         */
        validationStatus?: ValidationStatusType,
    }): CancelablePromise<ListValidatorDetailsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/validators/{nodeId}',
            path: {
                'network': network,
                'nodeId': nodeId,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
                'sortOrder': sortOrder,
                'validationStatus': validationStatus,
            },
        });
    }

    /**
     * List delegators
     * Lists details for delegators.
     * @returns ListDelegatorDetailsResponse
     * @throws ApiError
     */
    public listDelegators({
        network,
        pageSize = 10,
        pageToken,
        sortOrder,
        delegationStatus,
        rewardAddresses,
        nodeIds,
    }: {
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
        /**
         * Delegation status of the node.
         */
        delegationStatus?: DelegationStatusType,
        /**
         * A comma separated list of reward addresses to filter by.
         */
        rewardAddresses?: string,
        /**
         * A comma separated list of node ids to filter by.
         */
        nodeIds?: string,
    }): CancelablePromise<ListDelegatorDetailsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/delegators',
            path: {
                'network': network,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
                'sortOrder': sortOrder,
                'delegationStatus': delegationStatus,
                'rewardAddresses': rewardAddresses,
                'nodeIds': nodeIds,
            },
        });
    }

}
