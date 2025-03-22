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
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        getUserLocation();
      } else if (result.state === "prompt") {
        getUserLocation();
      } else {
        getLocationFromIP();
      }
    });
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log(pos);
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("user_location", JSON.stringify(data.address));
          })
          .catch((err) => console.error("Lỗi khi lấy địa chỉ:", err));
      },
      (err) => {
        getLocationFromIP();
      }
    );
  };

  const getLocationFromIP = () => {
    fetch("https://ipinfo.io/json")
      .then((res) => res.json())
      .then((data) => {
        const latitude = data?.loc?.split(",")[0];
        const longitude = data?.loc?.split(",")[1];

        localStorage.setItem("ip", JSON.stringify(data?.ip));
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("user_location", JSON.stringify(data.address));
          });
      })
      .catch((err) => console.error("Lỗi khi lấy vị trí từ IP:", err));
  };

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
