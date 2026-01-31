import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const philosophies = [
  "If it's not written, it doesn't exist.",
  "If no one owns it, no one will do it.",
  "If it's not visible, it's not accountable.",
];

const PhilosophySection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-calm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
            EMP philosophy
          </h2>
          
          <div className="space-y-6 mb-12">
            {philosophies.map((philosophy, index) => (
              <p key={index} className="philosophy-item">
                {philosophy}
              </p>
            ))}
          </div>
          
          <div className="pt-8 border-t border-border mb-8">
            <p className="text-muted-foreground">This is not about pressure.</p>
            <p className="text-xl font-medium text-foreground mt-2">
              This is about <span className="text-primary">clarity</span>.
            </p>
          </div>

          <Button variant="hero" size="lg" asChild>
            <Link to="/why-emp-exists" className="gap-2">
              Why EMP Exists
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
