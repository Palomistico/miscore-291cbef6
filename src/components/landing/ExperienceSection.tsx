import { Check, ShieldCheck } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const points = [
  "Regístrate en minutos, sin papeleo, sin complicaciones.",
  "Tu información se muestra de manera clara y fácil de entender.",
  "Interfaz intuitiva que cualquier persona puede usar sin problema.",
  "Soporte personalizado para acompañarte en todo el proceso.",
  "Los recomendable de los datos de los reglamentos de la Ley LFPDPPP sobre Protocolo de la Defensoría.",
];

const ExperienceSection = () => (
  <section className="py-8 px-4 md:py-12 bg-primary-foreground">
    <div className="container mx-auto max-w-4xl">
      <AnimatedSection>
        <div className="gradient-hero rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-primary-foreground mb-2 leading-tight italic">
              Una experiencia simple, clara y pensada para ti.
            </h2>
            <p className="text-xs mb-6 text-cream">
              MISCORE te da las herramientas que necesitas para tomar el control de tus finanzas.
            </p>
            <ul className="space-y-3">
              {points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-primary-foreground/80">
                  <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-xs leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="h-44 w-44 md:h-52 md:w-52 rounded-full bg-primary-foreground/5 flex items-center justify-center">
                <div className="h-36 w-36 md:h-40 md:w-40 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-primary-foreground/15 flex items-center justify-center shadow-2xl">
                    <ShieldCheck className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ExperienceSection;
