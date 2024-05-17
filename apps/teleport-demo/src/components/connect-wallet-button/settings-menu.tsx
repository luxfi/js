import { Button } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { toast } from "@/ui/hooks/use-toast";
import { truncateAddress } from "@/utils/truncate-address";
import { ExitIcon } from "@radix-ui/react-icons";
import { Circle, Settings } from "lucide-react";
import { useAccount, useDisconnect } from "wagmi";

export const SettingsMenu = () => {
  const { address, isConnected } = useAccount();
  if (!address || !isConnected) {
    throw new Error("Not connected.");
  }
  const { disconnectAsync } = useDisconnect();
  const handleDisconnectButtonClick = async () => {
    await disconnectAsync();

    toast({
      title: "Disconnected Successfully",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full whitespace-nowrap w-full"
        >
          <Circle size={12} className="mr-2 text-green-500 fill-green-500" />
          {truncateAddress(address)}
          <Settings size={16} className="ml-2 text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleDisconnectButtonClick}>
            Disconnect
            <DropdownMenuShortcut>
              <ExitIcon />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
