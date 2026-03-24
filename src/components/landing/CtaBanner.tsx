import AnimatedSection from "../AnimatedSection";

const CtaBanner = () => (
  <section className="py-16 px-4">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <div className="gradient-banner rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Ahí es donde entra miscore.
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Nuestra plataforma te da visibilidad sobre tus finanzas y te ayuda a entender cómo los bancos te ven.
          </p>
          <button className="rounded-xl bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity text-lg">
            Empieza gratis
          </button>
          <p className="text-primary-foreground/40 text-sm mt-4">Sin tarjeta de crédito requerida</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaBanner;
