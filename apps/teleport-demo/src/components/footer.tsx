import * as React from "react";

import { cn } from "@/utils/cn";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/ui/navigation-menu";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { PoweredByLux } from "./powered-by-lux";
import { buttonVariants } from "@/ui/button";
import { LuxColorIcon } from "./lux-icon";

export function Footer() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-1 mt-8">
      <NavigationMenu className="px-2 w-full max-w-xl flex justify-end">
        <NavigationMenuList className="flex items-center justify-center">
          <NavigationMenuItem>
            <a
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
              href="https://github.com/luxfi/teleporter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="w-6 h-6" />
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
              href="https://github.com/luxfi/luxjs/blob/main/apps/teleporter-demo/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="w-6 h-6" />
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
              href="https://www.lux.network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuxColorIcon size={28} />
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="py-2 px-2 w-full max-w-xl flex max-sm:flex-col justify-between gap-4 border-t-2">
        <NavigationMenuList className="flex items-center justify-center">
          <NavigationMenuItem>
            <PoweredByLux />
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <p
              className="text-right max-sm:text-center max-sm:px-8 text-muted-foreground"
              style={{ fontSize: 11 }}
            >
              By using this application, you agree to the{" "}
              <a
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "h-1 text-primary-foreground px-0",
                )}
                href="https://core.app/terms/core/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "h-1 text-primary-foreground px-0",
                )}
                href="https://lux.network/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
              ©2023{" "}
              <a
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "h-1 text-primary-foreground px-0",
                )}
                href="https://lux.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lux Partners Limited
              </a>{" "}
              All rights reserved.{" "}
            </p>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
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
