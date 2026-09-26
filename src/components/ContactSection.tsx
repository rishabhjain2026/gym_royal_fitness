import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-[0.3em] text-primary">Get In Touch</p>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
            Contact <span className="gold-text">Us</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-8 space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "Royal City, Vidisha, Madhya Pradesh" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "info@royalfitness.in" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-6 py-3 font-display font-semibold uppercase tracking-wide text-foreground transition-transform hover:scale-105"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>

            <div className="mt-8 overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.123456789!2d77.81!3d23.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMxJzEyLjAiTiA3N8KwNDgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Royal Fitness Location"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass rounded-xl p-8 space-y-4"
          >
            {[
              { name: "name" as const, label: "Name *", type: "text", placeholder: "Your Name" },
              { name: "email" as const, label: "Email *", type: "email", placeholder: "your@email.com" },
              { name: "phone" as const, label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
            ].map((field) => (
              <div key={field.name}>
                <label className="mb-1 block text-xs uppercase text-muted-foreground">{field.label}</label>
                <input
                  type={field.type}
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  placeholder={field.placeholder}
                  maxLength={field.name === "name" ? 100 : field.name === "email" ? 255 : 20}
                  className="w-full rounded-md border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
            ))}
            <div>
              <label className="mb-1 block text-xs uppercase text-muted-foreground">Message *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can we help you?"
                rows={4}
                maxLength={1000}
                className="w-full resize-none rounded-md border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="gold-gradient w-full rounded-md py-3 font-display font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
