import { GetBalancesParams } from './models';
import Cloud from './Cloud';
import { BN } from 'luxnet';
import { splitToParts } from './utils';
import { ListPChainBalancesResponse, ListXChainBalancesResponse, ListCChainAtomicBalancesResponse } from '@luxfi/cloud';

export async function getBalancesForAddresses(config: GetBalancesParams) {
    // Max number of addresses cloud accepts
    const addressLimit = 64;
    const addressBuckets = splitToParts<string>(config.addresses, addressLimit);

    const promises = addressBuckets.map((bucketAddrs) => {
        return Cloud.primaryNetworkBalances.getBalancesByAddresses({
            ...config,
            addresses: bucketAddrs.join(','),
        });
    });

    const res = await Promise.all(promises);

    const unlockedUnstaked = new BN(0);
    const lockedUnstaked = new BN(0);
    const unlockedStaked = new BN(0);
    const lockedStaked = new BN(0);

    function isPChainBalancesResponse(
        val: ListPChainBalancesResponse | ListXChainBalancesResponse | ListCChainAtomicBalancesResponse
    ): val is ListPChainBalancesResponse {
        return typeof val === 'object' && val !== null && !Array.isArray(val);
    }

    // ONLY SUPPORTS P CHAIN AT THE MOMENT
    res.forEach((val) => {
        if (isPChainBalancesResponse(val)) {
            unlockedUnstaked.iadd(new BN(val.balances.unlockedUnstaked ? val.balances.unlockedUnstaked[0].amount : 0));

            // lockedUnstaked.iadd(new BN(val.balances.lockedUnstaked ? val.balances.lockedUnstaked[0].amount : 0));

            // The return value is not defined lockedUnstaked
            lockedUnstaked.iadd(new BN(0));

            unlockedStaked.iadd(new BN(val.balances.unlockedStaked ? val.balances.unlockedStaked[0].amount : 0));

            lockedStaked.iadd(new BN(val.balances.lockedStaked ? val.balances.lockedStaked[0].amount : 0));
        }
    });

    return {
        unlockedUnstaked,
        unlockedStaked,
        lockedUnstaked,
        lockedStaked,
    };
}
