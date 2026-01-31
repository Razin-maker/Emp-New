const comparisons = [
  {
    others: "Most tools try to manage people.",
    emp: "EMP designs how work behaves.",
  },
  {
    others: "Most tools add features.",
    emp: "EMP removes ambiguity.",
  },
  {
    others: "Most tools depend on motivation.",
    emp: "EMP depends on clarity.",
  },
];

const DifferenceSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-calm">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Why EMP is different
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-8">
          {comparisons.map((item, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-background border border-border/50 text-center md:text-right">
                <span className="text-muted-foreground">{item.others}</span>
              </div>
              <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 text-center md:text-left">
                <span className="text-foreground font-medium">{item.emp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
