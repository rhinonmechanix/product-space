const Products = () => {
  const products = [
    {
      name: "Product Manager",
      description: "Comprehensive tool for managing product lifecycles",
      price: "$49",
      features: ["Inventory tracking", "Product analytics", "Team collaboration", "Customer feedback"],
    },
    {
      name: "Product Analytics",
      description: "Deep insights into product performance and usage",
      price: "$79",
      features: ["Real-time metrics", "Custom reports", "User behavior", "Conversion tracking"],
    },
    {
      name: "Enterprise Suite",
      description: "Complete solution for enterprise product teams",
      price: "$149",
      features: ["All features included", "Priority support", "Custom integrations", "Dedicated account manager"],
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Choose the Right Plan for Your Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible options to meet the needs of any product team, from startups to enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-3xl font-bold text-indigo-600 mb-6">
                  {product.price}
                  <span className="text-sm text-gray-500">/month</span>
                </p>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="block w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-medium rounded-md"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

