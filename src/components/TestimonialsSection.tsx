import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Amit Kumar", text: "Royal Fitness completely transformed my life. Lost 20kg in 6 months with their expert guidance!", rating: 5 },
  { name: "Sneha Gupta", text: "The trainers are incredibly supportive. Best gym in Vidisha, hands down!", rating: 5 },
  { name: "Rohit Jain", text: "Amazing equipment and atmosphere. The personal training program is worth every penny.", rating: 5 },
  { name: "Pooja Sharma", text: "I love the group classes! The community here keeps me motivated every single day.", rating: 4 },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">Testimonials</p>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
            What Members <span className="gold-text">Say</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          <div className="glass rounded-xl p-8 text-center md:p-12">
            <div className="mb-4 flex justify-center gap-1">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="mb-6 font-body text-lg italic text-foreground">"{testimonials[current].text}"</p>
            <p className="font-display text-lg font-bold uppercase text-primary">{testimonials[current].name}</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2 bg-muted"}`} />
              ))}
            </div>
            <button onClick={() => setCurrent((p) => (p + 1) % testimonials.length)} className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
