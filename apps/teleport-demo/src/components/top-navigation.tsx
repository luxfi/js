import * as React from "react";

import { cn } from "@/utils/cn";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/ui/navigation-menu";
import { ConnectWalletButton } from "./connect-wallet-button";
import LuxLogoWhite from "@/assets/Lux_Horizontal_White.svg";
import { useBreakpoint } from "@/ui/hooks/use-breakpoint";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { NewspaperIcon } from "lucide-react";

export function TopNavigation() {
  const { isSmUp, isSmDown } = useBreakpoint("sm");

  return (
    <div className="flex flex-col w-full items-center justify-center gap-1">
      <NavigationMenu className="py-2 px-2 w-full max-w-xl flex justify-between">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">
              <img src={LuxLogoWhite} alt="Lux" height={32} width={158} />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Read More</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild className="bg-primary">
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="https://github.com/ava-labs/teleporter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex align-center mb-2 mt-4">
                        <GitHubLogoIcon className="h-6 w-6" />
                        <div className="ml-2 text-lg font-medium">
                          Teleporter
                        </div>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A new cross-chain messaging protocol built on top of Lux
                        Warp Messaging.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="https://medium.com/avalanchelux/avalanche-warp-messaging-awm-launches-with-the-first-native-subnet-to-subnet-message-on-avalanche-c0ceec32144a"
                  title="Warp Messaging"
                  icon={<NewspaperIcon className="w-5 h-5" />}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The first native Subnet-to-Subnet messaging platform.
                </ListItem>
                <ListItem
                  href="https://medium.com/avalanchelux/avalanche-warp-messaging-awm-launches-with-the-first-native-subnet-to-subnet-message-on-avalanche-c0ceec32144a"
                  title="Teleporter DApp Demo"
                  icon={<GitHubLogoIcon className="w-5 h-5" />}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See how to integrate Teleporter into your dApp.
                </ListItem>
                <ListItem
                  href="https://lux.network/"
                  title="Lux"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Build anything you want, any way you want on the lightning
                  fast, scalable blockchain that won’t let you down.
                </ListItem>
                <ListItem
                  href="https://docs.lux.network/learn/avalanche/subnets-overview"
                  title="Subnets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about how Subnets make scaling with blockchain
                  easy.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {isSmUp && (
            <NavigationMenuItem>
              <NavigationMenuLink>
                <ConnectWalletButton />
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
      {isSmDown && (
        <NavigationMenu className="px-2 pb-2 w-full max-w-xl flex justify-between">
          <ConnectWalletButton className="w-full" />
        </NavigationMenu>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium leading-none">{title}</div>
            {icon}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
