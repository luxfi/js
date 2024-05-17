/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageAsset } from './ImageAsset';
import type { ResourceLink } from './ResourceLink';

export type ContractSubmissionErc721 = {
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
    ercType: 'ERC-721';
    /**
     * The contract symbol.
     */
    symbol: string;
};

