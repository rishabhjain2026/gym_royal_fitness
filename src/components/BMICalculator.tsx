import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calculator } from "lucide-react";

const BMICalculator = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) setBmi(parseFloat((w / (h * h)).toFixed(1)));
  };

  const getCategory = (b: number) => {
    if (b < 18.5) return { label: "Underweight", color: "text-blue-400" };
    if (b < 25) return { label: "Normal", color: "text-green-400" };
    if (b < 30) return { label: "Overweight", color: "text-yellow-400" };
    return { label: "Obese", color: "text-red-400" };
  };

  return (
    <section className="section-padding" style={{ background: "hsl(var(--dark-elevated))" }}>
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto max-w-lg"
        >
          <div className="mb-8 text-center">
            <Calculator className="mx-auto mb-3 h-10 w-10 text-primary" />
            <h2 className="font-display text-3xl font-bold uppercase text-foreground">
              BMI <span className="gold-text">Calculator</span>
            </h2>
          </div>
          <div className="glass rounded-xl p-8">
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-xs uppercase text-muted-foreground">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="170"
                  className="w-full rounded-md border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase text-muted-foreground">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="70"
                  className="w-full rounded-md border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
            </div>
            <button
              onClick={calculate}
              className="gold-gradient w-full rounded-md py-3 font-display font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
            >
              Calculate BMI
            </button>
            {bmi !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center"
              >
                <p className="font-display text-5xl font-bold text-primary">{bmi}</p>
                <p className={`mt-2 font-display text-lg font-semibold uppercase ${getCategory(bmi).color}`}>
                  {getCategory(bmi).label}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BMICalculator;
