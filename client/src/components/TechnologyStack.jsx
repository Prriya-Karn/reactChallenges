import { useState } from "react";
import { Globe, } from "lucide-react";

const TechnologyStack = () => {

    const [activeTab, setActiveTab] = useState("ml");

    const data = {
        ml: [
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
            "Keras",
            "Hugging Face",
            "OpenAI",
            "LangChain",
            "YOLO"
        ],

        cloud: [
            "AWS",
            "Google Cloud",
            "Azure",
            "Docker",
            "Kubernetes",
            "Lambda",
            "EC2",
            "CloudFormation"
        ],

        data: [
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Apache Spark",
            "Kafka",
            "Elasticsearch",
            "Tableau",
            "Power BI"
        ],

        dev: [
            "Python",
            "JavaScript",
            "React",
            "FastAPI",
            "Node.js",
            "Git",
            "CI/CD",
            "Jupyter"
        ]
    };

    const tabs = [
        { id: "ml", name: "Machine Learning" },
        { id: "cloud", name: "Cloud & Infrastructure" },
        { id: "data", name: "Data & Analytics" },
        { id: "dev", name: "Development" }
    ];

    return (
        <section className="bg-[#0b1a2f] text-white py-20 px-6">

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold">Technology Stack</h2>
                <p className="text-gray-400 mt-3">
                    Powered by cutting-edge AI frameworks and tools
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-10 px-2">
                <div className="bg-[#1c2b3f] p-1 rounded-lg flex gap-2 flex-wrap md:flex-nowrap overflow-x-auto">

                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-medium whitespace-nowrap transition
        ${activeTab === tab.id
                                    ? "bg-white text-black"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}

                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">

                {data[activeTab].map((tech, index) => (
                    <div
                        key={index}
                        className="bg-[#16273d] border border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center hover:border-blue-500 transition"
                    >
                        <Globe className="text-blue-500 mb-4" size={32} />
                        <p className="font-medium">{tech}</p>
                    </div>
                ))}

            </div>

        </section>
    );
};

export default TechnologyStack;