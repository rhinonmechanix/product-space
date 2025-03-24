const Stats = () => {
  return (
    <section className="py-12 bg-white">
      <div className="hidden md:block">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Stats Section */}
          <div className="flex-1 flex flex-wrap gap-6 w-[560px]">
            <div className="flex gap-6 w-full">
              <div className="bg-white p-6 w-full flex flex-col items-end">
                <h3 className="text-2xl font-bold text-gray-900">₹ 97 LPA</h3>
                <p className="text-sm text-gray-600">Highest CTC</p>
              </div>

              <div className="bg-white p-6 w-full">
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-sm text-gray-600">Placements</p>
              </div>
            </div>

            <div className="flex gap-6 w-full">
              <div className="bg-white p-6 w-full flex flex-col items-end">
                <h3 className="text-2xl font-bold text-gray-900">₹14 LPA</h3>
                <p className="text-sm text-gray-600">Average CTC</p>
              </div>

              <div className="bg-white p-6 w-full">
                <h3 className="text-2xl font-bold text-gray-900">1.5x</h3>
                <p className="text-sm text-gray-600">Average Salary Hike</p>
              </div>
            </div>
          </div>

          {/* Placement Stats Section */}
          <div className="w-full md:w-[40%] bg-white p-6">
            <div>
              <h3 className="text-[40px] font-bold text-gray-900 mb-2">
                Placement Stats
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Detailed Analysis of Student Placement Outcomes and Recruitment
                Trends
              </p>
            </div>
            <button className="w-[300px] px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 mt-10 text-[18px]">
              Kickstart Your Journey
            </button>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="flex flex-col gap-8 mb-2 lg:mb-12 items-center">
          <div className="mx-4 md:mx-10 lg:mx-20 py-4 lg:py-8 px-2 lg:px-10 mt-6 lg:mt-12 border-2 border-[#C3C3C3] bg-[#F5F5F5] rounded-xl">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-16 justify-between py-4 items-center">
              <div className="text-[24px] lg:text-[32px] font-bold w-full lg:w-1/4 text-center lg:text-start font-sans">
                Placement Stats
              </div>
              <div className="flex gap-4 justify-between w-full md:w-auto md:justify-around items-center font-sans xl:gap-0 text-center">
                <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
                  <div className="border-r-2 border-[#C3C3C3] px-4 xl:px-12">
                    <div>
                      ₹
                      <span className="text-[24px] lg:text-[40px] font-semibold">
                        <span>57</span> LPA
                      </span>
                    </div>
                    <div className="text-[14px] font-medium text-black">
                      Highest Salary
                    </div>
                  </div>
                  <div className="border-r-2 border-[#C3C3C3] px-4 xl:px-12">
                    <div>
                      <span className="text-[24px] lg:text-[40px] font-semibold">
                        <span>500</span>+
                      </span>
                    </div>
                    <div className="text-[14px] font-medium text-black">
                      Placed Alums
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
                  <div className="md:border-r-2 md:border-[#C3C3C3] px-4 xl:px-12">
                    <div>
                      ₹
                      <span className="text-[24px] lg:text-[40px] font-semibold">
                        <span>14</span> LPA
                      </span>
                    </div>
                    <div className="text-[14px] font-medium text-black">
                      Average Salary
                    </div>
                  </div>
                  <div className="false px-4 xl:px-12">
                    <div>
                      <span className="text-[24px] lg:text-[40px] font-semibold">
                        <span>1.6</span>X
                      </span>
                    </div>
                    <div className="text-[14px] font-medium text-black">
                      Average Hike
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500 mt-10 text-[18px]">
            Kickstart Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
