
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Testimonials = lazy(() => import("@/components/Testimonials"));
const AboutUs = lazy(() => import("@/components/AboutUs"));
const ImagesCarousel = lazy(() => import("@/components/ImagesCarousel"));
const CursosCarousel = lazy(() => import("@/components/CursosCarousel"));
const Footer = lazy(() => import("@/components/Footer"));
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Testimonials />
        <AboutUs />
        <ImagesCarousel />
        <CursosCarousel />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
