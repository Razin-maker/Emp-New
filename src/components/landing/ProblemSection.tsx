import { AlertCircle, Users, Clock, MessageSquare, Loader2 } from "lucide-react";

const problems = [
  { icon: MessageSquare, text: "Tasks are given verbally" },
  { icon: Users, text: "Responsibility is not clear" },
  { icon: Clock, text: "Deadlines are forgotten" },
  { icon: Loader2, text: "Managers keep following up" },
  { icon: AlertCircle, text: "Everyone feels busy, nothing moves" },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-background">
      <div className="container-calm">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            The problem is not people.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bangladeshi businesses are full of motivated people.<br />
            But work still breaks.
          </p>
        </div>
        
        {/* Why? */}
        <div className="max-w-xl mx-auto mb-16">
          <h3 className="text-xl font-medium text-foreground text-center mb-8">Why?</h3>
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{problem.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Conclusion */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            This is not a motivation problem.
          </p>
          <p className="text-xl font-medium text-foreground mt-2">
            This is a <span className="text-primary">system problem</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
