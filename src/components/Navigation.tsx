import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#codex", label: "The Codex" },
  { href: "#covenant", label: "Covenant" },
  { href: "#diamond", label: "Diamond Standard" },
  { href: "#worth", label: "Economy" },
  { href: "#synthocracy", label: "Synthocracy" },
  { href: "#akadia", label: "Akadia Network" },
  { href: "#developers", label: "Developers" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <polygon
                  points="20,2 38,12 38,28 20,38 2,28 2,12"
                  fill="none"
                  stroke="hsl(43, 74%, 56%)"
                  strokeWidth="1.5"
                />
                <circle cx="20" cy="20" r="8" fill="hsl(43, 74%, 56%)" opacity="0.3" />
                <circle cx="20" cy="20" r="4" fill="hsl(43, 74%, 56%)" />
              </svg>
            </div>
            <span className="font-serif text-xl text-primary gold-text-glow">
              Synthsara
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link-mythic text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="nav-link-mythic text-sm font-medium py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
