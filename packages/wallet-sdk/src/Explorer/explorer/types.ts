export type ExplorerTx = ExplorerNormalTx | ExplorerErc20Tx;

export interface ExplorerErc20Tx {
    blockNumber: string;
    timeStamp: string;
    hash: string;
    nonce: string;
    blockHash: string;
    from: string;
    contractAddress: string;
    to: string;
    value: string;
    tokenName: string;
    tokenSymbol: string;
    tokenDecimal: string;
    transactionIndex: string;
    gas: string;
    gasPrice: string;
    gasUsed: string;
    cumulativeGasUsed: string;
    input: string;
    confirmations: string;
}

export interface ExplorerNormalTx {
    blockNumber: string;
    timeStamp: string;
    hash: string;
    nonce: string;
    blockHash: string;
    transactionIndex: string;
    from: string;
    to: string;
    value: string;
    gas: string;
    gasPrice: string;
    isError: string;
    txreceipt_status: string;
    input: string;
    contractAddress: string;
    cumulativeGasUsed: string;
    gasUsed: string;
    confirmations: string;
}

/**
 * Type guard for ExplorerErc20Tx
 * @param tx
 */
export function isExplorerErc20Tx(tx: ExplorerNormalTx | ExplorerErc20Tx): tx is ExplorerErc20Tx {
    return tx.hasOwnProperty('tokenName');
}

/**
 * Type guard for ExplorerNormalTx
 * @param tx
 */
export function isExplorerNormalTx(tx: ExplorerNormalTx | ExplorerErc20Tx): tx is ExplorerNormalTx {
    return !tx.hasOwnProperty('tokenName');
}

export interface ExplorerResponse<ResponseType> {
    status: string;
    message: string;
    result: ResponseType[];
}
