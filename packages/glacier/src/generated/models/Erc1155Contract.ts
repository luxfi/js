/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractDeploymentDetails } from './ContractDeploymentDetails';
import type { ImageAsset } from './ImageAsset';
import type { PricingProviders } from './PricingProviders';
import type { ResourceLink } from './ResourceLink';

export type Erc1155Contract = {
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
    ercType: 'ERC-1155';
    /**
     * The contract symbol.
     */
    symbol?: string;
    pricingProviders?: PricingProviders;
};

