import AnimatedSection from "../AnimatedSection";

const FinalCtaSection = () => (
  <section className="bg-background py-16 px-4 md:py-24">
    <div className="container mx-auto max-w-3xl text-center">
      <AnimatedSection>
        <h2 className="text-xl text-primary leading-tight mb-4 italic font-bold md:text-4xl">
          Si hoy no te ven, no te quedes sin hacer nada. Empieza a cambiar eso.
        </h2>
        <p className="text-muted-foreground text-sm mb-2">
          No necesitas historial perfecto. Solo necesitas empezar.
        </p>
        <p className="text-muted-foreground text-xs mb-8">
          Empieza hoy mismo.
        </p>
        <a href="https://wa.link/oe2y3c" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-secondary px-8 py-3.5 font-bold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity text-base">
          Quiero saber cómo
        </a>
        <p className="text-muted-foreground text-xs mt-3">
          Agenda tu llamada hoy
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCtaSection;
