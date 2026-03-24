import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Bell } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-hero relative overflow-hidden py-16 px-4 md:py-24">
      {/* Logo */}
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
            <div className="h-4 w-4 rounded-sm bg-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary-foreground tracking-tight">miscore</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block mb-4 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/80">
              ¿Por qué miscore?
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-6">
              El sistema financiero no está diseñado para emprendedores.
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg">
              Te ayudamos a tener el control de tu información financiera y de tu negocio. Construye un historial sólido y accede a mejores opciones.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="rounded-xl bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground shadow-lg hover:opacity-90 transition-opacity text-lg">
                Empieza ahora
              </button>
              <span className="text-primary-foreground/50 text-sm self-center">
                Ver una demo o contáctanos para saber más
              </span>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Floating card left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -left-4 top-8 md:left-0 z-10 rounded-xl bg-card p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-green-100 p-1.5">
                  <BarChart3 className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-card-foreground">Ventas del mes</p>
                  <p className="text-xs text-muted-foreground">+12% vs anterior</p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <div className="relative w-56 md:w-64 rounded-3xl border-4 border-primary-foreground/20 bg-card p-4 shadow-2xl">
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-br-sm bg-primary px-4 py-2 text-xs text-primary-foreground max-w-[80%]">
                    ¿Cuánto facturé este mes?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm bg-muted px-4 py-2 text-xs text-foreground max-w-[80%]">
                    Facturaste $48,500 MXN, un 15% más que el mes pasado. 🎉
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-br-sm bg-secondary px-4 py-2 text-xs text-secondary-foreground max-w-[80%]">
                    ¿Y mi score mejoró?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm bg-muted px-4 py-2 text-xs text-foreground max-w-[80%]">
                    ¡Sí! Subiste 12 puntos. Estás cada vez más cerca de mejores tasas.
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -right-4 bottom-12 md:right-0 z-10 rounded-xl bg-card p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-100 p-1.5">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-card-foreground">Score actualizado</p>
                  <p className="text-xs text-muted-foreground">720 puntos</p>
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
