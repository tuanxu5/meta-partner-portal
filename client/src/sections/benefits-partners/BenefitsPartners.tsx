import "./BenefitsPartners.css";

export default function BenefitsPartners() {
  return (
    <div className="benefits-container">
      <div className="benefits-header">
        <h1>Programme benefits</h1>
        <p>
          Joining Meta Business Partners means access to benefits that can help you become an expert in driving client
          success across Meta technologies. Benefits are offered by programme tier level and can include:
        </p>
      </div>

      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="benefit-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <h2>Tools</h2>
          <p>Track and help improve your business' performance and growth</p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h2>Resources</h2>
          <p>Understand the latest product updates and industry insights</p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <h2>Training</h2>
          <p>Enhance your product knowledge and help you earn Meta certifications</p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h2>Support</h2>
          <p>Chat, email or speak live with Meta to get expert help and advice</p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M20.4 14.5L16 10 4 20" />
            </svg>
          </div>
          <h2>Recognition</h2>
          <p>Meta Business Partner badge and a partner directory listing</p>
        </div>
      </div>
    </div>
  );
}
