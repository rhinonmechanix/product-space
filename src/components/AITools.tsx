const AITools = () => {
  const tools = [
    {
      id: 1,
      name: "Figma",
      description: "Design and prototyping tool for collaborative interfaces",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Miro",
      description: "Visual collaboration platform for cross-functional teamwork",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Jira",
      description: "Project management tool for agile development teams",
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Notion",
      description: "All-in-one workspace for notes, tasks, and collaboration",
      icon: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-2xl font-bold text-gray-900">AI Tools you will master</h2>
          <div className="text-right">
            <span className="text-sm text-gray-600">10+ AI Tools</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white p-6 rounded-lg shadow-sm">
              <img src={tool.icon || "/placeholder.svg"} alt={tool.name} className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AITools

