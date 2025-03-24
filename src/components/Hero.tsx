const Hero = () => {
  const items = [
    { title: "Learn AI Tools", description: "Live demo Walkthrough" },
    { title: "Interview Preparation", description: "Comprehensive Mocks" },
    { title: "Placement Support", description: "1 Year Career Assistance" },
    { title: "Portfolio Preparation", description: "Notion" },
  ];
  return (
    <>
      <div className="bg-transparent md:px-10 xl:px-28 md:py-8 lg:pt-28 lg:pb-20">
        <div className="bg-white relative flex flex-col lg:flex-row py-4 lg:py-8 items-center justify-between gap-6 md:gap-8 lg:gap-12 rounded-[24px] md:rounded-[32px] px-4 lg:px-8">
          <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[70%]">
            <div className="relative flex flex-col gap-4 lg:border-2 border-[#00B5CE] px-2 py-0 lg:p-8 rounded-3xl overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center hidden md:block"
                style={{
                  backgroundImage:
                    "url('https://www.figma.com/file/DUZPzk7haAaa0fIAxaK93H/image/a1b90cf2b8a79f2f2dc03d23f9cba1aa6f875997')",
                  opacity: 0.12,
                }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent  hidden md:block"></div>

              {/* Content */}
              <div className="relative flex flex-col gap-3 text-center lg:text-start">
                <div className="flex gap-2 h-[42px] md:w-[124px] w-full items-center justify-center md:justify-baseline">
                  <p className="font-extrabold text-2xl h-[42px] w-[42px] bg-[#21C1F3] rounded-lg text-white flex items-center justify-center">
                    AI
                  </p>
                  <p className="font-bold text-xl tracking-widest leading-[160%]">
                    FIRST
                  </p>
                </div>
                <div>
                  <h1 className="text-[24px] md:text-[28px] lg:text-[40px] font-bold font-sans">
                    Product Management <br /> Fellowship
                  </h1>
                </div>
                <div className="hidden lg:flex text-[18px]">
                  Become AI Powered PM
                </div>
              </div>
              <div className="relative flex justify-around lg:justify-start gap-10 text-[16px]">
                <div>
                  <p className="font-semibold text-lg">Start date</p>
                  <p className="text-[#FFA600] font-semibold text-lg">
                    Nov 30, 2024
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Duration</p>
                  <p className="text-[#FFA600] font-semibold text-lg">
                    10 Weeks
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative rounded-[24px] md:rounded-[32px] lg:w-[37%] shadow-lg p-4 md:p-12 md:py-10 lg:absolute border-2 border-[#00B5CE] lg:right-10 lg:top-[50%] lg:transform lg:-translate-y-1/2"
            style={{
              backgroundImage:
                "linear-gradient(white 57%, rgb(215, 245, 255) 50%)",
            }}
          >
            <div className="text-start pt-2">
              <p className="text-[14px] hidden sm:block">
                Best price for next 5 seats
              </p>
              <div className="flex gap-2 items-end">
                <p className="text-[24px] md:text-[32x] lg:text-[40px] font-bold text-black font-sans">
                  ₹23,999
                </p>
                <p className="text-[18px] line-through pb-1">₹29,999</p>
              </div>
            </div>
            <div className="space-y-3 mt-4 text-[14px]">
              <div className="flex items-end gap-1">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
                <p>Offer valid till 15th Nov 2024</p>
              </div>
              <div className="text-[14px]">
                Pay 50% now to enrol and remaining in next 2 weeks.
              </div>
              <div className="font-semibold text-[14px]">Cohort seats: 60</div>
            </div>
            <button className="flex w-full bg-yellow-400 hover:bg-yellow-500 text-black p-2 px-6 md:p-3 md:px-8 rounded-full mt-6 items-center justify-center text-[20px] shadow-[5px_5px_0_rgba(0,0,0)] ">
              Enroll Now
            </button>
            <button className="w-full bg-white border border-black text-[20px] text-black font-semibold py-3 rounded-full mt-4 flex justify-center gap-2">
              Download Curriculum
            </button>
            <div className="flex items-center gap-1 text-[14px] lg:text-[16px] mt-6">
              <div>
                Hurry! <span className="font-bold">50 people</span> have already
                enrolled in the past 1 month
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block text-[16px] flex-col lg:grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl px-4 py-6 border-2 border-gray-100 mt-2 lg:mt-32 mx-4 lg:mx-8 shadow-lg shadow-[#21C1F340] mb-12 lg:mb-0">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-start lg:items-center gap-2 text-start lg:text-center
        ${
          index !== items.length - 1
            ? "border-b lg:border-b-0 lg:border-r border-gray-200"
            : ""
        }`}
            >
              <div className="flex items-center gap-2 font-semibold">
                {item.title}
              </div>
              <div className="text-gray-600">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
