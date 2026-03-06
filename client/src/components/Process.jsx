import { Target, Lightbulb, Code, Rocket } from "lucide-react";

export default function Process() {
    const steps = [
        {
            number: "01",
            icon: <Target size={26} />,
            title: "Discovery & Analysis",
            desc: "Understanding your business challenges, goals, and data landscape",
        },
        {
            number: "02",
            icon: <Lightbulb size={26} />,
            title: "Strategy & Design",
            desc: "Creating tailored AI solutions architecture and implementation roadmap",
        },
        {
            number: "03",
            icon: <Code size={26} />,
            title: "Development & Training",
            desc: "Building and training AI models with your data for optimal performance",
        },
        {
            number: "04",
            icon: <Rocket size={26} />,
            title: "Deployment & Support",
            desc: "Seamless integration, continuous monitoring, and ongoing optimization",
        },
    ];

    return (
        <section id="process" className="relative bg-[#04091C] text-white py-24 px-6 overflow-hidden">

            {/* background glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-600 opacity-20 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Our Process</h2>
                    <p className="text-gray-400">
                        A proven methodology for delivering successful AI solutions
                    </p>
                </div>

                {/* cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-cyan-400 transition"
                        >
                            {/* big number */}
                            <span className="absolute right-6 top-4 text-7xl font-bold text-white/10">
                                {step.number}
                            </span>

                            {/* icon */}
                            <div className="bg-cyan-500/20 w-14 h-14 flex items-center justify-center rounded-lg mb-6">
                                {step.icon}
                            </div>

                            <h3 className="text-lg font-semibold mb-3">
                                {step.title}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}  