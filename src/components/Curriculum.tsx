import { useState } from "react";
import { ChevronDown, ChevronUp, Check, Download, Plus } from "lucide-react";
import { motion } from "framer-motion";

const Curriculum = () => {
  const [expandedModule, setExpandedModule] = useState("01");

  const toggleModule = (moduleId: string) => {
    if (expandedModule === moduleId) {
      setExpandedModule("");
    } else {
      setExpandedModule(moduleId);
    }
  };

  const modules = [
    {
      id: "01",
      title: "Fundamentals of Product Management: Becoming Data Informed",
      content: [
        "Fundamentals of Product Management",
        "Essential Skills Required to be a PM",
        "Deep dive into Product Roles and Responsibilities",
        "Learn Product & Software Lifecycle",
        "Why Companies Hire Product Managers: Expectations, Challenges",
        "From OKRs to KPIs",
        "Business KPIs vs. Product KPIs",
      ],
      prerequisites: [
        "Pre-requisites: (Minimum 3 Yrs)",
        "Minimum 3 years of professional experience",
        "Analytical mindset with problem-solving skills",
      ],
      tools: ["figma", "jira", "miro"],
    },
    {
      id: "02",
      title: "Product Discovery and Problem Solving",
    },
    {
      id: "03",
      title: "Product Planning and Documentation",
    },
    {
      id: "04",
      title: "Product Analytics and Growth Lifecycle",
    },
    {
      id: "05",
      title: "Tech for PMs",
    },
    {
      id: "06",
      title: "Product Interview Prep",
    },
    {
      id: "07",
      title: "Graduation Day | Work on Live Projects",
    },
  ];

  const toolsUsed = [
    { name: "OpenAI", icon: "🧠" },
    { name: "ChatGPT", icon: "🤖" },
    { name: "DALL·E", icon: "🎨" },
    { name: "Notion", icon: "📘" },
  ];

  return (
    <section className="min-h-full p-4 md:p-8">
      <div className="max-w-[1440px] mx-auto p-4 flex flex-col gap-4">
        <div className="bg-[#D5F6FF47] rounded-lg p-14 flex md:flex-row flex-col gap-10 justify-between items-center">
          <div className="flex flex-col md:items-start items-center">
            <div className="flex flex-col md:flex-row items-center gap-2 mb-2">
              <h2 className="text-xl font-bold text-gray-800">
                Course Curriculum
              </h2>
              <span>
                <Plus size={18} />
              </span>
              <div className="flex items-center">
                <span className="border-[#8C8C8C] border-[3px] text-xs font-medium px-2 py-0.5 rounded-[8px] flex items-center">
                  AI
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              We are everything you need to thrive as a modern PM—expert
              guidance, AI-driven skills, interview mastery, and job support.
            </p>

            <div className="flex justify-between gap-11">
              <div className="text-center md:text-start">
                <div className="font-bold text-lg">10</div>
                <div className="text-xs text-gray-500">weeks</div>
              </div>
              <div className="text-center md:text-start">
                <div className="font-bold text-lg">60+</div>
                <div className="text-xs text-gray-500">hours</div>
              </div>
              <div className="text-center md:text-start">
                <div className="font-bold text-lg">10+</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button className="bg-yellow-400 w-full md:w-[227px] h-[56px] hover:bg-yellow-500 text-gray-800 font-medium py-2 px-4 rounded-full flex items-center">
              <Download size={16} className="mr-2" />
              Download Brochure
            </button>
          </div>
        </div>
        <div>
          <div className="space-y-3">
            {modules.map((module) => (
              <div
                key={module.id}
                className={`bg-white border overflow-hidden ${
                  expandedModule === module.id
                    ? "border-gray-400 rounded-t-lg"
                    : "border-gray-200 rounded-lg"
                }`}
              >
                <div
                  className={`flex justify-between items-center cursor-pointer ${
                    expandedModule === module.id
                      ? "bg-gray-200"
                      : "border-gray-200 rounded-lg"
                  }`}
                  onClick={() => toggleModule(module.id)}
                >
                  <div className="flex">
                    <div className="flex items-center p-5">
                      <span
                        className={`text-2xl font-semibold ${
                          expandedModule === module.id
                            ? ""
                            : "text-gray-500"
                        }`}
                      >
                        {module.id}
                      </span>
                    </div>
                    <div className="flex items-center p-5">
                      <span className="font-medium">{module.title}</span>
                    </div>
                  </div>

                  <button className="text-gray-400 p-5">
                    {expandedModule === module.id ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    expandedModule === module.id
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row py-8 px-8 md:px-[70px] w-full gap-8 md:gap-2 justify-between items-start rounded-lg shadow-sm bg-white">
                    {/* Left Section */}
                    <div className="flex flex-col gap-5 p-2 md:border-r border-gray-300 w-full md:w-1/2">
                      <div className="text-sm font-semibold text-gray-600">
                        This Module Covers
                      </div>
                      <ul className="space-y-2">
                        {module.content?.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-700 text-sm"
                          >
                            <span className="bg-green-100 p-1 rounded-sm mr-2">
                              <Check size={14} className="text-green-600" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div>
                        <strong className="text-sm text-[#387FF5]">
                          Case Studies
                        </strong>
                        <div className="flex gap-3 mt-2">
                          {toolsUsed.map((tool, index) => (
                            <span
                              key={index}
                              className="text-lg"
                              title={tool.name}
                            >
                              {tool.icon}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="flex flex-col gap-5 p-2 w-full md:w-[330px]">
                        <div className="flex gap-2 items-center">
                          <div className="flex items-center gap-2 bg-[#21C1F3] text-white px-3 py-1.5 rounded-lg text-sm font-semibold w-max">
                            <span>AI</span>
                          </div>
                          <span>Enhancement (Utilization, Aids)</span>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li>✨ AI-assisted product management workflows</li>
                          <li>✨ Real-world AI use cases in PM</li>
                        </ul>
                        <div className="border border-blue-300 p-4 rounded-lg text-blue-700 text-sm w-fit">
                          <p className="block text-blue-600 mb-1 tracking-widest">
                            ✨ HOW IT WORKS
                          </p>
                          <p>• Structure product roadmaps using Aha!.</p>
                          <p>• Document and track goals using Notion.</p>
                        </div>
                        <div>
                          <strong className="text-sm text-[#387FF5]">
                            Tool Used :
                          </strong>
                          <div className="flex gap-3 mt-2">
                            {toolsUsed.map((tool, index) => (
                              <span
                                key={index}
                                className="text-lg"
                                title={tool.name}
                              >
                                {tool.icon}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="flex justify-between items-center p-4 cursor-pointer bg-[#AEECFF]">
                <div className="flex items-center text-black font-medium">
                  <span className="mr-2">1 Year Placement Assistance</span>
                </div>
                <button className="text-gray-400">
                  <ChevronDown size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button className="bg-gradient-to-r from-[#FFD231] to-[#FDB241] h-[56px] text-gray-800 font-medium py-2 px-8 rounded-full flex items-center">
              <Download size={16} className="mr-2" />
              Download Detailed Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
