import { iHistoryEVMTx } from '@/History/types';
import { bnToLuxC } from '@/utils';
import { BN } from 'luxnet';
import { IndexerEvmTx } from '@/Explorer';

export function getTransactionSummaryEVM(tx: IndexerEvmTx, walletAddress: string): iHistoryEVMTx {
    let isSender = tx.fromAddr.toUpperCase() === walletAddress.toUpperCase();

    let amt = new BN(tx.value);
    let amtClean = bnToLuxC(amt);
    let date = new Date(tx.createdAt);

    let gasLimit = new BN(tx.gasLimit);
    let gasPrice = new BN(tx.gasPrice);
    let feeBN = gasLimit.mul(gasPrice); // in gwei

    return {
        id: tx.hash,
        fee: feeBN,
        memo: '',
        block: tx.block,
        isSender,
        type: 'transaction_evm',
        amount: amt,
        amountDisplayValue: amtClean,
        gasLimit: tx.gasLimit,
        gasPrice: tx.gasPrice,
        from: tx.fromAddr,
        to: tx.toAddr,
        timestamp: date,
        input: tx.input,
        tx,
    };
}
