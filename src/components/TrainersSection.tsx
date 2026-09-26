import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const trainers = [
  { name: "Rajesh Sharma", role: "Strength & Conditioning", exp: "10+ years", initials: "RS" },
  { name: "Priya Patel", role: "Yoga & Functional", exp: "8+ years", initials: "PP" },
  { name: "Vikram Singh", role: "Bodybuilding Coach", exp: "12+ years", initials: "VS" },
  { name: "Anita Verma", role: "Cardio & Weight Loss", exp: "6+ years", initials: "AV" },
];

const TrainersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trainers" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">Meet The Team</p>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
            Expert <span className="gold-text">Trainers</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="group glass rounded-xl overflow-hidden text-center"
            >
              <div className="relative h-56 bg-secondary flex items-center justify-center overflow-hidden">
                <span className="font-display text-6xl font-bold text-primary/30 transition-transform group-hover:scale-110">
                  {t.initials}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold uppercase text-foreground">{t.name}</h3>
                <p className="text-sm text-primary">{t.role}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.exp}</p>
                <div className="mt-4 flex justify-center gap-3">
                  {[Instagram, Facebook, Twitter].map((Icon, j) => (
                    <button key={j} className="rounded-full bg-secondary p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
