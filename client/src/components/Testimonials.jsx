import { Star } from "lucide-react";

export default function Testimonials() {

    const testimonials = [
        {
            text: "AIBOUT transformed our entire data infrastructure. Their ML solutions increased our operational efficiency by 40%. Exceptional team with deep expertise.",
            logo: "Images/campaign-creators-gMsnXqILjp4-unsplash.jpg",
            company: "TechCorp India"
        },
        {
            text: "The recommendation engine they built for us has been a game-changer. Customer engagement is up 35% and our conversion rates have never been better.",
            logo: "Images/abbe-sublett-nxZDMUQhN4o-unsplash.jpg",
            company: "E-Commerce Giant"
        },
        {
            text: "Working with AIBOUT was seamless. Their computer vision solution for medical imaging achieved 92% accuracy helping detect diseases earlier.",
            logo: "Images/robert-stump-bwpgwJesFhw-unsplash.jpg",
            company: "Global Healthcare"
        }
    ];

    return (
        <section id="testimonial" className="bg-[#04091C] py-24 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">
                        Client Testimonials
                    </h2>

                    <p className="text-gray-400 text-lg">
                        Hear what our clients say about their AI transformation journey with us
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-cyan-400 transition duration-300"
                        >

                            {/* Stars */}
                            <div className="flex gap-1 text-yellow-400 mb-5">
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                            </div>

                            {/* Text */}
                            <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                                {item.text}
                            </p>

                            {/* Company */}
                            <div className="flex items-center gap-4">

                                <img
                                    src={item.logo}
                                    alt={item.company}
                                    className="w-12 h-12 object-cover bg-white rounded-full p-2"
                                />

                                <div>
                                    <p className="text-white font-semibold">{item.company}</p>
                                    <p className="text-gray-400 text-sm">Verified Client</p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}