import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string;
  detail?: string;
  className?: string;
};

const StatCard = ({ label, value, detail, className }: StatCardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5",
        className,
      )}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground dark:text-stone-400">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-foreground dark:text-white">{value}</p>
      {detail ? (
        <p className="mt-2 text-sm leading-6 text-muted-foreground dark:text-stone-300">
          {detail}
        </p>
      ) : null}
    </div>
  );
};

export default StatCard;
