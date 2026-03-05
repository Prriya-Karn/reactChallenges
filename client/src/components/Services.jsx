
// import {
//     Brain,
//     Cpu,
//     BarChart3,
//     MessageSquare,
//     Eye,
//     Zap,
// } from "lucide-react";



// const services = [
//     {
//         icon: Brain,
//         title: "AI Consulting",
//         desc: "Strategic AI implementation guidance to transform your business operations and drive innovation.",
//     },
//     {
//         icon: Cpu,
//         title: "Machine Learning Solutions",
//         desc: "Custom ML models tailored to your specific business needs for predictive analytics and automation.",
//     },
//     {
//         icon: BarChart3,
//         title: "Data Analytics",
//         desc: "Advanced data processing and insights generation to make informed business decisions.",
//     },
//     {
//         icon: MessageSquare,
//         title: "Natural Language Processing",
//         desc: "Intelligent text analysis and conversational AI solutions for enhanced customer engagement.",
//     },
//     {
//         icon: Eye,
//         title: "Computer Vision",
//         desc: "Image and video analysis solutions for quality control, security, and automation.",
//     },
//     {
//         icon: Zap,
//         title: "AI Integration",
//         desc: "Seamless integration of AI capabilities into your existing systems and workflows.",
//     },
// ];

// const Services = () => {
//     return (
//         <section
//             id="services"
//             className="relative py-24 px-6 text-white overflow-hidden bg-[#03122a]"
//         >
//             {/* Animated Background */}
//             <div className="absolute inset-0 -z-10 overflow-hidden">

//                 <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[120px] animate-[blob_18s_infinite]"></div>

//                 <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[120px] animate-[blob_22s_infinite]"></div>

//                 <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[120px] animate-[blob_20s_infinite]"></div>

//             </div>
//             <div className="max-w-7xl mx-auto">

//                 {/* Heading */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-3xl md:text-4xl font-bold">
//                         Our <span className="text-teal-400">Services</span>
//                     </h2>
//                     <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
//                         Comprehensive AI solutions tailored to accelerate your digital transformation journey
//                     </p>
//                 </div>

//                 {/* Services Grid */}
//                 <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

//                     {services.map((service, index) => {
//                         const Icon = service.icon;
//                         return (
//                             <div
//                                 key={index}
//                                 className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-teal-400/40 hover:scale-[1.02] transition duration-300"
//                             >
//                                 <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-400 mb-6">
//                                     <Icon size={22} />
//                                 </div>

//                                 <h3 className="text-lg font-semibold mb-3">
//                                     {service.title}
//                                 </h3>

//                                 <p className="text-gray-400 text-sm leading-relaxed">
//                                     {service.desc}
//                                 </p>
//                             </div>
//                         );
//                     })}

//                 </div>

//                 {/* Bottom CTA Card */}
//                 <div className="mt-20 flex justify-center">
//                     <div className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center max-w-xl w-full">
//                         <h3 className="text-xl font-semibold">
//                             Need a Custom Solution?
//                         </h3>
//                         <p className="text-gray-400 mt-3 text-sm">
//                             We create tailored AI solutions designed specifically for your business needs and objectives.
//                         </p>
//                         <button className="mt-6 bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-lg font-medium transition">
//                             Get in Touch →
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Services;





























import { Brain, Cpu, BarChart3, MessageSquare, Eye, Zap } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="relative min-h-screen bg-[#04091C] text-white py-20 px-6 overflow-hidden">

            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,255,255,0.05),transparent_40%)]"></div>

            <div className="relative max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold">
                    Our <span className="text-cyan-400">Services</span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Comprehensive AI solutions tailored to accelerate your digital transformation journey
                </p>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    <ServiceCard
                        icon={<Brain size={28} />}
                        title="AI Consulting"
                        description="Strategic AI implementation guidance to transform your business operations and drive innovation."
                    />

                    <ServiceCard
                        icon={<Cpu size={28} />}
                        title="Machine Learning Solutions"
                        description="Custom ML models tailored to your specific business needs for predictive analytics and automation."
                    />

                    <ServiceCard
                        icon={<BarChart3 size={28} />}
                        title="Data Analytics"
                        description="Advanced data processing and insights generation to make informed business decisions."
                    />

                    <ServiceCard
                        icon={<MessageSquare size={28} />}
                        title="Natural Language Processing"
                        description="Intelligent text analysis and conversational AI solutions for enhanced customer engagement."
                    />

                    <ServiceCard
                        icon={<Eye size={28} />}
                        title="Computer Vision"
                        description="Image and video analysis solutions for quality control, security, and automation."
                    />

                    <ServiceCard
                        icon={<Zap size={28} />}
                        title="AI Integration"
                        description="Seamless integration of AI capabilities into your existing systems and workflows."
                    />

                </div>

                {/* Bottom CTA */}
                <div className="mt-20 flex justify-center">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 max-w-xl w-full shadow-2xl">
                        <h3 className="text-2xl font-semibold">Need a Custom Solution?</h3>
                        <p className="text-gray-400 mt-3">
                            We create tailored AI solutions designed specifically for your business needs and objectives.
                        </p>

                        <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 px-6 py-3 rounded-xl font-medium shadow-lg shadow-cyan-500/20">
                            Get in Touch →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

function ServiceCard({ icon, title, description }) {
    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-left hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 mb-6">
                {icon}
            </div>

            <h3 className="text-lg font-semibold mb-3">{title}</h3>

            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}