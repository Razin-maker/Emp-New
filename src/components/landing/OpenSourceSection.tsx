import { Server, Settings, GitBranch, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Server, text: "Self-host" },
  { icon: Settings, text: "Customize" },
  { icon: GitBranch, text: "Contribute" },
  { icon: TrendingUp, text: "Grow with it" },
];

const OpenSourceSection = () => {
  return (
    <section id="open-source" className="section-padding bg-secondary/30">
      <div className="container-calm">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Open source from day one.
            </h2>
            <p className="text-lg text-muted-foreground">
              EMP is open source because:
            </p>
          </div>
          
          <div className="bg-background rounded-2xl p-8 md:p-10 border border-border/50 mb-10">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-foreground">Trust matters in Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-foreground">Businesses need flexibility</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-foreground">Systems should be transparent</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center mb-10">
            <p className="text-muted-foreground mb-6">You can:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-background border border-border"
                >
                  <benefit.icon className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border">
            <p className="text-lg text-muted-foreground">No lock-in.</p>
            <p className="text-lg font-medium text-foreground">No black box.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
