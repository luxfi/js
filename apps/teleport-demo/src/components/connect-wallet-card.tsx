import { ConnectWalletButton } from "./connect-wallet-button";

export const ConnectWalletCard = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-y-2">
        <p className="text-center text-gray-400 text-sm">Must be connected.</p>
        <ConnectWalletButton variant="default" className="w-full" />
      </div>
    </>
  );
};
