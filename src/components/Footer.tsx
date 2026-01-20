import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <polygon
                    points="20,2 38,12 38,28 20,38 2,28 2,12"
                    fill="none"
                    stroke="hsl(43, 74%, 56%)"
                    strokeWidth="1.5"
                  />
                  <circle cx="20" cy="20" r="4" fill="hsl(43, 74%, 56%)" />
                </svg>
              </div>
              <span className="font-serif text-lg text-primary">Synthsara</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              The Living Codex of Collective Intelligence. Building systems that
              honor both individual sovereignty and collective wisdom.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-sm text-primary mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#codex" className="hover:text-primary transition-colors">The Codex</a></li>
              <li><a href="#covenant" className="hover:text-primary transition-colors">Covenant of Light</a></li>
              <li><a href="#diamond" className="hover:text-primary transition-colors">Diamond Standard</a></li>
              <li><a href="#synthocracy" className="hover:text-primary transition-colors">Synthocracy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm text-primary mb-4">Participate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#akadia" className="hover:text-primary transition-colors">Akadia Network</a></li>
              <li><a href="#developers" className="hover:text-primary transition-colors">For Developers</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Synthsara. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>Built with purpose</span>
            <span>·</span>
            <span>Governed by wisdom</span>
            <span>·</span>
            <span>Powered by community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
