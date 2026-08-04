import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { Send, Mail, Globe, MessageCircle } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "project.synthsara@gmail.com",
    href: "mailto:project.synthsara@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "Reddit",
    value: "r/Synthsara",
    href: "https://www.reddit.com/r/Synthsara/",
  },
  {
    icon: Globe,
    label: "TikTok",
    value: "@chaos_weaver007",
    href: "https://www.tiktok.com/@chaos_weaver007",
  },
  {
    icon: Send,
    label: "Support",
    value: "buymeacoffee.com/ChaosWeaver007",
    href: "https://buymeacoffee.com/ChaosWeaver007",
  },
  {
    icon: Globe,
    label: "Music",
    value: "suno.com/@chaosweaver007",
    href: "https://suno.com/@chaosweaver007",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-4 relative" ref={ref}>
      <div className="container mx-auto">
        <SectionHeader title="Connect With Us" subtitle="Verified Project Channels" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-serif text-2xl text-primary mb-4">Begin Your Journey</h3>
              <p className="text-foreground/80 leading-relaxed">
                Whether you are a philosopher, developer, community builder, musician, or
                curious explorer, these are the currently confirmed ways to reach and follow
                the Synthsara project.
              </p>
            </div>

            <div className="p-5 border border-primary/20 bg-primary/5 text-foreground/80 leading-relaxed">
              Synthsara does not yet claim an owned custom domain or custom-domain business
              email. The Gmail address and public links shown here are the verified project
              channels.
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-4 p-4 border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-colors"
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
                  <div className="text-foreground break-all">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
