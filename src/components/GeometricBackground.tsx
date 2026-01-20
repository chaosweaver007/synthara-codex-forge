import { motion } from "framer-motion";

export const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45"
        animate={{ rotate: [45, 90, 45], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-24 h-24"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="hsl(43, 74%, 56%)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-1/4 w-48 h-48"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(43, 74%, 56%)"
            strokeWidth="0.3"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="hsl(43, 74%, 56%)"
            strokeWidth="0.3"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            fill="none"
            stroke="hsl(43, 74%, 56%)"
            strokeWidth="0.3"
          />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 right-10 w-16 h-16 border border-primary/30"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Diamond pattern */}
      <motion.div
        className="absolute bottom-20 right-1/3 w-20 h-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,50 50,90 10,50"
            fill="none"
            stroke="hsl(43, 74%, 56%)"
            strokeWidth="0.5"
            opacity="0.25"
          />
        </svg>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
};
