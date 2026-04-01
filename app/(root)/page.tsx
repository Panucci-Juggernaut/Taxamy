import IconCard from "@/components/landing/icon-card";
import ListItemCard from "@/components/landing/list-item-card";
import SectionHeading from "@/components/landing/section-heading";
import SourceLinkCard from "@/components/landing/source-link-card";
import StatCard from "@/components/landing/stat-card";
import { Button } from "@/components/ui/button";
import {
  heroAudience,
  heroStats,
  legalFramework,
  managementAreas,
  managementPillars,
  operationalFocus,
  sourceLinks,
  whyItMatters,
} from "@/lib/constants/landing";
import { ArrowRight, Clock3, Scale, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [primaryStat, ...secondaryStats] = heroStats;

  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top_left,_rgba(5,150,105,0.18),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),_transparent_26%),linear-gradient(180deg,_rgba(248,250,252,1),_rgba(236,253,245,0.96))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.35),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.16),_transparent_26%),linear-gradient(180deg,_rgba(6,24,20,1),_rgba(15,23,42,1))]" />
      <div className="absolute inset-x-0 top-[32rem] -z-10 h-[56rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(245,245,244,0.94)_16%,rgba(255,255,255,1)_100%)] dark:bg-[linear-gradient(180deg,rgba(12,17,14,0)_0%,rgba(10,15,13,0.96)_16%,rgba(9,13,12,1)_100%)]" />

      <section className="wrapper relative py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_24rem] lg:items-start">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-300/10 dark:text-emerald-100">
              <Sparkles className="size-4" />
              Built around Nigerian tax reforms now in force
            </div>

            <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl dark:text-white">
              Manage taxes, finances, and compliance with a clearer view of what
              comes next.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg dark:text-stone-300">
              Taxamy is a tax management system for Nigerian businesses and
              individuals. It helps users track tax responsibilities, manage
              finance activity, and stay informed on new tax laws in Nigeria so
              decisions are grounded in the current framework.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-emerald-500 px-7 text-primary-foreground hover:bg-emerald-400 dark:text-stone-950"
              >
                <Link href="/#features">
                  Explore features
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border/70 bg-background/80 px-7 text-foreground hover:bg-accent hover:text-accent-foreground dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
              >
                <Link href="/laws">Open laws library</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-foreground/80 dark:text-stone-200">
              {heroAudience.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-border/60 bg-background/70 px-4 py-2 backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border/60 bg-background/75 p-6 shadow-2xl shadow-emerald-950/5 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-black/20">
            <p className="text-sm uppercase tracking-[0.22em] text-emerald-700/85 dark:text-emerald-200/80">
              At a glance
            </p>
            <div className="mt-5 space-y-4">
              {primaryStat ? (
                <StatCard
                  label={primaryStat.label}
                  value={primaryStat.value}
                  detail={primaryStat.detail}
                  className="bg-black/20"
                />
              ) : null}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {secondaryStats.map((stat) => (
                  <StatCard
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    detail={stat.detail}
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="features"
        className="scroll-mt-28 bg-stone-50 py-20 text-foreground md:py-24 dark:bg-[#0d1715]"
      >
        <div className="wrapper">
          <SectionHeading
            eyebrow="What Taxamy Does"
            title="Built for day-to-day tax management, not just tax reading."
            description="The platform should help users understand the law and also act on it, from monitoring obligations to keeping financial activity aligned with compliance work."
            eyebrowClassName="text-emerald-700 dark:text-emerald-300"
            descriptionClassName="max-w-2xl text-muted-foreground dark:text-stone-300"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {managementPillars.map((pillar) => (
              <IconCard
                key={pillar.title}
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
              />
            ))}
          </div>

          <div className="mt-12 grid gap-8 rounded-[2rem] border border-emerald-900/10 bg-emerald-950 px-6 py-8 text-stone-100 shadow-xl lg:grid-cols-[1fr_1.1fr] lg:px-8 dark:border-white/10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/75">
                Operational focus
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
                One platform should connect legal change to the work teams
                actually do.
              </h3>
            </div>
            <div className="grid gap-4">
              {operationalFocus.map((item) => (
                <ListItemCard key={item} text={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="laws"
        className="scroll-mt-28 bg-stone-100 py-20 text-foreground md:py-24 dark:bg-[#101817]"
      >
        <div className="wrapper">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="New Nigerian Tax Laws"
              title="The 2025 reform package matters because it shapes how users manage tax work in 2026."
              description="Taxamy should not treat these reforms as background reading. Staying informed matters because registration, filing, administration, and compliance decisions all depend on the current framework."
              eyebrowClassName="text-amber-700 dark:text-amber-300"
              descriptionClassName="text-muted-foreground dark:text-stone-300"
            />
            <div className="rounded-3xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground shadow-sm">
              <div className="flex items-center gap-2 font-medium text-card-foreground">
                <Clock3 className="size-4 text-amber-700 dark:text-amber-300" />
                Effective date to remember
              </div>
              <p className="mt-2">January 1, 2026</p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {legalFramework.map((law) => (
              <article
                key={law.title}
                className="rounded-[1.75rem] border border-border bg-card p-7 shadow-sm"
              >
                <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-300">
                  <Scale className="size-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Current law
                  </p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-card-foreground">
                  {law.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {law.description}
                </p>
                <p className="mt-4 rounded-3xl bg-stone-100 px-4 py-3 text-sm leading-7 text-stone-700 dark:bg-white/5 dark:text-stone-200">
                  {law.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 text-foreground md:py-24">
        <div className="wrapper">
          <SectionHeading
            eyebrow="What Users Stay On Top Of"
            title="A tax management system should make operational visibility feel simpler."
            description="Taxamy should give people a cleaner view of the work behind compliance, planning, and financial decision-making."
            eyebrowClassName="text-emerald-700 dark:text-emerald-300"
            descriptionClassName="text-muted-foreground"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {managementAreas.map((area) => (
              <IconCard
                key={area.title}
                title={area.title}
                description={area.description}
                icon={area.icon}
                className="bg-stone-50 dark:bg-card"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-20 text-foreground md:py-24 dark:bg-[#09110f] dark:text-stone-100">
        <div className="wrapper grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why Staying Informed Matters"
              title="New tax laws are only useful when people can see how they affect cash, compliance, and planning."
              description="Taxamy should help users respond to legal change with confidence. It is not a substitute for tailored legal or accounting advice, but it should make current tax information much easier to understand and operationalize."
              eyebrowClassName="text-emerald-700 dark:text-emerald-300"
              titleClassName="text-foreground dark:text-white"
              descriptionClassName="max-w-2xl text-muted-foreground dark:text-stone-300"
            />

            <div className="mt-10 grid gap-4">
              {whyItMatters.map((reason) => (
                <ListItemCard
                  key={reason.title}
                  text={`${reason.title}. ${reason.description}`}
                  icon={reason.icon}
                  iconClassName="text-amber-300"
                />
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border/70 bg-background/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              Official sources
            </p>
            <div className="mt-5 space-y-3">
              {sourceLinks.map((source) => (
                <SourceLinkCard
                  key={source.href}
                  href={source.href}
                  label={source.label}
                />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
