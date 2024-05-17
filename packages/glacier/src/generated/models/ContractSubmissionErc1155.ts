/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageAsset } from './ImageAsset';
import type { PricingProviders } from './PricingProviders';
import type { ResourceLink } from './ResourceLink';

export type ContractSubmissionErc1155 = {
    description?: string;
    officialSite?: string;
    email?: string;
    logoAsset?: ImageAsset;
    bannerAsset?: ImageAsset;
    color?: string;
    resourceLinks?: Array<ResourceLink>;
    tags?: Array<string>;
    /**
     * The contract name.
     */
    name: string;
    ercType: 'ERC-1155';
    /**
     * The contract symbol.
     */
    symbol: string;
    pricingProviders?: PricingProviders;
};

