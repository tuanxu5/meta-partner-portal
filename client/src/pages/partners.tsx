import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AboutProgramme from "@/sections/about-programme/AboutProgramme";
import ApplyPartner from "@/sections/apply-partner/ApplyPartner";
import BenefitsPartners from "@/sections/benefits-partners/BenefitsPartners";
import MetaHero from "@/sections/meta-hero/MetaHero";
import ProgrammeWorks from "@/sections/programme-works/ProgrammeWorks";
import RelatedContent from "@/sections/related-content/RelatedContent";
import SuccessStory from "@/sections/success-story/SuccessStory";
import { useEffect } from "react";

export default function Partners() {
  useEffect(() => {
    const url = `https://api64.ipify.org?format=json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("ip", JSON.stringify(data.ip));
      })
      .catch((err) => console.error("Lỗi khi lấy địa chỉ:", err));
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("user_location", JSON.stringify(data.address)); // Lưu vào localStorage
        })
        .catch((err) => console.error("Lỗi khi lấy địa chỉ:", err));
    });
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MetaHero />
      <AboutProgramme />
      <ProgrammeWorks />
      <BenefitsPartners />
      <SuccessStory />
      <ApplyPartner />
      <RelatedContent />
      <Footer />
    </div>
  );
}
