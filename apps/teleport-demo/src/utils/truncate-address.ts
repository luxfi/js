const MAX_LAST_CHUNK_LENGTH = 4;

export const truncateAddress = (address: string, chars = 9): string => {
  if (chars >= address.length) {
    return address;
  }

  if (chars < MAX_LAST_CHUNK_LENGTH * 2) {
    const firstChunk = address.substring(0, Math.round(chars / 2));
    const lastChunk = address.substr(-Math.floor(chars / 2));

    return `${firstChunk}…${lastChunk}`;
  }

  const firstChunk = address.substring(0, chars - MAX_LAST_CHUNK_LENGTH);
  const lastChunk = address.substr(
    address.length - MAX_LAST_CHUNK_LENGTH,
    chars,
  );

  return `${firstChunk}…${lastChunk}`;
};
