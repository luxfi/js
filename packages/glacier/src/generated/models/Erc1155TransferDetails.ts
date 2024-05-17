/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc1155Token } from './Erc1155Token';
import type { RichAddress } from './RichAddress';

export type Erc1155TransferDetails = {
    from: RichAddress;
    to: RichAddress;
    logIndex: number;
    value: string;
    erc1155Token: Erc1155Token;
};

