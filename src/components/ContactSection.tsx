import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Send, Mail, Globe, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message received. We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 relative" ref={ref}>
      <div className="container mx-auto">
        <SectionHeader
          title="Connect With Us"
          subtitle="Join the Conversation"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-serif text-2xl text-primary mb-4">
                Begin Your Journey
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Whether you're a philosopher, developer, community builder, or curious
                explorer—there's a place for you in Synthsara. Reach out to learn how
                you can participate in shaping the future of collective intelligence.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@synthsara.io" },
                { icon: Globe, label: "Website", value: "synthsara.io" },
                { icon: MessageCircle, label: "Community", value: "Discord (Coming Soon)" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 p-4 border border-border/50 bg-card/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="p-2 bg-primary/10 border border-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-foreground">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-serif tracking-wider hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 gold-glow"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
