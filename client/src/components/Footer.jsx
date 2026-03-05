export default function Footer() {
    return (
        <footer className="bg-[#04091C] text-white border-t border-white/10 pt-16 pb-8 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

                {/* About */}
                <div>
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-teal-500 text-white font-bold">
                            AI
                        </div>
                        <h1 className="text-white font-semibold tracking-wide">
                            AIBOUT
                        </h1>
                    </div>

                    <p className="text-gray-400 text-sm">
                        Leading AI innovation with cutting-edge solutions that transform businesses and drive digital excellence.
                    </p>

                    <div className="mt-6 text-gray-400 text-sm space-y-2">
                        <p>Divashi Khurd, Satara, Patan, Maharashtra</p>
                        <p>info@aibout.com</p>
                        <p>+91 98765 43210</p>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-cyan-400 cursor-pointer"> <a href="#home" >Home</a></li>
                        <li className="hover:text-cyan-400 cursor-pointer"> <a href="#about" >About</a></li>
                        <li className="hover:text-cyan-400 cursor-pointer"><a href="#services">Services</a></li>
                        <li className="hover:text-cyan-400 cursor-pointer"><a href="team">Team</a></li>
                        <li className="hover:text-cyan-400 cursor-pointer"><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-cyan-400 cursor-pointer">AI Consulting</li>
                        <li className="hover:text-cyan-400 cursor-pointer">Machine Learning</li>
                        <li className="hover:text-cyan-400 cursor-pointer">Data Analytics</li>
                        <li className="hover:text-cyan-400 cursor-pointer">NLP Solutions</li>
                        <li className="hover:text-cyan-400 cursor-pointer">Computer Vision</li>
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
                © 2026 AIBOUT PRIVATE LIMITED. All rights reserved.
            </div>
        </footer>
    );
}