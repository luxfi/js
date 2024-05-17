/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc721TokenMetadata } from './Erc721TokenMetadata';

export type Erc721Token = {
    /**
     * A wallet or contract address in mixed-case checksum encoding.
     */
    address: string;
    /**
     * The contract name.
     */
    name: string;
    /**
     * The contract symbol.
     */
    symbol: string;
    ercType: 'ERC-721';
    tokenId: string;
    tokenUri: string;
    metadata: Erc721TokenMetadata;
    /**
     * A wallet or contract address in mixed-case checksum encoding.
     */
    ownerAddress?: string;
};

