import { BarChart3, Layers, Zap, Shield } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: <Layers className="h-8 w-8 text-indigo-500" />,
      title: "Product Management",
      description: "Easily organize and manage your entire product catalog in one place.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-indigo-500" />,
      title: "Analytics Dashboard",
      description: "Get real-time insights into product performance and customer behavior.",
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-500" />,
      title: "Fast Implementation",
      description: "Quick setup process gets you up and running in minutes, not days.",
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-500" />,
      title: "Secure Platform",
      description: "Enterprise-grade security keeps your product data safe and protected.",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Powerful Features for Product Teams</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform provides everything you need to manage your products effectively.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

