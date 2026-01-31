import { User, Calendar, Eye } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: User,
    title: "One task. One owner.",
    description: "Every task has exactly one responsible person.",
  },
  {
    number: "2",
    icon: Calendar,
    title: "Every owner has a deadline.",
    description: "No deadline means no real task.",
  },
  {
    number: "3",
    icon: Eye,
    title: "Everything is visible.",
    description: "No guessing. No chasing. No excuses.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="container-calm">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            How EMP Works
          </h2>
          <p className="text-muted-foreground">Simple 3-step model</p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="step-number mx-auto mb-6">
                {step.number}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom note */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-lg text-muted-foreground">
            That's it.
          </p>
          <p className="text-foreground font-medium mt-1">
            No complexity. No noise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
