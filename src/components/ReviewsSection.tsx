import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const ReviewsSection = () => {
  const { t } = useTranslation();

  const reviews = [
    { name: "Arben K.", text: t("review_1_text"), rating: 5 },
    { name: "Liridona M.", text: t("review_2_text"), rating: 5 },
    { name: "Blerim S.", text: t("review_3_text"), rating: 5 },
    { name: "Dorina H.", text: t("review_4_text"), rating: 5 },
  ];

  return (
    <section id="reviews" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">
            {t("reviews_title")}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t("what_clients")}
          </h2>
          <div className="gold-line max-w-xs mx-auto mt-6 mb-6" />
          <div className="flex items-center justify-center gap-2 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary" />
            ))}
            <span className="text-foreground font-bold text-xl ml-2">5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground mb-4 italic">"{r.text}"</p>
              <p className="text-sm font-semibold text-primary">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;