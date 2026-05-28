import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Section, FadeIn } from "@/components/primitives";
import { timeline, awards, certifications, publications, conferences } from "@/lib/data";

export const Route = createFileRoute("/cv")({
  component: CV,
  head: () => ({ meta: [{ title: "CV — Tamool Abdulhamid" }] }),
});

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <div className="text-xs uppercase tracking-[0.25em] text-emerald-accent mb-6">{title}</div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function CV() {
  const education = timeline.filter((t) => /MSc|BSc|PhD|MSc|Research M/.test(t.role));
  const positions = timeline.filter((t) => !education.includes(t));
  return (
    <>
      <Section eyebrow="Curriculum Vitae" title="A complete record of work, training, and recognition.">
        <div className="flex flex-wrap gap-3">
          <a
            href="/Tamool-Abdulhamid-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm hover:opacity-90"
          >
            <Download className="h-4 w-4" /> Download PDF (May 2026)
          </a>
        </div>
      </Section>

      <Section>
        <Group title="Academic Positions">
          {positions.map((t) => (
            <FadeIn key={t.year + t.role}>
              <div className="grid md:grid-cols-[180px_1fr] gap-4 p-6 rounded-xl border border-border bg-card">
                <div className="text-sm text-muted-foreground">{t.year}</div>
                <div>
                  <div className="font-serif text-lg">{t.role}</div>
                  <div className="text-sm text-emerald-accent mt-0.5">{t.org}</div>
                  {t.detail && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.detail}</p>}
                </div>
              </div>
            </FadeIn>
          ))}
        </Group>

        <Group title="Education">
          {education.map((t) => (
            <FadeIn key={t.year + t.role}>
              <div className="grid md:grid-cols-[180px_1fr] gap-4 p-6 rounded-xl border border-border bg-card">
                <div className="text-sm text-muted-foreground">{t.year}</div>
                <div>
                  <div className="font-serif text-lg">{t.role}</div>
                  <div className="text-sm text-emerald-accent mt-0.5">{t.org}</div>
                  {t.detail && <p className="text-sm text-muted-foreground mt-2">{t.detail}</p>}
                </div>
              </div>
            </FadeIn>
          ))}
        </Group>

        <Group title="Selected Publications">
          {publications.slice(0, 4).map((p) => (
            <FadeIn key={p.title}>
              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.type} · {p.year}</div>
                <div className="font-serif text-lg mt-2 leading-snug">{p.title}</div>
                <div className="text-sm text-muted-foreground mt-2">{p.authors}</div>
                <div className="text-sm italic mt-1">{p.journal}</div>
              </div>
            </FadeIn>
          ))}
        </Group>

        <Group title="Conferences & Invited Talks">
          {conferences.map((c) => (
            <FadeIn key={c.name}>
              <div className="grid md:grid-cols-[80px_1fr] gap-4 p-6 rounded-xl border border-border bg-card">
                <div className="text-sm text-muted-foreground">{c.year}</div>
                <div>
                  <div className="font-serif text-lg">{c.name}</div>
                  <div className="text-sm text-emerald-accent mt-0.5">{c.place}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.role}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </Group>

        <Group title="Awards & Scholarships">
          {awards.map((a) => (
            <FadeIn key={a.name}>
              <div className="grid md:grid-cols-[80px_1fr] gap-4 p-6 rounded-xl border border-border bg-card">
                <div className="text-sm text-muted-foreground">{a.year}</div>
                <div>
                  <div className="font-serif text-lg">{a.name}</div>
                  <div className="text-sm text-emerald-accent mt-0.5">{a.org}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </Group>

        <Group title="Continuing Education & Credentials">
          <ul className="grid md:grid-cols-2 gap-3">
            {certifications.map((c) => (
              <li key={c} className="p-5 rounded-xl border border-border bg-card text-sm">
                {c}
              </li>
            ))}
          </ul>
        </Group>
      </Section>
    </>
  );
}
