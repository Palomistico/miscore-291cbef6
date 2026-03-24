import AnimatedSection from "../AnimatedSection";

const MindsetSection = () => (
  <section className="bg-card py-16 px-4 md:py-24">
    <div className="container mx-auto max-w-3xl text-center">
      <AnimatedSection>
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
          Cambia la perspectiva
        </p>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight mb-2 italic">
          No es que estés haciendo las cosas mal.
        </h2>
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary leading-tight italic">
          Es que el sistema no sabe leerte.
        </h2>
      </AnimatedSection>
    </div>
  </section>
);

export default MindsetSection;
