import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, HeartPulse, Lock, UserCheck, Apple, Wifi, ShowerHead, Car } from "lucide-react";

const facilities = [
  { icon: Dumbbell, label: "Modern Equipment" },
  { icon: HeartPulse, label: "Cardio Zone" },
  { icon: Lock, label: "Locker Room" },
  { icon: UserCheck, label: "Personal Coaching" },
  { icon: Apple, label: "Diet Guidance" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: ShowerHead, label: "Shower & Spa" },
  { icon: Car, label: "Free Parking" },
];

const FacilitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" style={{ background: "hsl(var(--dark-elevated))" }}>
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">Facilities</p>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
            World-Class <span className="gold-text">Amenities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {facilities.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col items-center gap-3 rounded-xl p-6 transition-all hover:bg-card"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
