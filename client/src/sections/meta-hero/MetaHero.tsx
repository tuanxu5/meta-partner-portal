import { useEffect, useState } from "react";
import { Link } from "wouter";
import "./MetaHero.css";

export default function MetaHero() {
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll event to make the navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="meta-section">
      {/* Sticky Navigation Bar */}
      <header className={`meta-navbar ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.8562-6/263601789_228953422693663_3786388595935595545_n.svg?_nc_cat=110&ccb=1-7&_nc_sid=f537c7&_nc_ohc=2XJw9LHf2F8Q7kNvgEblOSb&_nc_oc=AdmY1VfjkxiyPVpPePWByCiGWpWqApoYTMe4meThLwWGpK1Ub8VovqLapcnE0M2SN9A&_nc_zt=14&_nc_ht=scontent.fhan5-9.fna&_nc_gid=nDeXr2uLZxUohW0k-C-1yw&oh=00_AYF81YfAvIK1HXpzEDmc8wLm09xCfry6z0yOhF_q22jYXQ&oe=67E1DAC3"
              alt="Meta Business Partners"
            />
          </div>

          <nav className="navbar-links">
            <a href="#" className="nav-link">
              Become a partner
            </a>
            <a href="#" className="nav-link">
              Work with a partner
            </a>
            <a href="#" className="nav-link">
              Success stories
            </a>
          </nav>

          <div className="navbar-actions">
            <Link to="/login">
              <button className="login-button">Partner login</button>
            </Link>
          </div>
        </div>
      </header>

      {/* Notification Bar */}
      <div className="notification-bar">
        <div className="notification-container">
          <div className="notification-icon">
            <span>○</span>
          </div>
          <p className="notification-text">Partners, discover new Reels resources on the partner hub</p>
          <a href="#" className="notification-link">
            Learn more
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Meta Business Partners are trusted experts who enable businesses to grow</h1>

            <p className="hero-description">
              Meta Business Partners are companies Meta has vetted for their technical skills and services, and their
              unique ability to help businesses grow. Partners are part of a respected global community, and get access
              to unique benefits such as training, support, analytics reports and client matching opportunities.
            </p>

            <Link href="/login  ">
              <button className="cta-button">Become a partner</button>
            </Link>
          </div>

          <div className="hero-image-container">
            <img
              src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.2365-6/297610189_612947213510259_132965087149951844_n.jpg?stp=dst-webp&_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=yeQ7PA1tUh8Q7kNvgGvHLm2&_nc_oc=AdmZxbxj8QN7ZYxKa__Sy2wC4Sx7zPZZsFa3pvVhoHTcOZv4H1NJNi18Cb5ZTP_dgLs&_nc_zt=14&_nc_ht=scontent.fhan5-8.fna&_nc_gid=nDeXr2uLZxUohW0k-C-1yw&oh=00_AYE6UDg7vbGz5b1BO_pEqD_ynBukUKDWJLnXwLUWkU_eyA&oe=67F65484"
              alt="Meta Business Partners meeting"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
