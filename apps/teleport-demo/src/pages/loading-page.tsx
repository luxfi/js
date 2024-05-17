import { Progress } from "@/ui/progress";
import { memo } from "react";

export const LoadingPage = memo(() => {
  console.log("test");

  return <Progress value={100} />;
});
