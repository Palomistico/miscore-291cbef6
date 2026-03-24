import { Link2, PieChart, TrendingUp } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const steps = [
  {
    num: "1",
    icon: Link2,
    title: "Conecta tus cuentas",
    subtitle: "De forma segura y privada.",
  },
  {
    num: "2",
    icon: PieChart,
    title: "Obtén tu score",
    subtitle: "Entiende tu perfil financiero.",
  },
  {
    num: "3",
    icon: TrendingUp,
    title: "Mejora y accede",
    subtitle: "Accede a mejores opciones de crédito.",
  },
];

const ProcessSection = () => (
  <section className="bg-background py-16 px-4 md:py-24">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-2">
          Empieza en minutos
        </p>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-16">
          Un proceso transparente
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-0.5 bg-border" />

        {steps.map((step, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xl font-bold shadow-lg mb-6">
                {step.num}
              </div>
              <step.icon className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.subtitle}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
