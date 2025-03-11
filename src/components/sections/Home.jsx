import { RevealOnScroll } from "../RevealOnScroll";
import mainImage from "../../images/main_image.jpg";

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <a href="#about">
                    <img src={mainImage} alt="Dongkun Lee" className="mx-auto mb-4 w-40 h-40 md:w-40 md:h-40 rounded-full object-cover shadow-lg"/>
                </a>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                    Hi, I'm Dongkun Lee
                </h1>

                <p className="text-gray-300 text-lg mb-8 mx-auto">
                    Aspiring Software Engineer, Data Scientist/Engineer, and AI/ML Engineer
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="border border-blue-500/50 text-[#f2f1e8] py-3 px-6 rounded font-medium transition-all duration-200 hover: -translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500">View Projects</a>
                    <a href="#contact" className="border border-blue-500/50 text-[#f2f1e8] py-3 px-6 rounded font-medium transition-all duration-200 hover: -translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500">Contact Me</a>
                </div>
            </div>
        </RevealOnScroll>
    </section>;
};