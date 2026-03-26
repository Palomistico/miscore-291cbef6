import AnimatedSection from "../AnimatedSection";

const steps = [
  {
    num: "1",
    title: "Entra por WhatsApp",
    subtitle: "Te enviaremos un enlace de acceso directo. Mándanos un WhatsApp y te guiamos paso a paso.",
    align: "left" as const,
  },
  {
    num: "2",
    title: "Quédate registrado",
    subtitle: "Tu información queda guardada de forma segura y comienza a construir tu historial.",
    align: "right" as const,
  },
  {
    num: "3",
    title: "Te mantenemos dentro",
    subtitle: "Te damos tips, seguimiento y herramientas para que tu perfil financiero crezca con tu negocio.",
    align: "left" as const,
  },
];

const ProcessSection = () => (
  <section className="py-16 px-4 md:py-24 bg-primary-foreground rounded-sm border-0">
    <div className="container mx-auto max-w-3xl">
      <AnimatedSection>
        <h2 className="text-center text-xl font-extrabold text-foreground mb-2 md:text-4xl">
          Un proceso transparente
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base">
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
                <h3 className="font-bold text-foreground text-base mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.subtitle}</p>
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
