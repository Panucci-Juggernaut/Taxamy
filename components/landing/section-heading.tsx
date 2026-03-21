import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) => {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p
        className={cn(
          "text-sm font-semibold uppercase tracking-[0.22em]",
          eyebrowClassName,
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight text-foreground sm:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-lg leading-8 text-muted-foreground", descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
