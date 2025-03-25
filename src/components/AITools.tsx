const AITools = () => {
  const tools = [
    {
      id: 1,
      name: "Figma",
      description: "Design and prototyping tool for collaborative interfaces",
      icon: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    },
    {
      id: 2,
      name: "Miro",
      description:
        "Visual collaboration platform for cross-functional teamwork",
      icon: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    },
    {
      id: 3,
      name: "Jira",
      description: "Project management tool for agile development teams",
      icon: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    },
    {
      id: 4,
      name: "Notion",
      description: "All-in-one workspace for notes, tasks, and collaboration",
      icon: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center text-center md:items-start md:text-start mb-8">
          <div className="flex flex-col w-full md:w-[749px] gap-2 md:gap-0">
            <h2 className="text-2xl font-bold text-gray-900">
              AI Tools you will master
            </h2>
            <p className="text-[#667085] text-[20px] md:px-0 px-10">
              Gain hands-on expertise with industry-leading AI tools to build,
              optimize, and scale AI-powered products
            </p>
          </div>
          <div className="text-right border px-3 py-[5px]">
            <span className="text-2xl font-bold text-gray-600">
              30+ AI Tools
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-900">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            </div>
          ))}
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-gray-900">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITools;
