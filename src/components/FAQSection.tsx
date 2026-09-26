import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What are the gym operating hours?", a: "We are open 24/7 for Standard and Premium members. Basic members can access the gym from 6 AM to 10 PM." },
  { q: "Do you offer a free trial?", a: "Yes! We offer a free 1-day trial. Just visit us or book online through our contact form." },
  { q: "Is personal training included in membership?", a: "Personal training is included in the Premium plan. Standard members can add it for an additional fee." },
  { q: "Do you provide diet plans?", a: "Yes, our certified nutritionists provide customized diet plans for Standard and Premium members." },
  { q: "What age groups do you accept?", a: "We welcome members aged 16 and above. Members under 18 require parental consent." },
  { q: "Can I freeze my membership?", a: "Yes, memberships can be frozen for up to 30 days per year with prior notice." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" style={{ background: "hsl(var(--dark-elevated))" }}>
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">FAQ</p>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
              >
                <AccordionItem value={`item-${i}`} className="glass rounded-lg border-border/50 px-6">
                  <AccordionTrigger className="font-display text-left text-base font-semibold uppercase text-foreground hover:text-primary hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
