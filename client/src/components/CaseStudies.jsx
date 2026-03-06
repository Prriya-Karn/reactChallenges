export default function CaseStudies() {
    const studies = [
        {
            badge: "35% increase in sales",
            title: "E-Commerce Recommendation Engine",
            company: "Global Retail Corporation",
            desc: "Implemented advanced ML-based product recommendation system processing 10M+ daily transactions.",
            tags: ["Machine Learning", "Data Analytics", "Real-time Processing"]
        },
        {
            badge: "92% diagnostic accuracy",
            title: "Healthcare Diagnosis Assistant",
            company: "Leading Hospital Network",
            desc: "Developed AI-powered medical imaging analysis system for early disease detection.",
            tags: ["Computer Vision", "Deep Learning", "Healthcare AI"]
        },
        {
            badge: "60% reduction in response time",
            title: "Customer Support Automation",
            company: "Telecom Industry Leader",
            desc: "Created intelligent chatbot handling 100K+ customer queries daily with high satisfaction.",
            tags: ["NLP", "Chatbot", "Customer Service"]
        },
        {
            badge: "99.7% fraud detection rate",
            title: "Financial Fraud Detection",
            company: "Major Banking Institution",
            desc: "Built real-time fraud detection system analyzing millions of transactions with minimal false positives.",
            tags: ["Anomaly Detection", "Real-time AI", "Security"]
        }
    ];

    return (
        <section id="portfolio" className="relative bg-[#04091C] text-white py-24 px-6 overflow-hidden">

            {/* Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(0,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(0,255,255,0.05),transparent_40%)]"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Case Studies & <span className="text-cyan-400">Portfolio</span>
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Showcasing our successful AI implementations and transformative projects
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {studies.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition duration-300"
                        >

                            {/* Badge */}
                            <span className="inline-block bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full mb-4">
                                {item.badge}
                            </span>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-1">
                                {item.title}
                            </h3>

                            {/* Company */}
                            <p className="text-cyan-400 text-sm mb-4">
                                {item.company}
                            </p>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-5">
                                {item.desc}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs border border-white/10 px-3 py-1 rounded-md text-gray-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}