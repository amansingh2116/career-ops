"use client";

import { useState, useMemo, useCallback } from "react";
import {
  Search,
  ExternalLink,
  Star,
  Globe,
  Filter,
  X,
  BookOpen,
  TrendingUp,
  Building2,
  Users,
  FlaskConical,
  GraduationCap,
  MessageCircle,
  Zap,
  Heart,
  Briefcase,
  MapPin,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/cn";
import {
  DISCOVER_SOURCES,
  ALL_CATEGORIES,
  ALL_REGIONS,
  type OpportunitySource,
  type SourceCategory,
  type SourceRegion,
} from "@/lib/discover-sources";

// Icon map for categories
const CATEGORY_ICONS: Record<SourceCategory, React.ComponentType<{ className?: string }>> = {
  "quant-finance": TrendingUp,
  "internship-aggregators": Briefcase,
  "research-labs": FlaskConical,
  "university-programs": GraduationCap,
  professors: Users,
  "indian-firms": Building2,
  "global-firms": Globe,
  "linkedin-outreach": Users,
  "forums-communities": MessageCircle,
  "startup-ecosystems": Zap,
  "content-creators": BookOpen,
  "job-portals": Search,
};

const BADGE_COLORS: Record<string, string> = {
  "Top Pick": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "India #1": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Elite Quant": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "You're Verified": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "IMC Alumnus": "bg-sky-500/20 text-sky-400 border-sky-500/30",
  "India Office": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "India HFT": "bg-rose-500/20 text-rose-400 border-rose-500/30",
  "India Fintech": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  "Your Institute": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Your Faculty": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Blog Author": "bg-sky-500/20 text-sky-400 border-sky-500/30",
  Funded: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Competitive: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Warm Network": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "Cold Outreach": "bg-slate-500/20 text-slate-400 border-slate-500/30",
};

function QualityDots({ score }: { score: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-colors",
            i < score ? "bg-brand" : "bg-surface-hover"
          )}
        />
      ))}
    </div>
  );
}

function SourceCard({ source }: { source: OpportunitySource }) {
  const Icon = CATEGORY_ICONS[source.category];
  const categoryMeta = ALL_CATEGORIES.find((c) => c.id === source.category);
  const badgeStyle = source.badge ? (BADGE_COLORS[source.badge] ?? "bg-surface text-muted border-border") : null;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface/40 backdrop-blur-sm transition-all duration-200 hover:border-brand/40 hover:bg-surface/70 hover:shadow-lg hover:shadow-brand/5">
      {/* Top accent bar based on quality */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-0.5 transition-opacity",
          source.quality >= 5
            ? "bg-gradient-to-r from-brand via-purple-500 to-brand opacity-80"
            : source.quality >= 4
              ? "bg-brand/60 opacity-60"
              : "opacity-0"
        )}
      />

      <div className="flex flex-col gap-3 p-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
              <Icon className="size-4 text-muted" />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-foreground group-hover:text-brand transition-colors">
                {source.name}
              </h3>
              {categoryMeta && (
                <p className="text-[10px] text-faint">
                  {categoryMeta.emoji} {categoryMeta.label}
                </p>
              )}
            </div>
          </div>
          {source.badge && badgeStyle && (
            <span
              className={cn(
                "shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider",
                badgeStyle
              )}
            >
              {source.badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-muted leading-relaxed line-clamp-3">
          {source.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {source.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface px-1.5 py-0.5 text-[10px] text-faint border border-border/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1 border-t border-border/40">
          <div className="flex items-center gap-3">
            <QualityDots score={source.quality} />
            <div className="flex items-center gap-1.5">
              {source.regions.map((r) => (
                <span key={r} className="text-[10px] text-faint">
                  {r === "india" ? "🇮🇳" : r === "us" ? "🇺🇸" : r === "europe" ? "🇪🇺" : r === "global" ? "🌐" : "🌏"}
                </span>
              ))}
            </div>
            {source.isOutreach && (
              <span className="text-[9px] font-semibold uppercase tracking-wider text-pink-400">
                Outreach
              </span>
            )}
          </div>

          {/* CTA */}
          <a
            href={source.searchUrl ?? source.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all",
              source.actionable
                ? "bg-brand text-brand-foreground hover:opacity-90 shadow-sm shadow-brand/30"
                : "bg-surface text-muted border border-border cursor-not-allowed opacity-50"
            )}
            onClick={source.actionable ? undefined : (e) => e.preventDefault()}
          >
            {source.isOutreach ? (
              <>
                <Heart className="size-3" /> Reach out
              </>
            ) : (
              <>
                <ExternalLink className="size-3" /> Open
              </>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

export function DiscoverView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<SourceCategory[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<SourceRegion[]>([]);
  const [showOutreachOnly, setShowOutreachOnly] = useState(false);
  const [minQuality, setMinQuality] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleCategory = useCallback((cat: SourceCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }, []);

  const toggleRegion = useCallback((region: SourceRegion) => {
    setSelectedRegions((prev) =>
      prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  }, []);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return DISCOVER_SOURCES.filter((s) => {
      if (q && !s.name.toLowerCase().includes(q) && !s.description.toLowerCase().includes(q) && !s.tags.some((t) => t.includes(q))) return false;
      if (selectedCategories.length > 0 && !selectedCategories.includes(s.category)) return false;
      if (selectedRegions.length > 0 && !s.regions.some((r) => selectedRegions.includes(r))) return false;
      if (showOutreachOnly && !s.isOutreach) return false;
      if (s.quality < minQuality) return false;
      return true;
    }).sort((a, b) => b.quality - a.quality);
  }, [searchQuery, selectedCategories, selectedRegions, showOutreachOnly, minQuality]);

  const activeFiltersCount = selectedCategories.length + selectedRegions.length + (showOutreachOnly ? 1 : 0) + (minQuality > 1 ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedRegions([]);
    setShowOutreachOnly(false);
    setMinQuality(1);
    setSearchQuery("");
  };

  // Summary stats
  const outreachCount = DISCOVER_SOURCES.filter((s) => s.isOutreach).length;
  const eliteCount = DISCOVER_SOURCES.filter((s) => s.quality === 5).length;
  const indiaCount = DISCOVER_SOURCES.filter((s) => s.regions.includes("india")).length;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative border-b border-border bg-gradient-to-b from-surface/80 to-transparent px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand mb-3">
            <Sparkles className="size-3.5" />
            Opportunity Radar
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Discover Opportunities
          </h1>
          <p className="text-sm text-muted max-w-xl mb-6">
            Curated from 60+ sources — quant firms, research labs, university programs, professor
            outreach, LinkedIn HRs, forums, and more. Pre-filtered for your profile.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { label: "Total Sources", value: DISCOVER_SOURCES.length, icon: Globe },
              { label: "Elite (★★★★★)", value: eliteCount, icon: Star },
              { label: "India-Focused", value: indiaCount, icon: MapPin },
              { label: "Outreach Targets", value: outreachCount, icon: Users },
            ].map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-surface/60 px-4 py-2.5"
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-brand/10">
                  <Icon className="size-4 text-brand" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">{value}</div>
                  <div className="text-[10px] text-faint">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Search bar */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-faint" />
              <input
                type="text"
                id="discover-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, description, or skill (e.g. quant, ML, ISI…)"
                className="w-full rounded-xl border border-border bg-surface/80 py-3 pl-9 pr-4 text-sm text-foreground placeholder:text-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-faint hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
            <button
              id="discover-filters-toggle"
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={cn(
                "flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all",
                filtersOpen || activeFiltersCount > 0
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-border bg-surface text-muted hover:border-brand/40 hover:text-foreground"
              )}
            >
              <Filter className="size-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Filter panel */}
      {filtersOpen && (
        <div className="border-b border-border bg-surface/30 px-6 py-5">
          <div className="mx-auto max-w-5xl space-y-5">
            {/* Category filter */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-faint">
                Category
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ALL_CATEGORIES.map(({ id, label, emoji }) => (
                  <button
                    key={id}
                    id={`filter-cat-${id}`}
                    onClick={() => toggleCategory(id)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all",
                      selectedCategories.includes(id)
                        ? "border-brand bg-brand/10 text-brand"
                        : "border-border text-muted hover:border-border hover:text-foreground"
                    )}
                  >
                    <span>{emoji}</span>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Region filter */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-faint">
                Region
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ALL_REGIONS.map(({ id, label }) => (
                  <button
                    key={id}
                    id={`filter-region-${id}`}
                    onClick={() => toggleRegion(id)}
                    className={cn(
                      "rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all",
                      selectedRegions.includes(id)
                        ? "border-brand bg-brand/10 text-brand"
                        : "border-border text-muted hover:text-foreground"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quality & Outreach toggles */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted">Min quality:</span>
                <div className="flex gap-1">
                  {([1, 2, 3, 4, 5] as const).map((q) => (
                    <button
                      key={q}
                      id={`filter-quality-${q}`}
                      onClick={() => setMinQuality(q)}
                      className={cn(
                        "flex size-6 items-center justify-center rounded text-xs font-bold transition-all",
                        minQuality === q
                          ? "bg-brand text-brand-foreground"
                          : "bg-surface text-muted hover:text-foreground border border-border"
                      )}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <button
                id="filter-outreach-toggle"
                onClick={() => setShowOutreachOnly(!showOutreachOnly)}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all",
                  showOutreachOnly
                    ? "border-pink-500/50 bg-pink-500/10 text-pink-400"
                    : "border-border text-muted hover:text-foreground"
                )}
              >
                <Heart className="size-3" />
                Outreach only
              </button>

              {activeFiltersCount > 0 && (
                <button
                  id="filter-clear-all"
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 text-xs text-faint hover:text-foreground transition-colors"
                >
                  <X className="size-3" />
                  Clear all
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Category quick-nav (when no category selected) */}
      {selectedCategories.length === 0 && !searchQuery && !filtersOpen && (
        <div className="border-b border-border bg-surface/20 px-6 py-3 overflow-x-auto">
          <div className="mx-auto max-w-5xl flex gap-1.5">
            {ALL_CATEGORIES.map(({ id, label, emoji }) => {
              const count = DISCOVER_SOURCES.filter((s) => s.category === id).length;
              return (
                <button
                  key={id}
                  id={`quicknav-${id}`}
                  onClick={() => toggleCategory(id)}
                  className="flex shrink-0 items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted hover:border-brand/40 hover:text-foreground transition-all"
                >
                  <span>{emoji}</span>
                  {label}
                  <span className="ml-0.5 text-faint">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="px-6 py-8">
        <div className="mx-auto max-w-5xl">
          {/* Results header */}
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-muted">
              Showing{" "}
              <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
              of {DISCOVER_SOURCES.length} sources
            </p>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-xs text-faint hover:text-foreground transition-colors"
              >
                <X className="size-3" />
                Clear filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="size-12 text-faint mb-4 opacity-30" />
              <p className="text-base font-medium text-muted">No sources match your filters</p>
              <p className="mt-1 text-sm text-faint">Try broadening your search or clearing filters</p>
              <button
                onClick={clearFilters}
                className="mt-4 rounded-lg border border-border px-4 py-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              {/* Group by category when no category filter active */}
              {selectedCategories.length === 0 && !searchQuery ? (
                <div className="space-y-10">
                  {ALL_CATEGORIES.map(({ id, label, emoji }) => {
                    const sources = filtered.filter((s) => s.category === id);
                    if (sources.length === 0) return null;
                    const CatIcon = CATEGORY_ICONS[id];
                    return (
                      <section key={id} id={`section-${id}`}>
                        <div className="flex items-center gap-2.5 mb-4">
                          <div className="flex size-8 items-center justify-center rounded-lg border border-border bg-surface">
                            <CatIcon className="size-4 text-muted" />
                          </div>
                          <h2 className="text-sm font-semibold text-foreground">
                            {emoji} {label}
                          </h2>
                          <span className="ml-1 rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] text-faint">
                            {sources.length}
                          </span>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                          {sources.map((source) => (
                            <SourceCard key={source.id} source={source} />
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </div>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((source) => (
                    <SourceCard key={source.id} source={source} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border bg-surface/20 px-6 py-8">
        <div className="mx-auto max-w-5xl flex flex-col items-center text-center gap-3">
          <p className="text-sm font-medium text-foreground">
            Found something interesting? Add it to your pipeline.
          </p>
          <p className="text-xs text-muted">
            Copy the job URL and run{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[11px] text-brand border border-border">
              career-ops auto-pipeline
            </code>{" "}
            in your AI CLI to evaluate and track it instantly.
          </p>
          <a
            href="/pipeline"
            className="flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground hover:opacity-90 transition-opacity shadow-md shadow-brand/20"
          >
            View Pipeline <ChevronRight className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
