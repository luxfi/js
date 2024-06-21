/*
 * @Author: Jason
 * @Description:
 */
/*
 * @Author: Jason
 * @Description:
 */
import { TransactionType, CChainTransaction, XChainTransaction } from './models';

import { SortOrderValues } from '@/utils';

import { SortOrder, PChainTransaction } from '@luxfi/cloud';

export function sortCloudTxs(txs: TransactionType[], sortOrder: SortOrder = SortOrderValues.DESC) {
    return txs.sort((a, b) => {
        const timeA =
            (a as XChainTransaction | CChainTransaction).timestamp || (a as PChainTransaction).blockTimestamp || 0;

        const timeB =
            (b as XChainTransaction | CChainTransaction).timestamp || (b as PChainTransaction).blockTimestamp || 0;

        const orderVal = timeB - timeA;

        const multiplier = sortOrder === SortOrderValues.DESC ? 1 : -1;
        return orderVal * multiplier;
    });
}
