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
  ];

  const starSvg = (
    <svg
      width="478"
      height="714"
      viewBox="0 0 478 714"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_5151_53328)">
        <path
          d="M780.531 -5.80256C814.156 -15.0529 839.974 24.1286 818.208 51.3765L713.86 182.006C704.126 194.192 703.345 211.26 711.926 224.283L803.917 363.891C823.106 393.012 793.82 429.673 761.18 417.393L604.698 358.518C590.101 353.026 573.627 357.558 563.893 369.744L459.545 500.374C437.779 527.622 393.862 511.098 395.455 476.261L403.092 309.245C403.804 293.665 394.404 279.398 379.807 273.906L223.325 215.031C190.684 202.751 192.828 155.877 226.453 146.627L387.655 102.28C402.692 98.1427 413.356 84.7934 414.068 69.2135L421.705 -97.8027C423.298 -132.64 468.54 -145.087 487.729 -115.966L579.72 23.6421C588.301 36.6652 604.292 42.6817 619.329 38.5448L780.531 -5.80256Z"
          fill="#21C1F3"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_5151_53328"
          x="0"
          y="-332.211"
          width="1026.23"
          height="1046.2"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_5151_53328"
          />
        </filter>
      </defs>
    </svg>
  );

  return (
    <section className="py-12 relative">
      <div className="absolute right-0 top-0 hidden md:block">{starSvg}</div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[564px] py-10 flex flex-col justify-around">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-gray-900 text-center">
            We have placed 500+ cohort members
          </p>
          <p>Product-led organizations get stuff done with Product Space</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm z-10"
            >
              <div className="flex items-center justify-between">

              <div className="flex items-center mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs text-gray-500">Verified</span>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              </div>

              <p className="text-sm text-gray-700 mb-6">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute rotate-180 bottom-0 md:block hidden">{starSvg}</div>
    </section>
  );
};

export default Testimonials;
