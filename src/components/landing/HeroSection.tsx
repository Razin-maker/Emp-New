import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <AuroraBackground className="!h-auto !min-h-0 pt-18 pb-20 md:pt-30 md:pb-28 !bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 container-calm text-center"
      >
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          Employee Max Portal
        </div>
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
          Work should move forward.
          <br />
          <span className="text-muted-foreground">Not depend on memory.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          EMP is a discipline and accountability system<br className="hidden md:block" />
          built for Bangladeshi businesses.
        </p>
        
        {/* Supporting line */}
        <p className="text-sm text-muted-foreground/70 mb-10">
          Motivation starts work. Systems finish it.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl" className="gap-2" asChild>
            <a href="https://demo-emp.sohub.com.bd/" target="_blank" rel="noopener noreferrer">
              <Play className="w-4 h-4" />
              Try the Demo
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="https://github.com/Employee-Max-Portal/emp-open-source" target="_blank" rel="noopener noreferrer">
              View Open Source
            </a>
          </Button>
        </div>
        
        {/* Trust strip */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Used by teams who want <span className="text-foreground font-medium">clarity</span>, not chaos
          </p>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default HeroSection;
