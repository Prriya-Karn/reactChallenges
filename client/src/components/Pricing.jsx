import { Check } from "lucide-react";

const plans = [
    {
        title: "Starter",
        price: "₹50,000",
        subtitle: "Perfect for small businesses starting their AI journey",
        features: [
            "Single AI model development",
            "Basic data analysis",
            "Up to 3 revisions",
            "Email support",
            "30-day delivery",
            "Basic documentation",
        ],
        highlight: false,
    },
    {
        title: "Professional",
        price: "₹2,50,000",
        subtitle: "Comprehensive AI solutions for growing enterprises",
        features: [
            "Multiple AI models",
            "Advanced data analytics",
            "Unlimited revisions",
            "Priority support",
            "60-day implementation",
            "Complete documentation",
            "API integration",
            "3 months support",
        ],
        highlight: true,
    },
    {
        title: "Enterprise",
        price: "Custom",
        subtitle: "Tailored AI solutions for large-scale operations",
        features: [
            "End-to-end AI platform",
            "Custom model architecture",
            "Dedicated team",
            "24/7 support",
            "Ongoing optimization",
            "Training & workshops",
            "SLA guarantees",
            "Annual contract",
        ],
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="bg-[#020817] text-white py-20">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center">Pricing Plans</h2>
                <p className="text-center text-gray-400 mt-2">
                    Flexible pricing options to match your business needs
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-14">

                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`rounded-xl p-8 border ${plan.highlight
                                ? "border-blue-500 bg-[#0b1220] scale-105"
                                : "border-gray-700 bg-[#0b1220]"
                                }`}
                        >
                            {plan.highlight && (
                                <span className="bg-blue-600 text-xs px-3 py-1 rounded-full">
                                    Most Popular
                                </span>
                            )}

                            <h3 className="text-xl font-semibold mt-4">{plan.title}</h3>

                            <p className="text-gray-400 text-sm mt-1">{plan.subtitle}</p>

                            <div className="text-3xl font-bold mt-6">
                                {plan.price}
                                {plan.price !== "Custom" && (
                                    <span className="text-sm text-gray-400"> /project</span>
                                )}
                            </div>

                            <ul className="mt-6 space-y-3">
                                {plan.features.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                                        <Check size={18} className="text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`mt-8 w-full py-3 rounded-lg font-medium ${plan.highlight
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-gray-700 hover:bg-gray-600"
                                    }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}