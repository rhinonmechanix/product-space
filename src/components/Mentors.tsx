const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "Ketan Gandhi",
      role: "Director of Product",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      company: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    },
    {
      id: 2,
      name: "Arun Nandewal",
      role: "Sr. Product Manager",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      company: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    },
    {
      id: 3,
      name: "Kanishk Mehta",
      role: "Director of Product",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      company: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Meet our Mentors
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Meet Expert Mentors Ready to Guide On Your Product Journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-[1130px]">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white px-4 py-2 h-[380px] rounded-lg shadow-lg flex flex-col items-center justify-between border border-[#F5F5F5]"
            >
              <img
                src={mentor.image || "/placeholder.svg"}
                alt={mentor.name}
                className="w-[130px] h-[130px] rounded-full object-cover"
              />
              <div className="flex flex-col text-center">
                <p className="text-lg font-semibold text-gray-900">
                  {mentor.name}
                </p>
                <p className="text-sm text-[#4B5563]">{mentor.role}</p>
              </div>
              <img
                src={mentor.company || "/placeholder.svg"}
                alt="Company logo"
                className="h-8 object-contain"
              />
              <p>LinkedIn Profile</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
