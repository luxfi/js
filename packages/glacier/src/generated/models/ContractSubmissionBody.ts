/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractSubmissionErc1155 } from './ContractSubmissionErc1155';
import type { ContractSubmissionErc20 } from './ContractSubmissionErc20';
import type { ContractSubmissionErc721 } from './ContractSubmissionErc721';
import type { ContractSubmissionUnknown } from './ContractSubmissionUnknown';

export type ContractSubmissionBody = {
    contract: (ContractSubmissionErc1155 | ContractSubmissionErc20 | ContractSubmissionErc721 | ContractSubmissionUnknown);
};

