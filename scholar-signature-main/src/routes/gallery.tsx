import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/primitives";
import img2 from "@/assets/gallery/teemy-2.jpeg";
import img3 from "@/assets/gallery/teemy-3.jpeg";
import img4 from "@/assets/gallery/teemy-4.jpeg";
import img5 from "@/assets/gallery/teemy-5.jpeg";
import img6 from "@/assets/gallery/teemy-6.jpeg";
import img7 from "@/assets/gallery/teemy-7.jpeg";
import img8 from "@/assets/gallery/teemy-8.jpeg";
import img9 from "@/assets/gallery/teemy-9.jpeg";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({ meta: [{ title: "Gallery — Tamool Abdulhamid" }] }),
});

const images = [
  { src: img2, caption: "Research discussion — University Medical Centre Groningen", h: 500 },
  { src: img3, caption: "International Normal Labour and Birth Research Conference, Hong Kong 2024", h: 800 },
  { src: img8, caption: "Faculty portrait — University of Groningen", h: 520 },
  { src: img5, caption: "Conference talk — Mediation of socioeconomic inequality in child overweight", h: 780 },
  { src: img4, caption: "Poster presentation — Parent health literacy & child overweight", h: 820 },
  { src: img6, caption: "World Health Organization meeting, Geneva", h: 620 },
  { src: img9, caption: "Poster talk — Municipal Tobacco Control in the Netherlands", h: 520 },
  { src: img7, caption: "Off-duty — Lake Iseo, Italian Alps", h: 760 },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <Section
        eyebrow="Album"
        title="Conferences, labs, and field moments."
        subtitle="A visual record from talks, research visits, and collaborations across Europe, Asia, and beyond."
      >
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              onClick={() => setActive(i)}
              className="group mb-6 block w-full overflow-hidden rounded-2xl border border-border bg-card relative break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-105"
                style={{ height: img.h / 2, objectFit: "cover" }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white text-xs p-4 opacity-0 group-hover:opacity-100 transition">
                {img.caption}
              </div>
            </motion.button>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md grid place-items-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 h-10 w-10 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={images[active].src} alt={images[active].caption} className="max-h-[80vh] w-auto rounded-xl mx-auto" />
              <figcaption className="text-center text-white/80 text-sm mt-4 font-serif italic">
                {images[active].caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
