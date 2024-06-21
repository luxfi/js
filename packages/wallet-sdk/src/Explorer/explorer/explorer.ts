import { EXPLORER_MAINNET, EXPLORER_TESTNET } from '@/Explorer/explorer/constants';
import { isFujiNetwork, isMainnetNetwork, NetworkConfig } from '@/Network';
import { ExplorerErc20Tx, ExplorerNormalTx, ExplorerResponse } from '@/Explorer/explorer/types';
import { filterDuplicateTransactions } from './utils';

async function fetchExplorerAPI<T>(query: string, isMainnet = true): Promise<T> {
    const baseUrl = isMainnet ? EXPLORER_MAINNET : EXPLORER_TESTNET;
    const response = await fetch(`${baseUrl}/${query}`);
    return response.json();
}

export async function getErc20History(
    address: string,
    networkConfig: NetworkConfig,
    page = 0,
    offset = 0,
    contractAddress?: string
) {
    const contractQuery = contractAddress ? `&contractaddress=${contractAddress}` : '';
    const sort = 'desc';
    const query = `api?module=account&action=tokentx&address=${address}&sort=${sort}&page=${page}&offset=${offset}${contractQuery}`;

    let resp;
    if (isMainnetNetwork(networkConfig)) {
        resp = await fetchExplorerAPI<ExplorerResponse<ExplorerErc20Tx>>(query);
    } else if (isFujiNetwork(networkConfig)) {
        resp = await fetchExplorerAPI<ExplorerResponse<ExplorerErc20Tx>>(query, false);
    } else {
        throw new Error('Explorer is only available for Lux Mainnet and Testnet');
    }

    return filterDuplicateTransactions<ExplorerErc20Tx>(resp.result);
}

export async function getNormalHistory(address: string, networkConfig: NetworkConfig, page = 0, offset = 0) {
    const sort = 'desc';
    const query = `api?module=account&action=txlist&address=${address}&sort=${sort}&page=${page}&offset=${offset}`;

    let resp;
    if (isMainnetNetwork(networkConfig)) {
        resp = await fetchExplorerAPI<ExplorerResponse<ExplorerNormalTx>>(query);
    } else if (isFujiNetwork(networkConfig)) {
        resp = await fetchExplorerAPI<ExplorerResponse<ExplorerNormalTx>>(query, false);
    } else {
        throw new Error('Snow trace is only available for Lux Mainnet and Testnet');
    }
    return filterDuplicateTransactions<ExplorerNormalTx>(resp.result);
}

/**
 * https://docs.etherscan.io/api-endpoints/contracts#get-contract-abi-for-verified-contract-source-codes
 *
 * @param address
 * @param networkConfig
 * @returns string array, the first index is the ABI
 */
export async function getABIForContract(
    address: string,
    networkConfig: NetworkConfig
): Promise<ExplorerResponse<string>> {
    const isMainnet = isMainnetNetwork(networkConfig);
    const isFuji = isFujiNetwork(networkConfig);

    if (!isMainnet && !isFuji) {
        throw new Error('Snow trace is only available for Lux Mainnet and Testnet');
    }

    const params = new window.URLSearchParams({ module: 'contract', action: 'getabi', address });
    return await fetchExplorerAPI<ExplorerResponse<string>>(`api?${params.toString()}`, isMainnet);
}
