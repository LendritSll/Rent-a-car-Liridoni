import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // NAVBAR
        home: "Home",
        about: "About",
        fleet: "Fleet",
        booking: "Booking",
        reviews: "Reviews",
        contact: "Contact",
        call: "Call",
        rental: "Rental",

        // BOOKING
        choose_car: "Choose Car",
        fleet_title: "FLEET TITLE",
        booking_title: "Booking",
        booking_heading: "Book Your Car",
        full_name: "Full Name",
        enter_name: "Enter your name",
        phone: "Phone",
        phone_placeholder: "Enter your phone number",
        pickup_date: "Pickup Date",
        car: "Car",
        choose_car_option: "Choose a car",
        send_booking: "Send Booking",
        whatsapp: "WhatsApp",
        booking_error: "Please fill all fields",
        booking_success: "Booking sent successfully",

        car_suv: "SUV",
        car_sedan: "Sedan",
        car_economy: "Economy",
        car_sport: "Sport",

        suv: "SUV",
        suv_price: "$60/day",
        suv_desc: "Spacious and powerful vehicles for all terrains.",
        suv_seats: "5 seats",
        suv_fuel: "Diesel / Petrol",
        suv_transmission: "Automatic",
        reserve: "Reserve",

        sedan: "Sedan",
        sedan_price: "$40/day",
        sedan_desc: "Comfortable and efficient cars for everyday use.",
        sedan_seats: "5 seats",
        sedan_fuel: "Petrol",
        sedan_transmission: "Manual / Automatic",

        economy: "Economy",
        economy_price: "$30/day",
        economy_desc: "Affordable and fuel-efficient cars.",
        economy_seats: "4 seats",
        economy_fuel: "Petrol",
        economy_transmission: "Manual",

        sport: "Sport",
        sport_price: "$80/day",
        sport_desc: "High-performance cars for a thrilling drive.",
        sport_seats: "2 seats",
        sport_fuel: "Petrol",
        sport_transmission: "Automatic",
        full_name: "First Name",
        booking_last_name: "Last Name",
        passport_placeholder: "Passport Number",
        child_seat: "Child Seat",

        whatsapp_booking_message:
          "Booking Request:\nName: {{name}}\nCar: {{car}}\nDate: {{date}}",


        // GENERAL
        contact_title: "Contact Us",
        phone_label: "Phone",
        address_label: "Address",
        address_value: "Prishtina International Airport",
        schedule_label: "Schedule",
        open_247: "Open 24 hours — 7 days a week",
        email_label: "Email",
        rights: "All rights reserved.",

        location: "Fushë Kosovë · 24/7",
        hero_title: "Reliable Car Rental in Kosovo",
        hero_desc:
          "Quality cars at competitive prices. Reliable service 24 hours, 7 days a week.",
        book_now: "Book Now",
        view_fleet: "View Fleet",
        about_heading: "About Us",
        about_desc:
          "We are a leading car rental company in Kosovo, committed to providing top-quality vehicles and exceptional customer service. Our fleet includes a wide range of cars to suit every need and budget, from economical options to luxury models. Whether you're traveling for business or leisure, we have the perfect car for you. Our team is dedicated to ensuring a seamless rental experience, with 24/7 support and flexible booking options. Choose us for your next car rental and experience the difference in quality and service.",
        reliability: "Reliability",
        reliability_desc: "We ensure that all our vehicles are well-maintained and reliable for your journeys.",
        service_247: "24/7 Service",
        service_247_desc: "Our customer support is available around the clock to assist you with any needs or concerns.",
        rating: "High Rating",
        rating_desc: "Our customers consistently rate us highly for our quality and service.",
        location_good: "Great Location",
        location_good_desc: "Conveniently located at Prishtina International Airport for easy access.",
        
      },
    },

    sq: {
      translation: {
        home: "Kryefaqe",
        about: "Rreth",
        fleet: "Flota",
        booking: "Rezervim",
        reviews: "Vlerësime",
        contact: "Kontakt",
        call: "Telefono",
        rental: "Qira",

        choose_car: "Zgjidh Makinën",
        fleet_title: "FLOTA",
        booking_title: "Rezervim",
        booking_heading: "Rezervo Makinën Tënde",
        full_name: "Emri i plotë",
        enter_name: "Shkruaj emrin",
        phone: "Telefoni",
        phone_placeholder: "Shkruaj numrin",
        pickup_date: "Data e marrjes",
        car: "Makina",
        choose_car_option: "Zgjidh një makinë",
        send_booking: "Dërgo Rezervimin",
        whatsapp: "WhatsApp",
        booking_error: "Ju lutem plotësoni të gjitha fushat",
        booking_success: "Rezervimi u dërgua me sukses",

        car_suv: "SUV",
        car_sedan: "Sedan",
        car_economy: "Ekonomike",
        car_sport: "Sport",

        suv: "SUV",
        suv_price: "60€/ditë",
        suv_desc: "Mjete të bollshme dhe të fuqishme për çdo terren.",
        suv_seats: "5 ulëse",
        suv_fuel: "Naftë / Benzinë",
        suv_transmission: "Automatik",
        reserve: "Rezervo",

        sedan: "Sedan",
        sedan_price: "40€/ditë",
        sedan_desc: "Makina komode dhe efikase për përdorim të përditshëm.",
        sedan_seats: "5 ulëse",
        sedan_fuel: "Benzinë",
        sedan_transmission: "Manual / Automatik",

        economy: "Ekonomi",
        economy_price: "30€/ditë",
        economy_desc: "Makina të përballueshme dhe me konsum të ulët.",
        economy_seats: "4 ulëse",
        economy_fuel: "Benzinë",
        economy_transmission: "Manual",

        sport: "Sport",
        sport_price: "80€/ditë",
        sport_desc: "Makina me performancë të lartë për një vozitje dinamike.",
        sport_seats: "2 ulëse",
        sport_fuel: "Benzinë",
        sport_transmission: "Automatik",
        full_name: "Emri",
        booking_last_name: "Mbiemri",
        passport_placeholder: "Numri i pasaportës",
        child_seat: "Ulëse për fëmijë",

        whatsapp_booking_message:
          "Kërkesë Rezervimi:\nEmri: {{name}}\nMakina: {{car}}\nData: {{date}}",

        contact_title: "Na Kontaktoni",
        phone_label: "Telefon",
        address_label: "Adresa",
        address_value: "Aeroporti Ndërkombëtar i Prishtinës",
        schedule_label: "Orari",
        open_247: "Hapur 24 orë — 7 ditë në javë",
        email_label: "Email",
        rights: "Të gjitha të drejtat e rezervuara.",

        location: "Fushë Kosovë · 24/7",
        hero_title: "Qira Makinash e Besueshme në Kosovë",
        hero_desc:
          "Makina cilësore me çmime konkurruese. Shërbim i besueshëm 24/7.",
        book_now: "Rezervo Tani",
        view_fleet: "Shiko Flotën",

        about_heading: "Rreth Nesh",
        about_desc:
          "Ne jemi një kompani kryesore e qirave të makinave në Kosovë, e përkushtuar për të ofruar automjete me cilësi të lartë dhe shërbim të jashtëzakonshëm për klientët. Flota jonë përfshin një gamë të gjerë makinash për të përshtatur çdo nevojë dhe buxhet, nga opsionet ekonomike deri te modelet luksoze. Qoftë që udhëtoni për biznes apo argëtim, ne kemi makinën perfekte për ju. Ekipi ynë është i dedikuar për të siguruar një përvojë qiraje pa probleme, me mbështetje 24/7 dhe opsione fleksibël rezervimi. Zgjidhni ne për qirën tuaj të ardhshme të makinës dhe përjetoni ndryshimin",
        reliability: "Besueshmëri",
        reliability_desc: "Sigurojmë që të gjitha automjetet tona janë të mirëmbajtura dhe të besueshme për udhëtimet tuaja.",

        service_247: "Shërbim 24/7",
        service_247_desc: "Mbështetja jonë për klientë është në dispozicion 24 orë në ditë, 7 ditë në javë, për çdo nevojë apo kërkesë.",

        rating: "Vlerësim i Lartë",
        rating_desc: "Klientët tanë na vlerësojnë vazhdimisht lart për cilësinë dhe shërbimin tonë.",

        location_good: "Lokacion i Shkëlqyer",
        location_good_desc: "I vendosur në mënyrë të përshtatshme në Aeroportin Ndërkombëtar të Prishtinës për qasje të lehtë.",

      },
    },

    de: {
      translation: {
        home: "Startseite",
        about: "Über uns",
        fleet: "Flotte",
        booking: "Buchung",
        reviews: "Bewertungen",
        contact: "Kontakt",
        call: "Anrufen",
        rental: "Miete",

        choose_car: "Auto auswählen",
        fleet_title: "FLOTTE",
        booking_title: "Buchung",
        booking_heading: "Auto buchen",
        full_name: "Vollständiger Name",
        enter_name: "Name eingeben",
        phone: "Telefon",
        phone_placeholder: "Telefonnummer eingeben",
        pickup_date: "Abholdatum",
        car: "Auto",
        choose_car_option: "Auto auswählen",
        send_booking: "Buchung senden",
        whatsapp: "WhatsApp",
        booking_error: "Bitte alle Felder ausfüllen",
        booking_success: "Buchung erfolgreich gesendet",

        car_suv: "SUV",
        car_sedan: "Limousine",
        car_economy: "Economy",
        car_sport: "Sport",

        suv: "SUV",
        suv_price: "60€/Tag",
        suv_desc: "Geräumige und leistungsstarke Fahrzeuge für jedes Gelände.",
        suv_seats: "5 Sitze",
        suv_fuel: "Diesel / Benzin",
        suv_transmission: "Automatik",
        reserve: "Reservieren",

        sedan: "Limousine",
        sedan_price: "40€/Tag",
        sedan_desc: "Komfortable und effiziente Autos für den Alltag.",
        sedan_seats: "5 Sitze",
        sedan_fuel: "Benzin",
        sedan_transmission: "Manuell / Automatik",

        economy: "Economy",
        economy_price: "30€/Tag",
        economy_desc: "Erschwingliche und sparsame Autos.",
        economy_seats: "4 Sitze",
        economy_fuel: "Benzin",
        economy_transmission: "Manuell",

        sport: "Sport",
        sport_price: "80€/Tag",
        sport_desc: "Hochleistungsautos für ein aufregendes Fahrerlebnis.",
        sport_seats: "2 Sitze",
        sport_fuel: "Benzin",
        sport_transmission: "Automatik",
        full_name: "Vorname",
        booking_last_name: "Nachname",
        passport_placeholder: "Reisepassnummer",
        child_seat: "Kindersitz",

        whatsapp_booking_message:
          "Buchungsanfrage:\nName: {{name}}\nAuto: {{car}}\nDatum: {{date}}",

        contact_title: "Kontaktieren Sie uns",
        phone_label: "Telefon",
        address_label: "Adresse",
        address_value: "Flughafen Pristina",
        schedule_label: "Öffnungszeiten",
        open_247: "24 Stunden geöffnet — 7 Tage die Woche",
        email_label: "E-Mail",
        rights: "Alle Rechte vorbehalten.",
        about_heading: "Über uns",
        about_desc:
          "Wir sind ein führendes Autovermietungsunternehmen in Kosovo, das sich der Bereitstellung von hochwertigen Fahrzeugen und außergewöhnlichem Kundenservice verschrieben hat. Unsere Flotte umfasst eine breite Palette von Autos, die jeden Bedarf und jedes Budget abdecken, von wirtschaftlichen Optionen bis hin zu Luxusmodellen. Egal, ob Sie geschäftlich oder privat unterwegs sind, wir haben das perfekte Auto für Sie. Unser Team ist bestrebt, ein nahtloses Mieterlebnis zu gewährleisten, mit 24/7 Support und flexiblen Buchungsoptionen. Wählen Sie uns für Ihre nächste Autovermietung und erleben Sie den Unterschied in Qualität und Service.",
        reliability: "Zuverlässigkeit",
        reliability_desc: "Wir stellen sicher, dass alle unsere Fahrzeuge gut gewartet und zuverlässig für Ihre Fahrten sind.",

        service_247: "24/7 Service",
        service_247_desc: "Unser Kundensupport ist rund um die Uhr verfügbar, um Ihnen bei allen Anliegen zu helfen.",

        rating: "Top-Bewertungen",
        rating_desc: "Unsere Kunden bewerten uns regelmäßig sehr hoch für Qualität und Service.",

        location_good: "Zentrale Lage",
        location_good_desc: "Günstig gelegen am Flughafen Pristina für eine einfache Erreichbarkeit.",
      },
    },

    it: {
      translation: {
        home: "Home",
        about: "Chi Siamo",
        fleet: "Flotta",
        booking: "Prenotazione",
        reviews: "Recensioni",
        contact: "Contatto",
        call: "Chiama",
        rental: "Noleggio",

        choose_car: "Scegli l'auto",
        fleet_title: "FLOTTA",
        booking_title: "Prenotazione",
        booking_heading: "Prenota la tua auto",
        full_name: "Nome completo",
        enter_name: "Inserisci il nome",
        phone: "Telefono",
        phone_placeholder: "Inserisci il numero",
        pickup_date: "Data di ritiro",
        car: "Auto",
        choose_car_option: "Scegli un'auto",
        send_booking: "Invia Prenotazione",
        whatsapp: "WhatsApp",
        booking_error: "Compila tutti i campi",
        booking_success: "Prenotazione inviata con successo",

        car_suv: "SUV",
        car_sedan: "Berlina",
        car_economy: "Economica",
        car_sport: "Sportiva",

        suv: "SUV",
        suv_price: "60€/giorno",
        suv_desc: "Veicoli spaziosi e potenti per ogni terreno.",
        suv_seats: "5 posti",
        suv_fuel: "Diesel / Benzina",
        suv_transmission: "Automatico",
        reserve: "Prenota",

        sedan: "Berlina",
        sedan_price: "40€/giorno",
        sedan_desc: "Auto confortevoli ed efficienti per l’uso quotidiano.",
        sedan_seats: "5 posti",
        sedan_fuel: "Benzina",
        sedan_transmission: "Manuale / Automatico",

        economy: "Economy",
        economy_price: "30€/giorno",
        economy_desc: "Auto economiche e a basso consumo.",
        economy_seats: "4 posti",
        economy_fuel: "Benzina",
        economy_transmission: "Manuale",

        sport: "Sport",
        sport_price: "80€/giorno",
        sport_desc: "Auto ad alte prestazioni per una guida emozionante.",
        sport_seats: "2 posti",
        sport_fuel: "Benzina",
        sport_transmission: "Automatico",
        full_name: "Nome",
        booking_last_name: "Cognome",
        passport_placeholder: "Numero di passaporto",
        child_seat: "Seggiolino per bambini",

        whatsapp_booking_message:
          "Richiesta Prenotazione:\nNome: {{name}}\nAuto: {{car}}\nData: {{date}}",

        contact_title: "Contattaci",
        phone_label: "Telefono",
        address_label: "Indirizzo",
        address_value: "Aeroporto di Pristina",
        schedule_label: "Orario",
        open_247: "Aperto 24 ore — 7 giorni su 7",
        email_label: "Email",
        rights: "Tutti i diritti riservati.",
        about_heading: "Chi Siamo",
        about_desc:
          "Siamo una delle principali compagnie di noleggio auto in Kosovo, impegnata a fornire veicoli di alta qualità e un servizio clienti eccezionale. La nostra flotta include una vasta gamma di auto per soddisfare ogni esigenza e budget, dalle opzioni economiche ai modelli di lusso. Che tu stia viaggiando per affari o per piacere, abbiamo l'auto perfetta per te. Il nostro team è dedicato a garantire un'esperienza di noleggio senza problemi, con supporto 24/7 e opzioni di prenotazione flessibili. Scegli noi per il tuo prossimo noleggio auto e sperimenta la differenza in qualità e servizio.",
        reliability: "Affidabilità",
        reliability_desc: "Garantiamo che tutti i nostri veicoli siano ben mantenuti e affidabili per i tuoi viaggi.",
        service_247: "Servizio 24/7",
        service_247_desc: "Il nostro supporto clienti è disponibile 24 ore su 24, 7 giorni su 7 per assisterti in qualsiasi momento.",
        rating: "Valutazione Eccellente",
        rating_desc: "I nostri clienti ci valutano costantemente con punteggi elevati per la qualità e il servizio.",

        location_good: "Posizione Strategica",
        location_good_desc: "Situato comodamente presso l'Aeroporto di Pristina per un accesso facile e veloce.",
      },
    },
  },

  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;