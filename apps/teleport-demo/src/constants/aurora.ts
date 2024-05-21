import { Aurora } from "@luxfi/aurora";
import { AURORA_API_URL } from "./urls";

export const AURORA_EVM_MAX_PAGE_SIZE = 100;

export const auroraService = new Aurora({
  BASE: AURORA_API_URL,
});
