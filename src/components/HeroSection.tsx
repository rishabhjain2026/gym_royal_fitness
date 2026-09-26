import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Royal Fitness Gym interior" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary"
        >
          Royal City, Vidisha
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 font-display text-5xl font-bold uppercase leading-tight tracking-wide text-foreground md:text-7xl lg:text-8xl"
        >
          Transform Your Body.
          <br />
          <span className="gold-text">Rule Your Fitness.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl font-body text-lg text-muted-foreground"
        >
          Unleash your potential at Vidisha&apos;s most premium fitness destination. World-class equipment, expert trainers, and a community that pushes limits.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#pricing"
            className="gold-gradient rounded-md px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
          >
            Join Now
          </a>
          <a
            href="#contact"
            className="rounded-md border border-primary/50 px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-primary transition-all hover:border-primary hover:bg-primary/10"
          >
            Book Free Trial
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border-2 border-primary/50 p-1">
          <div className="h-2 w-full rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
