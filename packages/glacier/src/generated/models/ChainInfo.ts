/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChainStatus } from './ChainStatus';
import type { NetworkToken } from './NetworkToken';
import type { UtilityAddresses } from './UtilityAddresses';
import type { VmName } from './VmName';

export type ChainInfo = {
    chainId: string;
    /**
     * Status of chain nodes. Chain nodes can become temporarily `UNAVAILABLE` for several reasons, such as validator stake falling below threshold. If chain nodes are `UNAVAILABLE`, requests that rely on data from the chain nodes may return 503 errors.
     */
    status: ChainStatus;
    chainName: string;
    description: string;
    platformChainId?: string;
    subnetId?: string;
    vmId?: string;
    vmName: VmName;
    explorerUrl?: string;
    rpcUrl: string;
    wsUrl?: string;
    isTestnet: boolean;
    utilityAddresses?: UtilityAddresses;
    networkToken: NetworkToken;
    chainLogoUri?: string;
};

