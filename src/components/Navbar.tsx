import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "fleet", href: "#fleet" },
  { key: "booking", href: "#booking" },
  // { key: "reviews", href: "#reviews" },
  { key: "contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        
        {/* Logo */}
        <a href="#home" className="font-display text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-foreground">LIRIDON </span>
          <span className="text-primary">{t("rental")}</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize"
            >
              {t(l.key)}
            </a>
          ))}

          {/* Call Button */}
          <a
            href="tel:+38349866200"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-gold-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            {t("call")}
          </a>

          {/* Language Dropdown */}
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="bg-black text-white px-3 py-1 rounded-md border border-gray-600"
          >
            <option value="en">🇬🇧 EN</option>
            <option value="sq">🇦🇱 SQ</option>
            <option value="de">🇩🇪 DE</option>
            <option value="it">🇮🇹 IT</option>
          </select>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-muted-foreground hover:text-primary transition-colors capitalize"
            >
              {t(l.key)}
            </a>
          ))}

          <div className="px-6 pt-2">
            <a
              href="tel:+38349866200"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-md font-semibold"
            >
              <Phone className="w-4 h-4" />
              {t("call")}
            </a>
          </div>

          <div className="px-6 pt-3">
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="w-full bg-black text-white px-3 py-2 rounded-md border border-gray-600"
            >
              <option value="en">🇬🇧 English</option>
              <option value="sq">🇦🇱 Shqip</option>
              <option value="de">🇩🇪 Deutsch</option>
              <option value="it">🇮🇹 Italiano</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;