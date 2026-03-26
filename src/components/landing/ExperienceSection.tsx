import { Check, ShieldCheck } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const points = [
  "Registro simple desde WhatsApp",
  "Proceso claro y sin enredos",
  "Empiezas con lo que ya haces todos los días",
  "Uso responsable de tus datos. Nos regimos por la Ley N°172-13 sobre Protección de Datos Personales.",
];

const ExperienceSection = () => (
  <section className="py-8 px-0 bg-cream-dark md:py-[55px]">
    <div className="container mx-auto max-w-4xl">
      <AnimatedSection>
        <div className="gradient-hero rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center bg-[#006bbd] px-[36px] py-[60px]">
          <div>
            <h2 className="text-xl font-extrabold text-primary-foreground mb-2 leading-tight italic md:text-4xl">
              Una experiencia simple, clara y pensada para ti.
            </h2>
            <p className="mb-6 text-base text-slate-100">
              miscore está diseñado para ayudarte paso a paso, sin complicaciones.
            </p>
            <ul className="space-y-3">
              {points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-primary-foreground/80">
                  <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="leading-relaxed text-base text-primary-foreground font-normal">{pt}</span>
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
