import { useResetAllowance } from "@/hooks/use-reset-allowance";
import type { EvmChain } from "@/types/chain";
import { Button } from "@/ui/button";

export const DebugResetAllowanceButton = ({ chain }: { chain: EvmChain }) => {
  const { resetAllownce } = useResetAllowance({
    chain,
    tokenAddress: chain?.utilityContracts.demoErc20.address,
    addressToReset: chain?.utilityContracts.bridge.address,
  });

  return (
    <Button className="w-full" onClick={resetAllownce}>
      Reset Allowance
    </Button>
  );
};
