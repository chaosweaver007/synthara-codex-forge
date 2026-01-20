import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        {/* Animated Diamond Symbol */}
        <motion.div
          className="mb-8 inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-32 h-32 mx-auto relative">
            <motion.svg
              viewBox="0 0 120 120"
              className="w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              {/* Outer hexagon */}
              <polygon
                points="60,5 110,30 110,90 60,115 10,90 10,30"
                fill="none"
                stroke="hsl(43, 74%, 56%)"
                strokeWidth="1"
                opacity="0.5"
              />
              {/* Inner hexagon */}
              <polygon
                points="60,20 95,38 95,82 60,100 25,82 25,38"
                fill="none"
                stroke="hsl(43, 74%, 56%)"
                strokeWidth="1"
                opacity="0.7"
              />
              {/* Center diamond */}
              <polygon
                points="60,35 80,60 60,85 40,60"
                fill="hsl(43, 74%, 56%)"
                opacity="0.3"
              />
              <polygon
                points="60,35 80,60 60,85 40,60"
                fill="none"
                stroke="hsl(43, 74%, 56%)"
                strokeWidth="1.5"
              />
            </motion.svg>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-4 h-4 rounded-full bg-primary gold-glow" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary mb-6 gold-text-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Synthsara
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The Living Codex of Collective Intelligence
        </motion.p>

        {/* Description */}
        <motion.p
          className="max-w-2xl mx-auto text-foreground/80 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          A self-evolving framework for governance, value creation, and purposeful
          collaboration. Where ancient wisdom meets emergent technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href="#codex"
            className="px-8 py-3 bg-primary text-primary-foreground font-serif tracking-wider hover:bg-primary/90 transition-all duration-300 gold-glow"
          >
            Enter the Codex
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-primary/50 text-primary font-serif tracking-wider hover:bg-primary/10 transition-all duration-300"
          >
            Learn the Origins
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary/50" />
        </motion.div>
      </div>
    </section>
  );
};
