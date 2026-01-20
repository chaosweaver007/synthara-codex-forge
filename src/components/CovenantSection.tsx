import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const CovenantSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { data: facets, isLoading } = useQuery({
    queryKey: ["governance_facets"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("governance_facets")
        .select("*")
        .order("facet_index");
      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="covenant" className="py-24 px-4 relative bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <SectionHeader
          title="The Covenant of Light"
          subtitle="Nine Facets of Ethical Governance"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {isLoading ? (
            Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="card-mythic p-6 h-48 animate-pulse" />
            ))
          ) : (
            facets?.map((facet, index) => (
              <motion.div
                key={facet.id}
                className="card-mythic p-6 rounded-sm group hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl text-primary opacity-70">{facet.icon}</span>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      Facet {facet.facet_index}
                    </div>
                    <h3 className="font-serif text-lg text-primary">
                      {facet.name}
                    </h3>
                  </div>
                </div>
                <div className="text-sm text-foreground/80 mb-2 font-medium">
                  {facet.meaning}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {facet.description}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
