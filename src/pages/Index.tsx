
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Courses from "@/components/Courses";
import Travels from "@/components/Travels";
import Testimonials from "@/components/Testimonials";
import EShop from "@/pages/EShop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NauiSection from "@/components/NauiSection";
import FaqSection from "@/components/FaqSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <NauiSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
