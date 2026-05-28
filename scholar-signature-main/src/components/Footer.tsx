import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl">{profile.name}</div>
          <div className="text-sm text-muted-foreground mt-1">{profile.title}</div>
          <p className="text-sm text-muted-foreground mt-4 max-w-md leading-relaxed">
            {profile.affiliation}
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Navigate</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-emerald-accent">About</Link></li>
            <li><Link to="/cv" className="hover:text-emerald-accent">Curriculum Vitae</Link></li>
            <li><Link to="/publications" className="hover:text-emerald-accent">Publications</Link></li>
            <li><Link to="/gallery" className="hover:text-emerald-accent">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Elsewhere</div>
          <ul className="space-y-2 text-sm">
            <li><a href={`mailto:${profile.email}`} className="hover:text-emerald-accent inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5"/> Email</a></li>
            <li><a href={profile.links.linkedin} className="hover:text-emerald-accent inline-flex items-center gap-2"><Linkedin className="h-3.5 w-3.5"/> LinkedIn</a></li>
            <li><a href={profile.links.orcid} className="hover:text-emerald-accent inline-flex items-center gap-2"><ExternalLink className="h-3.5 w-3.5"/> ORCID</a></li>
            <li><a href={profile.links.profile} className="hover:text-emerald-accent inline-flex items-center gap-2"><ExternalLink className="h-3.5 w-3.5"/> UMCG Profile</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
          <div>Groningen · Stockholm · Boston · Sydney</div>
        </div>
      </div>
    </footer>
  );
}
