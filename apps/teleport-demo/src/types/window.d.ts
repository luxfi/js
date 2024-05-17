/* eslint-disable @typescript-eslint/no-explicit-any */
type RequestArguments = {
  /** The RPC method to request. */
  method: string;
  /** The params of the RPC method, if any. */
  params?: any;
};

interface Window {
  coinbaseWalletRelay?: {
    resetAndReload: () => void;
  };
  avalanche?: {
    chainId?: string;
    on?: (...args: any[]) => void;
    providers?: any;
    removeListener?: (...args: any[]) => void;
    request: (args: RequestArguments) => Promise<any>;
    send?: (...args: any[]) => Promise<any>;
    _state?: any;
    isDapper?: any; // what is this?
    cachedResults?: any;
    netVersion?: any;
    networkVersion?: string;
    _chainId?: any;
    isConnected?: any;
  };
  ethereum:
    | {
        chainId?: string;
        isLux?: boolean;
        isCoinbaseWallet?: boolean;
        isMetaMask?: boolean;
        on?: (...args: any[]) => void;
        providers?: any;
        removeListener?: (...args: any[]) => void;
        request: (args: RequestArguments) => Promise<any>;
        send?: (...args: any[]) => Promise<any>;
        networkVersion?: string;
      }
    /**
     * this is a hack to make the code compile 🤷‍♂️
     * Otherwise we get this TS error:
     * error TS2717: Subsequent property declarations must have the same type.  Property 'ethereum' must be of type '{ chainId?: string | undefined; isLux?: boolean | undefined; isCoinbaseWallet?: boolean | undefined; isMetaMask?: boolean | undefined; on?: ((...args: any[]) => void) | undefined; providers?: any; removeListener?: ((...args: any[]) => void) | undefined; request: (args: RequestArguments) => Promise<...>; send?:...', but here has type '{ chainId?: string | undefined; isLux?: boolean | undefined; isCoinbaseWallet?: boolean | undefined; isMetaMask?: boolean | undefined; on?: ((...args: any[]) => void) | undefined; ... 4 more ...; networkVersion?: string | undefined; } | undefined'.
     **/
    | undefined;
}
