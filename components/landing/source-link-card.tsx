import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SourceLinkCardProps = {
  href: string;
  label: string;
};

const SourceLinkCard = ({ href, label }: SourceLinkCardProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between gap-4 rounded-3xl border border-border/60 bg-background/70 px-4 py-3 text-sm text-foreground/80 transition hover:border-emerald-600/40 hover:text-foreground dark:border-white/10 dark:bg-black/10 dark:text-stone-200 dark:hover:border-emerald-300/40 dark:hover:text-white"
    >
      <span>{label}</span>
      <ArrowRight className="size-4 shrink-0" />
    </Link>
  );
};

export default SourceLinkCard;
