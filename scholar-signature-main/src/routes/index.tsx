import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Globe2, ExternalLink } from "lucide-react";
import portrait from "@/assets/tamool-portrait.jpeg";
import { profile, stats, institutions, publications } from "@/lib/data";
import { passions } from "@/lib/passions";
import policySurveillanceImg from "@/assets/policy-surveillance-tool.png";
import { Counter, FadeIn, Section } from "@/components/primitives";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const FORWARD_TO = "tamoolabdulhamid@gmail.com";



export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Tamool Abdulhamid — Researcher in Public Health & Health Economics" },
    ],
  }),
});

function Home() {
  const featured = publications.filter((p) => p.featured);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-background to-background" />
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-accent/10 blur-3xl" />
          <div className="absolute top-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 md:pt-32 pb-24 md:pb-36 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-wide text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent animate-pulse" />
              PhD Candidate · University of Groningen × UMCG
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-serif mt-6 text-5xl md:text-7xl leading-[1.02] tracking-tight"
            >
              {profile.name}
              <span className="text-muted-foreground text-2xl md:text-3xl align-super ml-2 font-sans">{profile.credentials}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 text-xl md:text-2xl font-serif italic text-emerald-accent"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              {profile.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="/Tamool-Abdulhamid-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm hover:opacity-90 transition"
              >
                <Download className="h-4 w-4" /> View CV
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 border border-border bg-card px-6 py-3.5 rounded-full text-sm hover:border-emerald-accent transition"
              >
                Contact Me <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-accent/20 to-primary/20 blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl">
                <img
                  src={portrait}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover"
                  style={{ filter: "brightness(0.9) contrast(1.06) saturate(1.05)" }}
                  width={800}
                  height={1000}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-lg">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Currently</div>
                <div className="text-sm font-medium mt-1">Visiting Researcher · Karolinska Institutet</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.05}>
              <div className="bg-card p-8 md:p-10 h-full">
                <div className="font-serif text-4xl md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FEATURED RESEARCH */}
      <Section
        eyebrow="Featured Research"
        title="Selected publications shaping practice"
        subtitle="Peer-reviewed work bridging epidemiology, economics, and lived experience."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <article className="group h-full p-8 bg-card rounded-2xl border border-border hover:border-emerald-accent/60 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{p.year}</span>
                  <span className="h-1 w-1 rounded-full bg-emerald-accent" />
                  <span className="text-emerald-accent">{p.topic}</span>
                </div>
                <h3 className="font-serif text-2xl mt-4 leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.authors}</p>
                <p className="mt-1 text-sm italic">{p.journal}</p>
                {p.doi && (
                  <a
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-accent hover:underline"
                  >
                    Read paper <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/publications" className="inline-flex items-center gap-2 text-sm hover:text-emerald-accent">
            See all publications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>


      {/* RESEARCH INTERESTS */}
      <Section eyebrow="Research Interests" title="Where my research sits">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Health Services and Policy Research",
              body: "Evaluation and surveillance of health policy and care delivery, with attention to how policy and care pathways shape population behaviour, outcomes, and health system performance.",
            },
            {
              title: "Clinical and Life Course Epidemiology",
              body: "Observational study of how clinical events, behavioural and transgenerational exposures, and social conditions shape health trajectories across the life course.",
            },
            {
              title: "Health Economic Evaluation",
              body: "Analysis of healthcare utilisation, long-term cost trajectories, and the economic consequences of clinical and policy decisions for individuals and health systems.",
            },
          ].map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.1}>
              <div className="h-full p-8 rounded-2xl border border-border bg-card hover:border-emerald-accent/60 transition-colors">
                <h3 className="font-serif text-xl leading-snug">{r.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CURRENT PROJECTS */}

      <Section
        eyebrow="Current Projects"
        title="Active work in progress"
        subtitle="Tools and research initiatives currently under development."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn>
            <a
              href="https://geodienst.xyz/tabak/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full overflow-hidden bg-card rounded-2xl border border-border hover:border-emerald-accent/60 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[16/8] w-full overflow-hidden bg-secondary/40">
                <img
                  src={policySurveillanceImg}
                  alt="Policy Surveillance Tool — municipal tobacco policy map and chart"
                  className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-emerald-accent/10 text-emerald-accent">
                  <Globe2 className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-emerald-accent transition-colors" />
              </div>
              <h3 className="font-serif text-2xl mt-6 leading-snug">Policy Surveillance Tool</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                An interactive platform mapping municipal tobacco control policies across the Netherlands. Built to support legal epidemiology and real-time policy surveillance for researchers and public health practitioners.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-accent group-hover:underline">
                Visit project <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
              </div>
              </div>
            </a>
          </FadeIn>
        </div>
      </Section>

      {/* INSTITUTIONS */}
      <Section eyebrow="Affiliations & Collaborations">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
          {institutions.map((i) => (
            <div key={i} className="font-serif text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors">
              {i}
            </div>
          ))}
        </div>
      </Section>

      {/* PASSIONS — in my own words */}
      <Section eyebrow="In my own words" title="What I'm passionate about" subtitle="The research questions that shape my work — and why they matter to me.">
        <div className="grid sm:grid-cols-2 gap-6">
          {passions.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <Dialog>
                <article className="group relative h-full flex flex-col overflow-hidden rounded-2xl bg-card border border-border hover:border-emerald-accent/60 hover:shadow-xl transition-all">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={p.image}
                      alt={`${profile.name} — ${p.title}`}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6 md:p-7">
                    <h3 className="font-serif text-xl md:text-2xl leading-snug">{p.title}</h3>
                    <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed italic">
                      "{p.excerpt}"
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-4 pt-4 border-t border-border">
                      <div className="text-xs uppercase tracking-[0.2em] text-emerald-accent">
                        — {profile.name}
                      </div>
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-accent hover:underline">
                          Read more <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </DialogTrigger>
                    </div>
                  </div>
                </article>
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl md:text-3xl leading-snug">{p.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-emerald-accent">
                    — {profile.name}
                  </div>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="mt-4 w-full aspect-[16/9] object-cover rounded-xl border border-border"
                  />
                  <div className="mt-6 prose prose-sm md:prose-base max-w-none text-foreground whitespace-pre-line leading-relaxed">
                    {p.body}
                  </div>
                </DialogContent>
              </Dialog>
            </FadeIn>
          ))}
        </div>

      </Section>


      {/* NEWSLETTER / COLLABORATE */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary text-primary-foreground p-10 md:p-16">
          <div className="absolute inset-0 -z-0 opacity-20 bg-gradient-to-br from-emerald-accent to-transparent" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] opacity-70 mb-4">Collaborate</div>
              <h3 className="font-serif text-3xl md:text-4xl">Interested in working together?</h3>
              <p className="mt-4 text-base opacity-80 leading-relaxed">
                If you are interested in collaborating with us on any research project — joint studies, data analysis, grants, or co‑authorship — we would be delighted to hear from you. We look forward to advancing science together.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-accent text-white text-sm hover:opacity-90 transition"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
