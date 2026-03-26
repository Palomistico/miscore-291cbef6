import heroMockup from "@/assets/hero-mockup.png";
import miscoLogo from "@/assets/miscore-logo.png";

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      {/* Nav bar separated from hero */}
      <div className="bg-white px-4 py-4">
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
            <h1 className="text-3xl font-extrabold text-primary-foreground leading-tight mb-5 md:text-6xl">
              El sistema financiero no está diseñado para emprendedores.
            </h1>
            <p className="text-sm mb-4 max-w-xl mx-auto leading-relaxed text-cream md:text-lg">
              Vendes, cobras, pagas, reinviertes, pero para los bancos y el sistema financiero eso no cuenta como historial crediticio.
            </p>
            <p className="text-xs md:text-sm mb-8 max-w-md mx-auto text-[#fed6a9]">
              Aquí puedes cambiar esto. miscore te ayuda a empezar a construir una reputación financiera para acceder a mejores oportunidades.
            </p>

            {/* CTA Button */}
            <a href="https://wa.link/6t9c1c" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-secondary px-8 py-3 font-bold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity text-base mb-3">
              Quiero entrar
            </a>
            <p className="text-xs text-[#f0f6ff]">
              Acceso anticipado • Sin requisitos complicados
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
