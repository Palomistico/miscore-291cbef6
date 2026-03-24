import AnimatedSection from "../AnimatedSection";

const MindsetSection = () => (
  <section className="bg-card py-20 px-4 md:py-28">
    <div className="container mx-auto max-w-4xl text-center">
      <AnimatedSection>
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6">
          Cambia la perspectiva
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
          No es que estés haciendo las cosas mal.
        </h2>
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight">
          Es que el sistema no sabe leerte.
        </h2>
      </AnimatedSection>
    </div>
  </section>
);

export default MindsetSection;
