export type Field = {
  [TDisplayAs in keyof DisplayTypeOptions]: {
    displayAs: TDisplayAs;
    options: DisplayTypeOptions[TDisplayAs];
  };
}[keyof DisplayTypeOptions];

/**
 * Options available on each field type.
 */
type DisplayTypeOptions = {
  [DataDisplayAs.AVATAR_IMAGE]: {
    /**
     * The url of the avatar image.
     */
    src: string;
    /**
     * The size of the avatar image in pixels.
     */
    size: number;
  };

  [DataDisplayAs.CHIP]: {
    value: number | string | boolean;
  };

  [DataDisplayAs.DATETIME]: TextOptions<string>;

  [DataDisplayAs.DATETIME_RELATIVE]: TextOptions<string>;

  [DataDisplayAs.HASH]: TextOptions<string>;

  [DataDisplayAs.JSON]: {
    /**
     * Some raw JSON string.
     */
    value: string;
  };

  [DataDisplayAs.TEXT]: TextOptions<string>;
};

export type TextOptions<TValue> = {
  value: TValue;
  color?: Color;
  linkOptions?: {
    toValue: string;
    toDestination: UriDestination;
  };
};

export enum Color {
  TEXT_PRIMARY = "text.primary",
  TEXT_SECONDARY = "text.secondary",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

/**
 * How the displayValue should be displayed in the UI.
 */
export enum DataDisplayAs {
  /**
   * Displays the value as an image in a circular avatar.
   */
  AVATAR_IMAGE = "AVATAR_IMAGE",
  /**
   * Displays the value as a string in a chip.
   */
  CHIP = "CHIP",
  /**
   * Displays the value as a datetime string.
   */
  DATETIME = "DATETIME",
  /**
   * Displays the value as a unix timestamp.
   */
  DATETIME_RELATIVE = "DATETIME_RELATIVE", // Displays a unix timestamp as a relative time from now.
  /**
   * Displays the value as a hash (we will dynamically truncate it to fit the screen size).
   */
  HASH = "HASH",
  /**
   * Displays the string value as JSON.
   */
  JSON = "JSON",
  /**
   * Displays the string value as plain text.
   */
  TEXT = "TEXT",
}

/**
 * Various locations which a uriValue will route to.
 */
export enum UriDestination {
  /**
   * Link to the Address page ('/address/:address')
   * Value must be an address.
   */
  ADDRESS_PAGE = "/address/:address",

  /**
   * Link to the Block Details page ('/block/:blockId')
   * Value must be a block ID.
   */
  BLOCK_PAGE = "/block/:blockId",

  /**
   * Link to the Transaction page ('/tx/:txId')
   * Value must be a transaction ID.
   */
  TRANSACTION_PAGE = "/tx/:txId",

  /**
   * Link to the Token page ('token/:contractAddress')
   * Value must be a token address.
   */
  TOKEN_PAGE = "token/:contractAddress",

  /**
   * Link externally in a new tab.
   * Value must be a full URL.
   */
  EXTERNAL_LINK = "EXTERNAL_LINK", // This is a special case that will open the link at an external domain.
}
