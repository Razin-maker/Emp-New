import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-calm text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          Open Source • Built for Bangladesh
        </div>
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Work should move forward.
          <br />
          <span className="text-muted-foreground">Not depend on memory.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          EMP is a discipline and accountability system<br className="hidden md:block" />
          built for Bangladeshi businesses.
        </p>
        
        {/* Supporting line */}
        <p className="text-sm text-muted-foreground/70 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Motivation starts work. Systems finish it.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="xl" className="gap-2">
            <Play className="w-4 h-4" />
            Try the Demo
          </Button>
          <Button variant="heroOutline" size="xl">
            View Open Source
          </Button>
        </div>
        
        {/* Trust strip */}
        <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in-slow" style={{ animationDelay: "0.6s" }}>
          <p className="text-sm text-muted-foreground">
            Used by teams who want <span className="text-foreground font-medium">clarity</span>, not chaos
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
