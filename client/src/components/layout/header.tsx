import { useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const navItems = [
    {
      title: "Get started",
      dropdown: {
        sections: [
          {
            title: "Accomplish your goals",
            links: [
              { text: "Build awareness" },
              { text: "Reach new customers" },
              { text: "Increase sales" },
              { text: "Monetise your content" },
            ],
          },
          {
            title: "Start with business tools",
            links: [
              { text: "Facebook Page" },
              { text: "Meta Business Suite" },
              { text: "Shops" },
              { text: "Ads Manager" },
            ],
          },
          {
            title: "Explore apps",
            links: [{ text: "Facebook" }, { text: "Instagram" }, { text: "Messenger" }, { text: "WhatsApp" }],
          },
        ],
      },
    },
    {
      title: "Advertise",
      dropdown: {
        sections: [
          {
            title: "Explore Meta ads",
            links: [
              { text: "Intro to advertising" },
              { text: "Ad performance" },
              { text: "Facebook ads" },
              { text: "Instagram ads" },
              { text: "Ad specifications" },
              { text: "Inspiration" },
            ],
          },
          {
            title: "Create an ad",
            links: [{ text: "Go to Ads Manager" }],
          },
        ],
      },
    },
    {
      title: "Learn",
      dropdown: {
        sections: [
          {
            title: "Start a course",
            links: [{ text: "Free lessons" }, { text: "Meta certification" }],
          },
          {
            title: "Discover more insights",
            links: [{ text: "Marketing insights" }, { text: "Business news" }, { text: "Case studies" }],
          },
        ],
      },
    },
    {
      title: "Support",
      dropdown: {
        sections: [
          {
            title: "Search for solutions",
            links: [{ text: "Business Help Centre" }, { text: "Get support" }],
          },
          {
            title: "View popular help topics",
            links: [
              { text: "Managing accounts" },
              { text: "Publishing content" },
              { text: "Advertising" },
              { text: "Selling products" },
              { text: "Monetising content" },
            ],
          },
          {
            title: "Work with experts",
            links: [{ text: "Meta Business Partners" }],
          },
        ],
      },
    },
  ];

  const userDropdownItems = [
    { text: "Log in to Meta for Business", description: "Manage your ad accounts and get personalised support." },
    { text: "Create a Page" },
  ];

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  return (
    <div className="w-full bg-white shadow-sm relative">
      <div className="mx-auto px-10">
        <div className="flex items-center justify-between h-[80px]">
          <div className="flex items-center gap-10">
            <div className="flex-shrink-0">
              <img
                src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.8562-6/278025437_369851991690397_7980697822423283727_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=28b1f4&_nc_ohc=p3is92HE7kIQ7kNvgHXa-F4&_nc_oc=Adlzbkm8fqTYa39ufu73O7KhfNzvivcxVeioAqAhfbTJX026A_94zGxoLLaieoh41ps&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=d38dgjM9lzFdXfp7z6ShDA&oh=00_AYGPszmBDpu10MCVsBVWF5DbbvtQn3wGKYmKteLJ2zeCzg&oe=67E1B454"
                alt=""
                width="66"
              />
            </div>
            <nav className="ml-6">
              <ul className="flex space-x-10">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    // className="relative"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="text-[14px] px-3 py-2 text-gray-800 hover:text-blue-600 font-semibold">
                      {item.title}
                    </button>
                    {activeMenu === index && item.dropdown.sections.length > 0 && (
                      <div
                        className="absolute top-full left-0 bg-white shadow-lg mt-1 z-10 w-screen pt-10 pb-[150px]"
                        style={{ left: "0", right: "0", top: "48px" }}
                      >
                        <div className="mx-auto px-[6%]">
                          <div className="grid grid-cols-5 gap-8 py-8">
                            {item.dropdown.sections.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                <h3 className="text-[12px] text-gray-500 mb-4">{section.title}</h3>
                                <ul className="space-y-4">
                                  {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                      <a
                                        href="#"
                                        className="text-[#1c2b33] text-[18px] hover:text-blue-600 font-medium"
                                      >
                                        {link.text}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-10">
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="relative">
              <button
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative bg-[#dde3e9]"
                onClick={toggleUserDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-500"></span>
              </button>
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 z-20 w-72">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-900">Log in to Meta for Business</h3>
                      <p className="text-sm text-gray-600">Manage your ad accounts and get personalised support.</p>
                      <button className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#FFFFFF">
                          <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9 21.59 18.03 20.37 19.58 18.57C21.13 16.76 21.98 14.49 22 12.14C22 6.55 17.5 2.04 12 2.04Z" />
                        </svg>
                        Log in with Facebook
                      </button>
                    </div>
                    <div className="border-t pt-3">
                      <button className="text-[#0064e0] hover:text-blue-700 font-medium">Create a Page</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button className="bg-[#0064e0] hover:bg-blue-700 text-[14px] text-white py-2.5 px-4 rounded-full flex items-center gap-2">
              Start now
              <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
