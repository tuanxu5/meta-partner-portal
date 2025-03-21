import React from "react";

interface ContentItemProps {
  title: string;
  hasArrow?: boolean;
}

const ContentItem: React.FC<ContentItemProps> = ({ title, hasArrow = true }) => {
  return (
    <div className="border-b border-[#cbd2d9] pb-6 sm:pb-8 md:pb-10 pt-6 sm:pt-8 md:pt-10 cursor-pointer transition-all hover:bg-gray-50">
      <div className="flex justify-between items-center gap-4">
        <div className="text-[#1c2b33] font-medium leading-tight sm:leading-[27px] text-[16px] sm:text-[17px] md:text-[18px] tracking-[0.25px]">
          {title}
        </div>
        {hasArrow && (
          <div className="text-blue-600 flex-shrink-0">
            <img
              src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.8562-6/436368815_978158867209887_3678501748610046195_n.svg?_nc_cat=105&ccb=1-7&_nc_sid=f537c7&_nc_ohc=8irpWbrYf_QQ7kNvgHyTLQT&_nc_oc=AdmRCB0sP06tzyc_XVaCARxSSpgQMlBKjwAuBkebcEukTPNs6dDACxFrVX1KuUNApdE&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=3CaVh2wNwHIJF9iAYYKR6w&oh=00_AYE85-6hmUHo4AloI-Gr7PwLp32TOchPYDGdRJlXMnHNLw&oe=67E1BC52"
              alt="Arrow right"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default function RelatedContent() {
  const contentItems = [
    "Meta Business Partners: Trusted experts who enable businesses to grow",
    "Meta Success Centre for Agencies",
    "Facebook Business Partners: Apply to become a Messenger partner",
    "Meta Business Partners: Become a Commerce Partner",
    "Meta Business Partner programme policies",
    "Meta Business Partners: Find an expert to help you advertise on Facebook, Instagram and Messenger",
  ];

  return (
    <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight md:leading-[38px] tracking-[0.5px] md:tracking-[1px] font-medium mb-6 sm:mb-8 md:mb-[32px]">
        Related content
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-0">
        {contentItems.map((title, index) => (
          <ContentItem key={index} title={title} />
        ))}
      </div>
    </div>
  );
}
