import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "999",
    period: "/month",
    features: ["Gym access (6AM–10PM)", "Basic equipment", "Locker room access", "Free Wi-Fi"],
    featured: false,
  },
  {
    name: "Standard",
    price: "1,999",
    period: "/month",
    features: ["24/7 gym access", "All equipment", "Group classes", "Diet consultation", "Locker room & shower"],
    featured: true,
  },
  {
    name: "Premium",
    price: "3,499",
    period: "/month",
    features: ["24/7 gym access", "Personal trainer", "Custom diet plan", "All group classes", "Spa & sauna", "Priority support"],
    featured: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding" style={{ background: "hsl(var(--dark-elevated))" }}>
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">Membership</p>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
            Choose Your <span className="gold-text">Plan</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-xl p-8 transition-transform hover:scale-105 ${
                plan.featured
                  ? "border-2 border-primary gold-border-glow bg-card"
                  : "glass"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 gold-gradient rounded-full px-4 py-1">
                  <Star size={14} className="text-primary-foreground" />
                  <span className="text-xs font-bold uppercase text-primary-foreground">Recommended</span>
                </div>
              )}
              <h3 className="font-display text-2xl font-bold uppercase text-foreground">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="font-display text-5xl font-bold text-primary">₹{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full rounded-md py-3 text-center font-display font-bold uppercase tracking-wider transition-all ${
                  plan.featured
                    ? "gold-gradient text-primary-foreground hover:scale-105"
                    : "border border-primary/50 text-primary hover:bg-primary/10"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
