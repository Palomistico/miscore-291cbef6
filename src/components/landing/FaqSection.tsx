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
    q: "¿Esto es para mí?",
    a: "Si eres emprendedor, freelancer o tienes un negocio y quieres acceder a mejores opciones de crédito, miscore es para ti.",
  },
  {
    q: "¿Necesito tener historial de cuenta bancaria?",
    a: "No necesariamente. miscore te ayuda a construir tu historial financiero desde cero.",
  },
  {
    q: "¿Me van a pedir muchos requisitos?",
    a: "No. El proceso es simple y rápido. Solo necesitas tu información básica para comenzar.",
  },
  {
    q: "¿Cómo sé que préstamo o crédito me van a dar primero?",
    a: "Te mostramos opciones personalizadas basadas en tu perfil financiero actual y te guiamos paso a paso.",
  },
  {
    q: "¿Cómo funciona?",
    a: "Conectas tu información financiera, analizamos tu perfil y te damos recomendaciones para mejorar y acceder a créditos.",
  },
  {
    q: "¿Tiene costo?",
    a: "Puedes empezar de forma gratuita. Ofrecemos planes premium con funcionalidades avanzadas.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Absolutamente. Utilizamos cifrado de grado bancario y cumplimos con las regulaciones de protección de datos.",
  },
];

const FaqSection = () => (
  <section className="bg-background py-16 px-4 md:py-24">
    <div className="container mx-auto max-w-2xl">
      <AnimatedSection>
        <h2 className="text-center text-xl md:text-2xl font-extrabold text-foreground mb-2 italic">
          Preguntas Frecuentes
        </h2>
        <p className="text-center text-xs text-muted-foreground mb-10">
          Todo lo que necesitas saber antes de empezar
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible defaultValue="faq-0">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border py-1">
              <AccordionTrigger className="text-left text-foreground text-sm font-semibold hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
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
