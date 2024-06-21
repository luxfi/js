import { KeyPair as XVMKeyPair } from 'luxnet/dist/apis/xvm';

import { BN } from 'luxnet';

import { MnemonicWallet } from '@/Wallet/MnemonicWallet';
import { SingletonWallet } from '@/Wallet/SingletonWallet';
import { LedgerWallet } from '@/Wallet/Ledger';

import { iAssetDescriptionClean } from '@/Asset/types';

export interface IIndexKeyCache {
    [index: number]: XVMKeyPair;
}

export type ChainAlias = 'X' | 'P';
export type ExportChainsX = 'P' | 'C';
export type ExportChainsP = 'X' | 'C';
export type ExportChainsC = 'X' | 'P';

export type HdChainType = 'X' | 'P';

export type WalletNameType = 'mnemonic' | 'ledger' | 'singleton' | 'xpub';
export type WalletType = MnemonicWallet | SingletonWallet | LedgerWallet;

export interface WalletBalanceX {
    [assetId: string]: AssetBalanceX;
}

export interface WalletCollectiblesX {
    [familyId: string]: WalletCollectiblesXFamily;
}

export interface WalletCollectiblesXFamily {
    groups: {
        [groupID: number]: WalletCollectiblesXGroup;
    };
}

export interface WalletCollectiblesXGroup {
    payload: string;
    quantity: number;
    id: number;
}

export interface iLuxBalance {
    X: AssetBalanceRawX;
    P: AssetBalanceP;
    C: BN;
}

export interface AssetBalanceRawX {
    /**
     * UTXOs with locktime in the future
     */
    locked: BN;
    unlocked: BN;

    /**
     * UTXOs with threshold > 1
     */
    multisig: BN;
}

export interface AssetBalanceX extends AssetBalanceRawX {
    meta: iAssetDescriptionClean;
}

export interface AssetBalanceP {
    locked: BN;
    unlocked: BN;
    multisig: BN;
    lockedStakeable: BN;
}

export interface WalletBalanceERC20 {
    [address: string]: ERC20Balance;
}

export interface ERC20Balance {
    balance: BN;
    balanceParsed: string;
    name: string;
    symbol: string;
    denomination: number;
    address: string;
}

export interface ILedgerAppConfig {
    version: string;
    commit: string;
    name: 'Lux';
}

export type WalletEventType = 'addressChanged' | 'balanceChangedX' | 'balanceChangedP' | 'balanceChangedC' | 'hd_ready';
export type WalletEventArgsType = iWalletAddressChanged | WalletBalanceX | AssetBalanceP | BN | iHDWalletIndex;

export interface iWalletAddressChanged {
    X: string;
    P: string;
    changeX: string;
}

export interface iHDWalletIndex {
    external: number;
    internal: number;
}

export type BTCNetworkType = 'bitcoin' | 'testnet' | 'regtest';

/**
 * Used by wallets which can access their private keys
 */
export interface UnsafeWallet {
    getEvmPrivateKeyHex(): string;
}
