import { Shield, Clock, Star, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Shield, title: t("reliability"), desc: t("reliability_desc") },
    { icon: Clock, title: t("service_247"), desc: t("service_247_desc") },
    { icon: Star, title: t("rating"), desc: t("rating_desc") },
    { icon: MapPin, title: t("location_good"), desc: t("location_good_desc") },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t("about_heading")}
          </h2>
          <div className="gold-line max-w-xs mx-auto mt-6 mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("about_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;