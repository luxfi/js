/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc1155TokenMetadata } from './Erc1155TokenMetadata';

export type Erc1155TokenBalance = {
    /**
     * A wallet or contract address in mixed-case checksum encoding.
     */
    address: string;
    ercType: 'ERC-1155';
    tokenId: string;
    tokenUri: string;
    metadata: Erc1155TokenMetadata;
    /**
     * The evm chain id.
     */
    chainId: string;
    /**
     * The address balance for the token, in units specified by the `decimals` value for the contract.
     */
    balance: string;
};

