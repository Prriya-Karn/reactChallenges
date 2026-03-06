import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-[#03122a]/80 backdrop-blur-md border-b border-white/5">

                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-teal-500 text-white font-bold">
                            AI
                        </div>
                        <h1 className="text-white font-semibold tracking-wide">
                            AIBOUT
                        </h1>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-gray-300 text-sm">

                        <a href="#home" className="hover:text-teal-400">Home</a>

                        <a href="#about" className="hover:text-teal-400">About</a>

                        <a href="#services" className="hover:text-teal-400">Services</a>

                        <a href="#portfolio" className="hover:text-teal-400">Portfolio</a>

                        <a href="#process" className="hover:text-teal-400">Process</a>

                        <a href="#industries" className="hover:text-teal-400">Industries</a>
                        <a href="#testimonial"
                            className="hover:text-teal-400">
                            Testimonial
                        </a>

                        <a href="#pricing"
                            className="hover:text-teal-400">
                            Pricing
                        </a>

                        <a href="#team" className="hover:text-teal-400">Team</a>

                        <a href="#contact" className="hover:text-teal-400">Contact</a>

                    </nav>

                    {/* Desktop Button */}
                    <button className="hidden md:block bg-teal-500 hover:bg-teal-400 text-white px-5 py-2 rounded-lg text-sm font-medium">
                        <a href="#contact"> Get Started</a>
                    </button>

                    {/* Hamburger */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setMenuOpen(true)}
                    >
                        <Menu />
                    </button>

                </div>
            </header>


            {/* Overlay */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 
    ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            ></div>


            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#03122a] z-50 transform transition-transform duration-300
    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >

                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button
                        className="text-white text-2xl"
                        onClick={() => setMenuOpen(false)}
                    >
                        <X />
                    </button>
                </div>



                <nav className="flex flex-col gap-6 px-6 text-gray-300 text-sm">

                    <a href="#home"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-teal-400">
                        Home
                    </a>

                    <a href="#about"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-teal-400">
                        About
                    </a>

                    <a href="#services"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-teal-400">
                        Services
                    </a>

                    <a href="#portfolio"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-teal-400">
                        Portfolio
                    </a>

                    <a href="#process"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-teal-400">
                        Process
                    </a>
                    <a href="#industries"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-teal-400">
                        Industries
                    </a>

                    <a href="#testimonial"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-teal-400">
                        Testimonial
                    </a>

                    <a href="#pricing"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-teal-400">
                        Pricing
                    </a>


                    <a href="#team"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-teal-400">
                        Team
                    </a>

                    <a href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-teal-400">
                        Contact
                    </a>

                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 inline-block bg-teal-500 hover:bg-teal-400 text-white px-5 py-2 rounded-lg text-sm font-medium text-center"
                    >
                        Get Started
                    </a>

                </nav>

            </div>
        </>
    );
};

export default Header;