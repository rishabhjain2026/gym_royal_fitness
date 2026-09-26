import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const FloatingJoinButton = () => (
  <motion.a
    href="#pricing"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gold-gradient shadow-lg shadow-primary/30 transition-transform hover:scale-110 md:h-auto md:w-auto md:rounded-md md:px-5 md:py-3"
  >
    <Zap size={20} className="text-primary-foreground md:mr-2" />
    <span className="hidden font-display text-sm font-bold uppercase tracking-wider text-primary-foreground md:inline">
      Join Now
    </span>
  </motion.a>
);

export default FloatingJoinButton;
