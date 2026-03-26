const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Rent a Car Liridoni. Të gjitha të drejtat e rezervuara.</p>
      <p>
        Fushë Kosovë 12000 ·{" "}
        <a href="tel:+38344725589" className="hover:text-primary transition-colors">+383 44 725 589</a>
      </p>
    </div>
  </footer>
);

export default Footer;
