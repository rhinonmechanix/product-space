const CourseJourney = () => {
  const profiles = [
    {
      id: 1,
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      company: "Google",
      name: "John Doe",
    },
    {
      id: 2,
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      company: "Microsoft",
      name: "Jane Smith",
    },
    {
      id: 3,
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      company: "Amazon",
      name: "Michael Johnson",
    },
    {
      id: 4,
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      company: "Swiggy",
      name: "Emily Davis",
    },
    {
      id: 5,
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      company: "Uber",
      name: "Chris Brown",
    },
    {
      id: 6,
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      company: "Netflix",
      name: "Sophia Wilson",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full bg-black text-white py-16 px-4 gap-[75px]">
      {/* Header Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0">
          Course Journey At Glance
        </h1>

        <div className="bg-white text-black rounded-lg text-center min-w-[360px] flex py-3 px-[29px] h-[100px] items-center justify-around">
          <div className="">
            <div className="text-2xl md:text-3xl font-bold">600+</div>
            <div className="text-sm">Alumni</div>
          </div>
          <div className="h-full w-0.5 bg-black"></div>
          <div className="">
            <div className="text-2xl md:text-3xl font-bold">400+</div>
            <div className="text-sm">Transitions</div>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex items-center space-x-4 animate-scroll group-hover:paused">
          {/* Duplicate profiles to create infinite scroll effect */}
          {[...profiles, ...profiles].map((profile, index) => (
            <div
              key={index}
              className="w-[380px] h-[237px] rounded-3xl p-4 flex flex-col items-center justify-between gap-4 bg-white shrink-0"
            >
              <img
                src={
                  profile.image ||
                  "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                }
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modules Section */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          "PM Foundations Modules",
          "Discovery & Problem Solving",
          "Product Planning & Documentation",
          "Product Analytics & Growth Lifecycle",
        ].map((module, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-lg p-4 flex items-start"
          >
            {/* <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" /> */}
            <span className="text-sm">{module}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-full flex items-center transition-colors">
        Enroll Now
        {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
      </button>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); } /* Moves only half of duplicated items */
          }
          .animate-scroll {
            display: flex;
            animation: scroll 4s linear infinite;
          }
          .group:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default CourseJourney;
