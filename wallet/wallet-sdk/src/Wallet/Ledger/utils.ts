import Eth from '@ledgerhq/hw-app-eth';
import Transport from '@ledgerhq/hw-transport';
import { LedgerProviderType, LuxProvider, ZondaxProvider } from '@/Wallet/Ledger/provider';
import { ZONDAX_VERSION } from '@/Wallet/Ledger/provider/constants';
import { AddDelegatorTx, AddValidatorTx } from 'luxnet/dist/apis/platformvm';
import { bintools } from '@/common';
import { luxnet } from '@/Network';
import { BaseTx as XVMBaseTx } from 'luxnet/dist/apis/xvm';
import { BaseTx as PlatformBaseTx } from 'luxnet/dist/apis/platformvm';
import { EVMBaseTx } from 'luxnet/dist/apis/evm';
import { UnsignedTx as XVMUnsignedTx } from 'luxnet/dist/apis/xvm/tx';
import { UnsignedTx as PlatformUnsignedTx } from 'luxnet/dist/apis/platformvm/tx';
import { UnsignedTx as EVMUnsignedTx } from 'luxnet/dist/apis/evm/tx';

import bip32 from '@/utils/bip32';
import AppLux from '@luxfi/hw-app-lux';
import AppZondax from '@luxfi/hw-app-luxz';

/**
 *
 * @param xpub Extended public key for m/44'/60'/0'
 * @param index Index of the Eth address
 * @returns Extended public key for m/44'/60'/0'/0/n where `n` is the address index
 */
export function getEthAddressKeyFromAccountKey(xpub: string, index: number) {
    const node = bip32.fromBase58(xpub).derivePath(`0/${index}`);
    return node.toBase58();
}

export function getAppLux(transport: Transport, provider: LedgerProviderType): AppLux | AppZondax {
    return provider === 'lux' ? LuxProvider.getApp(transport) : ZondaxProvider.getApp(transport);
}

export function getAppEth(transport: Transport): Eth {
    //@ts-ignore
    return new Eth(transport, 'w0w');
}

export async function getLedgerProvider(transport: Transport) {
    const isLux = await isLuxApp(transport);
    return isLux ? LuxProvider : ZondaxProvider;
}

export async function isLuxApp(t: Transport): Promise<boolean> {
    const versionZ = await ZondaxProvider.getVersion(t);
    if (versionZ >= ZONDAX_VERSION) return false;
    return true;
}

/**
 * Returns an array of unique addresses that are found on stake outputs of a tx.
 * @param tx
 */
export function getStakeOutAddresses(tx: XVMBaseTx | PlatformBaseTx | EVMBaseTx) {
    if (tx instanceof AddValidatorTx || tx instanceof AddDelegatorTx) {
        const allAddrs = tx
            .getStakeOuts()
            .map((out) =>
                out
                    .getOutput()
                    .getAddresses()
                    .map((addr) => {
                        return bintools.addressToString(luxnet.getHRP(), 'P', addr);
                    })
            )
            .flat();
        // Remove duplicates
        return [...new Set(allAddrs)];
    }

    return [];
}

export function getOutputAddresses(tx: XVMBaseTx | PlatformBaseTx) {
    const chainID = tx instanceof XVMBaseTx ? 'X' : 'P';
    const outAddrs = tx
        .getOuts()
        .map((out) =>
            out
                .getOutput()
                .getAddresses()
                .map((addr) => {
                    return bintools.addressToString(luxnet.getHRP(), chainID, addr);
                })
        )
        .flat();
    return [...new Set(outAddrs)];
}

/**
 * Returns every output address for the given transaction.
 * @param unsignedTx
 */
export function getTxOutputAddresses<UnsignedTx extends XVMUnsignedTx | PlatformUnsignedTx | EVMUnsignedTx>(
    unsignedTx: UnsignedTx
) {
    if (unsignedTx instanceof EVMUnsignedTx) {
        return [];
    }

    const tx = unsignedTx.getTransaction();
    if (unsignedTx instanceof XVMUnsignedTx) {
        const outAddrs = getOutputAddresses(tx);
        return outAddrs;
    } else if (unsignedTx instanceof PlatformUnsignedTx) {
        const stakeAddrs = getStakeOutAddresses(tx);
        const outAddrs = getOutputAddresses(tx);

        return [...new Set([...stakeAddrs, ...outAddrs])];
    }

    return [];
}
