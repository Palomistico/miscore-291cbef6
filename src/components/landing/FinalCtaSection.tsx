import AnimatedSection from "../AnimatedSection";

const FinalCtaSection = () => (
  <section className="bg-background py-20 px-4 md:py-28">
    <div className="container mx-auto max-w-3xl text-center">
      <AnimatedSection>
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary leading-tight mb-6">
          Si hoy no te ven, no te quedes sin hacer nada. Empieza a cambiar eso.
        </h2>
        <button className="rounded-xl bg-secondary px-10 py-4 font-bold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity text-lg">
          Hagámoslo juntos
        </button>
        <p className="text-muted-foreground text-sm mt-4">
          Empieza hoy mismo y toma el control.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCtaSection;
