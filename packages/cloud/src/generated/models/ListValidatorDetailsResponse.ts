/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActiveValidatorDetails } from './ActiveValidatorDetails';
import type { CompletedValidatorDetails } from './CompletedValidatorDetails';
import type { PendingValidatorDetails } from './PendingValidatorDetails';

export type ListValidatorDetailsResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of Validator Details.
     */
    validators: Array<(CompletedValidatorDetails | ActiveValidatorDetails | PendingValidatorDetails)>;
};

