import type { HexString } from "../../../types/type-utils";

export enum MoveTxStatus {
  SUCCESS = "Executed successfully",
  OUT_OF_GAS = "Out of gas",
}

export type MoveTxDetails = {
  data: {
    type: string;
    version: string;
    hash: HexString;
    state_change_hash: HexString;
    event_root_hash: HexString;
    state_checkpoint_hash: HexString | null;
    gas_used: string;
    success: boolean;
    vm_status: MoveTxStatus;
    accumulator_root_hash: HexString;
    changes: unknown[];
    sender: HexString;
    sequence_number: string;
    max_gas_amount: string;
    gas_unit_price: string;
    expiration_timestamp_secs: string;
    payload: {
      type: string;
      function: string;
      type_arguments: unknown[];
      arguments: string[];
    };
    signature: {
      type: string;
      public_key: HexString;
      signature: HexString;
    };
    events: [
      {
        guid: {
          creation_number: string;
          account_address: HexString;
        };
        sequence_number: string;
        type: string;
        data: {
          amount: string;
        };
      },
    ];
    timestamp: string;
  };
  header: {
    chain_id: number;
    ledger_version: number;
    ledger_oldest_version: number;
    ledger_timestamp_usec: number;
    epoch: number;
    block_height: number;
    oldest_block_height: number;
    cursor: null;
  };
};
