/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Blockchain } from './Blockchain';

export type ListBlockchainsResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    blockchains: Array<Blockchain>;
};

