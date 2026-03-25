import AnimatedSection from "../AnimatedSection";

const CtaBanner = () => (
  <section className="py-8 px-4 md:py-12 bg-primary-foreground border-primary-foreground">
    <div className="container mx-auto max-w-4xl">
      <AnimatedSection>
        <div className="gradient-banner rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
          {/* Subtle circle decorations */}
          <div className="absolute right-[-40px] top-[-40px] w-32 h-32 rounded-full border border-primary-foreground/10" />
          <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 rounded-full border border-primary-foreground/10" />
          
          <h2 className="text-xl md:text-3xl font-extrabold text-primary-foreground mb-3">
            Ahí es donde entra miscore.
          </h2>
          <p className="text-primary-foreground/60 text-sm max-w-xl mx-auto mb-7 leading-relaxed">
            Nuestra plataforma te da visibilidad sobre tus finanzas y te ayuda a entender cómo los bancos te ven. Te acompañamos para que puedas construir un historial real.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a href="https://wa.link/6t9c1c" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-secondary px-7 py-3 font-bold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity text-sm">
              Quiero empezar
            </a>
            <span className="text-primary-foreground/40 text-xs">
              Es gratis para siempre. Sin tarjeta.
            </span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaBanner;
