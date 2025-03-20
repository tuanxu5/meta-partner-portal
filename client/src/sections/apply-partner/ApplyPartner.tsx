import { useState } from "react";
import "./ApplyPartner.css";

export default function ApplyPartner() {
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
  const [feedbackValue, setFeedbackValue] = useState(null);

  const handleFeedback = (value) => {
    setFeedbackValue(value);
    setIsFeedbackSubmitted(true);
  };

  return (
    <div className="apply-container">
      <div className="apply-content">
        <div className="apply-text">
          <h2 className="apply-title">Apply to become a Meta Business Partner</h2>
          <p className="apply-description">
            Join Meta Business Partners and get access to time-saving tools, resources, insights and training to help
            your clients grow and succeed.
          </p>

          <div className="apply-buttons">
            <a href="#" className="apply-button primary">
              Become a partner
            </a>
            <a href="#" className="apply-button secondary">
              <span className="button-icon">○</span>
              Partner login
            </a>
          </div>
        </div>

        <div className="apply-image-container">
          <img
            src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.2365-6/296912800_1419099301920093_9021293747789925534_n.jpg?stp=dst-webp&_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=UTG0ntRMs1gQ7kNvgGPCcg0&_nc_oc=AdkpK6ywlTQ16r-72XkwJZTut7TO52nGWuvDxEPzeSlk6aX3r6coCVHRq1bUSU9eOas&_nc_zt=14&_nc_ht=scontent.fhan5-2.fna&_nc_gid=UBlhdVOBuOH2386m2KyTWw&oh=00_AYHEaHwMV3XbrbRZwCs3E5IDBLk59V8nmSk1AC1F9swe4g&oe=67F65616"
            alt="Woman working on laptop"
            className="apply-image"
          />
        </div>
      </div>

      <div className="feedback-section">
        <p className="feedback-question">Was this page helpful?</p>
        <div className="feedback-options">
          <label className={`feedback-option ${feedbackValue === "yes" ? "selected" : ""}`}>
            <input
              type="radio"
              name="feedback"
              value="yes"
              checked={feedbackValue === "yes"}
              onChange={() => handleFeedback("yes")}
            />
            <span className="checkmark"></span>
            Yes
          </label>
          <label className={`feedback-option ${feedbackValue === "no" ? "selected" : ""}`}>
            <input
              type="radio"
              name="feedback"
              value="no"
              checked={feedbackValue === "no"}
              onChange={() => handleFeedback("no")}
            />
            <span className="checkmark"></span>
            No
          </label>
        </div>
      </div>
    </div>
  );
}
