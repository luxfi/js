import { NetworkConfig } from '@/Network/types';

import { Lux } from 'luxnet';
import { HttpClient } from './http_client';

export function wsUrlFromConfigX(config: NetworkConfig): string {
    let protocol = config.apiProtocol === 'http' ? 'ws' : 'wss';
    return `${protocol}://${config.apiIp}:${config.apiPort}/ext/bc/X/events`;
}

export function wsUrlFromConfigEVM(config: NetworkConfig): string {
    let protocol = config.apiProtocol === 'http' ? 'ws' : 'wss';
    return `${protocol}://${config.apiIp}:${config.apiPort}/ext/bc/C/ws`;
}

/**
 * Given the base url of an Lux API, requests the Network ID
 * @param url The base url for the Lux API
 */
export async function getNetworkIdFromURL(url: string): Promise<number> {
    // TODO: Not be the best to assume /ext/info but Luxjs complicates things
    let res = await fetch(url + '/ext/info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'info.getNetworkID',
        }),
    });

    const data = await res.json();

    return parseInt(data.result.networkID);
}

export function createLuxProvider(config: NetworkConfig) {
    return new Lux(config.apiIp, config.apiPort, config.apiProtocol, config.networkID);
}

/**
 * Given a network configuration returns an HttpClient instance connected to the explorer
 */
export function createExplorerApi(networkConfig: NetworkConfig) {
    if (!networkConfig.explorerURL) {
        throw new Error('Network configuration does not specify an explorer API.');
    }

    return new HttpClient(networkConfig.explorerURL);
}

/**
 * Checks if the given network accepts credentials.
 * This must be true to use cookies.
 */
export async function canUseCredentials(config: NetworkConfig): Promise<boolean> {
    let provider = createLuxProvider(config);
    provider.setRequestConfig('withCredentials', true);

    let infoApi = provider.Info();

    // Make a dummy request with credentials
    try {
        await infoApi.getNetworkID();
        return true;
        // eslint-disable-next-line
    } catch (e) {}

    provider.setRequestConfig('withCredentials', false);

    try {
        await infoApi.getNetworkID();
    } catch (e) {
        throw new Error('Unable to connect.');
    }

    return false;
}
