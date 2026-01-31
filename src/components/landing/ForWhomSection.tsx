import { Check, X } from "lucide-react";

const forList = [
  "Founders running multiple responsibilities",
  "Managers tired of repeating instructions",
  "Teams that want clear rules",
];

const notForList = [
  'Excuse-driven culture',
  '"We will see later" mindset',
];

const ForWhomSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-calm">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Is EMP for you?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* For */}
          <div className="p-8 rounded-2xl bg-green-50/50 border border-green-100">
            <h3 className="text-xl font-semibold text-foreground mb-6">EMP is for:</h3>
            <ul className="space-y-4">
              {forList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Not for */}
          <div className="p-8 rounded-2xl bg-red-50/50 border border-red-100">
            <h3 className="text-xl font-semibold text-foreground mb-6">EMP is not for:</h3>
            <ul className="space-y-4">
              {notForList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <p className="text-center text-muted-foreground mt-10">
          EMP works best where <span className="text-foreground font-medium">discipline matters</span>.
        </p>
      </div>
    </section>
  );
};

export default ForWhomSection;
