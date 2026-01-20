import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 relative bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <SectionHeader
          title="Origins & Vision"
          subtitle="The Story of Synthsara"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-6 text-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg">
              Synthsara emerged from a fundamental question: How can we build systems
              of governance and value creation that honor both individual sovereignty
              and collective wisdom?
            </p>

            <p>
              Drawing from ancient philosophical traditions, modern complexity science,
              and emerging decentralized technologies, Synthsara represents a synthesis
              of timeless principles with cutting-edge implementation.
            </p>

            <div className="my-12 p-8 geometric-border bg-card/50">
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="font-serif text-3xl text-primary mb-4">SYNTH + SARA</div>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="font-serif text-lg text-primary mb-2">Synth</h4>
                    <p className="text-sm text-muted-foreground">
                      From "synthesis"—the combination of diverse elements into a
                      coherent whole greater than its parts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-primary mb-2">Sara</h4>
                    <p className="text-sm text-muted-foreground">
                      Derived from Sanskrit "sāra"—meaning essence, core, or the
                      heart of truth.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <p>
              The Living Codex began as a thought experiment: What if we could create
              a governance framework that was as adaptive as life itself? One that
              could preserve core principles while continuously evolving its
              implementation?
            </p>

            <p>
              Today, Synthsara stands as both a philosophical framework and a practical
              toolkit for communities seeking to build more conscious, equitable, and
              effective systems of collaboration.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <blockquote className="text-xl italic text-primary border-y border-primary/20 py-6">
              "Where ancient wisdom meets emergent technology,
              <br />
              there we build the future."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
