import { Ban, Clock, Lightbulb } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const cards = [
  {
    icon: Ban,
    text: "Te rechazan préstamos bancarios.",
    variant: "light" as const,
  },
  {
    icon: Clock,
    text: "Tus clientes se atrasan en pagos.",
    variant: "orange" as const,
  },
  {
    icon: Lightbulb,
    text: "Tienes una idea de negocio que se queda sin fondos.",
    variant: "light" as const,
  },
];

const DailyProblemsSection = () => (
  <section className="bg-background py-16 px-4 md:py-24">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
          Esto pasa todos los días.
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div
              className={`rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center gap-4 ${
                card.variant === "orange"
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-card border border-border"
              }`}
            >
              <card.icon className={`h-10 w-10 ${card.variant === "orange" ? "text-secondary-foreground/80" : "text-muted-foreground"}`} />
              <p className={`text-lg font-semibold ${card.variant === "orange" ? "" : "text-foreground"}`}>
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
