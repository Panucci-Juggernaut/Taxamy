import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type IconCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const IconCard = ({
  title,
  description,
  icon: Icon,
  className,
  iconClassName,
  titleClassName,
  descriptionClassName,
}: IconCardProps) => {
  return (
    <article
      className={cn(
        "rounded-[1.75rem] border border-border bg-card p-7 shadow-sm",
        className,
      )}
    >
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
          iconClassName,
        )}
      >
        <Icon className="size-6" />
      </div>
      <h3 className={cn("mt-5 text-2xl font-semibold text-card-foreground", titleClassName)}>
        {title}
      </h3>
      <p
        className={cn(
          "mt-4 text-base leading-7 text-muted-foreground",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </article>
  );
};

export default IconCard;
