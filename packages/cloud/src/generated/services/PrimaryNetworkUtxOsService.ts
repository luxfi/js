/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlockchainId } from '../models/BlockchainId';
import type { ListPChainUtxosResponse } from '../models/ListPChainUtxosResponse';
import type { ListUtxosResponse } from '../models/ListUtxosResponse';
import type { Network } from '../models/Network';
import type { SortOrder } from '../models/SortOrder';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PrimaryNetworkUtxOsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List UTXOs
     * Lists UTXOs on one of the Primary Network chains for the supplied addresses.
     * @returns any
     * @throws ApiError
     */
    public getUtxosByAddresses({
        blockchainId,
        network,
        addresses,
        pageSize = 10,
        pageToken,
        assetId,
        includeSpent,
        sortOrder,
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
         * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "lux"/"testnet", "P-lux"/"P-testnet" or "X-lux"/"X-testnet".
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
         * Asset ID for any asset (only applicable X-Chain)
         */
        assetId?: string,
        /**
         * Boolean filter to include spent UTXOs.
         */
        includeSpent?: boolean,
        /**
         * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
         */
        sortOrder?: SortOrder,
    }): CancelablePromise<(ListPChainUtxosResponse | ListUtxosResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/utxos',
            path: {
                'blockchainId': blockchainId,
                'network': network,
            },
            query: {
                'addresses': addresses,
                'pageSize': pageSize,
                'pageToken': pageToken,
                'assetId': assetId,
                'includeSpent': includeSpent,
                'sortOrder': sortOrder,
            },
        });
    }

}
