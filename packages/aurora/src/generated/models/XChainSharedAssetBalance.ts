/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type XChainSharedAssetBalance = {
    /**
     * Unique ID for an asset.
     */
    assetId: string;
    /**
     * Name of this asset.
     */
    name: string;
    /**
     * Symbol for this asset (max 4 characters).
     */
    symbol: string;
    /**
     * Denomination of this asset to represent fungibility.
     */
    denomination: number;
    /**
     * Type of asset like SECP256K1 or NFT.
     */
    type: string;
    /**
     * Amount of the asset.
     */
    amount: string;
    utxoCount: number;
    sharedWithChainId: string;
};

