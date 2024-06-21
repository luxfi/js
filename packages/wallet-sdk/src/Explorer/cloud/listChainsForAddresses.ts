/*
 * @Author: Jason
 * @Description:
 */
import { splitToParts } from './utils';
import Cloud from './Cloud';
import { Network } from '@luxfi/cloud';
import { isFujiNetworkId, isMainnetNetworkId } from '@/Network';
import { NetworkValues } from '@/utils';

export async function listChainsForAddresses(addrs: string[], netID: number) {
    const addressLimit = 64;
    const addrParts = splitToParts<string>(addrs, addressLimit);

    // Cannot use cloud for other networks
    if (!isMainnetNetworkId(netID) && !isFujiNetworkId(netID)) return [];
    const network = isMainnetNetworkId(netID) ? NetworkValues.MAINNET : NetworkValues.FUJI;

    const promises = addrParts.map((addresses) => {
        return Cloud.primaryNetwork.getChainIdsForAddresses({
            addresses: addresses.join(','),
            network,
        });
    });

    const results = await Promise.all(promises);
    const flat = results.map((res) => res.addresses).flat();

    return flat;
}
