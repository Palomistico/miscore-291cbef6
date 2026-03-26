import AnimatedSection from "../AnimatedSection";

const steps = [
  {
    num: "1",
    title: "Entras por WhatsApp",
    subtitle: "Accedes de forma directa desde el botón en este sitio.",
    align: "left" as const,
  },
  {
    num: "2",
    title: "Quedas registrado",
    subtitle: "Tu contacto queda registrado automáticamente.",
    align: "right" as const,
  },
  {
    num: "3",
    title: "Te mantenemos dentro",
    subtitle: "Cuando llegue el momento, empezaras a construir junto a nosotros algo que si te representa.",
    align: "left" as const,
  },
];

const ProcessSection = () => (
  <section className="py-16 px-4 md:py-24 bg-primary-foreground rounded-sm border-0 pb-[60px]">
    <div className="container mx-auto max-w-3xl">
      <AnimatedSection>
        <h2 className="text-center text-xl font-extrabold text-foreground mb-2 md:text-4xl">
          Un proceso transparente
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base my-[38px]">
          Empieza asi de simple
        </p>
      </AnimatedSection>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

        {steps.map((step, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className={`flex items-start gap-6 mb-12 last:mb-0 md:gap-12 ${
              step.align === "right" ? "md:flex-row-reverse" : ""
            }`}>
              {/* Content */}
              <div className={`flex-1 ${step.align === "right" ? "md:text-left" : "md:text-right"}`}>
                <h3 className="font-bold text-foreground mb-1 text-xl">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{step.subtitle}</p>
              </div>

              {/* Number circle */}
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-base border-solid shadow border-2 border-primary-foreground">
                {step.num}
              </div>

              {/* Spacer for layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
