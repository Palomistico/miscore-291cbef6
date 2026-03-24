import { motion } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Blue gradient area with rounded bottom */}
      <div className="gradient-hero rounded-b-[2.5rem] pb-16 pt-8 px-4 md:pb-24 md:pt-10">
        <div className="container mx-auto max-w-5xl">
          {/* Logo centered */}
          <div className="flex justify-center mb-10">
            <span className="text-2xl font-extrabold text-primary-foreground tracking-tight">
              m<span className="relative">i<span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary" /></span>score
            </span>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-block rounded-full bg-primary-foreground/15 px-5 py-1.5 text-xs font-medium text-primary-foreground/80 backdrop-blur-sm">
              ¿Por qué miscore?
            </span>
          </div>

          {/* Title centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
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
            <button className="rounded-full bg-secondary px-8 py-3 font-bold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity text-base mb-3">
              Quiero entrar
            </button>
            <p className="text-primary-foreground/40 text-xs">
              También puedes agendar una llamada con nosotros
            </p>
          </motion.div>

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
