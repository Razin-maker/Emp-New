import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const WhyEmpExists = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-40 pb-16">
        <div className="container-calm max-w-3xl">
          {/* Hero */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            WHY EMP EXISTS
          </h1>

          {/* Origin Story */}
          <section className="mb-16 space-y-6">
            <p className="text-lg text-muted-foreground">We didn't start with software.</p>
            <p className="text-xl font-medium text-foreground">We started with a problem.</p>
            <p className="text-muted-foreground">
              For years, we worked with Bangladeshi businesses —<br />
              small teams, growing companies, busy founders.
            </p>
            <p className="text-foreground font-medium">Everywhere, we saw the same pattern.</p>
            <p className="text-muted-foreground">
              People were motivated.<br />
              People were working hard.<br />
              But work kept breaking.
            </p>
          </section>

          {/* The Problems */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              The same problems, again and again
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                Tasks were discussed, not written
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                Responsibility was not clear
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                Deadlines were forgotten
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                Managers kept following up
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                WhatsApp became the main system
              </li>
            </ul>
            <div className="mt-8 text-muted-foreground">
              <p>Everyone was busy.</p>
              <p>But progress was slow.</p>
            </div>
            <p className="mt-6 text-foreground font-medium">
              This wasn't because people didn't care.
            </p>
          </section>

          {/* Motivation Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Motivation was not the problem.
            </h2>
            <p className="text-muted-foreground mb-4">Bangladesh is full of motivation.</p>
            <p className="text-muted-foreground mb-6">
              Books.<br />
              Speeches.<br />
              Facebook posts.<br />
              Advice everywhere.
            </p>
            <p className="text-xl font-medium text-foreground mb-6">But motivation fades.</p>
            <p className="text-muted-foreground mb-4">When motivation fades, work depends on:</p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Memory</li>
              <li>• Mood</li>
              <li>• Reminders from other people</li>
            </ul>
            <p className="text-foreground">That's when delays, excuses, and stress begin.</p>
          </section>

          {/* Realization */}
          <section className="mb-16 p-8 rounded-2xl bg-secondary/50 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              We realized something important
            </h2>
            <p className="text-xl font-medium text-foreground mb-4">
              People don't fail.<br />
              <span className="text-primary">Systems fail.</span>
            </p>
            <p className="text-muted-foreground">
              When work depends on memory, it breaks.<br />
              When work depends on people chasing people, it breaks.
            </p>
            <p className="text-foreground font-medium mt-4">
              But when work depends on clear systems,<br />
              ordinary people do extraordinary work.
            </p>
          </section>

          {/* Discipline Definition */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Discipline is not pressure.
            </h2>
            <p className="text-muted-foreground mb-4">In many places, discipline sounds harsh.</p>
            <p className="text-foreground font-medium mb-6">To us, discipline means something else.</p>
            <p className="text-muted-foreground mb-4">Discipline means:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                Clear ownership
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                Clear deadlines
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                Clear visibility
              </li>
            </ul>
            <p className="text-muted-foreground mb-4">When things are clear:</p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• There is less tension</li>
              <li>• Less confusion</li>
              <li>• Less conflict</li>
            </ul>
            <p className="text-xl font-medium text-primary">Discipline creates calm.</p>
          </section>

          {/* EMP Birth */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              That's where EMP was born.
            </h2>
            <p className="text-muted-foreground mb-4">EMP was not built to:</p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Motivate people</li>
              <li>• Monitor people</li>
              <li>• Control people</li>
            </ul>
            <p className="text-foreground font-medium mb-4">EMP was built to:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                </span>
                Remove ambiguity
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                </span>
                Replace memory with structure
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                </span>
                Protect motivated people from chaos
              </li>
            </ul>
          </section>

          {/* EMP Guarantees */}
          <section className="mb-16 p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-foreground font-medium mb-4">EMP makes sure:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                Every task has an owner
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                Every owner has a deadline
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                Everything is visible
              </li>
            </ul>
            <p className="text-xl font-medium text-foreground">
              No guessing.<br />
              No chasing.<br />
              No drama.
            </p>
          </section>

          {/* Not HR Tool */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              This is not an HR tool.
            </h2>
            <p className="text-muted-foreground mb-4">Most tools try to manage people.</p>
            <p className="text-xl font-medium text-primary mb-6">EMP designs how work behaves.</p>
            <p className="text-muted-foreground mb-4">It answers simple questions:</p>
            <ul className="space-y-2 text-foreground mb-6">
              <li>• Who owns this?</li>
              <li>• When is it due?</li>
              <li>• What is the current status?</li>
            </ul>
            <p className="text-foreground">
              When these answers are clear,<br />
              work moves naturally.
            </p>
          </section>

          {/* Open Source */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Why open source?
            </h2>
            <p className="text-xl font-medium text-foreground mb-6">Because trust matters.</p>
            <p className="text-muted-foreground mb-4">Bangladeshi businesses need:</p>
            <ul className="space-y-2 text-foreground mb-6">
              <li>• Transparency</li>
              <li>• Flexibility</li>
              <li>• Control</li>
            </ul>
            <p className="text-muted-foreground mb-4">EMP is open source so that:</p>
            <ul className="space-y-2 text-foreground mb-6">
              <li>• Anyone can inspect it</li>
              <li>• Anyone can adapt it</li>
              <li>• Anyone can grow with it</li>
            </ul>
            <p className="text-foreground font-medium">
              Discipline should not be locked behind paywalls.
            </p>
          </section>

          {/* Future */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Built for Bangladesh. Ready for the future.
            </h2>
            <p className="text-muted-foreground mb-4">
              EMP is designed for real Bangladeshi businesses today.
            </p>
            <p className="text-muted-foreground mb-6">
              Simple teams.<br />
              Limited resources.<br />
              High responsibility.
            </p>
            <p className="text-foreground font-medium mb-4">In the future, EMP will grow:</p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Cloud versions</li>
              <li>• AI-powered insights</li>
              <li>• Smarter predictions</li>
            </ul>
            <p className="text-foreground font-medium">
              But the foundation will never change.
            </p>
          </section>

          {/* Core Belief */}
          <section className="mb-16 p-8 rounded-2xl bg-secondary/50 border border-border text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              Our core belief
            </h2>
            <div className="space-y-4 text-xl font-medium text-foreground mb-8">
              <p>If it's not written, it doesn't exist.</p>
              <p>If no one owns it, no one will do it.</p>
              <p>If it's not visible, it's not accountable.</p>
            </div>
            <p className="text-muted-foreground">
              This is not a feature list.<br />
              This is a way of working.
            </p>
          </section>

          {/* Who is it for */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Who EMP is really for
            </h2>
            <p className="text-muted-foreground mb-4">EMP is for people who believe:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                Clarity is better than motivation
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                Systems are better than shouting
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                Discipline creates freedom
              </li>
            </ul>
            <p className="text-foreground">
              If you believe that,<br />
              EMP will feel natural to you.
            </p>
          </section>

          {/* Final Line */}
          <section className="text-center p-10 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
              EMP does not try to change people.<br />
              <span className="text-primary">EMP changes the system people work in.</span>
            </p>
            <p className="text-xl font-medium text-foreground mt-6">
              That's why it works.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhyEmpExists;
