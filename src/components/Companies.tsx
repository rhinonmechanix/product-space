const Companies = () => {
  const companies = [
    { id: 1, logo: "/placeholder.svg?height=30&width=80", name: "Spotify" },
    { id: 2, logo: "/placeholder.svg?height=30&width=80", name: "Google" },
    { id: 3, logo: "/placeholder.svg?height=30&width=80", name: "Uber" },
    { id: 4, logo: "/placeholder.svg?height=30&width=80", name: "Microsoft" },
    { id: 5, logo: "/placeholder.svg?height=30&width=80", name: "Shopify" },
    { id: 6, logo: "/placeholder.svg?height=30&width=80", name: "Microsoft" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
          Placed Across 310+ Product Companies in India
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-8">
          {companies.map((company) => (
            <div key={company.id} className="flex items-center justify-center">
              <img src={company.logo || "/placeholder.svg"} alt={company.name} className="h-8 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Companies

