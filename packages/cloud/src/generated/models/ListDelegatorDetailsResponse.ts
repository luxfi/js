/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActiveDelegatorDetails } from './ActiveDelegatorDetails';
import type { CompletedDelegatorDetails } from './CompletedDelegatorDetails';
import type { PendingDelegatorDetails } from './PendingDelegatorDetails';

export type ListDelegatorDetailsResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of Delegator Details.
     */
    delegators: Array<(CompletedDelegatorDetails | ActiveDelegatorDetails | PendingDelegatorDetails)>;
};

