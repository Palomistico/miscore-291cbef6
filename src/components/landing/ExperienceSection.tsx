import { Check, ShieldCheck } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const points = [
  "Regístrate en minutos.",
  "Interfaz intuitiva.",
  "Soporte personalizado.",
  "Información clara y accionable.",
];

const ExperienceSection = () => (
  <section className="py-16 px-4">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <div className="gradient-dark-card rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-8 leading-tight">
              Una experiencia simple, clara y pensada para ti.
            </h2>
            <ul className="space-y-4">
              {points.map((pt, i) => (
                <li key={i} className="flex items-center gap-3 text-primary-foreground/80">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-base">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Outer ring */}
              <div className="h-48 w-48 rounded-full border-4 border-primary/30 flex items-center justify-center">
                {/* Inner ring */}
                <div className="h-36 w-36 rounded-full border-4 border-primary/50 flex items-center justify-center">
                  {/* Center */}
                  <div className="h-24 w-24 rounded-full gradient-banner flex items-center justify-center shadow-2xl">
                    <ShieldCheck className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ExperienceSection;
