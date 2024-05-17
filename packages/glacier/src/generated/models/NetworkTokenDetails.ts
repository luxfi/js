/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Money } from './Money';
import type { NetworkToken } from './NetworkToken';

export type NetworkTokenDetails = {
    networkToken: NetworkToken;
    /**
     * The current token price, if available.
     */
    currentPrice?: Money;
    /**
     * The historical token price at the time the transaction occured, if available. Note, this is only provided if the transaction occured more than 24 hours ago.
     */
    historicalPrice?: Money;
};

