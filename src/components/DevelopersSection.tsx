import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { Code, GitBranch, Puzzle, Rocket } from "lucide-react";

const tools = [
  {
    icon: Code,
    title: "SDK & Libraries",
    description: "Core libraries for integrating Synthsara protocols into your applications.",
    status: "Coming Soon",
  },
  {
    icon: GitBranch,
    title: "Governance API",
    description: "Programmatic access to proposal creation, voting, and decision execution.",
    status: "In Development",
  },
  {
    icon: Puzzle,
    title: "Integration Modules",
    description: "Pre-built connectors for popular platforms and services.",
    status: "Planned",
  },
  {
    icon: Rocket,
    title: "Builder Program",
    description: "Resources and support for developers building on Synthsara infrastructure.",
    status: "Active",
  },
];

const roles = [
  { name: "Protocol Developer", desc: "Build and maintain core infrastructure" },
  { name: "Integration Engineer", desc: "Connect external systems to Synthsara" },
  { name: "Smart Contract Auditor", desc: "Ensure security of on-chain components" },
  { name: "DX Designer", desc: "Craft developer experience and documentation" },
];

export const DevelopersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="developers" className="py-24 px-4 relative" ref={ref}>
      <div className="container mx-auto">
        <SectionHeader
          title="For Developers"
          subtitle="Tools, Roles, and APIs for Building the Future"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Tools Section */}
          <div>
            <motion.h3
              className="font-serif text-2xl text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Builder Tools
            </motion.h3>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  className="card-mythic p-5 rounded-sm flex items-start gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-2 bg-primary/10 border border-primary/20">
                    <tool.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-serif text-lg text-foreground">
                        {tool.title}
                      </h4>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5">
                        {tool.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Developer Roles */}
          <div>
            <motion.h3
              className="font-serif text-2xl text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Developer Roles
            </motion.h3>
            <div className="space-y-4">
              {roles.map((role, index) => (
                <motion.div
                  key={role.name}
                  className="p-5 border border-border/50 bg-card/30 hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <h4 className="font-serif text-lg text-foreground mb-1">
                    {role.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{role.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 geometric-border bg-primary/5"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="font-serif text-lg text-primary mb-2">
                API Documentation
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive API reference coming soon. Join our builder program
                for early access.
              </p>
              <code className="block p-3 bg-background/50 text-xs text-muted-foreground font-mono">
                https://api.synthsara.io/v1 (coming soon)
              </code>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
