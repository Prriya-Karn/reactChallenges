import { Mail, Phone, MapPin, Send, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative bg-[#04091C] text-white py-24 px-6 overflow-hidden">

            {/* Background Glow Layer */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(0,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(0,255,255,0.05),transparent_40%)]"></div>

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Get In <span className="text-cyan-400">Touch</span>
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Ready to transform your business with AI? Let’s start a conversation
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Left Side */}
                    <div>
                        <h3 className="text-xl font-semibold mb-8">Contact Information</h3>

                        <div className="space-y-6">

                            <ContactItem icon={<Mail />} title="Email" text="info@aibout.com" />
                            <ContactItem icon={<Phone />} title="Phone" text="+91 98765 43210" />
                            <ContactItem
                                icon={<MapPin />}
                                title="Address"
                                text="Jawranwadi, Post Divashi Divashi Khurd, Satara, Maharashtra, India 415206"
                            />

                        </div>

                        {/* Social Icons */}
                        <div className="mt-10">
                            <p className="mb-4 font-medium">Follow Us</p>
                            <div className="flex gap-4">
                                <SocialBox icon={<Linkedin size={18} />} />
                                <SocialBox icon={<Twitter size={18} />} />
                                <SocialBox icon={<Facebook size={18} />} />
                            </div>
                        </div>
                        {/* Map Placeholder */}
                        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <iframe
                                src="https://www.google.com/maps?q=Jawranwadi,Divashi Khurd,Satara,Maharashtra,India&output=embed"
                                width="100%"
                                height="280"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="w-full"
                            ></iframe>
                        </div>

                    </div>

                    {/* Right Side Form */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>

                        <form className="space-y-5">

                            <InputField placeholder="Your name" />
                            <InputField placeholder="your@email.com" />
                            <InputField placeholder="+91 98765 43210" />

                            <textarea
                                placeholder="Tell us about your project..."
                                className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-cyan-400 transition duration-200"
                                rows="4"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-cyan-500 hover:bg-cyan-600 transition duration-200 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, title, text }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="bg-cyan-500/20 p-3 rounded-lg text-cyan-400">
                {icon}
            </div>
            <div>
                <p className="font-medium">{title}</p>
                <p className="text-gray-400 text-sm">{text}</p>
            </div>
        </div>
    );
}

function SocialBox({ icon }) {
    return (
        <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition duration-200 cursor-pointer">
            {icon}
        </div>
    );
}

function InputField({ placeholder }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-cyan-400 transition duration-200"
        />
    );
}