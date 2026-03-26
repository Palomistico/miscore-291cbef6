import AnimatedSection from "../AnimatedSection";


const CtaBanner = () => (
  <section className="py-8 px-4 md:py-12 border-primary-foreground" style={{ backgroundImage: `url('/images/cta-banner-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="container mx-auto max-w-4xl pl-[21px] px-0 py-0">
      <AnimatedSection>
        <div
          className="rounded-3xl p-8 md:p-14 text-center relative overflow-hidden my-[56px]"
        >
          {/* Subtle circle decorations */}
          <div className="absolute right-[-40px] top-[-40px] w-32 h-32 rounded-full border border-primary-foreground/10" />
          <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 rounded-full border border-primary-foreground/10" />
          
          <h2 className="text-xl font-extrabold text-primary-foreground mb-3 md:text-5xl">
            Ahí es donde entra miscore.
          </h2>
          <p className="max-w-xl mx-auto mb-7 leading-relaxed text-[#f0f6ff] text-xl">
            miscore te ayuda a empezar a mostrar lo que haces con tu dinero todos los días. No necesitas historial.
            Solo empezar a organizar y registrar tu realidad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#fff7f0]/[0.03]">
             <a href="https://wa.link/6t9c1c" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full px-7 py-3 font-bold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity text-sm bg-[#f7821d]">
              Quiero empezar
            </a>
            <span className="text-xs text-primary-foreground border-black/0 bg-black/0">
              Es gratis para siempre. Sin tarjeta.
            </span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaBanner;
