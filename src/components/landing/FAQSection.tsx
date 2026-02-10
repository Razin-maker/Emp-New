import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

const faqData: FAQItem[] = [
    {
        question: "What is EMP?",
        answer:
            "EMP (Employee Max Portal) automates HR and operational processes, helping organizations manage employees, attendance, leave, payroll, and tasks efficiently.",
    },
    {
        question: "Who can use EMP?",
        answer:
            "EMP is designed for organizations of all sizes. Admins, HR personnel, and employees can use it according to their roles and permissions.",
    },
    {
        question: "How is EMP different from Task or HR tools?",
        answer: (
            <>
                Most tools manage tasks or people separately.
                <br />
                <span className="font-medium text-foreground">
                    EMP manages the environment where work happens.
                </span>
            </>
        ),
    },
    {
        question: "Is EMP free?",
        answer:
            "Yes. EMP Open Source is 100% free and self-hosted.",
    },
    {
        question: "Can we customize or extend EMP?",
        answer:
            "Absolutely. EMP is modular and open source. You can customize flows, rules, and even integrate with other systems using APIs.",
    },
    {
        question: "Where can I see how EMP works?",
        answer: (
            <ul className="space-y-2">
                <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>
                        Try the live{" "}
                        <a
                            href="https://demo-emp.sohub.com.bd/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:underline"
                        >
                            demo
                        </a>
                    </span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>
                        Read the{" "}
                        <a
                            href="https://github.com/Employee-Max-Portal/emp-open-source/wiki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:underline"
                        >
                            Wiki
                        </a>
                    </span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>
                        <a
                            href="https://www.facebook.com/groups/1381078433708350/?ref=share&mibextid=NSMWBT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:underline"
                        >
                            Join
                        </a>{" "}
                        the community to see real use-cases
                    </span>
                </li>
            </ul>
        ),
    },
    {
        question:
            "Where should I ask for support, report issues, or share ideas?",
        answer: (
            <>
                For any kind of support, bugs, feature ideas, or usage questions, please
                post directly in our{" "}
                <a
                    href="https://www.facebook.com/groups/1381078433708350/?ref=share&mibextid=NSMWBT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                >
                    EMP Community
                </a>
                .
                <br />
                <span className="mt-2 block text-muted-foreground">
                    This helps everyone learn together and allows us to improve EMP based
                    on real-world usage and feedback.
                </span>
            </>
        ),
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding bg-secondary/30">
            <div className="container-calm">
                {/* Section header */}
                <div className="text-center mb-14">
                    <p className="text-sm font-medium tracking-widest text-primary uppercase mb-3">
                        Common Questions
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Accordion list */}
                <div className="max-w-3xl mx-auto space-y-3">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-xl border transition-all duration-300 ${isOpen
                                        ? "bg-background border-primary/30 shadow-sm"
                                        : "bg-background border-border/50 hover:border-primary/20"
                                    }`}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                                    aria-expanded={isOpen}
                                >
                                    <span
                                        className={`text-base md:text-lg font-medium transition-colors duration-200 ${isOpen ? "text-primary" : "text-foreground"
                                            }`}
                                    >
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen
                                                ? "rotate-180 text-primary"
                                                : "text-muted-foreground"
                                            }`}
                                    />
                                </button>

                                {/* Collapsible answer */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
