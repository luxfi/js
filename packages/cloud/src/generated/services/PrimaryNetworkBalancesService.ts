/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlockchainId } from '../models/BlockchainId';
import type { ListCChainAtomicBalancesResponse } from '../models/ListCChainAtomicBalancesResponse';
import type { ListPChainBalancesResponse } from '../models/ListPChainBalancesResponse';
import type { ListXChainBalancesResponse } from '../models/ListXChainBalancesResponse';
import type { Network } from '../models/Network';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PrimaryNetworkBalancesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get balances
     * Gets primary network balances for one of the Primary Network chains for the supplied addresses.
     *
     * C-Chain balances returned are only the shared atomic memory balance. For EVM balance, use the `/v1/chains/:chainId/addresses/:addressId/balances:getNative` endpoint.
     * @returns any
     * @throws ApiError
     */
    public getBalancesByAddresses({
        blockchainId,
        network,
        blockTimestamp,
        addresses,
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
         * An epoch timestamp in seconds. Balance will be calculated at this timestamp.
         */
        blockTimestamp?: number,
        /**
         * A comma separated list of X-Chain or P-Chain wallet addresses, starting with "lux"/"fuji", "P-lux"/"P-fuji" or "X-lux"/"X-fuji".
         */
        addresses?: string,
    }): CancelablePromise<(ListPChainBalancesResponse | ListXChainBalancesResponse | ListCChainAtomicBalancesResponse)> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/networks/{network}/blockchains/{blockchainId}/balances',
            path: {
                'blockchainId': blockchainId,
                'network': network,
            },
            query: {
                'blockTimestamp': blockTimestamp,
                'addresses': addresses,
            },
        });
    }

}
