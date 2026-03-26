import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">
            {t("contact")}
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t("contact_title")}
          </h2>

          <div className="gold-line max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">{t("phone_label")}</h3>
                <a href="tel:+38349866200" className="text-muted-foreground hover:text-primary">
                  +383 49 866 200
                </a>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">{t("address_label")}</h3>
                <p className="text-muted-foreground">{t("address_value")}</p>
              </div>
            </div>

            {/* HOURS */}
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">{t("schedule_label")}</h3>
                <p className="text-muted-foreground">{t("open_247")}</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">{t("email_label")}</h3>
                <p className="text-muted-foreground">info@liridonirental.com</p>
              </div>
            </div>

          </div>

          <div className="rounded-lg overflow-hidden border border-border h-80 lg:h-auto">
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=Prishtina+International+Airport+Adem+Jashari&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;