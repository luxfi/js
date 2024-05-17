/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Erc1155TransferDetails } from './Erc1155TransferDetails';
import type { Erc20TransferDetails } from './Erc20TransferDetails';
import type { Erc721TransferDetails } from './Erc721TransferDetails';
import type { InternalTransactionDetails } from './InternalTransactionDetails';
import type { NativeTransaction } from './NativeTransaction';

export type TransactionDetails = {
    /**
     * The native (top-level) transaction details.
     */
    nativeTransaction: NativeTransaction;
    /**
     * The list of ERC-20 transfers.
     */
    erc20Transfers?: Array<Erc20TransferDetails>;
    /**
     * The list of ERC-721 transfers.
     */
    erc721Transfers?: Array<Erc721TransferDetails>;
    /**
     * The list of ERC-1155 transfers.
     */
    erc1155Transfers?: Array<Erc1155TransferDetails>;
    /**
     * The list of internal transactions. Note that this list only includes CALL and CALLCODE internal transactions that had a non-zero value and CREATE/CREATE2 calls. Use a client provider to recieve a full debug trace of the transaction.
     */
    internalTransactions?: Array<InternalTransactionDetails>;
};

