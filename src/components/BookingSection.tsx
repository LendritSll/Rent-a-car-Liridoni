import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const BookingSection = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    passport: "",
    arrivalDate: "",
    departureDate: "",
    car: "",
    childSeat: false,
  });

  const carOptions = [
    t("car_suv"),
    t("car_sedan"),
    t("car_economy"),
    t("car_sport"),
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.lastName ||
      !form.phone ||
      !form.passport ||
      !form.arrivalDate ||
      !form.departureDate ||
      !form.car
    ) {
      toast.error(t("booking_error"));
      return;
    }

    const templateParams = {
      name: form.name + " " + form.lastName,
      phone: form.phone,
      passport: form.passport,
      arrivalDate: form.arrivalDate,
      departureDate: form.departureDate,
      car: form.car,
      childSeat: form.childSeat ? "Po" : "Jo",
    };

    try {
      // ✅ EMAIL
      await emailjs.send(
        "service_st4mnev",
        "template_q608v3c",
        templateParams,
        "XW6WjFwmjTwwCPTBS"
      );

      // ✅ WHATSAPP MESSAGE (i rregulluar)
      const msg = `📌 REZERVIM I RI

👤 Emri: ${templateParams.name}
📞 Telefoni: ${templateParams.phone}
🪪 Passport: ${templateParams.passport}
🚗 Vetura: ${templateParams.car}
📅 Nga: ${templateParams.arrivalDate}
📅 Deri: ${templateParams.departureDate}
👶 Child Seat: ${templateParams.childSeat}
`;

      const phoneNumber = "38345108803"; // numri yt

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;

      // 🔥 më stabile se window.open
      window.location.href = url;

      toast.success("Rezervimi u dërgua me sukses 🚀");

      // ✅ RESET FORM
      setForm({
        name: "",
        lastName: "",
        phone: "",
        passport: "",
        arrivalDate: "",
        departureDate: "",
        car: "",
        childSeat: false,
      });

    } catch (error) {
      console.error(error);
      toast.error("Gabim gjatë dërgimit ❌");
    }
  };

  return (
    <section id="booking" className="section-padding">
      <div className="container mx-auto max-w-2xl">

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-5"
        >
          <input
            type="text"
            placeholder={t("full_name")}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3"
          />

          <input
            type="text"
            placeholder={t("booking_last_name")}
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3"
          />

          <input
            type="tel"
            placeholder={t("phone")}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3"
          />

          <input
            type="text"
            placeholder={t("passport_placeholder")}
            value={form.passport}
            onChange={(e) => setForm({ ...form, passport: e.target.value })}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3"
          />

          <input
            type="date"
            value={form.arrivalDate}
            onChange={(e) =>
              setForm({ ...form, arrivalDate: e.target.value })
            }
            className="w-full bg-secondary border border-border rounded-md px-4 py-3"
          />

          <input
            type="date"
            value={form.departureDate}
            onChange={(e) =>
              setForm({ ...form, departureDate: e.target.value })
            }
            className="w-full bg-secondary border border-border rounded-md px-4 py-3"
          />

          <select
            value={form.car}
            onChange={(e) => setForm({ ...form, car: e.target.value })}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3"
          >
            <option value="">{t("choose_car_option")}</option>
            {carOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={form.childSeat}
              onChange={(e) =>
                setForm({ ...form, childSeat: e.target.checked })
              }
            />
            {t("child_seat")}
          </label>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-semibold text-lg flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            {t("send_booking")}
          </button>

          {/* ✅ BUTON WHATSAPP I RREGULLUAR */}
          <a
            href="https://wa.me/38345108803"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-green-600 text-green-500 py-3.5 rounded-md font-semibold flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            {t("whatsapp")}
          </a>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;