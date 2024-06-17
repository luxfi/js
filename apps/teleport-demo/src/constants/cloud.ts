import { Cloud } from "@luxfi/cloud";
import { CLOUD_API_URL } from "./urls";

export const CLOUD_EVM_MAX_PAGE_SIZE = 100;

export const cloudService = new Cloud({
  BASE: CLOUD_API_URL,
});
