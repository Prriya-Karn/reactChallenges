

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen md:min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#03122a] to-[#020d1f] text-white overflow-hidden"
        >
            {/* Subtle Glow Background */}
            <div className="absolute w-[600px] h-[600px] bg-teal-500/20 blur-[150px] rounded-full top-1/4"></div>

            {/* Badge */}
            <div className="mb-6 pt-32 z-10">
                <span className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-teal-400">
                    ✨ Incorporated February 2026
                </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight z-10">
                <span className="text-teal-400">AIBOUT PRIVATE</span> <br />
                LIMITED
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-2xl text-gray-300 text-sm md:text-base z-10">
                Pioneering AI Solutions for Tomorrow
                <br />
                Leading AI innovation with cutting-edge solutions that transform businesses
                and drive digital excellence.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 z-10">
                <button className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-lg font-medium transition">
                    Start Your AI Journey →
                </button>
                <button className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition">
                    Explore Services
                </button>
            </div>

            {/* Stats Cards */}
            <div className="mt-16 pb-20 grid grid-cols-2 md:grid-cols-4 gap-6 z-10">
                {["AI Solutions", "Innovation", "Excellence", "Support"].map(
                    (item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl px-8 py-6"
                        >
                            <h3 className="text-teal-400 font-bold text-xl">24/7</h3>
                            <p className="text-gray-400 text-sm">{item}</p>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default Hero;