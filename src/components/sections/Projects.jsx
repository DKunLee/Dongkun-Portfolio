import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center">Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Diabetes Medication Patterns Analysis 💊</h3>
                            <p className="text-gray-400 mb-2">Developed a data pipeline to transform complex raw EHR data into structured matrix formats and analyzed around 10,000 patients with clustering methods to find the patterns for each patient. Applied unsupervised learning algorithms to cluster patients based on five-year longitudinal medication trajectories.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Scikit-Learn"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/DKunLee/Clustering_Diabetes_Patients" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Visit Github ➡️</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Air Quality Data Pipeline 🌎</h3>
                            <p className="text-gray-400 mb-4">Developed end-to-end ETL pipeline processing 45,000+ monthly air quality records from AWS S3 using Python, DuckDB, and SQL transformations with interactive Dash web dashboard. Engineered scalable database architecture and automated data extraction system handling 24 sensor locations across 12 months with geospatial visualization and real-time filtering.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "PostgreSQL", "DuckDB"].map((tech, key) => (
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
                            <h3 className="text-xl font-bold mb-2">Blog Webpage 🖥️</h3>
                            <p className="text-gray-400 mb-4">Built a full-stack content management system with role-based authentication by implementing Django, PostgreSQL database, and custom user permission models. Deployed scalable web application with cloud architecture by integrating Cloudinary CDN for media storage and configuring production environment on Render platform.</p>
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
                            <h3 className="text-xl font-bold mb-2">Machine Learning Library from Scratch 💾</h3>
                            <p className="text-gray-400 mb-4">Engineered scikit-learn-compatible ML library implementing 5 core algorithms (SVM, Decision Trees, AdaBoost) with parallelized cross-validation and GridSearchCV, demonstrating mastery of optimization theory and NumPy. Developed ensemble learning framework and model selection toolkit from scratch, validated through empirical benchmarking against production frameworks in interactive Jupyter notebooks.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "NumPy"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/30 text-[#f2f1e8] py-1 px-3 rounded-full text-sm hover:bg-blue-500/15 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/DKunLee/MachineLearning" className="text-blue-400 hover:text-blue-300 transition-colors my-4">Visit Github ➡️</a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
