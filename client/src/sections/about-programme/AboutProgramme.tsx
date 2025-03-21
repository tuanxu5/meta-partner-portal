const AboutProgramme = () => {
  return (
    <div className="max-w-[1232px] mx-auto px-4 py-16 md:px-6 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Image Container */}
        <div className="w-full md:w-1/2 order-1 md:order-first">
          <img
            src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.2365-6/296900724_425995699554867_1823618606719324265_n.jpg?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=K42nAFtcO3kQ7kNvgEufEMA&_nc_oc=AdkcM0R5ubIMoPGf5ESwwRF8-BqjloKztrk5fBESzHDTzCvxes9jjS9srP-WUHisHRE&_nc_zt=14&_nc_ht=scontent.fhan5-8.fna&_nc_gid=GjeP9fZI2IVgh1vIzKA57Q&oh=00_AYF6EFcb79c3J2Xshf83zGo86rpnTqs10gx2MsK-ZXj6KA&oe=67F648A2"
            alt="Meta Business Partner Badge"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Container */}
        <div className="w-full md:w-1/2 order-2 md:order-last space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">About the Programme</h2>

          <div className="space-y-4 text-gray-600">
            <p className="text-base md:text-lg leading-relaxed">
              When you become a Meta Business Partner, you join a network of partners with the expertise to help
              businesses face the tasks of today and engineer a path to the future.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Get access to time-saving tools, resources, insights and training that can help you grow your own
              businesses while helping your clients build theirs.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Those who qualify get recognised for excellence with a Meta Business Partner badge. The badge lets people
              know that you're among the best at what you do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProgramme;
