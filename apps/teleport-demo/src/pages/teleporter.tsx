import { ActivityFeed } from "@/components/activity-feed";
import { TeleporterForm } from "@/components/teleporter-form";
import { WhatsTeleporterSheet } from "@/components/whats-teleporter-sheet";
import { Card, CardContent } from "@/ui/card";
import { memo } from "react";

export const TeleporterPage = memo(() => {
  return (
    <>
      <Card className="flex grow">
        <CardContent className="w-full max-sm:px-0">
          <CardContent>
            <TeleporterForm />
          </CardContent>
        </CardContent>
      </Card>
      <WhatsTeleporterSheet />
      <ActivityFeed />
    </>
  );
});
