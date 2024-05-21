/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractDeploymentDetails } from './ContractDeploymentDetails';
import type { ImageAsset } from './ImageAsset';
import type { ResourceLink } from './ResourceLink';

export type Erc721Contract = {
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
    ercType: 'ERC-721';
    /**
     * The contract symbol.
     */
    symbol?: string;
};

