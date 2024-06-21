import { XVMWebSocketProvider } from '@/Network/providers/XVMWebSocketProvider';
import { EVMWebSocketProvider } from '@/Network/providers/EVMWebSocketProvider';
import { WalletType } from '@/Wallet/types';
import { NetworkConfig } from '@/Network/types';
import { wsUrlFromConfigEVM, wsUrlFromConfigX } from '@/helpers/network_helper';
import { activeNetwork } from '@/Network/network';

export class WebsocketProvider {
    xvmProvider: XVMWebSocketProvider;
    evmProvider: EVMWebSocketProvider;

    constructor(xvmEndpoint: string, evmEndpoint: string) {
        this.xvmProvider = new XVMWebSocketProvider(xvmEndpoint);
        this.evmProvider = new EVMWebSocketProvider(evmEndpoint);
    }

    static fromActiveNetwork(): WebsocketProvider {
        return WebsocketProvider.fromNetworkConfig(activeNetwork);
    }

    static fromNetworkConfig(config: NetworkConfig): WebsocketProvider {
        let evm = wsUrlFromConfigEVM(config);
        let xvm = wsUrlFromConfigX(config);
        return new WebsocketProvider(xvm, evm);
    }

    public setEndpoints(xvmEndpoint: string, evmEndpoint: string): void {
        this.xvmProvider.setEndpoint(xvmEndpoint);
        this.evmProvider.setEndpoint(evmEndpoint);
    }

    public setNetwork(config: NetworkConfig): void {
        let evm = wsUrlFromConfigEVM(config);
        let xvm = wsUrlFromConfigX(config);
        this.setEndpoints(xvm, evm);
    }

    public trackWallet(wallet: WalletType): void {
        this.xvmProvider.trackWallet(wallet);
        this.evmProvider.trackWallet(wallet);
    }

    public removeWallet(wallet: WalletType): void {
        this.xvmProvider.removeWallet(wallet);
        this.evmProvider.removeWallet(wallet);
    }
}
