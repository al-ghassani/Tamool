import { createFileRoute } from "@tanstack/react-router";
import { Section, FadeIn } from "@/components/primitives";
import { researchInterests, expertise, timeline } from "@/lib/data";
import portrait from "@/assets/tamool-portrait.jpeg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [{ title: "About — Tamool Abdulhamid" }] }),
});

function About() {
  return (
    <>
      <Section eyebrow="About" title="A researcher between economics, epidemiology, and lived experience.">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a researcher in public health and health economics, completing my PhD jointly between the Faculty of Economics and Business and the University Medical Centre Groningen. My work examines how environmental, behavioural, and structural factors shape population health across the life course, from the trajectories that drive disease onset to the health system responses that follow, with the aim of generating evidence that improves health system performance and outcomes for the subgroups most often excluded from it. I came to this question as a national public health officer in Egypt and have followed it through clinical epidemiology, health economics, and policy evaluation, using nationwide linked administrative data and causal inference methods.
            </p>
            <p>
              My current research follows two strands: policy surveillance in health behaviours, such as tobacco control, and the clinical and economic determinants of women's, maternal, and neonatal health across the life course. I work in international collaborations across Europe and Australia, and I am interdisciplinary by formation, moving between epidemiology, econometrics, policy surveillance, and legal epidemiology because population health questions don't respect disciplinary boundaries. The thread that has held the trajectory together is a commitment to equity: producing evidence that improves health systems for the people most likely to be excluded from them.
            </p>
          </div>
          <FadeIn>
            <div className="relative">
              <img
                src={portrait}
                alt="Portrait"
                className="rounded-2xl border border-border shadow-xl"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section eyebrow="Research interests" title="What I work on">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchInterests.map((r, i) => (
            <FadeIn key={r} delay={i * 0.05}>
              <div className="p-6 rounded-xl border border-border bg-card hover:border-emerald-accent/60 transition">
                <div className="text-sm font-medium">{r}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section eyebrow="Methods" title="Areas of expertise">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((e, i) => (
            <FadeIn key={e.group} delay={i * 0.05}>
              <div className="h-full p-6 rounded-2xl border border-border bg-card">
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-accent">{e.group}</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-emerald-accent flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section eyebrow="Career" title="A journey in motion">
        <div className="relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <FadeIn key={t.year + t.role} delay={i * 0.05}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}>
                  <div className="md:text-right md:pr-12 pl-10 md:pl-0">
                    <div className="text-xs uppercase tracking-[0.2em] text-emerald-accent">{t.year}</div>
                    <h3 className="font-serif text-xl mt-2">{t.role}</h3>
                    <div className="text-sm text-muted-foreground mt-1">{t.org}</div>
                  </div>
                  <div className="md:pl-12 pl-10 mt-2 md:mt-0 text-sm text-muted-foreground leading-relaxed">
                    {t.detail}
                  </div>
                  <div className="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-accent ring-4 ring-background" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
