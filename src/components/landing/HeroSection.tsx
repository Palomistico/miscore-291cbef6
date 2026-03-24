import { motion } from "framer-motion";

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

          {/* Phone mockup centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center mt-12"
          >
            {/* Floating card left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute left-4 md:left-[15%] top-4 z-10 rounded-xl bg-card p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-green-100 p-1.5">
                  <div className="w-4 h-3 flex items-end gap-0.5">
                    <div className="w-1 h-1 bg-green-500 rounded-sm" />
                    <div className="w-1 h-2 bg-green-500 rounded-sm" />
                    <div className="w-1 h-3 bg-green-500 rounded-sm" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-card-foreground">Total vendido</p>
                  <p className="text-[10px] text-muted-foreground">$48,500</p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <div className="relative w-48 md:w-56 rounded-[2rem] border-[6px] border-foreground/10 bg-card p-3 shadow-2xl">
              <div className="w-12 h-1 bg-foreground/10 rounded-full mx-auto mb-3" />
              <div className="space-y-2.5">
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-[10px] text-primary-foreground max-w-[85%]">
                    ¿Cuánto facturé?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-[10px] text-foreground max-w-[85%]">
                    $48,500 este mes 🎉
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-br-sm bg-secondary px-3 py-2 text-[10px] text-secondary-foreground max-w-[85%]">
                    ¿Mi score mejoró?
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute right-4 md:right-[15%] bottom-8 z-10 rounded-xl bg-card p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-50 p-1.5">
                  <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-card-foreground">Score: 720</p>
                  <p className="text-[10px] text-muted-foreground">+12 puntos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
