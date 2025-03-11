import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const languages = ["Python", "SQL", "C#", "Java", "JavaScript"];
    const frameworks = ["Django", "React", "ASP.NET Core"];
    const libraries = ["Pytorch", "GNN", "Tensorflow", "Numpy", "Pandas", "Polars"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-200">
                            Hi👋, I am Dongkun(DK) Lee.
                        </p>
                        <p className="text-gray-200 mb-6">
                            I am currently an undergraduate student at the University of Utah, studying Data Science. My main programming language is Python, but I am also comfortable with SQL, C#, Java, and JavaScript. I work at the Department of Physics & Astronomy at the University of Utah as a research assistant and an undergraduate machine learning engineer.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="rounded-xl hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Language</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frameworks.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Libraries</h3>
                                <div className="flex flex-wrap gap-2">
                                    {libraries.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">📖 Education</h3>
                            <ul className="list-disc list-inside text-white/100 space-y-2">
                                <li>
                                    <strong>B.S. in Data Science</strong> - University of Utah (2020-2026)
                                </li>
                                <li>
                                    Relevant Coursework:
                                </li>
                            </ul>
                            <p className="text-white/80">
                                - Computer Science: Object Oriented Programming, Advanced Software Engineering, DatBase System(CS 5530), Discrete Structures, Algorithm(CS 4150)
                            </p>
                            <p className="text-white/80">
                                - Data Science: Data Analysis, Machine Learning(CS 3190 & CS 5963 & CS 6350), Data Mining(DS 4140)
                            </p>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🖥️ Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">- ML Engineer (Jan 2025 - Present)</h4>
                                    <p>
                                        Developing the machine learning model that predicts neutrino direction and helps the research.
                                    </p>
                                    <p>
                                        - Tools: Pytorch, GNN, Python, Jupyter Notebook, GPU
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};