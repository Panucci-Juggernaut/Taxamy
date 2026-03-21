import type { LucideIcon } from "lucide-react";

import { BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";

type ListItemCardProps = {
  text: string;
  icon?: LucideIcon;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

const ListItemCard = ({
  text,
  icon: Icon = BadgeCheck,
  className,
  iconClassName,
  textClassName,
}: ListItemCardProps) => {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-3xl border border-border/60 bg-background/70 p-4 dark:border-white/10 dark:bg-white/5",
        className,
      )}
    >
      <Icon
        className={cn(
          "mt-1 size-5 shrink-0 text-emerald-700 dark:text-emerald-300",
          iconClassName,
        )}
      />
      <p className={cn("text-sm leading-7 text-foreground/80 dark:text-stone-200", textClassName)}>
        {text}
      </p>
    </div>
  );
};

export default ListItemCard;
