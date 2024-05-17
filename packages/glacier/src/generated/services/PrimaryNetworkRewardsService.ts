/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListHistoricalRewardsResponse } from '../models/ListHistoricalRewardsResponse';
import type { ListPendingRewardsResponse } from '../models/ListPendingRewardsResponse';
import type { Network } from '../models/Network';
import type { SortOrder } from '../models/SortOrder';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PrimaryNetworkRewardsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List pending rewards
     * Lists pending rewards on the Primary Network for the supplied addresses.
     * @returns ListPendingRewardsResponse
     * @throws ApiError
     */
    public listPendingPrimaryNetworkRewards({
        network,
        addresses,
        pageSize = 10,
        pageToken,
        sortOrder,
    }: {
        /**
         * Either mainnet or a testnet.
         */
        network: Network,
        /**
         * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "lux"/"fuji", "P-lux"/"P-fuji" or "X-lux"/"X-fuji".
         */
        addresses?: string,
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
    }): CancelablePromise<ListPendingRewardsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/rewards:listPending',
            path: {
                'network': network,
            },
            query: {
                'addresses': addresses,
                'pageSize': pageSize,
                'pageToken': pageToken,
                'sortOrder': sortOrder,
            },
        });
    }

    /**
     * List historical rewards
     * Lists historical rewards on the Primary Network for the supplied addresses.
     * @returns ListHistoricalRewardsResponse
     * @throws ApiError
     */
    public listHistoricalPrimaryNetworkRewards({
        network,
        addresses,
        pageSize = 10,
        pageToken,
        sortOrder,
    }: {
        /**
         * Either mainnet or a testnet.
         */
        network: Network,
        /**
         * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "lux"/"fuji", "P-lux"/"P-fuji" or "X-lux"/"X-fuji".
         */
        addresses?: string,
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
    }): CancelablePromise<ListHistoricalRewardsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/rewards',
            path: {
                'network': network,
            },
            query: {
                'addresses': addresses,
                'pageSize': pageSize,
                'pageToken': pageToken,
                'sortOrder': sortOrder,
            },
        });
    }

}
