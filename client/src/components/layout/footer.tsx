import { useState } from "react";
import "./footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleCountryChange = (e: any) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <footer className="fb-footer">
      {/* Phần đăng ký nhận thông tin */}
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

      {/* Nội dung footer chính */}
      <div className="fb-footer-content">
        {/* Cột 1: Công nghệ của Meta */}
        <div className="fb-footer-column">
          <h3>Meta technologies</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Messenger</a>
            </li>
            <li>
              <a href="#">WhatsApp</a>
            </li>
            <li>
              <a href="#">Audience Network</a>
            </li>
            <li>
              <a href="#">Meta Quest</a>
            </li>
            <li>
              <a href="#">Workplace</a>
            </li>
            <li>
              <a href="#">Meta for Work</a>
            </li>
          </ul>
        </div>

        {/* Cột 2: Mục tiêu */}
        <div className="fb-footer-column">
          <h3>Target</h3>
          <ul>
            <li>
              <a href="#">Set up Facebook Page</a>
            </li>
            <li>
              <a href="#">Build brand awareness</a>
            </li>
            <li>
              <a href="#">Local Business Advertising</a>
            </li>
            <li>
              <a href="#">Increase online sales</a>
            </li>
            <li>
              <a href="#">App advertising</a>
            </li>
            <li>
              <a href="#">Search for potential customers</a>
            </li>
            <li>
              <a href="#">Measure and optimize advertising</a>
            </li>
            <li>
              <a href="#">Retarget existing customers</a>
            </li>
            <li>
              <a href="#">View all goals</a>
            </li>
          </ul>
        </div>

        {/* Cột 3: Ngành */}
        <div className="fb-footer-column">
          <h3>Branch</h3>
          <ul>
            <li>
              <a href="#">Car</a>
            </li>
            <li>
              <a href="#">Consumer packaged goods</a>
            </li>
            <li>
              <a href="#">E-commerce</a>
            </li>
            <li>
              <a href="#">Entertainment and media</a>
            </li>
            <li>
              <a href="#">Financial Services</a>
            </li>
            <li>
              <a href="#">Game</a>
            </li>
            <li>
              <a href="#">Real estate</a>
            </li>
            <li>
              <a href="#">Restaurant</a>
            </li>
            <li>
              <a href="#">Retail</a>
            </li>
            <li>
              <a href="#">Technology and telecommunications</a>
            </li>
            <li>
              <a href="#">Tourism</a>
            </li>
          </ul>
        </div>

        {/* Cột 4: Kỹ năng và đào tạo */}
        <div className="fb-footer-column">
          <h3>Skills and training</h3>
          <ul>
            <li>
              <a href="#">Online Learning</a>
            </li>
            <li>
              <a href="#">Certificate Program</a>
            </li>
            <li>
              <a href="#">Webinar</a>
            </li>
          </ul>

          <h3 className="second-heading">Guides, information & resources</h3>
          <ul>
            <li>
              <a href="#">Advertising instructions</a>
            </li>
            <li>
              <a href="#">Safety and integrity</a>
            </li>
            <li>
              <a href="#">Business Equality</a>
            </li>
            <li>
              <a href="#">Find business partners</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>

        {/* Cột 5: Người dẫn hướng */}
        <div className="fb-footer-column">
          <h3>Business Help Center</h3>
          <ul>
            <li>
              <a href="#">Create and manage accounts</a>
            </li>
            <li>
              <a href="#">Post and distribute content</a>
            </li>
            <li>
              <a href="#">Advertisement</a>
            </li>
            <li>
              <a href="#">Sell on Facebook and Instagram</a>
            </li>
            <li>
              <a href="#">Monetize your content or app</a>
            </li>
            <li>
              <a href="#">View all posts</a>
            </li>
          </ul>
        </div>

        {/* Cột 6: Trung tâm trợ giúp doanh nghiệp */}
        <div className="fb-footer-column">
          <h3>Tools</h3>
          <ul>
            <li>
              <a href="#">Free Tools</a>
            </li>
            <li>
              <a href="#">Facebook Page</a>
            </li>
            <li>
              <a href="#">Instagram profile</a>
            </li>
            <li>
              <a href="#">Believe</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Meta Business Suite</a>
            </li>
          </ul>
        </div>

        {/* Cột 6: Trung tâm trợ giúp doanh nghiệp */}
        <div className="fb-footer-column">
          <h3>Business type</h3>
          <ul>
            <li>
              <a href="#">Small Business</a>
            </li>
            <li>
              <a href="#">Large Enterprise</a>
            </li>
            <li>
              <a href="#">Agency</a>
            </li>
            <li>
              <a href="#">Media and publishers</a>
            </li>
            <li>
              <a href="#">Content Creator</a>
            </li>
            <li>
              <a href="#">Startup​</a>
            </li>
            <li>
              <a href="#">Business partners</a>
            </li>
          </ul>
        </div>

        {/* Cột 6: Trung tâm trợ giúp doanh nghiệp */}
        <div className="fb-footer-column">
          <h3>Inspiration</h3>
          <ul>
            <li>
              <a href="#">Campaign Instructions</a>
            </li>
            <li>
              <a href="#">Business News</a>
            </li>
            <li>
              <a href="#">Case study</a>
            </li>
            <li>
              <a href="#">Event</a>
            </li>
            <li>
              <a href="#">Creative Hub</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="fb-footer-bottom">
        <div className="fb-footer-bottom-content">
          <div>
            <div className="fb-footer-legal">
              <span>© 2025 Meta</span>
            </div>
            <div className="fb-footer-social">
              <a href="#" aria-label="Facebook">
                <img
                  src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.8562-6/120319840_799089310850692_4027936540782357774_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_eui2=AeGBL237EivMOlgfxC45ysUGJ8PaSmpXU90nw9pKaldT3bbq0duJZYDi12RinMxoNdROtQw4D32HSDbuyEZXjfPx&_nc_ohc=NIGCfvJkiWAQ7kNvgGKVFg2&_nc_oc=AdmmU4vctbINuEhy8KrEP6r4ZVRsr81NB-ubqypoQkQKEH2DY-bsOT0fq6wlYjwltsc&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=wA1RCPqP_W4D8Xy_uVGMAA&oh=00_AYHD5pcwkfHK-cmzdXLkNpuirqXDy-9zMjE7MmrS8SIkmA&oe=67E30541"
                  alt=""
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.8562-6/125184609_367828907811587_6232717932985532700_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_eui2=AeGLreSN3g4h7zSC6jmoyX0h5XvgP63SoDvle-A_rdKgO4SsMY5CFPLkrrk7JKFP4JmIa8OxsbUbytYoy_LR-B-5&_nc_ohc=Soe-Grrmx10Q7kNvgH8E7OT&_nc_oc=Admz2Fgr3Kv3Y81TK4K-hsX47gsKfTm5ofokL64fbfU8fJeSTif_mch247QFWdxFLm4&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=wA1RCPqP_W4D8Xy_uVGMAA&oh=00_AYGD57S2c2zdbJngPcuqPz01lm_RpDRewIM75matvFbe7Q&oe=67E30919"
                  alt=""
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.8562-6/441034187_942108774275199_7014061644230638502_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_eui2=AeEADXWixyh7l0fDY1Xb7F6lZWMr7KlhNKJlYyvsqWE0olJcremAIznFFGp91lSgOUBn9pxk5BTmFs_9b1BgLgOR&_nc_ohc=yUS0m5WQnUIQ7kNvgH4eiQZ&_nc_oc=AdlxfffmH0VfRA_xIj9Ig5-eKzzgFT7NBzyKff9Ll8BjBObfuuknKVo3l-TFsXmRI94&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=wA1RCPqP_W4D8Xy_uVGMAA&oh=00_AYEXdaNAHmskcStrD5c4Jt9LLD_aySK8CTGT4aJbEe_wdA&oe=67E30002"
                  alt=""
                />
              </a>
              <a href="#" aria-label="YouTube">
                <img
                  src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.8562-6/125236997_694902778115984_451660285310228094_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_eui2=AeHNJ6RYfF7NrsZN-x-H4qELuO9nG37NvUm472cbfs29SVwsz4_txC8LMo_GABD2nN8u8oTW-F55g86vkFzzqDAw&_nc_ohc=LmFagZQUvTYQ7kNvgE8AQGw&_nc_oc=AdnJCuJg-AczGbzGfv6xGXMAQocD6J5BNHBq_HRnFLZkXnD0Mpj9J03S1DfC_QWD2z0&_nc_zt=14&_nc_ht=scontent.fhan19-1.fna&_nc_gid=wA1RCPqP_W4D8Xy_uVGMAA&oh=00_AYHl__4dEUPOaslSLDfLCaUDGzYbt-1GZlf0vBRJpSU3Pg&oe=67E2D83F"
                  alt=""
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
              <a href="#">Vietnamese</a>
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
