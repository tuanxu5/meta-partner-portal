import { useEffect } from "react";
import { useLocation } from "wouter";

export const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
