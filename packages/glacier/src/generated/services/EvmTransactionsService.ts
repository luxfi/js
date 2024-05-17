/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyCode } from '../models/CurrencyCode';
import type { GetTransactionResponse } from '../models/GetTransactionResponse';
import type { ListContractsResponse } from '../models/ListContractsResponse';
import type { ListErc1155TransactionsResponse } from '../models/ListErc1155TransactionsResponse';
import type { ListErc20TransactionsResponse } from '../models/ListErc20TransactionsResponse';
import type { ListErc721TransactionsResponse } from '../models/ListErc721TransactionsResponse';
import type { ListInternalTransactionsResponse } from '../models/ListInternalTransactionsResponse';
import type { ListNativeTransactionsResponse } from '../models/ListNativeTransactionsResponse';
import type { ListTransactionDetailsResponse } from '../models/ListTransactionDetailsResponse';
import type { ListTransfersResponse } from '../models/ListTransfersResponse';
import type { SortOrder } from '../models/SortOrder';
import type { TransactionStatus } from '../models/TransactionStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EvmTransactionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get deployment transaction
     * If the address is a smart contract, returns the transaction in which it was deployed.
     * @returns GetTransactionResponse
     * @throws ApiError
     */
    public getDeploymentTransaction({
        chainId,
        address,
        currency,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * Contract address on the relevant chain.
         */
        address: string,
        /**
         * The currency that return values should use. Defaults to USD.
         */
        currency?: CurrencyCode,
    }): CancelablePromise<GetTransactionResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/contracts/{address}/transactions:getDeployment',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'currency': currency,
            },
        });
    }

    /**
     * List deployed contracts
     * Lists all contracts deployed by the given address.
     * @returns ListContractsResponse
     * @throws ApiError
     */
    public listContractDeployments({
        chainId,
        address,
        pageSize = 10,
        pageToken,
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
    }): CancelablePromise<ListContractsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/deployments',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
            },
        });
    }

    /**
     * List ERC transfers
     * Lists ERC transfers for an ERC-20, ERC-721, or ERC-1155 contract address.
     * @returns ListTransfersResponse
     * @throws ApiError
     */
    public listTransfers({
        chainId,
        address,
        startBlock,
        endBlock,
        pageSize = 10,
        pageToken,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A wallet address.
         */
        address: string,
        startBlock?: number,
        endBlock?: number,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
    }): CancelablePromise<ListTransfersResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/tokens/{address}/transfers',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'startBlock': startBlock,
                'endBlock': endBlock,
                'pageSize': pageSize,
                'pageToken': pageToken,
            },
        });
    }

    /**
     * List transactions
     * Returns a list of transactions where the given wallet address had an on-chain interaction for the given chain. The ERC-20 transfers, ERC-721 transfers, ERC-1155, and internal transactions returned are only those where the input address had an interaction. Specifically, those lists only inlcude entries where the input address was the sender (`from` field) or the receiver (`to` field) for the sub-transaction. Therefore the transactions returned from this list may not be complete representations of the on-chain data. For a complete view of a transaction use the `/chains/:chainId/transactions/:txHash` endpoint.
     *
     * Filterable by block ranges.
     * @returns ListTransactionDetailsResponse
     * @throws ApiError
     */
    public listTransactions({
        chainId,
        address,
        pageSize = 10,
        pageToken,
        startBlock,
        endBlock,
        sortOrder,
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
        startBlock?: number,
        endBlock?: number,
        /**
         * The order by which to sort results. Use "asc" for ascending order, "desc" for descending order. Sorted by timestamp or the `sortBy` query parameter, if provided.
         */
        sortOrder?: SortOrder,
    }): CancelablePromise<ListTransactionDetailsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/transactions',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
                'startBlock': startBlock,
                'endBlock': endBlock,
                'sortOrder': sortOrder,
            },
        });
    }

    /**
     * List native transactions
     * Lists native transactions for an address. Filterable by block range.
     * @returns ListNativeTransactionsResponse
     * @throws ApiError
     */
    public listNativeTransactions({
        chainId,
        address,
        startBlock,
        endBlock,
        pageSize = 10,
        pageToken,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A wallet address.
         */
        address: string,
        startBlock?: number,
        endBlock?: number,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
    }): CancelablePromise<ListNativeTransactionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/transactions:listNative',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'startBlock': startBlock,
                'endBlock': endBlock,
                'pageSize': pageSize,
                'pageToken': pageToken,
            },
        });
    }

    /**
     * List ERC-20 transfers
     * Lists ERC-20 transfers for an address. Filterable by block range.
     * @returns ListErc20TransactionsResponse
     * @throws ApiError
     */
    public listErc20Transactions({
        chainId,
        address,
        startBlock,
        endBlock,
        pageSize = 10,
        pageToken,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A wallet address.
         */
        address: string,
        startBlock?: number,
        endBlock?: number,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
    }): CancelablePromise<ListErc20TransactionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/transactions:listErc20',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'startBlock': startBlock,
                'endBlock': endBlock,
                'pageSize': pageSize,
                'pageToken': pageToken,
            },
        });
    }

    /**
     * List ERC-721 transfers
     * Lists ERC-721 transfers for an address. Filterable by block range.
     * @returns ListErc721TransactionsResponse
     * @throws ApiError
     */
    public listErc721Transactions({
        chainId,
        address,
        startBlock,
        endBlock,
        pageSize = 10,
        pageToken,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A wallet address.
         */
        address: string,
        startBlock?: number,
        endBlock?: number,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
    }): CancelablePromise<ListErc721TransactionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/transactions:listErc721',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'startBlock': startBlock,
                'endBlock': endBlock,
                'pageSize': pageSize,
                'pageToken': pageToken,
            },
        });
    }

    /**
     * List ERC-1155 transfers
     * Lists ERC-1155 transfers for an address. Filterable by block range.
     * @returns ListErc1155TransactionsResponse
     * @throws ApiError
     */
    public listErc1155Transactions({
        chainId,
        address,
        startBlock,
        endBlock,
        pageSize = 10,
        pageToken,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A wallet address.
         */
        address: string,
        startBlock?: number,
        endBlock?: number,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
    }): CancelablePromise<ListErc1155TransactionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/transactions:listErc1155',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'startBlock': startBlock,
                'endBlock': endBlock,
                'pageSize': pageSize,
                'pageToken': pageToken,
            },
        });
    }

    /**
     * List internal transactions
     * Returns a list of internal transactions for an address and chain. Filterable by block range.
     *
     * Note that the internal transactions list only contains `CALL` or `CALLCODE` transactions with a non-zero value and `CREATE`/`CREATE2` transactions. To get a complete list of internal transactions use the `debug_` prefixed RPC methods on an archive node.
     * @returns ListInternalTransactionsResponse
     * @throws ApiError
     */
    public listInternalTransactions({
        chainId,
        address,
        startBlock,
        endBlock,
        pageSize = 10,
        pageToken,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A wallet address.
         */
        address: string,
        startBlock?: number,
        endBlock?: number,
        /**
         * The maximum number of items to return. The minimum page size is 1. The maximum pageSize is 100.
         */
        pageSize?: number,
        /**
         * A page token, received from a previous list call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string,
    }): CancelablePromise<ListInternalTransactionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/addresses/{address}/transactions:listInternals',
            path: {
                'chainId': chainId,
                'address': address,
            },
            query: {
                'startBlock': startBlock,
                'endBlock': endBlock,
                'pageSize': pageSize,
                'pageToken': pageToken,
            },
        });
    }

    /**
     * Get transaction
     * Gets the details of a single transaction.
     * @returns GetTransactionResponse
     * @throws ApiError
     */
    public getTransaction({
        chainId,
        txHash,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * A transaction hash.
         */
        txHash: string,
    }): CancelablePromise<GetTransactionResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/transactions/{txHash}',
            path: {
                'chainId': chainId,
                'txHash': txHash,
            },
        });
    }

    /**
     * List transactions for a block
     * Lists the transactions that occured in a given block.
     * @returns ListNativeTransactionsResponse
     * @throws ApiError
     */
    public getTransactionsForBlock({
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
    }): CancelablePromise<ListNativeTransactionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/blocks/{blockId}/transactions',
            path: {
                'chainId': chainId,
                'blockId': blockId,
            },
        });
    }

    /**
     * List latest transactions
     * Lists the latest transactions. Filterable by status.
     * @returns ListNativeTransactionsResponse
     * @throws ApiError
     */
    public listLatestTransactions({
        chainId,
        pageSize = 10,
        pageToken,
        status,
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
        /**
         * A status filter for listed transactions.
         */
        status?: TransactionStatus,
    }): CancelablePromise<ListNativeTransactionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/transactions',
            path: {
                'chainId': chainId,
            },
            query: {
                'pageSize': pageSize,
                'pageToken': pageToken,
                'status': status,
            },
        });
    }

}
