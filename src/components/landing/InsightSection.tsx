const InsightSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-calm">
        <div className="insight-block">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed">
            When work depends on <span className="text-muted-foreground">memory</span>, it fails.
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mt-4 leading-relaxed">
            When work depends on <span className="underline decoration-accent decoration-4 underline-offset-4">systems</span>, it moves.
          </p>
          <p className="text-lg text-muted-foreground mt-8">
            EMP exists to replace memory with structure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
