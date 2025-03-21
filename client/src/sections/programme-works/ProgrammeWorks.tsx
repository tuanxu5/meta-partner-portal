import "./ProgrammeWorks.css";

export default function ProgrammeWorks() {
  return (
    <div className="programme-container">
      <div className="programme-header">
        <h2>How the programme works</h2>
        <p className="programme-description">
          Companies can apply to become Meta Business Partners across a number of technical and creative solutions –
          from agency, to adtech, to creative to messaging and more. Eligibility criteria varies by solution type, and
          is typically a combination of the quantity and quality of your company's work across Meta technologies such as
          Facebook, Instagram and Messenger.*
        </p>
        <p className="programme-tiers-intro">Applicants who qualify are placed in one of two programme tiers:</p>
      </div>

      <div className="tiers-container">
        <div className="tier-card">
          <div className="tier-badge member">MEMBER</div>
          <h3 className="tier-title">Member tier</h3>
          <p className="tier-description">
            Members are not badged as official Meta Business Partners, but get access to collateral and tools designed
            to help them grow their expertise in Meta technologies, including sales presentations, training materials,
            recommendations on optimising Meta spend and more.
          </p>
        </div>

        <div className="tier-card">
          <div className="tier-badge badged">BADGED</div>
          <h3 className="tier-title">Badged partner tier</h3>
          <p className="tier-description">
            In addition to member-level benefits, badged partners are invited to list their company on Meta's partner
            directory, receive the Meta Business Partner badge and get access to specially curated benefits such as live
            chat support, technical support and more.
          </p>
        </div>
      </div>

      <div className="programme-footnote">
        <p>* Terms and conditions apply. Programme benefits are subject to change.</p>
      </div>
    </div>
  );
}
