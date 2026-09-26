import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Users, Flame, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: 2500, suffix: "+", label: "Active Members" },
  { icon: Trophy, value: 15, suffix: "+", label: "Expert Trainers" },
  { icon: Flame, value: 1200, suffix: "+", label: "Transformations" },
  { icon: Clock, value: 8, suffix: "+", label: "Years Experience" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">Who We Are</p>
          <h2 className="mb-6 font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
            More Than a Gym — <span className="gold-text">A Legacy</span>
          </h2>
          <p className="font-body text-lg leading-relaxed text-muted-foreground">
            At Royal Fitness, we believe fitness is a lifestyle. Located in the heart of Royal City, Vidisha, we've been transforming lives for over 8 years with state-of-the-art equipment, certified trainers, and a community that motivates you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass gold-border-glow rounded-xl p-6 text-center"
            >
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <p className="font-display text-3xl font-bold text-foreground md:text-4xl">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 font-body text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
