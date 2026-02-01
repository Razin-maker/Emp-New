import { Button } from "@/components/ui/button";
import { Play, Github } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-calm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Start with clarity.
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Try EMP. See how discipline feels.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="gap-2 min-w-[180px]" asChild>
              <a href="https://demo-emp.sohub.com.bd/" target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4" />
                Try the Demo
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="gap-2 min-w-[180px]" asChild>
              <a href="https://github.com/Employee-Max-Portal/emp-open-source" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Explore Open Source
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
