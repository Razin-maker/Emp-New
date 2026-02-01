import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Clock, Calendar, DollarSign, BarChart3, CheckSquare, Target, TrendingUp, GraduationCap, RefreshCw, Bell, FileText, Award, ClipboardList, Briefcase, AlertTriangle, LogOut, Package, Server, Users2, Zap, Shield, Smartphone, Bot, Globe, Languages, Link2, Monitor, MessageSquare, Paperclip, Play, Github, Sparkles, Heart, MessageCircle } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const coreModules = [
  {
    icon: Users,
    title: "Employee Management",
    description: "Complete employee lifecycle management from onboarding to exit. Manage profiles, documents, departments, designations, and organizational hierarchy with ease."
  },
  {
    icon: Clock,
    title: "Smart Attendance System",
    description: "Advanced attendance tracking with check-in/check-out, break management, late arrival tracking, and automated reporting. Real-time attendance monitoring across all departments."
  },
  {
    icon: Calendar,
    title: "Leave Management",
    description: "Streamlined leave application and approval workflow with automatic balance calculation, multi-year tracking, and instant notifications via system alerts and email."
  },
  {
    icon: DollarSign,
    title: "Payroll & Compensation",
    description: "Comprehensive payroll processing with salary templates, automatic calculations, advance salary management, salary increments, and instant payslip generation."
  },
  {
    icon: BarChart3,
    title: "Financial Management",
    description: "Complete financial control with cashbook, fund requisition system, expense tracking, and detailed financial reports by department and project."
  },
  {
    icon: CheckSquare,
    title: "Task & Project Tracking",
    description: "Structured issue tracking system with milestones, priorities, assignments, sub-tasks, and real-time collaboration. Track progress from inception to completion.",
    featured: true
  },
  {
    icon: Target,
    title: "Goals & OKR Management",
    description: "Set, track, and achieve organizational goals with milestone tracking, financial metrics, team collaboration, and automated progress monitoring."
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    description: "Comprehensive KPI tracking, competency assessments, 360-degree feedback, performance scoring, and automated performance reviews."
  },
  
  {
    icon: RefreshCw,
    title: "RDC (Recurring Discipline & Compliance)",
    description: "Automate recurring tasks with smart rotation, verification workflows, escalation management, and compliance tracking."
  }
];

const advancedFeatures = [
  {
    icon: Bell,
    title: "Multi-Channel Notifications",
    description: "Stay connected with email, and push notifications. Never miss important updates."
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Centralized repository for SOPs, policies, certificates with version control and secure access."
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Employee awards, champion badges, performance recognition, and certificate management."
  },
  {
    icon: ClipboardList,
    title: "Work Summary System",
    description: "Daily work tracking with task completion logs, team mentions, and productivity analytics."
  },

  {
    icon: AlertTriangle,
    title: "Disciplinary Management",
    description: "Warning system, penalty tracking, and compliance monitoring."
  },
  {
    icon: LogOut,
    title: "Separation Management",
    description: "Streamlined exit process with separation requests and approval workflows."
  },
  {
    icon: Package,
    title: "Shipment Tracking",
    description: "Track shipments, update statuses, monitor completion rates, and maintain activity logs."
  },

  {
    icon: Users2,
    title: "Team Collaboration",
    description: "Team planner, meeting management, and integrated communication tools."
  }
];

const keyHighlights = [
  {
    icon: Zap,
    title: "Real-Time Dashboard",
    description: "Live attendance, task statistics, financial overview, and activity monitoring with role-based views."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Attendance, financial, performance, and productivity reports with custom report generation."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "RBAC, encryption, CSRF protection, session management, and complete audit trails."
  },
  {
    icon: Award,
    title: "Champion Badge",
    description: "Reward and recognize employees who perform well with achievement badges and recognition."
  },
  {
    icon: Bot,
    title: "Automation & AI",
    description: "Smart task assignment, scheduled reminders, auto-calculations, and intelligent escalation.",
    upcoming: true
  },
  {
    icon: Globe,
    title: "Multi-Business Support",
    description: "Centralized control with business-specific configurations and cross-business reporting.",
    upcoming: true
  },
  {
    icon: Smartphone,
    title: "Mobile Integration",
    description: "Full-featured mobile API for iOS and Android with real-time notifications.",
    upcoming: true
  },
  {
    icon: Link2,
    title: "Third-Party Integrations",
    description: "Telegram, Firebase, SMS gateways, email services, and payment gateways.",
    upcoming: true
  }
];

const userExperience = [
  { icon: Monitor, title: "Intuitive Interface", description: "Clean, responsive design for all devices" },
  { icon: Zap, title: "Lightning Fast", description: "Optimized performance with quick load times" },
  { icon: Target, title: "Role-Based Dashboards", description: "Customized views for all user types" },
  { icon: MessageSquare, title: "Smart Mentions", description: "@mention team members with instant notifications" },
  { icon: Paperclip, title: "File Attachments", description: "Secure upload and management for all modules" }
];

const benefits = [
  "Reduce HR Administrative Time Significantly",
  "Eliminate Payroll Errors with Automation",
  "Improve Employee Productivity & Accountability",
  "Real-Time Visibility into Workforce Metrics",
  "Ensure Compliance with Labor Laws",
  "Streamline Approval Workflows",
  "Centralize All HR Data in One Platform",
  "Scale Effortlessly as Your Business Grows"
];

const perfectFor = [
  "Small to Medium Enterprises (SMEs)",
  "Large Corporations with Multiple Businesses",
  "Remote and Hybrid Teams",
  "Project-Based Organizations",
  "Service Industries",
  "IT Companies"
];

const Solution = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0 pb-16">
        {/* Hero Section */}
        <section className="section-padding pt-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container-calm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Open Source Solution
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                SOHUB Employee Management System
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                EMP does not try to change people.
              </p>
              <p className="text-xl font-medium text-foreground mb-8">
                EMP changes the system people work in.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="gap-2" asChild>
                  <a href="https://demo-emp.sohub.com.bd/" target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4" />
                    Try The Demo
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" className="gap-2" asChild>
                  <a href="https://github.com/Employee-Max-Portal/emp-open-source" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Open Source
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Modules */}
        <section className="section-padding">
          <div className="container-calm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Core Modules
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools designed to streamline every aspect of your workforce management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group p-6 rounded-2xl bg-card border hover:shadow-lg transition-all duration-300 ${
                    (module as any).featured 
                      ? 'border-primary ring-2 ring-primary/20 relative' 
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  {(module as any).featured && (
                    <span className="absolute -top-3 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Core Feature
                    </span>
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    (module as any).featured ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/20'
                  }`}>
                    <module.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="section-padding bg-secondary/30">
          <div className="container-calm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Advanced Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Extended capabilities to handle complex organizational needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {advancedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-5 rounded-xl bg-background border border-border hover:border-primary/30 transition-all"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="section-padding">
          <div className="container-calm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Key Highlights
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade features that set us apart
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-center p-6 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border relative ${
                    (highlight as any).upcoming ? 'border-dashed border-primary/50' : 'border-border'
                  }`}
                >
                  {(highlight as any).upcoming && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Coming Soon
                    </span>
                  )}
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Experience */}
        <section className="section-padding bg-secondary/30">
          <div className="container-calm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Exceptional User Experience
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4">
              {userExperience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="section-padding">
          <div className="container-calm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Business Benefits
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Transform your HR operations and unlock measurable improvements across your organization.
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckSquare className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Perfect For</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {perfectFor.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-calm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Technical Excellence
              </h2>
              <p className="text-lg opacity-80">
                Built with industry-leading technologies for reliability and scale
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { label: "Framework", value: "CodeIgniter 3.x" },
                { label: "Database", value: "MySQL Optimized" },
                { label: "Architecture", value: "MVC Pattern" },
                { label: "API", value: "RESTful API" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-background/10 border border-background/20"
                >
                  <p className="text-sm opacity-70 mb-1">{item.label}</p>
                  <p className="font-semibold text-lg">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-calm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Join the Open Source Movement
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                EMP is open source because transparency, flexibility, and trust matter. 
              </p>
              <p className="text-muted-foreground mb-8">
                We invite you to explore, contribute, provide feedback, or simply join the conversation. 
                Together, we can build better systems for Bangladeshi businesses.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button variant="hero" size="xl" className="gap-2" asChild>
                  <a href="https://demo-emp.sohub.com.bd/" target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4" />
                    Try The Demo
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" className="gap-2" asChild>
                  <a href="https://github.com/Employee-Max-Portal/emp-open-source" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Open Source
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Share Feedback
                </span>
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  Contribute
                </span>
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-primary" />
                  Star on GitHub
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground mt-8 italic">
                SOHUB EMP - Empowering Organizations, Enabling People
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solution;
