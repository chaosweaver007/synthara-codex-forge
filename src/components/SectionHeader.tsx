import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader = ({ title, subtitle, centered = true }: SectionHeaderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.div
        className={`section-divider mb-8 ${centered ? "mx-auto" : ""} max-w-xs`}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
