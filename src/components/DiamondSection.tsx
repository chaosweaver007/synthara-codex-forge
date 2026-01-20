import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";

const dimensions = [
  { name: "Economic", angle: 0, description: "Tangible resources and financial contributions" },
  { name: "Social", angle: 60, description: "Community building and relationship capital" },
  { name: "Intellectual", angle: 120, description: "Knowledge creation and innovation" },
  { name: "Creative", angle: 180, description: "Artistic expression and design thinking" },
  { name: "Spiritual", angle: 240, description: "Purpose alignment and ethical grounding" },
  { name: "Temporal", angle: 300, description: "Time invested and sustained commitment" },
];

export const DiamondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diamond" className="py-24 px-4 relative" ref={ref}>
      <div className="container mx-auto">
        <SectionHeader
          title="The Universal Diamond Standard"
          subtitle="A Multi-Dimensional Value Assessment Framework"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Interactive Diamond Diagram */}
          <motion.div
            className="relative aspect-square max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Outer rings */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="hsl(43, 74%, 56%)" strokeWidth="0.5" opacity="0.3" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="hsl(43, 74%, 56%)" strokeWidth="0.5" opacity="0.4" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="hsl(43, 74%, 56%)" strokeWidth="0.5" opacity="0.5" />
              
              {/* Hexagon lines */}
              {dimensions.map((dim, i) => {
                const x1 = 200 + 180 * Math.cos((dim.angle - 90) * Math.PI / 180);
                const y1 = 200 + 180 * Math.sin((dim.angle - 90) * Math.PI / 180);
                return (
                  <line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={x1}
                    y2={y1}
                    stroke="hsl(43, 74%, 56%)"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                );
              })}

              {/* Central diamond */}
              <motion.polygon
                points="200,120 280,200 200,280 120,200"
                fill="hsl(43, 74%, 56%)"
                opacity="0.2"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <polygon
                points="200,120 280,200 200,280 120,200"
                fill="none"
                stroke="hsl(43, 74%, 56%)"
                strokeWidth="2"
              />

              {/* Dimension labels */}
              {dimensions.map((dim, i) => {
                const x = 200 + 160 * Math.cos((dim.angle - 90) * Math.PI / 180);
                const y = 200 + 160 * Math.sin((dim.angle - 90) * Math.PI / 180);
                return (
                  <motion.g
                    key={dim.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  >
                    <circle cx={x} cy={y} r="8" fill="hsl(43, 74%, 56%)" opacity="0.8" />
                    <text
                      x={x}
                      y={y + 25}
                      textAnchor="middle"
                      fill="hsl(43, 74%, 56%)"
                      fontSize="12"
                      fontFamily="Cinzel, serif"
                    >
                      {dim.name}
                    </text>
                  </motion.g>
                );
              })}
            </svg>
          </motion.div>

          {/* Description */}
          <div className="space-y-6">
            <motion.p
              className="text-lg text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The Diamond Standard provides a comprehensive methodology for evaluating 
              worth across multiple dimensions—not just economic, but social, intellectual, 
              creative, and spiritual contributions to the collective.
            </motion.p>

            <div className="grid gap-4">
              {dimensions.map((dim, i) => (
                <motion.div
                  key={dim.name}
                  className="flex items-center gap-4 p-3 bg-secondary/50 border border-border/50"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div>
                    <span className="font-serif text-primary">{dim.name}</span>
                    <span className="text-muted-foreground ml-2">— {dim.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
