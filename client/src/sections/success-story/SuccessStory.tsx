import "./SuccessStory.css";

export default function SuccessStory() {
  return (
    <div className="success-story-container">
      <h2 className="success-story-heading">Stories of partner success</h2>

      <div className="success-story-explore">
        <p>Explore all partner success stories</p>
      </div>

      <div className="success-story-card">
        <div className="success-story-content">
          <h3 className="partner-title">DataSauce + Metro Baby</h3>

          <a href="#" className="read-story-link">
            <span className="circle-icon">○</span>
            Read the success story
          </a>

          <div className="stat-box">
            <h3 className="stat-number">11%</h3>
            <p className="stat-description">year-over-year increase in revenue</p>

            <p className="stat-details">
              DataSauce, a Meta Business Partner, collaborated with speciality baby shop Metro Baby, to boost sales
              attributed to paid social and improve existing creatives with Advantage+ catalogue ads.
            </p>
          </div>

          <img
            src="https://lookaside.fbsbx.com/elementpath/media/?media_id=591005246452657&version=1740311134&transcode_extension=webphttps://lookaside.fbsbx.com/elementpath/media/?media_id=591005246452657&version=1740311134&transcode_extension=webp"
            alt="Baby playing with Metro Baby play gym"
            className="success-story-image"
          />
        </div>
      </div>

      <div className="pagination-dots">
        <span className="dot active"></span>
      </div>

      <p className="disclaimer-note">
        Note: Client-supplied ad campaign metrics are individualised. Others' experiences and results achieved will
        vary.
      </p>
    </div>
  );
}
