import { useState } from "react";
import { ChevronLeft, ChevronRight, FileX, ShieldX } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const slides = [
  [
    {
      variant: "light" as const,
      icon: FileX,
      title: "Te piden estados de cuenta que no tienes para tu negocio.",
      subtitle: "Facturas, ventas, cobros, pagos... nada de eso cuenta como demostración.",
    },
    {
      variant: "dark" as const,
      icon: ShieldX,
      title: "Sin historial, no significa sin capacidad.",
      subtitle: "Y por eso pierdes oportunidades. El círculo vicioso se repite...",
    },
  ],
];

const ChallengeSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-background py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Por qué es un problema
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-6">
              {slides[current].map((card, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 transition-all ${
                    card.variant === "dark"
                      ? "gradient-hero text-primary-foreground"
                      : "bg-card border border-border"
                  }`}
                >
                  <card.icon
                    className={`h-8 w-8 mb-4 ${
                      card.variant === "dark" ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  />
                  <h3 className={`text-xl font-bold mb-2 ${card.variant === "dark" ? "" : "text-foreground"}`}>
                    {card.title}
                  </h3>
                  <p className={card.variant === "dark" ? "text-primary-foreground/70" : "text-muted-foreground"}>
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>
            {/* Nav arrows */}
            <button
              onClick={() => setCurrent((p) => Math.max(0, p - 1))}
              className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-card border border-border p-2 shadow-md hover:bg-muted transition-colors hidden md:flex"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => setCurrent((p) => Math.min(slides.length - 1, p + 1))}
              className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-card border border-border p-2 shadow-md hover:bg-muted transition-colors hidden md:flex"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ChallengeSection;
