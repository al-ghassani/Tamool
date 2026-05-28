import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, useTransform, animate } from "framer-motion";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  const [val, setVal] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
    const unsub = rounded.on("change", setVal);
    return () => { controls.stop(); unsub(); };
  }, [inView, to, mv, rounded]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      <span className="text-emerald-accent">{suffix}</span>
    </span>
  );
}

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  id,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
      {(eyebrow || title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-emerald-accent mb-4">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}

export function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
