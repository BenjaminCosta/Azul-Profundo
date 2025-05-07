import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Salta al top sin animación
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
