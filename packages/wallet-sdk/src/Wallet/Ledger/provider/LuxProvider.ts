import Transport from '@ledgerhq/hw-transport';
import AppLux from '@luxfi/hw-app-lux';
import { LedgerProvider } from '@/Wallet/Ledger/provider/models';
import bip32Path, { Bip32Path } from 'bip32-path';

export const LuxProvider: LedgerProvider = {
    type: 'lux',

    getApp(t: Transport): AppLux {
        return new AppLux(t);
    },

    async getVersion(t): Promise<string> {
        const app = this.getApp(t) as AppLux;
        return (await app.getAppConfiguration()).version;
    },

    async getXPUB(t: Transport, path: string) {
        const app = this.getApp(t) as AppLux;
        const keys = await app.getWalletExtendedPublicKey(path);
        return {
            pubKey: keys.public_key,
            chainCode: keys.chain_code,
        };
    },

    async signHash(t, hash, account, signers) {
        const app = this.getApp(t) as AppLux;
        const signed = await app.signHash(account, signers, hash);
        return {
            signatures: signed,
            hash: hash,
        };
    },

    async getAddress(t, path, config = { show: true, hrp: 'lux' }) {
        const app = this.getApp(t) as AppLux;

        const res = await app.getWalletAddress(path.toString(), config.hrp);
        return {
            publicKey: res,
        };
    },

    async signTx(t: Transport, tx, accountPath, signers, change) {
        const app = this.getApp(t) as AppLux;

        let changePath = undefined;
        if (change && change.length > 0) {
            const newPath = `${accountPath.toString()}/${change[0].toString(true)}`;
            changePath = bip32Path.fromString(newPath);
        }

        const signed = await app.signTransaction(accountPath, signers, tx, changePath);

        return {
            signatures: signed.signatures,
        };
    },

    /**
     * This method is not supported on the Lux provider
     */
    canParseTx(): boolean {
        return false;
    },
};
