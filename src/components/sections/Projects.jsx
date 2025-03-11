import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center">Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Basic Machine Learning Webpage 🖥️</h3>
                            <p className="text-gray-400 mb-2">A web application designed to introduce registered users to fundamental machine learning algorithms and concepts. Built with Django for the backend and HTML/CSS for the frontend, the platform provides an interactive and user-friendly experience. Images, thumbnails, and other media assets are managed through the Cloudinary online database service for efficient storage and retrieval.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/DKunLee/BasicMachinLearning" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Visit Github ➡️</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Private Machine Learning Modules 💾 (On Going)</h3>
                            <p className="text-gray-400 mb-4">I'm developing custom machine learning modules by leveraging foundational ML algorithms and theoretical concepts. The goal is to build modules that perform comparably to existing industry-standard tools. Once implemented, I will rigorously evaluate their effectiveness and accuracy by comparing results directly against established models.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Jupyter Notebook"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a className="text-blue-400 hover:text-blue-300 transition-colors my-4">Updating Soon</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Quantifying Disparities in Diabetes Medication Patterns Using Clustering Analysis 💊 (On Going)</h3>
                            <p className="text-gray-400 mb-4">This project investigates disparities in the prescription of diabetes medications, among White, Black, and Hispanic patients. Utilizing a large, national electronic health records database (TriNetX). I built the custom preprocessing modules, custom clustering modules, such as hierachical, and visualizations, to identify distinct patient groups based on medication trajectories.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Jupyter Notebook"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/DKunLee/Quantifying_Disparities" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Visit Github ➡️</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Air Quality Monitoring Dashboard 🌎</h3>
                            <p className="text-gray-400 mb-4">An interactive, web-based dashboard designed to monitor and analyze air quality data collected from sensors. Users can visualize trends in air quality parameters, explore sensor locations, and analyze data distributions over customizable time periods. Built using Python, Dash, and DuckDB, the dashboard supports dynamic filtering, aggregation, and visualization to provide insightful analysis of air quality metrics.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "DuckDB", "Jupyter Notebook"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/DKunLee/Air_Quality_Pipeline" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Visit Github ➡️</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">UEFA Champions League Performance Analysis ⚽️</h3>
                            <p className="text-gray-400 mb-4">This project analyzes whether a soccer team's performance during the first half of the season can predict its likelihood of winning the UEFA Champions League (UCL). Leveraging historical performance data, the analysis provides insights into factors that influence success in one of the world's most prestigious soccer tournaments. The project contributes to the growing field of soccer analytics by identifying meaningful patterns and predictive indicators of championship outcomes.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Jupyter Notebook"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/DKunLee/UCL_Championship" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Visit Github ➡️</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Simple Spreadsheet 📊</h3>
                            <p className="text-gray-400 mb-4">Developed a spreadsheet application featuring a custom formula parser capable of dynamically calculating cell contents. Implemented algorithms to ensure accurate, efficient, and responsive computation based on user input.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C#"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Simple Agar.io 🎮</h3>
                            <p className="text-gray-400 mb-4">Built a multiplayer Agar.io-inspired game with real-time synchronization using C# and TcpClient. Implemented thread-safe locking mechanisms to prevent deadlocks, ensuring stable and smooth communication between server and client during gameplay.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C#"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
