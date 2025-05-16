
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Courses from "@/components/Courses";
import Travels from "@/components/Travels";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NauiSection from "@/pages/NauiSection";
import FaqSection from "@/components/FaqSection";
import CursosCarousel from "@/components/CursosCarousel";
import ImagesCarousel from "@/components/ImagesCarousel"
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      <AboutUs />
      <ImagesCarousel />
      <CursosCarousel />
      <Footer />
    </div>
  );
};

export default Index;
