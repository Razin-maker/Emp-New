import { CheckCircle2, Clock, AlertTriangle, User } from "lucide-react";

const features = [
  { icon: User, text: "Who owns what" },
  { icon: Clock, text: "What is due" },
  { icon: AlertTriangle, text: "What is late" },
  { icon: CheckCircle2, text: "What is done" },
];

const ProductPreviewSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-calm">
        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Product mockup */}
          <div className="order-2 lg:order-1">
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border/50">
              {/* Mock dashboard */}
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-foreground">Task Overview</h4>
                  <span className="text-sm text-muted-foreground">Today</span>
                </div>
                
                {/* Task items */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Update client proposal</p>
                      <p className="text-xs text-muted-foreground">Rahim • Completed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <Clock className="w-5 h-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Prepare monthly report</p>
                      <p className="text-xs text-muted-foreground">Fatima • Due in 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-100">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Daily Machine Check</p>
                      <p className="text-xs text-muted-foreground">Karim • Overdue by 1 day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              See everything at a glance
            </h2>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-lg text-muted-foreground">
                Managers stop chasing.
              </p>
              <p className="text-lg font-medium text-foreground">
                Teams start delivering.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            See everything at a glance
          </h2>
          
          <div className="grid grid-cols-[1.4fr_1fr] gap-3 mb-6">
            {/* Left: Product mockup */}
            <div>
              <div className="bg-secondary/30 rounded-xl p-3 border border-border/50">
                <div className="bg-background rounded-lg p-3 shadow-sm border border-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground text-xs">Task Overview</h4>
                    <span className="text-xs text-muted-foreground">Today</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-2 rounded-lg bg-green-50 border border-green-100">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground leading-tight">Update proposal</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 p-2 rounded-lg bg-primary/5 border border-primary/10">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground leading-tight">Monthly report</p>
                        <p className="text-xs text-muted-foreground">Due in 2h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 p-2 rounded-lg bg-red-50 border border-red-100">
                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground leading-tight">Machine Check</p>
                        <p className="text-xs text-muted-foreground">Overdue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Features */}
            <div>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className={`flex items-start gap-1.5 ${index < 2 ? 'mt-16' : ''}`}>
                    <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-foreground text-xs leading-tight">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-1">
              Managers stop chasing.
            </p>
            <p className="text-sm font-medium text-foreground">
              Teams start delivering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreviewSection;
