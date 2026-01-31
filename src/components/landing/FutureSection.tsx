import { Cloud, Sparkles, Bell, LineChart } from "lucide-react";

const futureFeatures = [
  { icon: Cloud, text: "Cloud-hosted versions" },
  { icon: Sparkles, text: "AI-powered insights" },
  { icon: Bell, text: "Smart reminders based on behavior" },
  { icon: LineChart, text: "Predictive delay detection" },
];

const FutureSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-calm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
            Built for today.
          </h2>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-8">
            Designed for tomorrow.
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            EMP starts as a discipline system. Next, we will add:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {futureFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-secondary/50 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground text-left">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground mb-2">But the foundation stays the same:</p>
            <p className="text-xl font-semibold text-foreground">
              Clear work. Clear ownership. Clear execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
