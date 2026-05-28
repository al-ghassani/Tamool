import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Linkedin, ExternalLink, Send } from "lucide-react";
import { useState } from "react";
import { Section, FadeIn } from "@/components/primitives";
import { profile } from "@/lib/data";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Contact — Tamool Abdulhamid" }] }),
});

const FORWARD_TO = "tamoolabdulhamid@gmail.com";

function Contact() {
  const [sent, setSent] = useState(false);


  return (
    <>
      <Section
        eyebrow="Contact"
        title="Get in touch."
        subtitle="Open to research collaborations, invited talks, peer review, and PhD/MSc supervision conversations."
      >
        <div className="grid lg:grid-cols-5 gap-10">
          <FadeIn className="lg:col-span-2">
            <div className="space-y-6">

              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-accent mb-2">Email</div>
                <a href={`mailto:${FORWARD_TO}`} className="text-sm hover:text-emerald-accent break-all">{FORWARD_TO}</a>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-accent mb-2">Location</div>
                <div className="text-sm flex items-center gap-2"><MapPin className="h-4 w-4"/> {profile.location}</div>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-accent mb-3">Elsewhere</div>
                <ul className="space-y-2 text-sm">
                  <li><a href={profile.links.linkedin} className="hover:text-emerald-accent inline-flex items-center gap-2"><Linkedin className="h-3.5 w-3.5"/> LinkedIn</a></li>
                  <li><a href={profile.links.orcid} className="hover:text-emerald-accent inline-flex items-center gap-2"><ExternalLink className="h-3.5 w-3.5"/> ORCID — {profile.orcid}</a></li>
                  <li><a href={profile.links.profile} className="hover:text-emerald-accent inline-flex items-center gap-2"><ExternalLink className="h-3.5 w-3.5"/> UMCG Research Profile</a></li>
                  <li><a href={profile.links.scholar} className="hover:text-emerald-accent inline-flex items-center gap-2"><ExternalLink className="h-3.5 w-3.5"/> Google Scholar</a></li>
                  <li><a href={profile.links.researchgate} className="hover:text-emerald-accent inline-flex items-center gap-2"><ExternalLink className="h-3.5 w-3.5"/> ResearchGate</a></li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = String(fd.get("name") || "");
                const email = String(fd.get("email") || "");
                const subject = String(fd.get("subject") || "Message from website");
                const message = String(fd.get("message") || "");
                const body = `From: ${name} <${email}>\n\n${message}`;
                window.location.href = `mailto:${FORWARD_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                setSent(true);
                toast.success(`Opening your email app — message will be sent to ${FORWARD_TO}.`);
              }}
              className="p-8 rounded-2xl border border-border bg-card space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Name</label>
                  <input name="name" required className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-emerald-accent text-sm" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</label>
                  <input name="email" required type="email" className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-emerald-accent text-sm" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Subject</label>
                <input name="subject" className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-emerald-accent text-sm" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</label>
                <textarea name="message" required rows={6} className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-emerald-accent text-sm" />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm hover:opacity-90"
              >
                <Send className="h-4 w-4" /> {sent ? "Sent" : "Send message"}
              </button>
            </form>

          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl overflow-hidden border border-border h-[420px]">
          <iframe
            title="Groningen map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=6.5%2C53.18%2C6.65%2C53.25&layer=mapnik&marker=53.219%2C6.566"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
