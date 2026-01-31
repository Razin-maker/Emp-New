import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, DollarSign, CheckSquare, Target, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Users, title: "Employee Management", description: "Complete lifecycle management" },
  { icon: Clock, title: "Smart Attendance", description: "QR code & real-time tracking" },
  { icon: DollarSign, title: "Payroll & Finance", description: "Automated calculations" },
  { icon: CheckSquare, title: "Task Tracking", description: "Projects & milestones" },
  { icon: Target, title: "Goals & OKR", description: "Track organizational goals" },
  { icon: TrendingUp, title: "Performance", description: "KPI & 360° feedback" },
];

const SolutionPreviewSection = () => {
  return (
    <section id="solution" className="section-padding bg-secondary/30">
      <div className="container-calm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Complete Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            SOHUB Employee Management System
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete enterprise HR & workforce management solution designed to transform how your organization operates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/solution">
            <Button variant="hero" size="lg" className="gap-2">
              View Complete Solution
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionPreviewSection;
