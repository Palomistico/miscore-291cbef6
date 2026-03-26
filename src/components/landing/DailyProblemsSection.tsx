import AnimatedSection from "../AnimatedSection";

const cards = [
  {
    text: "Trabajas y generas dinero, pero no puedes demostrarlo.",
    variant: "peach" as const,
  },
  {
    text: "Para los bancos es como si no existieras.",
    variant: "orange" as const,
  },
  {
    text: "Y por eso no accedes a oportunidades.",
    variant: "peach" as const,
  },
];

const DailyProblemsSection = () => (
  <section className="bg-background py-16 px-4 md:py-20">
    <div className="container mx-auto max-w-4xl">
      <AnimatedSection>
        <h2 className="text-center text-xl font-extrabold text-foreground mb-10 md:text-4xl">
          Esto pasa todos los días.
        </h2>
      </AnimatedSection>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div
              className={`rounded-2xl p-5 md:p-6 h-full flex items-center justify-center text-center min-h-[120px] ${
                card.variant === "orange"
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-peach"
              }`}
            >
              <p className={`text-xs md:text-sm font-semibold leading-snug ${
                card.variant === "orange" ? "font-extrabold text-center text-sm" : "text-foreground"
              }`}>
                {card.text}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DailyProblemsSection;
