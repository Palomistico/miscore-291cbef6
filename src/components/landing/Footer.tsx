const Footer = () => (
  <footer className="bg-card border-t border-border py-6 px-4">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
      <p>© 2026 Nimo. Todos los derechos reservados.</p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-foreground transition-colors">miscore, una herramienta de Nimo. </a>
        <a href="#" className="hover:text-foreground transition-colors">​</a>
      </div>
      <a href="" className="hover:text-foreground transition-colors">
        Diseñado por Bojote.
      </a>
    </div>
  </footer>
);

export default Footer;
