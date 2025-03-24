const Transitions = () => {
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
    {
      id: 7,
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      company: "Apple",
      name: "Daniel Martinez",
    },
    {
      id: 8,
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      company: "Facebook",
      name: "Olivia Taylor",
    },
  ];

  return (
    <section className="flex flex-col bg-[#F5F5F5] pt-3 pb-10 lg:pb-16 overflow-hidden">
      <div className="py-5 lg:py-10">
        <div className="text-[24px] lg:text-[40px] font-bold text-center font-sans px-4">
          270+ Product Transitions in last 6 months
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex items-center space-x-6 animate-scroll group-hover:paused min-w-[calc(220px*6)]">
          {/* Duplicate profiles to create infinite scroll effect */}
          {[...profiles, ...profiles].map((profile, index) => (
            <div
              key={index}
              className="w-[220px] h-[266px] rounded-3xl p-4 flex flex-col items-center justify-between gap-4 bg-white shrink-0"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden border border-white">
                  <img
                    src={
                      profile.image ||
                      "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                    }
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-gray-600">{profile.name}</span>
              </div>
              <div className="flex items-center h-[50px] justify-center w-full">
                {profile.company}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); } /* Moves only half of duplicated items */
          }
          .animate-scroll {
            display: flex;
            animation: scroll 10s linear infinite;
          }
          .group:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default Transitions;
