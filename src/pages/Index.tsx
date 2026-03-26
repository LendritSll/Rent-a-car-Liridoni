import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FleetSection from "@/components/FleetSection";
import BookingSection from "@/components/BookingSection";
// import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <FleetSection />
    <BookingSection />
    {/* <ReviewsSection /> */}
    <ContactSection />
    <Footer />
  </>
);

export default Index;
