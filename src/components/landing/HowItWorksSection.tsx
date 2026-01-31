import { User, Calendar, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: User,
    title: "One task. One owner.",
    description: "Every task has exactly one responsible person. No confusion about who's accountable.",
    highlight: "Clear ownership",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Every owner has a deadline.",
    description: "No deadline means no real task. Every commitment comes with a clear timeline.",
    highlight: "Time-bound",
  },
  {
    number: "03",
    icon: Eye,
    title: "Everything is visible.",
    description: "No guessing. No chasing. No excuses. Full transparency for everyone involved.",
    highlight: "Total visibility",
  },
];

const benefits = [
  "No more WhatsApp chaos",
  "No more forgotten tasks",
  "No more blame games",
  "No more endless follow-ups",
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-calm">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Simple & Effective
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            How EMP Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple principles that transform how your team operates.
            No complexity. No learning curve.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-secondary/50 rounded-2xl p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                  <CheckCircle2 className="w-3 h-3" />
                  {step.highlight}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-border" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Benefits strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              The result?
            </h3>
            <p className="text-muted-foreground">
              Work that moves forward without drama
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-background rounded-lg px-4 py-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Bottom note */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-2xl font-semibold text-foreground mb-2">
            That's it.
          </p>
          <p className="text-lg text-muted-foreground">
            No complexity. No noise. Just <span className="text-primary font-medium">clarity</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
