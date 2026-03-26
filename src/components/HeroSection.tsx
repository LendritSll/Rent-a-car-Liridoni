import heroImg from "@/assets/hero-car.jpg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="car"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        
        {/* LOCATION */}
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
          {t("location")}
        </p>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
          {t("hero_title")}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto">
          {t("hero_desc")}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-gold-light transition-colors"
          >
            {t("book_now")}
          </a>

          <a
            href="#fleet"
            className="border border-primary text-primary px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary/10 transition-colors"
          >
            {t("view_fleet")}
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;