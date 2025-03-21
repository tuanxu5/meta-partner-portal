import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AboutProgramme from "@/sections/about-programme/AboutProgramme";
import ApplyPartner from "@/sections/apply-partner/ApplyPartner";
import BenefitsPartners from "@/sections/benefits-partners/BenefitsPartners";
import MetaHero from "@/sections/meta-hero/MetaHero";
import ProgrammeWorks from "@/sections/programme-works/ProgrammeWorks";
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
      <div className="max-w-[1232px] mx-auto py-12 md:py-16">
        <h2 className="text-[32px] leading-[38px] tracking-[1px] font-medium mb-[32px]">Related content</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          <ContentItem title="Meta Business Partners: Trusted experts who enable businesses to grow" />
          <ContentItem title="Meta Success Centre for Agencies" />
          <ContentItem title="Facebook Business Partners: Apply to become a Messenger partner" />
          <ContentItem title="Meta Business Partners: Become a Commerce Partner" />
          <ContentItem title="Meta Business Partner programme policies" />
          <ContentItem title="Meta Business Partners: Find an expert to help you advertise on Facebook, Instagram and Messenger" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

interface ContentItemProps {
  title: string;
  hasArrow?: boolean;
}

const ContentItem: React.FC<ContentItemProps> = ({ title, hasArrow = true }) => {
  return (
    <div className="border-b border-[#cbd2d9] pb-10 pt-10 cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="text-[#1c2b33] font-medium leading-[27px] text-[18px] tracking-[0.25px]">{title}</div>
        {hasArrow && (
          <div className="text-blue-600">
            <img
              src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.8562-6/436368815_978158867209887_3678501748610046195_n.svg?_nc_cat=105&ccb=1-7&_nc_sid=f537c7&_nc_ohc=8irpWbrYf_QQ7kNvgHyTLQT&_nc_oc=AdmRCB0sP06tzyc_XVaCARxSSpgQMlBKjwAuBkebcEukTPNs6dDACxFrVX1KuUNApdE&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=3CaVh2wNwHIJF9iAYYKR6w&oh=00_AYE85-6hmUHo4AloI-Gr7PwLp32TOchPYDGdRJlXMnHNLw&oe=67E1BC52"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};
