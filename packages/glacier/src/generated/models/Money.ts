/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrencyCode } from './CurrencyCode';

export type Money = {
    /**
     * ISO 4217 currency code.
     */
    currencyCode: CurrencyCode;
    /**
     * Monetary value in base 10 decimals.
     */
    value: number;
};

