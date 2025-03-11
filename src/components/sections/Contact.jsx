import { FaGoogle } from "react-icons/fa6";
import { RevealOnScroll } from "../RevealOnScroll"
import { FaApple, FaGithub, FaLinkedin, FaLinkedinIn, FaSpotify } from 'react-icons/fa';

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-20 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center">Contact & Social</h2>

                    <div className="rounded-xl p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-30">
                            <div>
                                <a href="https://www.linkedin.com/in/dongkun-lee-4607a2228/" className="flex justify-center items-center">
                                    <FaLinkedin className="text-7xl hover:-translate-y-1 transition-all"/>
                                </a>
                            </div>

                            <div>
                                <a href="https://github.com/DKunLee" className="flex justify-center items-center">
                                    <FaGithub className="text-7xl hover:-translate-y-1 transition-all"/>
                                </a>
                            </div>

                            <div>
                                <a href="mailto:ldkun2001@gmail.com" className="flex justify-center items-center">
                                    <FaGoogle className="text-7xl hover:-translate-y-1 transition-all"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}