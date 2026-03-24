import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "../AnimatedSection";

const faqs = [
  {
    q: "¿Qué es miscore?",
    a: "miscore es una plataforma que te ayuda a construir y mejorar tu perfil financiero como emprendedor, facilitando el acceso a créditos y mejores condiciones bancarias.",
  },
  {
    q: "¿Cómo funciona la conexión con mi banco?",
    a: "Utilizamos conexiones seguras y encriptadas para leer tus movimientos. Nunca almacenamos tus credenciales bancarias.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Absolutamente. Utilizamos cifrado de grado bancario y cumplimos con las regulaciones de protección de datos más estrictas.",
  },
  {
    q: "¿Tiene costo usar miscore?",
    a: "Puedes empezar de forma gratuita. Ofrecemos planes premium con funcionalidades avanzadas para quienes necesitan más.",
  },
  {
    q: "¿Cómo puedo mejorar mi score?",
    a: "Te damos recomendaciones personalizadas basadas en tu perfil financiero para que puedas mejorar tu puntuación paso a paso.",
  },
  {
    q: "¿Qué bancos son compatibles?",
    a: "Trabajamos con los principales bancos del país. Estamos constantemente expandiendo nuestra red de instituciones financieras.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí, puedes cancelar tu suscripción premium en cualquier momento sin penalizaciones ni compromisos.",
  },
];

const FaqSection = () => (
  <section className="bg-background py-16 px-4 md:py-24">
    <div className="container mx-auto max-w-3xl">
      <AnimatedSection>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
          Preguntas Frecuentes
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FaqSection;
