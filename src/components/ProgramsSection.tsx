import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Flame, UserCheck, Trophy, HeartPulse, Zap } from "lucide-react";

const programs = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build raw power with progressive overload techniques and expert coaching." },
  { icon: Flame, title: "Weight Loss", desc: "Burn fat efficiently with customized cardio and nutrition plans." },
  { icon: UserCheck, title: "Personal Training", desc: "One-on-one sessions tailored to your fitness level and goals." },
  { icon: Trophy, title: "Bodybuilding", desc: "Sculpt your dream physique with competition-level training programs." },
  { icon: HeartPulse, title: "Cardio Training", desc: "Improve heart health and endurance with dynamic cardio workouts." },
  { icon: Zap, title: "Functional Fitness", desc: "Enhance everyday performance with movement-based training." },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="section-padding" style={{ background: "hsl(var(--dark-elevated))" }}>
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">What We Offer</p>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
            Our <span className="gold-text">Programs</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass rounded-xl p-8 transition-all duration-300 hover:border-primary/50 hover:gold-border-glow"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <p.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold uppercase text-foreground">{p.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
