import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-zinc-900/10 dark:bg-zinc-50/10",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
