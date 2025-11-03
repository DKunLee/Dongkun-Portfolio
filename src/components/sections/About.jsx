import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const languages = ["Python", "SQL", "Java", "JavaScript", "C#"];
    const frameworks = ["PyTorch", "Django"];
    const libraries = ["NumPy", "Pandas", "Scikit-learn", "SciPy", "Polars", "Matplotlib", "Plotly"];
    const databases = ["PostgreSQL", "MySQL"];
    const tools = ["Git", "Visual Studio Code", "IntelliJ IDEA", "HPC", "Tableau"];

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
                            I am an undergraduate student at the University of Utah, studying Data Science with a focus on machine learning and bioinformatics. I work as an Undergraduate Researcher at the Department of Bioinformatics and as a Machine Learning Research Assistant at the Department of Physics & Astronomy.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            <div className="rounded-xl hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Languages</h3>
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
                            <div className="rounded-xl hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Databases</h3>
                                <div className="flex flex-wrap gap-2">
                                    {databases.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((tech, key) => (
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
                            <div className="space-y-2">
                                <p className="text-white/100">
                                    <strong>B.S. in Data Science</strong> - University of Utah (Expected May 2026)
                                </p>
                                <p className="text-white/90">GPA: 3.813</p>
                                <p className="text-white/90">Activities: Major Representative, Dean's List, James Waters Research Scholarship</p>
                                <div className="mt-3">
                                    <p className="text-white/80 text-sm">
                                        <strong>Coursework:</strong> Algorithms, Data Structures, Machine Learning, Reinforcement Learning, Data Mining, Database Systems, Data Visualization, Applied Statistics, Linear Algebra, Discrete Mathematics, Computer Architecture
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🖥️ Research Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-white/100">Undergraduate Researcher</h4>
                                    <p className="text-sm text-white/80">Dept. of Bioinformatics, University of Utah (Feb 2025 - Present)</p>
                                    <p className="text-sm mt-1">
                                        Working on unsupervised clustering of Type 2 Diabetes patients and predicting optimal medication via longitudinal HbA1c modeling using deep learning.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white/100">ML Research Assistant</h4>
                                    <p className="text-sm text-white/80">Dept. of Physics & Astronomy, University of Utah (Jan 2025 - Present)</p>
                                    <p className="text-sm mt-1">
                                        Developing physics-informed neural networks for neutrino direction prediction and multi-task regression models for AGN spectral modeling.
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