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
              <a href="#">Portal</a>
            </li>
          </ul>
        </div>

        {/* Cột 2: Mục tiêu */}
        <div className="fb-footer-column">
          <h3>Goals</h3>
          <ul>
            <li>
              <a href="#">Thiết lập fanpage Facebook</a>
            </li>
            <li>
              <a href="#">Tìm hiểu về công cụ quảng cáo</a>
            </li>
            <li>
              <a href="#">Quảng cáo trên nghiệp</a>
            </li>
            <li>
              <a href="#">Quảng cáo theo vị trí</a>
            </li>
            <li>
              <a href="#">Thiết lập instagram</a>
            </li>
            <li>
              <a href="#">Tìm hiểu về website</a>
            </li>
            <li>
              <a href="#">Quảng cáo trên điện thoại</a>
            </li>
            <li>
              <a href="#">Tìm kiếm vị trí quảng cáo</a>
            </li>
          </ul>
        </div>

        {/* Cột 3: Ngành */}
        <div className="fb-footer-column">
          <h3>Ngành</h3>
          <ul>
            <li>
              <a href="#">Ô tô</a>
            </li>
            <li>
              <a href="#">Hàng tiêu dùng đóng gói</a>
            </li>
            <li>
              <a href="#">Thương mại điện tử</a>
            </li>
            <li>
              <a href="#">Giải trí và truyền thông</a>
            </li>
            <li>
              <a href="#">Dịch vụ tài chính</a>
            </li>
            <li>
              <a href="#">Game</a>
            </li>
            <li>
              <a href="#">Bất động sản</a>
            </li>
            <li>
              <a href="#">Bán lẻ</a>
            </li>
            <li>
              <a href="#">Công nghệ</a>
            </li>
            <li>
              <a href="#">Du lịch</a>
            </li>
          </ul>
        </div>

        {/* Cột 4: Kỹ năng và đào tạo */}
        <div className="fb-footer-column">
          <h3>Kỹ năng và đào tạo</h3>
          <ul>
            <li>
              <a href="#">Blueprint</a>
            </li>
            <li>
              <a href="#">Các khóa học trực tuyến miễn phí</a>
            </li>
            <li>
              <a href="#">Webinar</a>
            </li>
          </ul>

          <h3 className="second-heading">Hướng dẫn, hỗ trợ kỹ thuật và nguồn lực</h3>
          <ul>
            <li>
              <a href="#">Hướng dẫn quảng cáo</a>
            </li>
            <li>
              <a href="#">Hỗ trợ doanh nghiệp</a>
            </li>
            <li>
              <a href="#">Bình đẳng kinh doanh</a>
            </li>
            <li>
              <a href="#">Tìm đối tác tiếp thị</a>
            </li>
            <li>
              <a href="#">Tài liệu web</a>
            </li>
          </ul>
        </div>

        {/* Cột 5: Người dẫn hướng */}
        <div className="fb-footer-column">
          <h3>Người dẫn hướng</h3>
          <ul>
            <li>
              <a href="#">Hướng dẫn về chiến dịch</a>
            </li>
            <li>
              <a href="#">Tự học hiệu quả</a>
            </li>
            <li>
              <a href="#">Nắm bắt xu thế thống kê</a>
            </li>
            <li>
              <a href="#">Tài liệu</a>
            </li>
            <li>
              <a href="#">Creator Hub</a>
            </li>
          </ul>
        </div>

        {/* Cột 6: Trung tâm trợ giúp doanh nghiệp */}
        <div className="fb-footer-column">
          <h3>Trung tâm trợ giúp doanh nghiệp</h3>
          <ul>
            <li>
              <a href="#">Tạo và quản lý tài khoản</a>
            </li>
            <li>
              <a href="#">Mua và giá quảng cáo</a>
            </li>
            <li>
              <a href="#">Quảng cáo</a>
            </li>
            <li>
              <a href="#">Đưa nội dung Facebook và Instagram</a>
            </li>
            <li>
              <a href="#">Kiếm tiền từ nội dung hoặc ứng dụng của bạn</a>
            </li>
            <li>
              <a href="#">Meta Store</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="fb-footer-bottom">
        <div className="fb-footer-bottom-content">
          <div className="fb-footer-social">
            <a href="#" aria-label="Facebook">
              <span className="fb-icon"></span>
            </a>
            <a href="#" aria-label="Twitter">
              <span className="twitter-icon"></span>
            </a>
            <a href="#" aria-label="Instagram">
              <span className="instagram-icon"></span>
            </a>
            <a href="#" aria-label="YouTube">
              <span className="youtube-icon"></span>
            </a>
          </div>

          <div className="fb-footer-legal">
            <span>© 2024 Meta</span>
          </div>

          <div className="fb-footer-links">
            <a href="#">Giới thiệu</a>
            <a href="#">Trợ giúp</a>
            <a href="#">Tiêu chuẩn</a>
            <a href="#">Quyền riêng tư</a>
            <a href="#">Cookie</a>
            <a href="#">Điều khoản</a>

            <div className="fb-languages">
              <a href="#">Tiếng Việt</a>
              <a href="#">English (US)</a>
              <a href="#">Español</a>
              <a href="#">Português (Brasil)</a>
              <a href="#">Français (France)</a>
              <a href="#">Ngôn ngữ khác</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
