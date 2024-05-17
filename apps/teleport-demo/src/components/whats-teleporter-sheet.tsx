import { Button, buttonVariants } from "@/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";
import { cn } from "@/utils/cn";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Heart, InfoIcon } from "lucide-react";

import { Link } from "@tanstack/react-router";
import { AMPLIFY_CHAIN } from "@/constants/chains";
import { LuxColorIcon } from "./avalanche-icon";
import { ScrollArea } from "@/ui/scroll-area";

export const WhatsTeleporterSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex justify-center mt-2">
          <Button size="sm" variant="link" className="rounded-full">
            <InfoIcon className="mr-2 w-4 h-4" /> What's Teleporter?
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>What's Teleporter?</SheetTitle>
          <SheetDescription>
            <a
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-primary-foreground",
              )}
              href="https://github.com/ava-labs/teleporter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="w-6 h-6" />
            </a>
            <a
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-primary-foreground",
              )}
              href="https://github.com/ava-labs/public-avalanche-sdks/tree/main/apps/teleporter-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="w-6 h-6" />
            </a>
            <a
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
              href="https://www.lux.network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuxColorIcon size={28} />
            </a>
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-full pb-20">
          <div className="text-muted-foreground">
            <p className="mt-4">
              Teleporter is a new cross-chain messaging protocol built on top of
              Lux Warp Messaging. It provides smart contract developers an easy,
              native way to call contracts on other EVM-based chains within Lux,
              opening doors to many interoperability opportunities.
            </p>
            <p className="mt-4">
              This demo was built to showcase how easy it is to transfer ERC-20
              tokens between Subnets. The three subnets in this demo, including
              Amplify, Bulletin, and Conduit, are all equiped with the latest
              and greatest Teleporter smart contracts.
            </p>
            <p className="mt-4">
              To get started, first head to{" "}
              <a
                className={cn(
                  buttonVariants({ variant: "link", size: "sm" }),
                  "text-md px-0 py-0 -my-2",
                )}
                href={AMPLIFY_CHAIN.faucetUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                the faucet
              </a>{" "}
              to get your hands on some Amplify / Bulletin / Conduit gas tokens.
              After that, you can{" "}
              <Link
                className={cn(
                  buttonVariants({ variant: "link", size: "sm" }),
                  "text-md px-0 py-0 -my-2",
                )}
                to="/mint"
              >
                mint
              </Link>{" "}
              the TLP (Teleporter Test Token) ERC-20 on the Amplify Subnet.
              Finally, you can head to the{" "}
              <Link
                className={cn(
                  buttonVariants({ variant: "link", size: "sm" }),
                  "text-md px-0 py-0 -my-2",
                )}
                to="/"
              >
                Teleporter Bridge tool
              </Link>{" "}
              to kick off your first teleport and watch your TLP tokens transfer
              between the three subnets. It's as easy as that!
            </p>
            <p className="mt-4">
              Teleporter and the Warp precompile are currently in
              experimental/testing phases. There are continued efforts to both
              harden them and gather feedback from testnet deployments. In the
              coming months, the plan is to begin rolling each out to both
              existing subnets and the C-chain, so stay tuned for even more
              updates to come!
            </p>
            <p className="mt-4">
              For now, you can check out the Teleporter repos at the links up
              top, and read more at{" "}
              <a
                className={cn(
                  buttonVariants({ variant: "link", size: "sm" }),
                  "text-md px-0 py-0 -my-2",
                )}
                href={
                  "https://medium.com/avalanchelux/avalanche-warp-messaging-awm-launches-with-the-first-native-subnet-to-subnet-message-on-avalanche-c0ceec32144a"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                our blog
              </a>
              .
            </p>
            <p className="mt-4 inline-flex">
              - <Heart className="mx-2" />
              The Lux Team
            </p>
          </div>
        </ScrollArea>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
