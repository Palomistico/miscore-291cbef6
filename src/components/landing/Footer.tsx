const Footer = () => (
  <footer className="bg-card border-t border-border py-6 px-4">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
      <p>© 2024 miscore</p>
      <div className="flex gap-4">
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
