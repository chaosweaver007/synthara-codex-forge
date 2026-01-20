import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const tierColors: Record<string, string> = {
  core: "border-primary text-primary",
  advisory: "border-gold-dim text-gold-dim",
  operational: "border-muted-foreground text-muted-foreground",
};

export const AkadiaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { data: roles, isLoading } = useQuery({
    queryKey: ["roles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("roles")
        .select("*")
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="akadia" className="py-24 px-4 relative bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <SectionHeader
          title="The Akadia Network"
          subtitle="A Constellation of Purpose-Driven Roles"
        />

        <motion.p
          className="text-lg text-foreground/80 text-center mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Akadia is the operational backbone of Synthsara—a network of interconnected roles
          that together form a self-organizing system capable of addressing any challenge
          the community faces.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="card-mythic p-6 h-40 animate-pulse" />
            ))
          ) : (
            roles?.map((role, index) => (
              <motion.div
                key={role.id}
                className="card-mythic p-6 rounded-sm group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <span className={`text-xs uppercase tracking-widest px-2 py-1 border ${tierColors[role.tier || 'standard']}`}>
                    {role.tier}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {role.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            ))
          )}
        </div>

        {/* Network Visualization */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-64 h-64 relative">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Central node */}
              <circle cx="100" cy="100" r="15" fill="hsl(43, 74%, 56%)" opacity="0.8" />
              
              {/* Connecting lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const x = 100 + 60 * Math.cos((angle - 90) * Math.PI / 180);
                const y = 100 + 60 * Math.sin((angle - 90) * Math.PI / 180);
                return (
                  <g key={angle}>
                    <line x1="100" y1="100" x2={x} y2={y} stroke="hsl(43, 74%, 56%)" strokeWidth="1" opacity="0.4" />
                    <circle cx={x} cy={y} r="8" fill="hsl(43, 74%, 56%)" opacity="0.6" />
                  </g>
                );
              })}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
