import { useEffect, useState } from "react";
import { Link } from "wouter";

const MetaHero = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to make the navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-sans text-gray-900">
      {/* Sticky Navigation Bar */}
      <header
        className={`bg-white w-full z-50 transition-shadow duration-300 ${
          isSticky ? "fixed top-0 left-0 shadow-md" : ""
        }`}
      >
        <div className="max-w-[1232px] mx-auto py-3 flex flex-wrap items-center justify-between relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.8562-6/263601789_228953422693663_3786388595935595545_n.svg?_nc_cat=110&ccb=1-7&_nc_sid=f537c7&_nc_ohc=2XJw9LHf2F8Q7kNvgEblOSb&_nc_oc=AdmY1VfjkxiyPVpPePWByCiGWpWqApoYTMe4meThLwWGpK1Ub8VovqLapcnE0M2SN9A&_nc_zt=14&_nc_ht=scontent.fhan5-9.fna&_nc_gid=nDeXr2uLZxUohW0k-C-1yw&oh=00_AYF81YfAvIK1HXpzEDmc8wLm09xCfry6z0yOhF_q22jYXQ&oe=67E1DAC3"
              alt="Meta Business Partners"
              className="h-8"
            />
          </div>

          {/* Navigation Links */}
          <nav
            className={`
            w-full md:w-auto md:items-center md:space-x-6 absolute md:relative top-full left-0 md:top-auto bg-white md:bg-transparent shadow-md md:shadow-none mt-2 md:mt-0 py-4 md:py-0 hidden lg:inline-block
          `}
          >
            <a href="#" className="block md:inline-block px-4 md:px-0 py-2 md:py-0 hover:text-blue-600">
              Become a partner
            </a>
            <a href="#" className="block md:inline-block px-4 md:px-0 py-2 md:py-0 hover:text-blue-600">
              Work with a partner
            </a>
            <a href="#" className="block md:inline-block px-4 md:px-0 py-2 md:py-0 hover:text-blue-600">
              Success stories
            </a>
          </nav>

          <div className="navbar-actions">
            <Link to="/login">
              <button className="border text-[#344854] text-sm font-bold border-[#344854] px-6 text-nowrap py-2.5 rounded-md">
                Partner login
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Notification Bar */}
      <div className="bg-[#DEE3E9] py-3">
        <div className="max-w-[1232px] mx-auto px-4 flex items-center justify-center space-x-2 text-sm gap-2">
          <img
            src="https://lookaside.fbsbx.com/elementpath/media/?media_id=314421987122918&version=1740504992&transcode_extension=webp"
            alt=""
            width="28"
          />
          <p className="text-gray-700">Partners, discover new Reels resources on the partner hub</p>
          <a href="#" className="text-blue-600 hover:underline">
            <button className="border text-[#344854] font-bold border-[#344854] px-6 text-nowrap py-2.5 rounded-md">
              Learn more
            </button>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#1C2B33] text-white py-16 md:py-16 mb-[100px]">
        <div className="max-w-[1232px] mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Hero Content */}
          <div className="md:w-1/2 text-start md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
              Meta Business Partners are trusted experts who enable businesses to grow
            </h1>
            <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed">
              Meta Business Partners are companies Meta has vetted for their technical skills and services, and their
              unique ability to help businesses grow. Partners are part of a respected global community, and get access
              to unique benefits such as training, support, analytics reports and client matching opportunities.
            </p>
            <Link href="/login">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full md:w-auto">
                Become a partner
              </button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2">
            <img
              src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.2365-6/297610189_612947213510259_132965087149951844_n.jpg?stp=dst-webp&_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=yeQ7PA1tUh8Q7kNvgGvHLm2&_nc_oc=AdmZxbxj8QN7ZYxKa__Sy2wC4Sx7zPZZsFa3pvVhoHTcOZv4H1NJNi18Cb5ZTP_dgLs&_nc_zt=14&_nc_ht=scontent.fhan5-8.fna&_nc_gid=nDeXr2uLZxUohW0k-C-1yw&oh=00_AYE6UDg7vbGz5b1BO_pEqD_ynBukUKDWJLnXwLUWkU_eyA&oe=67F65484"
              alt="Meta Business Partners meeting"
              className="w-full h-[70vh] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaHero;
