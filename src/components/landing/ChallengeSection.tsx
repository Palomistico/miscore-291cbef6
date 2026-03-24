import { useState } from "react";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const ChallengeSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-background py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-5">
              {/* Left card - White */}
              <div className="rounded-2xl bg-card border border-border p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-4 bg-green-500 rounded-sm" />
                    <div className="w-10 h-3 bg-muted rounded-sm" />
                  </div>
                  <div className="w-full h-px bg-border mb-5" />
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">
                    El problema
                  </p>
                  <p className="text-foreground font-bold text-lg leading-snug">
                    Trabajas, vendes, cobras, pagas, reinviertes,{" "}
                    <span className="text-foreground font-extrabold">
                      pero no tienes como demostrarlo.
                    </span>
                  </p>
                </div>
                <p className="text-muted-foreground text-xs mt-4">
                  Tu actividad financiera no se refleja en el sistema
                </p>
              </div>

              {/* Right card - Dark blue */}
              <div className="gradient-hero rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <p className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-3">
                    ¿Y qué pasa?
                  </p>
                  <h3 className="text-primary-foreground font-extrabold text-2xl leading-snug mb-3">
                    Sin historial, no significa sin capacidad.
                  </h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">
                    El problema no eres tú, es un sistema que no fue pensado para emprendedores. Y cuando no puedes demostrar tu actividad financiera, quedas fuera automáticamente.
                  </p>
                </div>
                <p className="text-primary-foreground/40 text-xs mt-4">
                  Y el círculo vicioso se repite...
                </p>
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={() => setCurrent((p) => Math.max(0, p - 1))}
              className="absolute -left-5 top-1/2 -translate-y-1/2 rounded-full bg-card border border-border p-2 shadow-md hover:bg-muted transition-colors hidden md:flex items-center justify-center"
            >
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </button>
            <button
              onClick={() => setCurrent((p) => p + 1)}
              className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-card border border-border p-2 shadow-md hover:bg-muted transition-colors hidden md:flex items-center justify-center"
            >
              <ChevronRight className="h-4 w-4 text-foreground" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ChallengeSection;
