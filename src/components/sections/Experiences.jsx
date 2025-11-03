import { RevealOnScroll } from "../RevealOnScroll";

export const Experiences = () => {
    return (
        <section id="experiences" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center">
                        Experiences
                    </h2>

                    <div className="space-y-6">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold mb-4 text-purple-400">Astrophysics Research</h3>

                            <div className="space-y-6">
                                <div className="pl-4 border-l-2 border-blue-500/30">
                                    <h4 className="text-lg font-semibold text-white/100 mb-2">Neutrino Direction Prediction Model</h4>
                                    <p className="text-gray-300 text-sm mb-3">
                                        Predicting neutrino direction from astrophysical events using Physics-Informed Neural Networks to analyze how attention mechanisms from transformer architecture influence decision-making.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                                        <li>Replicated existing Physics-Informed Neural Network architectures for directional prediction.</li>
                                        <li>Developed data preprocessing pipelines to handle large-scale astrophysical datasets for model training.</li>
                                        <li>Analyzed attention weight vectors of trained models to identify patterns in feature influence on predictions.</li>
                                        <li>Gained expertise in handling big data for deep learning applications in physics.</li>
                                    </ul>
                                </div>

                                <div className="pl-4 border-l-2 border-purple-500/30">
                                    <h4 className="text-lg font-semibold text-white/100 mb-2">Multi-Task Regression for AGN Spectral Modeling <span className="text-xs text-purple-400">(Manuscript in Preparation)</span></h4>
                                    <p className="text-gray-300 text-sm mb-3">
                                        Developing a deep learning framework to predict optimal spectral model combinations and physical parameters for Active Galactic Nuclei observations, significantly reducing the traditional trial-and-error research process.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                                        <li>Built large-scale spectral data generator using existing astrophysical models for massive simulated spectrum data.</li>
                                        <li>Constructed integrated pipeline connecting data generator with deep learning model training infrastructure.</li>
                                        <li>Designed multi-task architecture classifying spectrum data into different physical models.</li>
                                        <li>Implemented LSTM + Attention mechanism to predict parameters for fixed model spectrum data.</li>
                                        <li>Authoring research paper on deep learning model for automated parameter and model prediction from spectral observations.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Bioinformatics Research</h3>

                            <div className="space-y-6">
                                <div className="pl-4 border-l-2 border-green-500/30">
                                    <h4 className="text-lg font-semibold text-white/100 mb-2">Clustering Analysis of Type 2 Diabetes Patients <span className="text-xs text-green-400">(Manuscript Under Review)</span></h4>
                                    <p className="text-gray-300 text-sm mb-3">
                                        First comprehensive study clustering Type 2 Diabetes patients based on 5-year medication trajectories using real-world EHR data to identify distinct patient groups and treatment patterns.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                                        <li>Built scalable data preprocessing pipeline for real-world EHR data with custom exclusion criteria.</li>
                                        <li>Engineered patient-level feature matrices representing longitudinal medication trajectories.</li>
                                        <li>Applied unsupervised clustering methods to identify 14 distinct patient groups with different medication patterns.</li>
                                        <li>Processed and analyzed data from approximately 10,000 patients.</li>
                                    </ul>
                                </div>

                                <div className="pl-4 border-l-2 border-teal-500/30">
                                    <h4 className="text-lg font-semibold text-white/100 mb-2">Optimal Medication Prediction via HbA1c Modeling <span className="text-xs text-teal-400">(First-Author Paper in Preparation)</span></h4>
                                    <p className="text-gray-300 text-sm mb-3">
                                        Developing a transformer-based deep learning model to predict optimal Type 2 Diabetes medications and HbA1c levels, providing probability-based recommendations to support physician decision-making.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                                        <li>Architected and managed PostgreSQL database for large-scale EHR data storage and retrieval.</li>
                                        <li>Rebuilt data pipeline with caching mechanisms, improving I/O speed by 70% for 600GB+ EHR datasets.</li>
                                        <li>Developed high-performance data pipeline using caching and parallelization for massive EHR data processing.</li>
                                        <li>Implemented baseline regression models for HbA1c value prediction as benchmark.</li>
                                        <li>Designed transformer-based deep learning architecture for predicting future prescriptions and clinical outcomes.</li>
                                        <li>Currently extending model to condition HbA1c forecasts on potential medications for optimal treatment inference.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
