import { Users, Fuel, Settings2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import carSuv from "@/assets/car-suv.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carEconomy from "@/assets/car-economy.jpg";
import carSport from "@/assets/car-sport.jpg";

const FleetSection = () => {
  const { t } = useTranslation();

  const cars = [
    {
      name: t("suv"),
      img: carSuv,
      seats: t("suv_seats"),
      fuel: t("suv_fuel"),
      transmission: t("suv_transmission"),
      price: t("suv_price"),
      desc: t("suv_desc"),
    },
    {
      name: t("sedan"),
      img: carSedan,
      seats: t("sedan_seats"),
      fuel: t("sedan_fuel"),
      transmission: t("sedan_transmission"),
      price: t("sedan_price"),
      desc: t("sedan_desc"),
    },
    {
      name: t("economy"),
      img: carEconomy,
      seats: t("economy_seats"),
      fuel: t("economy_fuel"),
      transmission: t("economy_transmission"),
      price: t("economy_price"),
      desc: t("economy_desc"),
    },
    {
      name: t("sport"),
      img: carSport,
      seats: t("sport_seats"),
      fuel: t("sport_fuel"),
      transmission: t("sport_transmission"),
      price: t("sport_price"),
      desc: t("sport_desc"),
    },
  ];

  return (
    <section id="fleet" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">
            {t("fleet_title")}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t("choose_car")}
          </h2>
          <div className="gold-line max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.name}
              className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={car.img}
                  alt={car.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-semibold text-lg">{car.name}</h3>
                  <span className="text-primary font-bold">{car.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{car.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {car.seats}</span>
                  <span className="flex items-center gap-1"><Fuel className="w-3.5 h-3.5" /> {car.fuel}</span>
                  <span className="flex items-center gap-1"><Settings2 className="w-3.5 h-3.5" /> {car.transmission}</span>
                </div>
                <a
                  href="#booking"
                  className="block text-center bg-primary/10 text-primary py-2 rounded-md text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {t("reserve")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;