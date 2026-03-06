export default function Industries() {

    const industries = [
        { icon: "🏥", name: "Healthcare" },
        { icon: "💰", name: "Finance" },
        { icon: "🛍️", name: "Retail" },
        { icon: "🏭", name: "Manufacturing" },
        { icon: "📡", name: "Telecommunications" },
        { icon: "📚", name: "Education" },
        { icon: "🚗", name: "Transportation" },
        { icon: "🏢", name: "Real Estate" },
    ];

    return (
        <section id="industries" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#04091C] via-[#071026] to-[#020617]">

            {/* Glow Background */}
            <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full"></div>
            <div className="absolute top-20 right-[-150px] w-[350px] h-[350px] bg-cyan-400/20 blur-[140px] rounded-full"></div>
            <div className="absolute bottom-[-120px] left-1/3 w-[300px] h-[300px] bg-purple-500/20 blur-[140px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">
                        Industries We Serve
                    </h2>

                    <p className="text-gray-400 text-lg">
                        Delivering specialized AI solutions across diverse sectors
                    </p>
                </div>

                {/* grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {industries.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-10 text-center hover:border-cyan-400 hover:scale-105 transition duration-300"
                        >

                            <div className="text-4xl mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-white text-lg font-semibold">
                                {item.name}
                            </h3>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}