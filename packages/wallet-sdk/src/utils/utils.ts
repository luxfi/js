/*
 * @Author: Jason
 * @Description:
 */
import { Buffer as BufferLux } from 'luxnet';
import { validateAddress } from '@/helpers/address_helper';
import createHash from 'create-hash';
import { PayloadBase, PayloadTypes } from 'luxnet/dist/utils';
import { Network, SortOrder, PChainId } from '@luxfi/cloud';

/**
 * Checks if address is valid.
 *
 * @return
 * boolean if address is valid, error message if not valid.
 */
export function isValidAddress(address: string): boolean {
    return validateAddress(address) === true;
}

export function digestMessage(msgStr: string): Buffer {
    let mBuf = Buffer.from(msgStr, 'utf8');
    let msgSize = Buffer.alloc(4);
    msgSize.writeUInt32BE(mBuf.length, 0);
    let msgBuf = Buffer.from(`\x1ALux Signed Message:\n${msgSize}${msgStr}`, 'utf8');
    return createHash('sha256').update(msgBuf).digest();
}

let payloadtypes = PayloadTypes.getInstance();

export function parseNftPayload(rawPayload: string): PayloadBase {
    let payload = BufferLux.from(rawPayload, 'base64');
    payload = BufferLux.concat([new BufferLux(4).fill(payload.length), payload]);

    let typeId = payloadtypes.getTypeID(payload);
    let pl: BufferLux = payloadtypes.getContent(payload);
    let payloadbase: PayloadBase = payloadtypes.select(typeId, pl);

    return payloadbase;
}

/**
 * rename Network.
 */
export const NetworkValues = {
    MAINNET: 'mainnet' as Network,
    FUJI: 'fuji' as Network,
};
/**
 * rename SortOrder.
 */
export const SortOrderValues = {
    ASC: 'asc' as SortOrder,
    DESC: 'desc' as SortOrder,
};
/**
 * rename P_CHAINV.
 */
export const P_CHAINValues = {
    P_CHAIN: 'p-chain' as PChainId,
    LPO_YY: '11111111111111111111111111111111LpoYY' as PChainId,
};
