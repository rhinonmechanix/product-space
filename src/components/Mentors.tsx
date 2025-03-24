const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Senior PM at Google",
      image: "/placeholder.svg?height=80&width=80",
      company: "/placeholder.svg?height=20&width=60",
    },
    {
      id: 2,
      name: "Priya Deshmukh",
      role: "Product Lead at Microsoft",
      image: "/placeholder.svg?height=80&width=80",
      company: "/placeholder.svg?height=20&width=60",
    },
    {
      id: 3,
      name: "Karthik Reddy",
      role: "Director of Product at PayTM",
      image: "/placeholder.svg?height=80&width=80",
      company: "/placeholder.svg?height=20&width=60",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Meet our Mentors</h2>
        <p className="text-center text-gray-600 mb-10">
          Learn from Industry Experts who've built the Best Product Journeys
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="flex flex-col items-center">
              <img
                src={mentor.image || "/placeholder.svg"}
                alt={mentor.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="w-24 h-24 rounded-full mb-4 object-cover" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">{mentor.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{mentor.role}</p>
              <img src={mentor.company || "/placeholder.svg"} alt="Company logo" className="h-6 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mentors

