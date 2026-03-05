
import { Calendar, MapPin, Target, Rocket, Building2, Heart, Clock } from "lucide-react";

const About = () => {
    return (
        <section
            id="about"
            className="relative py-24 px-6 bg-gradient-to-b from-[#03122a] to-[#0a1c3a] text-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        About <span className="text-teal-400">AIBOUT</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        Leading the future of artificial intelligence with innovative solutions and
                        unwavering commitment to excellence
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">


                    {/* Left Image Card */}
                    {/* Left Image Card */}
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg 
hover:shadow-[0_0_25px_rgba(0,140,255,0.5)] transition-shadow duration-300">

                        <img
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                            alt="AI Brain"
                            className="w-full h-full object-cover"
                        />

                    </div>

                    {/* Right Info Cards */}
                    <div className="space-y-6">

                        {/* Incorporation Card */}
                        <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="p-3 rounded-lg bg-teal-500/20 text-teal-400">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold">Incorporation</h4>
                                <p className="text-gray-400 text-sm mt-1">
                                    21st February 2026
                                </p>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="p-3 rounded-lg bg-teal-500/20 text-teal-400">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <p className="text-gray-400 text-sm mt-1">
                                    Jawarnatwadi, Post Divashi <br />
                                    Divashi Khurd, Satara, Patan <br />
                                    Maharashtra, India - 415206
                                </p>
                            </div>
                        </div>

                        {/* Empty Placeholder Card (as in design) */}
                        {/* Mission Card */}
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0f1f3d] to-[#162a4f] border border-white/10 backdrop-blur-md">
                            <div className="flex items-start gap-4">

                                {/* Icon */}
                                <div className="p-3 rounded-xl bg-teal-500/20 text-teal-400">
                                    <Target size={20} />
                                </div>

                                {/* Text */}
                                <div>
                                    <h4 className="font-semibold">Our Mission</h4>
                                    <p className="text-gray-400 text-sm mt-1">
                                        To democratize AI technology and empower businesses with intelligent
                                        solutions that drive growth, efficiency, and innovation.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>




                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1 */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:scale-105 transition duration-300">
                        <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-400">
                            <Rocket size={22} />
                        </div>
                        <h3 className="text-2xl font-bold">50+</h3>
                        <p className="text-gray-400 text-sm mt-2">AI Projects Delivered</p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:scale-105 transition duration-300">
                        <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-400">
                            <Building2 size={22} />
                        </div>
                        <h3 className="text-2xl font-bold">30+</h3>
                        <p className="text-gray-400 text-sm mt-2">Enterprise Clients</p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:scale-105 transition duration-300">
                        <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-400">
                            <Heart size={22} />
                        </div>
                        <h3 className="text-2xl font-bold">95%</h3>
                        <p className="text-gray-400 text-sm mt-2">Client Satisfaction</p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:scale-105 transition duration-300">
                        <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-400">
                            <Clock size={22} />
                        </div>
                        <h3 className="text-2xl font-bold">24/7</h3>
                        <p className="text-gray-400 text-sm mt-2">Support Available</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;