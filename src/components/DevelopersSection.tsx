import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { Code, GitBranch, Puzzle, Rocket } from "lucide-react";

const tools = [
  {
    icon: Code,
    title: "SDK & Libraries",
    description: "Core libraries for integrating Synthsara protocols into applications.",
    status: "Planned",
  },
  {
    icon: GitBranch,
    title: "Governance API",
    description: "A proposed interface for accountable proposal and decision workflows.",
    status: "Specification",
  },
  {
    icon: Puzzle,
    title: "Integration Modules",
    description: "Proposed connectors for external platforms and services.",
    status: "Planned",
  },
  {
    icon: Rocket,
    title: "Builder Program",
    description: "Public contribution guidance and developer support are being prepared.",
    status: "Planned",
  },
];

const roles = [
  { name: "Protocol Developer", desc: "Build and maintain core infrastructure" },
  { name: "Integration Engineer", desc: "Connect external systems to Synthsara" },
  { name: "Security Reviewer", desc: "Evaluate code, privacy, and deployment boundaries" },
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
          subtitle="Proposed Tools, Roles, and Contribution Paths"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
                    <div className="flex items-center justify-between mb-1 gap-4">
                      <h4 className="font-serif text-lg text-foreground">{tool.title}</h4>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5">
                        {tool.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

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
                  <h4 className="font-serif text-lg text-foreground mb-1">{role.name}</h4>
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
              <h4 className="font-serif text-lg text-primary mb-2">Developer Documentation</h4>
              <p className="text-sm text-muted-foreground mb-4">
                No public API domain is currently operated. Inspect the repositories and contact
                the project for contribution questions.
              </p>
              <a
                className="block p-3 bg-background/50 text-xs text-primary font-mono break-all hover:underline"
                href="https://github.com/chaosweaver007"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/chaosweaver007
              </a>
              <a
                className="block mt-3 text-sm text-muted-foreground hover:text-foreground"
                href="mailto:project.synthsara@gmail.com"
              >
                project.synthsara@gmail.com
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
