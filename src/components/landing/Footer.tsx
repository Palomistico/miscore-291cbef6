const Footer = () => (
  <footer className="bg-card border-t border-border py-8 px-4">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2024 miscore. Todos los derechos reservados.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors">Términos de servicio</a>
        <a href="#" className="hover:text-foreground transition-colors">Política de privacidad</a>
      </div>
      <a href="mailto:soporte@miscore.com" className="hover:text-foreground transition-colors">
        soporte@miscore.com
      </a>
    </div>
  </footer>
);

export default Footer;
