
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CoursesPage from "./pages/CoursesPage";
import CoursePage from "./pages/CoursePage";
import TravelsPage from "./pages/TravelsPage";
import TravelPage from "./pages/TravelPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import EShop from "./pages/EShop";
import NauiSection from "./pages/NauiSection";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<AboutUsPage />} />
          <Route path="/e-shop" element={<EShop />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/cursos" element={<CoursesPage />} />
          <Route path="/cursos/:courseId" element={<CoursePage />} />
          <Route path="/viajes" element={<TravelsPage />} />
          <Route path="/viajes/:travelId" element={<TravelPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/naui" element={<NauiSection />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
