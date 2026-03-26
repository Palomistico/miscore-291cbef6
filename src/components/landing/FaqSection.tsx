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
    a: "miscore es una herramienta que te ayuda a empezar a mostrar cómo manejas tu dinero en el día a día. Está pensada para personas que trabajan, generan ingresos, pero no tienen historial en el sistema financiero.",
  },
  {
    q: "¿Esto es para mí?",
    a: "Sí, si eres un emprendedor que trabaja por tu cuenta, vendes, haces servicios, tienes un negocio pequeño o generas ingresos de forma independiente. No necesitas tener empresa formal ni historial crediticio. ",
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
  <section className="py-16 px-4 md:py-24 bg-primary-foreground rounded-md">
    <div className="container mx-auto max-w-2xl">
      <AnimatedSection>
        <h2 className="text-center text-xl font-extrabold text-foreground mb-2 md:text-4xl">
          Preguntas Frecuentes
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Todo lo que necesitas saber sobre miscore antes de empezar.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible defaultValue="faq-0">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border py-1">
              <AccordionTrigger className="text-left text-foreground text-sm font-semibold hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4 whitespace-pre-line">
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
