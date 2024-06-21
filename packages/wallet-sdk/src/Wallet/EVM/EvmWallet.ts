import { Buffer as BufferLux } from 'luxnet';
import { Transaction, FeeMarketEIP1559Transaction, TransactionFactory } from '@ethereumjs/tx';
import { Common } from '@ethereumjs/common';
import { luxnet } from '@/Network/network';
import {
    KeyChain as EVMKeyChain,
    KeyPair as EVMKeyPair,
    Tx as EVMTx,
    UnsignedTx as EVMUnsignedTx,
} from 'luxnet/dist/apis/evm';
import { EvmWalletReadonly } from '@/Wallet/EVM/EvmWalletReadonly';
import { bintools } from '@/common';
import { computePublicKey } from 'ethers/lib/utils';
import {
    MessageTypes,
    personalSign,
    signTypedData,
    SignTypedDataVersion,
    TypedDataV1,
    TypedMessage,
} from '@metamask/eth-sig-util';
import * as ecpair from 'ecpair';

import { ECPairFactory, ECPairAPI } from 'ecpair';
import tinysecp from 'tiny-secp256k1';
const ECPair: ECPairAPI = ECPairFactory(tinysecp);

export class EvmWallet extends EvmWalletReadonly {
    private privateKey: Buffer;
    private btcPair: ecpair.ECPairInterface;

    constructor(key: Buffer) {
        let pubKey = computePublicKey(key);

        super(pubKey);

        this.btcPair = ECPair.fromPrivateKey(key);
        this.privateKey = key;
    }

    static fromPrivateKey(key: string) {
        return new EvmWallet(Buffer.from(key, 'hex'));
    }

    private getPrivateKeyBech(): string {
        return `PrivateKey-` + bintools.cb58Encode(BufferLux.from(this.privateKey));
    }

    getKeyChain(): EVMKeyChain {
        let keychain = new EVMKeyChain(luxnet.getHRP(), 'C');
        keychain.importKey(this.getPrivateKeyBech());
        return keychain;
    }

    getKeyPair(): EVMKeyPair {
        let keychain = new EVMKeyChain(luxnet.getHRP(), 'C');
        return keychain.importKey(this.getPrivateKeyBech());
    }

    signEVM(tx: Transaction | FeeMarketEIP1559Transaction): Transaction | FeeMarketEIP1559Transaction {
        const customCommon = new Common({
            chain: {
                name: 'mainnet', // Replace with your actual chain's name
                chainId: 7777,
                networkId: 7777
            },
            hardfork: 'istanbul'
        });

        const txData = (tx as any).toJSON();

        const txFactory = TransactionFactory.fromTxData(txData, { common: customCommon });
        const signedTx = txFactory.sign(this.privateKey);
        return signedTx as Transaction | FeeMarketEIP1559Transaction;
    }

    signBTCHash(hash: Buffer) {
        return this.btcPair.sign(hash);
    }

    signC(tx: EVMUnsignedTx): EVMTx {
        return tx.sign(this.getKeyChain());
    }

    getPrivateKeyHex(): string {
        return this.privateKey.toString('hex');
    }

    personalSign(data: string) {
        return personalSign({ privateKey: this.privateKey, data });
    }

    signTypedData<V extends SignTypedDataVersion, T extends MessageTypes>(
        data: V extends 'V1' ? TypedDataV1 : TypedMessage<T>,
        version: V
    ) {
        return signTypedData({
            privateKey: this.privateKey,
            data,
            version,
        });
    }

    signTypedData_V1(data: TypedDataV1) {
        return this.signTypedData(data, SignTypedDataVersion.V1);
    }

    signTypedData_V3(data: TypedMessage<any>) {
        return this.signTypedData(data, SignTypedDataVersion.V3);
    }

    signTypedData_V4(data: TypedMessage<any>) {
        return this.signTypedData(data, SignTypedDataVersion.V4);
    }
}
