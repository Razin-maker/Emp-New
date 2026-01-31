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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                      <p className="text-sm font-medium text-foreground">Review inventory list</p>
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
      </div>
    </section>
  );
};

export default ProductPreviewSection;
