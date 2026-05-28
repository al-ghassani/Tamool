import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { Section, FadeIn } from "@/components/primitives";
import { publications } from "@/lib/data";

export const Route = createFileRoute("/publications")({
  component: Publications,
  head: () => ({ meta: [{ title: "Publications — Tamool Abdulhamid" }] }),
});

function Publications() {
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState<string>("All");

  const topics = useMemo(
    () => ["All", ...Array.from(new Set(publications.map((p) => p.topic)))],
    []
  );

  const filtered = publications.filter((p) => {
    const matchesQ = q
      ? (p.title + p.authors + p.journal).toLowerCase().includes(q.toLowerCase())
      : true;
    const matchesT = topic === "All" || p.topic === topic;
    return matchesQ && matchesT;
  });

  return (
    <>
      <Section
        eyebrow="Publications & Research"
        title="Peer-reviewed papers, manuscripts, and scholarly outputs."
        subtitle="Search and filter by research theme. DOI links open externally where available."
      >
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by title, author, or journal…"
              className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-border focus:outline-none focus:border-emerald-accent text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`px-4 py-2 rounded-full text-xs border transition ${
                  topic === t
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:border-emerald-accent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.03}>
              <article className="group p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-emerald-accent/60 transition">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{p.year}</span>
                  <span className="h-1 w-1 rounded-full bg-emerald-accent" />
                  <span className="text-emerald-accent">{p.topic}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{p.type}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl mt-3 leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.authors}</p>
                <p className="mt-1 text-sm italic">{p.journal}</p>
                {p.doi && (
                  <a
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-emerald-accent hover:underline"
                  >
                    doi.org/{p.doi} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </article>
            </FadeIn>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">No publications match your filters.</div>
          )}
        </div>
      </Section>
    </>
  );
}
