import "./AboutProgramme.css";

export default function AboutProgramme() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-container">
          <img
            src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.2365-6/296900724_425995699554867_1823618606719324265_n.jpg?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=K42nAFtcO3kQ7kNvgEufEMA&_nc_oc=AdkcM0R5ubIMoPGf5ESwwRF8-BqjloKztrk5fBESzHDTzCvxes9jjS9srP-WUHisHRE&_nc_zt=14&_nc_ht=scontent.fhan5-8.fna&_nc_gid=GjeP9fZI2IVgh1vIzKA57Q&oh=00_AYF6EFcb79c3J2Xshf83zGo86rpnTqs10gx2MsK-ZXj6KA&oe=67F648A2"
            alt="Two smiling women with Meta Business Partner badge"
            className="about-image"
          />
        </div>

        <div className="about-text">
          <h2 className="about-title">About the programme</h2>

          <p className="about-paragraph">
            When you become a Meta Business Partner, you join a network of partners with the expertise to help
            businesses face the tasks of today and engineer a path to the future.
          </p>

          <p className="about-paragraph">
            Get access to time-saving tools, resources, insights and training that can help you grow your own businesses
            while helping your clients build theirs.
          </p>

          <p className="about-paragraph">
            Those who qualify get recognised for excellence with a Meta Business Partner badge. The badge lets people
            know that you're among the best at what you do.
          </p>
        </div>
      </div>
    </div>
  );
}
