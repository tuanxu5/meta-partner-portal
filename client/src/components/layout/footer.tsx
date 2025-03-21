import { useEffect, useState } from "react";
import "./footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [expandedSection, setExpandedSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport size on component mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitting email:", email, "country:", country);
  };

  const toggleSection = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };

  // Footer column data
  const footerColumns = [
    {
      title: "Meta technologies",
      links: [
        { text: "Facebook", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "Messenger", url: "#" },
        { text: "WhatsApp", url: "#" },
        { text: "Audience Network", url: "#" },
        { text: "Meta Quest", url: "#" },
        { text: "Workplace", url: "#" },
        { text: "Meta for Work", url: "#" },
      ],
    },
    {
      title: "Target",
      links: [
        { text: "Set up Facebook Page", url: "#" },
        { text: "Build brand awareness", url: "#" },
        { text: "Local Business Advertising", url: "#" },
        { text: "Increase online sales", url: "#" },
        { text: "App advertising", url: "#" },
        { text: "Search for potential customers", url: "#" },
        { text: "Measure and optimize advertising", url: "#" },
        { text: "Retarget existing customers", url: "#" },
        { text: "View all goals", url: "#" },
      ],
    },
    {
      title: "Branch",
      links: [
        { text: "Car", url: "#" },
        { text: "Consumer packaged goods", url: "#" },
        { text: "E-commerce", url: "#" },
        { text: "Entertainment and media", url: "#" },
        { text: "Financial Services", url: "#" },
        { text: "Game", url: "#" },
        { text: "Real estate", url: "#" },
        { text: "Restaurant", url: "#" },
        { text: "Retail", url: "#" },
        { text: "Technology and telecommunications", url: "#" },
        { text: "Tourism", url: "#" },
      ],
    },
    {
      title: "Skills and training",
      links: [
        { text: "Online Learning", url: "#" },
        { text: "Certificate Program", url: "#" },
        { text: "Webinar", url: "#" },
      ],
      secondSection: {
        title: "Guides, information & resources",
        links: [
          { text: "Advertising instructions", url: "#" },
          { text: "Safety and integrity", url: "#" },
          { text: "Business Equality", url: "#" },
          { text: "Find business partners", url: "#" },
          { text: "Sitemap", url: "#" },
        ],
      },
    },
    {
      title: "Business Help Center",
      links: [
        { text: "Create and manage accounts", url: "#" },
        { text: "Post and distribute content", url: "#" },
        { text: "Advertisement", url: "#" },
        { text: "Sell on Facebook and Instagram", url: "#" },
        { text: "Monetize your content or app", url: "#" },
        { text: "View all posts", url: "#" },
      ],
    },
    {
      title: "Tools",
      links: [
        { text: "Free Tools", url: "#" },
        { text: "Facebook Page", url: "#" },
        { text: "Instagram profile", url: "#" },
        { text: "Believe", url: "#" },
        { text: "Shop", url: "#" },
        { text: "Meta Business Suite", url: "#" },
      ],
    },
    {
      title: "Business type",
      links: [
        { text: "Small Business", url: "#" },
        { text: "Large Enterprise", url: "#" },
        { text: "Agency", url: "#" },
        { text: "Media and publishers", url: "#" },
        { text: "Content Creator", url: "#" },
        { text: "Startup​", url: "#" },
        { text: "Business partners", url: "#" },
      ],
    },
    {
      title: "Inspiration",
      links: [
        { text: "Campaign Instructions", url: "#" },
        { text: "Business News", url: "#" },
        { text: "Case study", url: "#" },
        { text: "Event", url: "#" },
        { text: "Creative Hub", url: "#" },
      ],
    },
  ];

  return (
    <footer className="fb-footer">
      {/* Subscription section */}
      <div className="fb-subscription-container">
        <div className="fb-subscription-content">
          <div className="fb-subscription-text">
            <h2>Get the latest updates from Meta for business.</h2>
            <p>
              Provide your email address to receive the latest updates from Meta for business, including news, events
              and product updates.
            </p>
          </div>

          <div className="fb-subscription-form">
            <form onSubmit={handleSubmit}>
              <div className="fb-form-inputs">
                <input type="email" placeholder="Email address" value={email} onChange={handleEmailChange} required />
                <input
                  type="text"
                  placeholder="Enter a country name..."
                  value={country}
                  onChange={handleCountryChange}
                  required
                />
              </div>
              <p className="fb-form-disclaimer">
                By submitting this form, you agree to receive marketing related electronic communications from Meta,
                including news, events, updates and promotional emails. You may withdraw your consent and unsubscribe
                from these at any time, for example, by clicking the unsubscribe link included in our emails. For more
                information about how Meta handles your data, please read our <a href="#">Data Policy</a>.
              </p>
              <button type="submit" className="fb-submit-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="fb-footer-divider"></div>

      {/* Main footer content */}
      <div className="fb-footer-content">
        {footerColumns.map((column, index) => (
          <div key={index} className={`fb-footer-column ${isMobile ? "mobile" : ""}`}>
            {/* Column header (clickable on mobile) */}
            <div
              className={`fb-column-header ${expandedSection === index ? "expanded" : ""}`}
              onClick={() => isMobile && toggleSection(index)}
            >
              <h3>{column.title}</h3>
              {isMobile && (
                <span className="fb-toggle-icon">
                  {expandedSection === index ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 15L12 8L19 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 9L12 16L5 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              )}
            </div>

            {/* Column links (always visible on desktop, toggleable on mobile) */}
            <div className={`fb-column-links ${!isMobile || expandedSection === index ? "visible" : ""}`}>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>

              {/* Second section if available */}
              {column.secondSection && (
                <>
                  <h3 className="second-heading">{column.secondSection.title}</h3>
                  <ul>
                    {column.secondSection.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="fb-footer-bottom">
        <div className="fb-footer-bottom-content">
          <div className="fb-footer-meta">
            <div className="fb-footer-legal">
              <span>© 2025 Meta</span>
            </div>
            <div className="fb-footer-social">
              <a href="#" aria-label="Facebook">
                <img
                  src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.8562-6/120319840_799089310850692_4027936540782357774_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_eui2=AeGBL237EivMOlgfxC45ysUGJ8PaSmpXU90nw9pKaldT3bbq0duJZYDi12RinMxoNdROtQw4D32HSDbuyEZXjfPx&_nc_ohc=NIGCfvJkiWAQ7kNvgGKVFg2&_nc_oc=AdmmU4vctbINuEhy8KrEP6r4ZVRsr81NB-ubqypoQkQKEH2DY-bsOT0fq6wlYjwltsc&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=wA1RCPqP_W4D8Xy_uVGMAA&oh=00_AYHD5pcwkfHK-cmzdXLkNpuirqXDy-9zMjE7MmrS8SIkmA&oe=67E30541"
                  alt="Facebook"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.8562-6/125184609_367828907811587_6232717932985532700_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_eui2=AeGLreSN3g4h7zSC6jmoyX0h5XvgP63SoDvle-A_rdKgO4SsMY5CFPLkrrk7JKFP4JmIa8OxsbUbytYoy_LR-B-5&_nc_ohc=Soe-Grrmx10Q7kNvgH8E7OT&_nc_oc=Admz2Fgr3Kv3Y81TK4K-hsX47gsKfTm5ofokL64fbfU8fJeSTif_mch247QFWdxFLm4&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=wA1RCPqP_W4D8Xy_uVGMAA&oh=00_AYGD57S2c2zdbJngPcuqPz01lm_RpDRewIM75matvFbe7Q&oe=67E30919"
                  alt="Twitter"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.8562-6/441034187_942108774275199_7014061644230638502_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_eui2=AeEADXWixyh7l0fDY1Xb7F6lZWMr7KlhNKJlYyvsqWE0olJcremAIznFFGp91lSgOUBn9pxk5BTmFs_9b1BgLgOR&_nc_ohc=yUS0m5WQnUIQ7kNvgH4eiQZ&_nc_oc=AdlxfffmH0VfRA_xIj9Ig5-eKzzgFT7NBzyKff9Ll8BjBObfuuknKVo3l-TFsXmRI94&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=wA1RCPqP_W4D8Xy_uVGMAA&oh=00_AYEXdaNAHmskcStrD5c4Jt9LLD_aySK8CTGT4aJbEe_wdA&oe=67E30002"
                  alt="Instagram"
                />
              </a>
              <a href="#" aria-label="YouTube">
                <img
                  src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.8562-6/125236997_694902778115984_451660285310228094_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_eui2=AeHNJ6RYfF7NrsZN-x-H4qELuO9nG37NvUm472cbfs29SVwsz4_txC8LMo_GABD2nN8u8oTW-F55g86vkFzzqDAw&_nc_ohc=LmFagZQUvTYQ7kNvgE8AQGw&_nc_oc=AdnJCuJg-AczGbzGfv6xGXMAQocD6J5BNHBq_HRnFLZkXnD0Mpj9J03S1DfC_QWD2z0&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=wA1RCPqP_W4D8Xy_uVGMAA&oh=00_AYHl__4dEUPOaslSLDfLCaUDGzYbt-1GZlf0vBRJpSU3Pg&oe=67E2D83F"
                  alt="YouTube"
                />
              </a>
            </div>
          </div>

          <div className="fb-footer-links">
            <a href="#">Introduce</a>
            <a href="#">Developer</a>
            <a href="#">Recruitment</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie</a>
            <a href="#">Clause</a>
            <a href="#">Help Center</a>

            <div className="fb-languages">
              <a href="#" className="">
                Vietnamese
              </a>
              <a href="#">English (US)</a>
              <a href="#">English (UK)</a>
              <a href="#">Spanish</a>
              <a href="#">Portuguese (Brazil)</a>
              <a href="#">French (France)</a>
              <a href="#">Other languages</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
