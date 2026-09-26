import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = ["All", "Gym", "Training", "Events"];

const images = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600", cat: "Gym", alt: "Gym equipment area" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600", cat: "Training", alt: "Personal training session" },
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600", cat: "Gym", alt: "Weight training zone" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600", cat: "Training", alt: "Workout session" },
  { src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600", cat: "Events", alt: "Fitness event" },
  { src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600", cat: "Gym", alt: "Modern gym interior" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? images : images.filter((img) => img.cat === filter);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">Gallery</p>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
            Transformation <span className="gold-text">Gallery</span>
          </h2>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 font-display text-sm uppercase tracking-wide transition-all ${
                filter === cat ? "gold-gradient text-primary-foreground" : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="font-display text-sm uppercase text-foreground">{img.cat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
