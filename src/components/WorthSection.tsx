import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { Coins, TrendingUp, Heart, Award } from "lucide-react";

const principles = [
  {
    icon: Coins,
    title: "Beyond Currency",
    description: "WORTH is not money—it is recognition. A quantification of contribution that transcends traditional monetary systems.",
  },
  {
    icon: TrendingUp,
    title: "Regenerative Value",
    description: "Value creation that enriches rather than depletes, building sustainable cycles of contribution and reward.",
  },
  {
    icon: Heart,
    title: "Intrinsic Recognition",
    description: "Acknowledging the true impact of actions on collective well-being, not just their market value.",
  },
  {
    icon: Award,
    title: "Merit-Based Distribution",
    description: "Resources flow to those who demonstrate consistent positive impact through verifiable contributions.",
  },
];

export const WorthSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="worth" className="py-24 px-4 relative bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <SectionHeader
          title="The Economy of WORTH"
          subtitle="Redefining Value in the Digital Age"
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-6 py-3 border border-primary/30 bg-primary/5 mb-6">
              <span className="font-serif text-2xl text-primary tracking-widest">WORTH</span>
            </div>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Wisdom · Originality · Resilience · Trust · Harmony
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="card-mythic p-6 rounded-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 border border-primary/20">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 p-8 geometric-border bg-card/50 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg text-foreground/80 italic">
              "In the Economy of WORTH, every contribution matters. Every act of creation,
              every moment of support, every spark of inspiration adds to the collective wealth."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
