import { ArrowRight } from "lucide-react";

export default function Team() {
    return (
        <section id="team" className="relative bg-[#04091C] text-white py-24 px-6 overflow-hidden">

            {/* Soft background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,255,0.08),transparent_50%)]"></div>

            <div className="relative max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold">
                    Meet Our <span className="text-cyan-400">Team</span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Brilliant minds driving innovation and excellence in artificial intelligence
                </p>

                {/* Team Grid */}
                <div className="grid md:grid-cols-4 gap-8 mt-16">

                    <TeamCard
                        image="Images/mathivanan-selvaraj-pjB_MqXadzI-unsplash.jpg"
                        name="Dr. Rajesh Kumar"
                        role="Chief Executive Officer"
                        desc="15+ years in AI research and development"
                    />

                    <TeamCard
                        image="Images/tony-luginsland-ODrd-02Q6JI-unsplash.jpg"
                        name="Priya Sharma"
                        role="Chief Technology Officer"
                        desc="Expert in machine learning and neural networks"
                    />

                    <TeamCard
                        image="Images/tony-luginsland-bbOOTiq-EPA-unsplash.jpg"
                        name="Amit Patel"
                        role="Head of Data Science"
                        desc="Specialized in big data and predictive analytics"
                    />

                    <TeamCard
                        image="Images/tony-luginsland-ZAo0cKz_IKM-unsplash.jpg"
                        name="Sneha Desai"
                        role="Lead AI Engineer"
                        desc="Building next-gen AI solutions"
                    />

                </div>

                {/* Bottom CTA */}
                <div className="mt-20 flex justify-center">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 max-w-xl w-full shadow-xl">
                        <h3 className="text-2xl font-semibold">Join Our Team</h3>
                        <p className="text-gray-400 mt-3">
                            We’re always looking for talented individuals passionate about AI and innovation.
                        </p>
                        <button className="mt-6 inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition duration-300 px-6 py-3 rounded-xl font-medium">
                            View Careers <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

import { Linkedin } from "lucide-react";

function TeamCard({ image, name, role, desc }) {
    return (
        <div className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition duration-500">

            {/* Image */}
            <div className="relative aspect-[3/4]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#04091C]/70 opacity-0 group-hover:opacity-100 transition duration-200 cursor-pointer flex items-center justify-center">

                    {/* LinkedIn Icon */}
                    <div className="bg-cyan-500 p-4 rounded-full transform scale-75 group-hover:scale-100 transition duration-500">
                        <Linkedin className="text-white" size={24} />
                    </div>

                </div>
            </div>

            {/* Content */}
            <div className="p-6 text-left">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-cyan-400 text-sm mt-1">{role}</p>
                <p className="text-gray-400 text-sm mt-3">{desc}</p>
            </div>
        </div>
    );
}