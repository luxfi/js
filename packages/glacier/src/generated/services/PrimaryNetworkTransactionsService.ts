/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlockchainId } from '../models/BlockchainId';
import type { CChainExportTransaction } from '../models/CChainExportTransaction';
import type { CChainImportTransaction } from '../models/CChainImportTransaction';
import type { ListCChainAtomicTransactionsResponse } from '../models/ListCChainAtomicTransactionsResponse';
import type { ListPChainTransactionsResponse } from '../models/ListPChainTransactionsResponse';
import type { ListXChainTransactionsResponse } from '../models/ListXChainTransactionsResponse';
import type { Network } from '../models/Network';
import type { PChainId } from '../models/PChainId';
import type { PChainTransaction } from '../models/PChainTransaction';
import type { PrimaryNetworkTxType } from '../models/PrimaryNetworkTxType';
import type { SortOrder } from '../models/SortOrder';
import type { XChainId } from '../models/XChainId';
import type { XChainLinearTransaction } from '../models/XChainLinearTransaction';
import type { XChainNonLinearTransaction } from '../models/XChainNonLinearTransaction';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PrimaryNetworkTransactionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get transaction
     * Gets the details of a single transaction on one of the Primary Network chains.
     * @returns any
     * @throws ApiError
     */
    public getTxByHash({
        blockchainId,
        network,
        txHash,
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
         * A primary network (P or X chain) transaction hash.
         */
        txHash: string,
    }): CancelablePromise<(PChainTransaction | XChainNonLinearTransaction | XChainLinearTransaction | CChainExportTransaction | CChainImportTransaction)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/transactions/{txHash}',
            path: {
                'blockchainId': blockchainId,
                'network': network,
                'txHash': txHash,
            },
        });
    }

    /**
     * List latest transactions
     * Lists the latest transactions on one of the Primary Network chains. Transactions are filterable by addresses.
     * @returns any
     * @throws ApiError
     */
    public listLatestPrimaryNetworkTransactions({
        blockchainId,
        network,
        addresses,
        txTypes,
        startTimestamp,
        endTimestamp,
        pageSize = 10,
        pageToken,
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
         * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "lux"/"fuji", "P-lux"/"P-fuji" or "X-lux"/"X-fuji".
         */
        addresses?: string,
        /**
         * Query param for filtering items based on transaction types.
         */
        txTypes?: Array<PrimaryNetworkTxType>,
        /**
         * Query param for retrieving items after a specific timestamp.
         */
        startTimestamp?: number,
        /**
         * Query param for retrieving items before a specific timestamp.
         */
        endTimestamp?: number,
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
    }): CancelablePromise<(ListPChainTransactionsResponse | ListXChainTransactionsResponse | ListCChainAtomicTransactionsResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/transactions',
            path: {
                'blockchainId': blockchainId,
                'network': network,
            },
            query: {
                'addresses': addresses,
                'txTypes': txTypes,
                'startTimestamp': startTimestamp,
                'endTimestamp': endTimestamp,
                'pageSize': pageSize,
                'pageToken': pageToken,
                'sortOrder': sortOrder,
            },
        });
    }

    /**
     * List staking transactions
     * Lists active staking transactions on the P-Chain for the supplied addresses.
     * @returns ListPChainTransactionsResponse
     * @throws ApiError
     */
    public listActivePrimaryNetworkStakingTransactions({
        blockchainId,
        network,
        addresses,
        txTypes,
        startTimestamp,
        endTimestamp,
        pageSize = 10,
        pageToken,
        sortOrder,
    }: {
        /**
         * A primary network blockchain id or alias.
         */
        blockchainId: PChainId,
        /**
         * Either mainnet or a testnet.
         */
        network: Network,
        /**
         * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "lux"/"fuji", "P-lux"/"P-fuji" or "X-lux"/"X-fuji".
         */
        addresses?: string,
        /**
         * Query param for filtering items based on transaction types.
         */
        txTypes?: Array<PrimaryNetworkTxType>,
        /**
         * Query param for retrieving items after a specific timestamp.
         */
        startTimestamp?: number,
        /**
         * Query param for retrieving items before a specific timestamp.
         */
        endTimestamp?: number,
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
    }): CancelablePromise<ListPChainTransactionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/transactions:listStaking',
            path: {
                'blockchainId': blockchainId,
                'network': network,
            },
            query: {
                'addresses': addresses,
                'txTypes': txTypes,
                'startTimestamp': startTimestamp,
                'endTimestamp': endTimestamp,
                'pageSize': pageSize,
                'pageToken': pageToken,
                'sortOrder': sortOrder,
            },
        });
    }

    /**
     * List asset transactions
     * Lists asset transactions corresponding to the given asset id on the X-Chain.
     * @returns ListXChainTransactionsResponse
     * @throws ApiError
     */
    public listAssetTransactions({
        blockchainId,
        network,
        assetId,
        txTypes,
        startTimestamp,
        endTimestamp,
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
         * Asset ID for any asset on X-Chain
         */
        assetId: string,
        /**
         * Query param for filtering items based on transaction types.
         */
        txTypes?: Array<PrimaryNetworkTxType>,
        /**
         * Query param for retrieving items after a specific timestamp.
         */
        startTimestamp?: number,
        /**
         * Query param for retrieving items before a specific timestamp.
         */
        endTimestamp?: number,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
    }): CancelablePromise<ListXChainTransactionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/assets/{assetId}/transactions',
            path: {
                'blockchainId': blockchainId,
                'network': network,
                'assetId': assetId,
            },
            query: {
                'txTypes': txTypes,
                'startTimestamp': startTimestamp,
                'endTimestamp': endTimestamp,
                'pageSize': pageSize,
                'pageToken': pageToken,
            },
        });
    }

}
