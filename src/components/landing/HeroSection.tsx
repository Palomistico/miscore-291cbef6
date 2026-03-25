import heroMockup from "@/assets/hero-mockup.png";
import miscoLogo from "@/assets/miscore-logo.png";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Nav bar separated from hero */}
      <div className="bg-primary-foreground px-4 py-4">
        <div className="container mx-auto max-w-5xl flex justify-center">
          <img src={miscoLogo} alt="miscore logo" className="h-8 md:h-10" />
        </div>
      </div>

      {/* Blue gradient hero area with rounded bottom, not edge-to-edge */}
      <div className="gradient-hero rounded-[2.5rem] pb-16 pt-12 px-4 md:pb-24 md:pt-16 mx-3 md:mx-6 mt-2">
        <div className="container mx-auto max-w-5xl">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-block rounded-full bg-primary-foreground/15 px-5 py-1.5 text-xs font-medium text-primary-foreground/80 backdrop-blur-sm">
              ¿Por qué miscore?
            </span>
          </div>

          {/* Title centered */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-5">
              El sistema financiero no está diseñado para emprendedores.
            </h1>
            <p className="text-primary-foreground/70 text-sm md:text-base mb-4 max-w-xl mx-auto leading-relaxed">
              Vendes, cobras, pagas, reinviertes, pero para los bancos y el sistema financiero eso no cuenta como historial crediticio.
            </p>
            <p className="text-primary-foreground/50 text-xs md:text-sm mb-8 max-w-md mx-auto">
              Te ayudamos a construir tu historial financiero y acceder a mejores oportunidades de crédito.
            </p>

            {/* CTA Button */}
            <a href="https://wa.link/oe2y3c" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-secondary px-8 py-3 font-bold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity text-base mb-3">
              Quiero entrar
            </a>
            <p className="text-primary-foreground/40 text-xs">
              También puedes agendar una llamada con nosotros
            </p>
          </div>

          {/* Hero mockup image */}
          <div className="flex justify-center mt-12">
            <img
              src={heroMockup}
              alt="Miscore app mockup"
              className="w-full max-w-lg md:max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
