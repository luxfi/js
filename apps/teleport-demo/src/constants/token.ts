import Big from "big.js";

export const MIN_AMOUNT_FOR_GAS = BigInt(10000000000000);
export const MIN_AMOUNT_FOR_GAS_BIG = new Big(MIN_AMOUNT_FOR_GAS.toString());

export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
