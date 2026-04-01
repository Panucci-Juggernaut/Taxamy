import SectionHeading from "@/components/landing/section-heading";
import StatCard from "@/components/landing/stat-card";
import { Button } from "@/components/ui/button";
import {
  authorityLayers,
  currentLawLibrary,
  evidenceGapNotes,
  governmentLawSources,
  lawHeroStats,
  lawLibraryNotes,
  lawTimeline,
  legislativeHistorySources,
  professionalCommentarySources,
  repealedLawGroups,
  scholarReadingPaths,
} from "@/lib/constants/laws";
import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BookOpenText,
  ExternalLink,
  FileText,
  Gavel,
  Landmark,
  LibraryBig,
  NotebookPen,
  Scale,
  Search,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Taxamy | Nigerian Tax Laws Library",
  description:
    "Browse Nigeria's current federal tax laws with clearer source guidance, government-hosted texts, legislative history, and expert commentary.",
};

export default function LawsPage() {
  const [primaryStat, ...secondaryStats] = lawHeroStats;

  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(5,150,105,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),_transparent_28%),linear-gradient(180deg,_rgba(248,250,252,1),_rgba(240,253,250,0.96))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.26),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.16),_transparent_28%),linear-gradient(180deg,_rgba(7,20,18,1),_rgba(10,14,19,1))]" />
      <div className="absolute inset-x-0 top-[26rem] -z-10 h-[64rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(245,245,244,0.92)_14%,rgba(255,255,255,1)_100%)] dark:bg-[linear-gradient(180deg,rgba(12,17,14,0)_0%,rgba(10,15,13,0.96)_14%,rgba(9,13,12,1)_100%)]" />

      <section className="wrapper relative py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_24rem] lg:items-start">
          <div className="max-w-4xl">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-700/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-300/10 dark:text-emerald-100">
              <ShieldCheck className="size-4" />
              Updated for the federal tax framework in force on April 1, 2026
            </div>

            <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl dark:text-white">
              A clearer way to read Nigeria&apos;s current tax laws and the
              sources behind them.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg dark:text-stone-300">
              This page is built to help users move through the current federal
              tax framework with less guesswork. It starts with the law text,
              shows the government and parliamentary records behind it, and then
              separates expert commentary from research reading.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-emerald-500 px-7 text-primary-foreground hover:bg-emerald-400 dark:text-stone-950"
              >
                <Link href="#current-laws">
                  Browse current laws
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border/70 bg-background/80 px-7 text-foreground hover:bg-accent hover:text-accent-foreground dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
              >
                <Link href="#scholar-library">Open scholar reading paths</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2 dark:text-stone-200">
              <div className="rounded-3xl border border-border/60 bg-background/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
                <p className="font-semibold text-foreground dark:text-white">
                  Scope
                </p>
                <p className="mt-2 text-muted-foreground dark:text-stone-300">
                  Federal tax statutes, reform-era institutional laws,
                  government source material, legislative history, and
                  transition notes on repealed Acts.
                </p>
              </div>
              <div className="rounded-3xl border border-border/60 bg-background/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
                <p className="font-semibold text-foreground dark:text-white">
                  Research flow
                </p>
                <p className="mt-2 text-muted-foreground dark:text-stone-300">
                  Start with the Act, then confirm how strongly the page can
                  support each claim before moving into commentary or academic
                  reading.
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border/60 bg-background/75 p-6 shadow-2xl shadow-emerald-950/5 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-black/20">
            <p className="text-sm uppercase tracking-[0.22em] text-emerald-700/85 dark:text-emerald-200/80">
              Law library snapshot
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
        id="current-laws"
        className="scroll-mt-28 bg-stone-50 py-20 text-foreground md:py-24 dark:bg-[#0d1715]"
      >
        <div className="wrapper">
          <SectionHeading
            eyebrow="Current Federal Framework"
            title="The four 2025 reform Acts are the core of the current federal tax framework."
            description="Each card below explains what the law covers, why it matters, and how strongly the page can support the claim being made."
            eyebrowClassName="text-emerald-700 dark:text-emerald-300"
            descriptionClassName="max-w-3xl text-muted-foreground dark:text-stone-300"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {currentLawLibrary.map((law) => (
              <article
                key={law.title}
                className="rounded-[1.75rem] border border-border bg-card p-7 shadow-sm dark:border-white/10"
              >
                <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-300">
                  <Scale className="size-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    {law.status}
                  </p>
                </div>

                <h2 className="mt-5 text-2xl font-semibold text-card-foreground">
                  {law.title}
                </h2>

                <p className="mt-3 text-sm font-medium text-amber-700 dark:text-amber-300">
                  {law.enactedOn}
                </p>

                <p className="mt-5 text-base leading-7 text-muted-foreground">
                  {law.summary}
                </p>

                <div className="mt-5 rounded-3xl bg-stone-100 p-4 text-sm leading-7 text-stone-700 dark:bg-white/5 dark:text-stone-200">
                  <p className="font-semibold text-card-foreground dark:text-white">
                    Focus
                  </p>
                  <p className="mt-1">{law.focus}</p>
                </div>

                <div className="mt-4 rounded-3xl border border-border/70 bg-background/70 p-4 text-sm leading-7 text-muted-foreground dark:border-white/10 dark:bg-black/10 dark:text-stone-300">
                  <p className="font-semibold text-card-foreground dark:text-white">
                    Why it matters
                  </p>
                  <p className="mt-1">{law.significance}</p>
                </div>

                <div className="mt-4 rounded-3xl border border-emerald-700/20 bg-emerald-500/5 p-4 text-sm leading-7 text-emerald-950 dark:border-emerald-300/20 dark:bg-emerald-400/5 dark:text-emerald-50">
                  <p className="font-semibold">Source provenance</p>
                  <p className="mt-1">{law.provenance}</p>
                </div>

                <div className="mt-4 rounded-3xl border border-amber-700/20 bg-amber-500/5 p-4 text-sm leading-7 text-amber-950 dark:border-amber-300/20 dark:bg-amber-400/5 dark:text-amber-50">
                  <p className="font-semibold">Commencement evidence</p>
                  <p className="mt-1">{law.commencement}</p>
                </div>

                <div className="mt-4 rounded-3xl border border-border/70 bg-background/70 p-4 text-sm leading-7 text-muted-foreground dark:border-white/10 dark:bg-black/10 dark:text-stone-300">
                  <p className="font-semibold text-card-foreground dark:text-white">
                    Caveat
                  </p>
                  <p className="mt-1">{law.caveat}</p>
                </div>

                <Button asChild variant="outline" className="mt-6 rounded-full">
                  <Link href={law.href} target="_blank" rel="noreferrer">
                    {law.sourceLabel}
                    <ExternalLink />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 text-foreground md:py-24">
        <div className="wrapper">
          <SectionHeading
            eyebrow="Source Hierarchy"
            title="Read the material in order of authority, not all at the same level."
            description="This page separates law text, government support, legislative history, expert commentary, and scholarship so users can tell what is binding and what is only helpful context."
            eyebrowClassName="text-emerald-700 dark:text-emerald-300"
            descriptionClassName="max-w-3xl text-muted-foreground"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {authorityLayers.map((layer) => (
              <article
                key={layer.title}
                className="rounded-[1.5rem] border border-border bg-card p-5 shadow-sm dark:border-white/10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
                  {layer.strength}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                  {layer.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground dark:text-stone-300">
                  {layer.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-20 text-foreground md:py-24 dark:bg-[#101817]">
        <div className="wrapper">
          <SectionHeading
            eyebrow="Government-Hosted Sources"
            title="These are the strongest text-level sources linked on the page right now."
            description="Each card explains what the source supports and where the page still needs stronger proof."
            eyebrowClassName="text-emerald-700 dark:text-emerald-300"
            descriptionClassName="max-w-3xl text-muted-foreground dark:text-stone-300"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {governmentLawSources.map((source) => (
              <article
                key={source.href}
                className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm dark:border-white/10"
              >
                <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-300">
                  <LibraryBig className="size-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    {source.tier}
                  </p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-card-foreground">
                  {source.label}
                </h3>
                <p className="mt-3 text-sm font-medium text-amber-700 dark:text-amber-300">
                  {source.issuer}
                </p>
                <div className="mt-5 rounded-3xl bg-stone-100 p-4 text-sm leading-7 text-stone-700 dark:bg-white/5 dark:text-stone-200">
                  <p className="font-semibold text-card-foreground dark:text-white">
                    What this supports
                  </p>
                  <p className="mt-1">{source.whatItProves}</p>
                </div>
                <div className="mt-4 rounded-3xl border border-border/70 bg-background/70 p-4 text-sm leading-7 text-muted-foreground dark:border-white/10 dark:bg-black/10 dark:text-stone-300">
                  <p className="font-semibold text-card-foreground dark:text-white">
                    Caveat
                  </p>
                  <p className="mt-1">{source.caveat}</p>
                </div>
                <Button asChild variant="outline" className="mt-6 rounded-full">
                  <Link href={source.href} target="_blank" rel="noreferrer">
                    Open source
                    <ExternalLink />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-20 text-foreground md:py-24 dark:bg-[#101817]">
        <div className="wrapper grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading
              eyebrow="Timeline"
              title="These dates help explain how the reform package moved into use."
              description="They matter because users often need to separate older standalone laws from the framework now being used in 2026."
              eyebrowClassName="text-amber-700 dark:text-amber-300"
              descriptionClassName="text-muted-foreground dark:text-stone-300"
            />

            <div className="mt-10 grid gap-4">
              {lawTimeline.map((item) => (
                <article
                  key={item.date}
                  className="rounded-[1.5rem] border border-border bg-card p-5 shadow-sm dark:border-white/10"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                    {item.date}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground dark:text-stone-300">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Transition Map"
              title="The Nigeria Tax Act 2025 changed the older tax-law structure."
              description="A common research problem is relying on repealed laws without checking whether the rule was absorbed, rewritten, or replaced in the new Act."
              eyebrowClassName="text-emerald-700 dark:text-emerald-300"
              descriptionClassName="text-muted-foreground dark:text-stone-300"
            />

            <div className="mt-10 grid gap-4">
              {repealedLawGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm dark:border-white/10"
                >
                  <div className="flex items-center gap-3 text-amber-700 dark:text-amber-300">
                    <Gavel className="size-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                      Section 196 list
                    </p>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-card-foreground">
                    {group.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground dark:text-stone-300">
                    {group.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.acts.map((act) => (
                      <span
                        key={act}
                        className="rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm text-foreground dark:border-white/10 dark:bg-white/5 dark:text-stone-200"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </article>
              ))}

              <article className="rounded-[1.75rem] border border-emerald-900/10 bg-emerald-950 p-6 text-stone-100 shadow-xl dark:border-white/10">
                <div className="flex items-center gap-3 text-emerald-200">
                  <FileText className="size-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Consequential amendments
                  </p>
                </div>
                <p className="mt-5 text-base leading-7 text-stone-200">
                  Beyond outright repeals, the Nigeria Tax Act 2025 also makes
                  consequential amendments to laws such as the Petroleum
                  Industry Act 2021, the Tertiary Education Trust Fund Act, the
                  NITDA Act, and the Cybercrime Act. That matters when users are
                  checking whether a levy or sector-specific obligation survived
                  the reform package in a modified form.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="official-sources"
        className="scroll-mt-28 bg-background py-20 text-foreground md:py-24"
      >
        <div className="wrapper">
          <SectionHeading
            eyebrow="Legislative Provenance"
            title="These National Assembly records help show how the bills moved before assent."
            description="They do not replace the enacted Act text, but they help users see the legislative trail without depending only on summaries."
            eyebrowClassName="text-amber-700 dark:text-amber-300"
            descriptionClassName="max-w-3xl text-muted-foreground"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {legislativeHistorySources.map((source) => (
              <article
                key={source.href}
                className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm dark:border-white/10"
              >
                <div className="flex items-center gap-3 text-amber-700 dark:text-amber-300">
                  <Landmark className="size-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    {source.tier}
                  </p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-card-foreground">
                  {source.label}
                </h3>
                <p className="mt-3 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  {source.issuer}
                </p>
                <div className="mt-5 rounded-3xl bg-stone-100 p-4 text-sm leading-7 text-stone-700 dark:bg-white/5 dark:text-stone-200">
                  <p className="font-semibold text-card-foreground dark:text-white">
                    What this supports
                  </p>
                  <p className="mt-1">{source.whatItProves}</p>
                </div>
                <div className="mt-4 rounded-3xl border border-border/70 bg-background/70 p-4 text-sm leading-7 text-muted-foreground dark:border-white/10 dark:bg-black/10 dark:text-stone-300">
                  <p className="font-semibold text-card-foreground dark:text-white">
                    Caveat
                  </p>
                  <p className="mt-1">{source.caveat}</p>
                </div>
                <Button asChild variant="outline" className="mt-6 rounded-full">
                  <Link href={source.href} target="_blank" rel="noreferrer">
                    Open source
                    <ExternalLink />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="scholar-library"
        className="scroll-mt-28 bg-stone-100 py-20 text-foreground md:py-24 dark:bg-[#09110f] dark:text-stone-100"
      >
        <div className="wrapper">
          <div className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Expert Commentary"
                title="Use practitioner commentary to understand implementation, not to replace the law."
                description="These are not binding sources, but they help users see how major tax practitioners are reading the reforms and where they still flag uncertainty."
                eyebrowClassName="text-emerald-700 dark:text-emerald-300"
                titleClassName="text-foreground dark:text-white"
                descriptionClassName="max-w-3xl text-muted-foreground dark:text-stone-300"
              />

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {professionalCommentarySources.map((item) => (
                  <article
                    key={item.href}
                    className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm dark:border-white/10"
                  >
                    <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-300">
                      <NotebookPen className="size-5" />
                      <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                        {item.publisher}
                      </p>
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold text-card-foreground">
                      {item.label}
                    </h3>

                    <div className="mt-5 rounded-3xl bg-stone-100 p-4 text-sm leading-7 text-stone-700 dark:bg-white/5 dark:text-stone-200">
                      <p className="font-semibold text-card-foreground dark:text-white">
                        What this adds
                      </p>
                      <p className="mt-1">{item.whatItCorroborates}</p>
                    </div>

                    <div className="mt-4 rounded-3xl border border-border/70 bg-background/70 p-4 text-sm leading-7 text-muted-foreground dark:border-white/10 dark:bg-black/10 dark:text-stone-300">
                      <p className="font-semibold text-card-foreground dark:text-white">
                        Caveat
                      </p>
                      <p className="mt-1">{item.caveat}</p>
                    </div>

                    <Button asChild variant="outline" className="mt-6 rounded-full">
                      <Link href={item.href} target="_blank" rel="noreferrer">
                        Open commentary
                        <ExternalLink />
                      </Link>
                    </Button>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-border/70 bg-background/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                Use commentary for
              </p>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-muted-foreground dark:text-stone-300">
                <p className="rounded-3xl border border-border/60 bg-background/70 px-4 py-3 dark:border-white/10 dark:bg-black/10">
                  Seeing how practitioners describe the same reform package and institutional changes.
                </p>
                <p className="rounded-3xl border border-border/60 bg-background/70 px-4 py-3 dark:border-white/10 dark:bg-black/10">
                  Understanding effective-date questions and rollout issues not surfaced cleanly in the text used here.
                </p>
                <p className="rounded-3xl border border-border/60 bg-background/70 px-4 py-3 dark:border-white/10 dark:bg-black/10">
                  Spotting drafting discrepancies, certified-act issues, and transition uncertainty.
                </p>
              </div>
            </aside>
          </div>

          <SectionHeading
            className="mt-20"
            eyebrow="Google Scholar Reading Paths"
            title="Use scholarship after the law and commentary, not as a substitute for either."
            description="These links open Google Scholar searches, not official texts. They are there for journal articles, policy analysis, and deeper academic context."
            eyebrowClassName="text-amber-700 dark:text-amber-300"
            titleClassName="text-foreground dark:text-white"
            descriptionClassName="max-w-3xl text-muted-foreground dark:text-stone-300"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {scholarReadingPaths.map((item) => (
              <article
                key={item.href}
                className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm dark:border-white/10"
              >
                <div className="flex items-center gap-3 text-amber-700 dark:text-amber-300">
                  <Search className="size-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Google Scholar
                  </p>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-card-foreground">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-muted-foreground dark:text-stone-300">
                  {item.description}
                </p>

                <div className="mt-5 rounded-3xl bg-stone-100 p-4 text-sm text-stone-700 dark:bg-white/5 dark:text-stone-200">
                  <p className="font-semibold text-card-foreground dark:text-white">
                    Search query
                  </p>
                  <p className="mt-2 break-words font-mono text-xs sm:text-sm">
                    {item.query}
                  </p>
                </div>

                <Button asChild variant="outline" className="mt-6 rounded-full">
                  <Link href={item.href} target="_blank" rel="noreferrer">
                    Search Google Scholar
                    <ExternalLink />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 text-foreground md:py-24">
        <div className="wrapper">
          <div className="grid gap-8 rounded-[2rem] border border-amber-900/10 bg-amber-50 px-6 py-8 text-foreground shadow-xl lg:grid-cols-[1fr_1.05fr] lg:px-8 dark:border-amber-300/10 dark:bg-[#1b1408] dark:text-stone-100">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300/80">
                What Still Needs Stronger Proof
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
                Good source writing also means being clear about what the page
                cannot fully prove yet.
              </h2>
            </div>

            <div className="grid gap-4">
              {evidenceGapNotes.map((note) => (
                <article
                  key={note}
                  className="rounded-3xl border border-amber-900/10 bg-white/80 p-4 text-sm leading-7 text-stone-700 dark:border-white/10 dark:bg-white/5 dark:text-stone-200"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-1 size-4 shrink-0 text-amber-700 dark:text-amber-300" />
                    <p>{note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-8 rounded-[2rem] border border-emerald-900/10 bg-emerald-950 px-6 py-8 text-stone-100 shadow-xl lg:grid-cols-[1fr_1.05fr] lg:px-8 dark:border-white/10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/75">
                Research notes
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
                This page is designed to reduce outdated tax-law research, not
                to replace professional advice.
              </h2>
            </div>

            <div className="grid gap-4">
              {lawLibraryNotes.map((note) => (
                <article
                  key={note}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-stone-200"
                >
                  <div className="flex items-start gap-3">
                    <BookOpenText className="mt-1 size-4 shrink-0 text-emerald-200" />
                    <p>{note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
