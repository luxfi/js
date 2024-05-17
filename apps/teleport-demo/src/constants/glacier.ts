import { Glacier } from "@luxdefi/glacier";
import { GLACIER_API_URL } from "./urls";

export const GLACIER_EVM_MAX_PAGE_SIZE = 100;

export const glacierService = new Glacier({
  BASE: GLACIER_API_URL,
});
