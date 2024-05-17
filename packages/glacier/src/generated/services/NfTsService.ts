/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Erc1155Contract } from '../models/Erc1155Contract';
import type { Erc1155Token } from '../models/Erc1155Token';
import type { Erc721Contract } from '../models/Erc721Contract';
import type { Erc721Token } from '../models/Erc721Token';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NfTsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Triggers reindexing for a single nft contract and token id pair
     * Triggers reindexing of token metadata for nft contracts.
     * Will throw 400 if Nft has been indexed within the last hour.
     * @returns any
     * @throws ApiError
     */
    public reindexNft({
        chainId,
        address,
        tokenId,
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
         * TokenId on the contract
         */
        tokenId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/chains/{chainId}/nfts/collections/{address}/tokens/{tokenId}:reindex',
            path: {
                'chainId': chainId,
                'address': address,
                'tokenId': tokenId,
            },
        });
    }

    /**
     * Get token details
     * Get token details for a specific token of a contract.
     * @returns any
     * @throws ApiError
     */
    public getTokenDetails({
        chainId,
        address,
        tokenId,
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
         * TokenId on the contract
         */
        tokenId: string,
    }): CancelablePromise<(Erc721Token | Erc1155Token)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/nfts/collections/{address}/tokens/{tokenId}',
            path: {
                'chainId': chainId,
                'address': address,
                'tokenId': tokenId,
            },
        });
    }

    /**
     * Get collection details
     * Get collection details for a specific contract.
     * @returns any
     * @throws ApiError
     */
    public getCollection({
        chainId,
        address,
    }: {
        /**
         * A supported evm chain id. Use the `/chains` endpoint to get a list of supported chain ids.
         */
        chainId: string,
        /**
         * Contract address on the relevant chain.
         */
        address: string,
    }): CancelablePromise<(Erc721Contract | Erc1155Contract)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/chains/{chainId}/nfts/collections/{address}',
            path: {
                'chainId': chainId,
                'address': address,
            },
        });
    }

}
