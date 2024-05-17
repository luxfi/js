import { cn } from "@/utils/cn";
import { Loader2, type LucideProps } from "lucide-react";

export const LoadingSpinner = ({ className, ...rest }: LucideProps) => {
  return <Loader2 {...rest} className={cn("animate-spin", className)} />;
};
