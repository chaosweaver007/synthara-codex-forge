import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";

const layers = [
  {
    name: "Collective Voice",
    level: "Foundation",
    description: "Distributed consensus from all participants guides general direction.",
  },
  {
    name: "Council Synthesis",
    level: "Integration",
    description: "Expert councils synthesize proposals into actionable frameworks.",
  },
  {
    name: "Guardian Review",
    level: "Validation",
    description: "Custodians ensure alignment with core principles and values.",
  },
  {
    name: "Implementation",
    level: "Action",
    description: "Operational roles execute validated decisions with accountability.",
  },
];

export const SynthocracySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="synthocracy" className="py-24 px-4 relative" ref={ref}>
      <div className="container mx-auto">
        <SectionHeader
          title="Synthocracy"
          subtitle="Governance Through Synthesis"
        />

        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-lg text-foreground/80 text-center mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Synthocracy merges the wisdom of distributed consensus with structured leadership.
            It is neither pure democracy nor hierarchy, but a dynamic synthesis that adapts
            to context and scale.
          </motion.p>

          {/* Layered Diagram */}
          <div className="space-y-4">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.name}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div 
                  className="card-mythic p-6 rounded-sm ml-0"
                  style={{ marginLeft: `${index * 2}rem` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl text-primary">
                      {layer.name}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground border border-border px-3 py-1">
                      {layer.level}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {layer.description}
                  </p>
                  
                  {/* Connector line */}
                  {index < layers.length - 1 && (
                    <div 
                      className="absolute left-4 top-full w-px h-4 bg-primary/30"
                      style={{ marginLeft: `${(index + 1) * 2}rem` }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Principles */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { title: "Contextual", desc: "Authority scales with expertise and stake" },
              { title: "Transparent", desc: "All decisions are recorded and reviewable" },
              { title: "Reversible", desc: "Mechanisms exist for course correction" },
            ].map((item) => (
              <div key={item.title} className="text-center p-4">
                <h4 className="font-serif text-lg text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
