import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { BookOpen, Layers, Zap, RefreshCw } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Living Documentation",
    description: "Not static rules, but evolving principles that adapt to community needs while preserving core values.",
  },
  {
    icon: Layers,
    title: "Multi-Layered Structure",
    description: "From foundational axioms to operational protocols, organized for clarity and accessibility.",
  },
  {
    icon: Zap,
    title: "Active Synthesis",
    description: "Continuous integration of new insights through structured governance processes.",
  },
  {
    icon: RefreshCw,
    title: "Self-Correcting",
    description: "Built-in mechanisms for amendment, revision, and evolution based on collective wisdom.",
  },
];

export const CodexSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="codex" className="py-24 px-4 relative" ref={ref}>
      <div className="container mx-auto">
        <SectionHeader
          title="The Living Codex"
          subtitle="A Self-Evolving Framework for Collective Intelligence"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card-mythic p-6 rounded-sm transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 border border-primary/20">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <blockquote className="text-xl italic text-foreground/80 border-l-2 border-primary pl-6">
            "The Codex is not merely a document—it is a dynamic organism of principles,
            protocols, and practices that adapts to the needs of its community while
            preserving its core essence."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
