/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc721Token } from './Erc721Token';
import type { RichAddress } from './RichAddress';

export type Erc721TransferDetails = {
    from: RichAddress;
    to: RichAddress;
    logIndex: number;
    erc721Token: Erc721Token;
};

