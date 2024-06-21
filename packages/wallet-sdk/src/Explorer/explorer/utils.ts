import { ExplorerErc20Tx, ExplorerNormalTx } from '@/Explorer';

/**
 * Filter duplicate Explorer transactions
 * @param txs
 */
export function filterDuplicateTransactions<Tx extends ExplorerErc20Tx | ExplorerNormalTx>(txs: Tx[]) {
    const hashes = txs.map((tx) => tx.hash);
    return txs.filter((tx, i) => {
        return hashes.indexOf(tx.hash) === i;
    });
}
