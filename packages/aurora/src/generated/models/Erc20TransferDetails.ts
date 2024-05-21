/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc20Token } from './Erc20Token';
import type { RichAddress } from './RichAddress';

export type Erc20TransferDetails = {
    from: RichAddress;
    to: RichAddress;
    logIndex: number;
    value: string;
    erc20Token: Erc20Token;
};

