/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractDeploymentDetails } from './ContractDeploymentDetails';
import type { ImageAsset } from './ImageAsset';
import type { PricingProviders } from './PricingProviders';
import type { ResourceLink } from './ResourceLink';

export type Erc20Contract = {
    /**
     * The contract name.
     */
    name?: string;
    description?: string;
    officialSite?: string;
    email?: string;
    logoAsset?: ImageAsset;
    bannerAsset?: ImageAsset;
    color?: string;
    resourceLinks?: Array<ResourceLink>;
    tags?: Array<string>;
    /**
     * A wallet or contract address in mixed-case checksum encoding.
     */
    address: string;
    deploymentDetails: ContractDeploymentDetails;
    ercType: 'ERC-20';
    /**
     * The contract symbol.
     */
    symbol?: string;
    /**
     * The number of decimals the token uses. For example `6`, means to divide the token amount by `1000000` to get its user representation.
     */
    decimals: number;
    pricingProviders: PricingProviders;
};

