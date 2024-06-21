import { iHistoryImportExport } from '@/History/types';
import { parseMemo } from '@/History/history_helpers';
import { idToChainAlias } from '@/Network/helpers/aliasFromNetworkID';
import { xChain } from '@/Network/network';
import { bnToLuxX, strip0x } from '@/utils';
import { getOutputsOfChain, getOutputTotals, getOwnedOutputs } from '@/Explorer/indexer/utxoUtils';
import { findDestinationChain, findSourceChain, IndexerLuxTx } from '@/Explorer';
import { BN } from 'luxnet';

export function getImportSummary(tx: IndexerLuxTx, addresses: string[], evmAddr: string): iHistoryImportExport {
    let sourceChain = findSourceChain(tx);
    let chainAliasFrom = idToChainAlias(sourceChain);
    let chainAliasTo = idToChainAlias(tx.chainID);

    const normalizedEVMAddr = strip0x(evmAddr.toLowerCase());
    let outs = tx.outputs || [];
    let myOuts = getOwnedOutputs(outs, [...addresses, normalizedEVMAddr]);
    let amtOut = getOutputTotals(myOuts);

    let time = new Date(tx.timestamp);
    let fee = new BN(tx.txFee);

    let res: iHistoryImportExport = {
        id: tx.id,
        memo: parseMemo(tx.memo),
        source: chainAliasFrom,
        destination: chainAliasTo,
        amount: amtOut,
        amountDisplayValue: bnToLuxX(amtOut),
        timestamp: time,
        type: 'import',
        fee: fee,
        tx,
    };

    return res;
}

export function getExportSummary(tx: IndexerLuxTx, addresses: string[]): iHistoryImportExport {
    let sourceChain = findSourceChain(tx);
    let chainAliasFrom = idToChainAlias(sourceChain);

    let destinationChain = findDestinationChain(tx);
    let chainAliasTo = idToChainAlias(destinationChain);

    let outs = tx.outputs || [];
    let myOuts = getOwnedOutputs(outs, addresses);
    let chainOuts = getOutputsOfChain(myOuts, destinationChain);
    let amtOut = getOutputTotals(chainOuts);

    let time = new Date(tx.timestamp);
    let fee = xChain.getTxFee();

    let res: iHistoryImportExport = {
        id: tx.id,
        memo: parseMemo(tx.memo),
        source: chainAliasFrom,
        destination: chainAliasTo,
        amount: amtOut,
        amountDisplayValue: bnToLuxX(amtOut),
        timestamp: time,
        type: 'export',
        fee: fee,
        tx,
    };

    return res;
}
