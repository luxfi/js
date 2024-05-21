/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc1155Contract } from './Erc1155Contract';
import type { Erc20Contract } from './Erc20Contract';
import type { Erc721Contract } from './Erc721Contract';
import type { UnknownContract } from './UnknownContract';

export type UpdateContractResponse = {
    contract: (UnknownContract | Erc20Contract | Erc721Contract | Erc1155Contract);
};

