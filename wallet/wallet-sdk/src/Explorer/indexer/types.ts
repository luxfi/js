/**
 * Data coming from explorer for C chain
 */
export interface IndexerEvmTx {
    block: string;
    hash: string;
    createdAt: string;
    nonce: number;
    gasPrice: string;
    gasLimit: number;
    blockGasUsed: number;
    blockGasLimit: number;
    blockNonce: number;
    blockHash: string;
    recipient: string;
    value: string;
    toAddr: string;
    fromAddr: string;
    input?: string;
    v: string;
    r: string;
    s: string;
    traces: [
        {
            callType: string;
            to: string;
            from: string;
            type: string;
            gasUsed: string;
            gas: string;
            value: string;
        }
    ];
}

/**
 * Data coming from the explorer for X,P chain
 */
export interface IndexerLuxTx {
    chainID: string;
    id: string;
    inputTotals: {
        [key: string]: string;
    };
    inputs: IndexerTxInput[] | null;
    memo: string;
    outputTotals: {
        [key: string]: string;
    };
    outputs: IndexerUTXO[] | null;

    reusedAddressTotals: null;
    rewarded: boolean;
    rewardedTime: string;
    timestamp: string;
    txFee: number;
    type: IndexerTransactionType;
    validatorStart: number;
    validatorEnd: number;
    validatorNodeID: string;
}

interface IndexerTxInput {
    credentials: IndexerTxCredential[];
    output: IndexerUTXO;
}

interface IndexerTxCredential {
    address: string;
    public_key: string;
    signature: string;
}

export interface IndexerUTXO {
    addresses: string[] | null;
    caddresses?: string[];
    amount: string;
    assetID: string;
    chainID: string;
    groupID: number;
    id: string;
    locktime: number;
    payload?: string;
    outputIndex: number;
    outputType: number;
    redeemingTransactionID: string;
    stake?: boolean;
    inChainID: string;
    outChainID: string;
    threshold: number;
    timestamp: string;
    transactionID: string;
    rewardUtxo: boolean;
}

export type IndexerTransactionType =
    | 'base'
    | 'create_asset'
    | 'operation'
    | 'import'
    | 'export'
    | 'add_validator'
    | 'add_subnet_validator'
    | 'add_delegator'
    | 'create_chain'
    | 'create_subnet'
    | 'pvm_import'
    | 'pvm_export'
    | 'atomic_import_tx' // for c chain imports?
    | 'atomic_export_tx' // for c chain exports?
    | 'advance_time'
    | 'reward_validator';
