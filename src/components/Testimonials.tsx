const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Singh",
      role: "Product Manager at Swiggy",
      image: "/placeholder.svg?height=60&width=60",
      company: "/placeholder.svg?height=20&width=60",
      text: "The fellowship program completely transformed my career. I was able to transition from a developer role to a product manager at Swiggy with a 70% salary hike.",
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Associate PM at Google",
      image: "/placeholder.svg?height=60&width=60",
      company: "/placeholder.svg?height=20&width=60",
      text: "The mentorship I received during the program was invaluable. The curriculum is well-structured and covers all aspects of product management that are relevant in today's industry.",
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Product Lead at Razorpay",
      image: "/placeholder.svg?height=60&width=60",
      company: "/placeholder.svg?height=20&width=60",
      text: "The hands-on projects and real-world case studies helped me develop practical skills that I use every day in my role. The placement support was exceptional.",
    },
  ]

  return (
    <section className="py-12 bg-cyan-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">We have placed 500+ cohort members</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs text-gray-500">Verified</span>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-gray-700 mb-6">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

