/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NftTokenMetadataStatus } from './NftTokenMetadataStatus';

export type Erc1155TokenMetadata = {
    /**
     * The metadata indexing status of the nft.
     */
    indexStatus: NftTokenMetadataStatus;
    metadataLastUpdatedTimestamp?: number;
    name?: string;
    symbol?: string;
    imageUri?: string;
    description?: string;
    animationUri?: string;
    externalUrl?: string;
    background?: string;
    decimals?: number;
    properties?: string;
};

