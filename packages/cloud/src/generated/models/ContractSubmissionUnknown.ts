/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageAsset } from './ImageAsset';
import type { ResourceLink } from './ResourceLink';

export type ContractSubmissionUnknown = {
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
    ercType: 'UNKNOWN';
};

