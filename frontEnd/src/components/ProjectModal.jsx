import React, { useEffect } from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-gray-900 border border-white/10 rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="mt-2">
                    <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>

                    {/* Image Display */}
                    {project.images && project.images.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {project.images.map((img, index) => (
                                <div key={index} className="rounded-lg overflow-hidden border border-white/5 shadow-lg">
                                    <img
                                        src={img}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center mb-6 border border-white/5">
                            <p className="text-gray-500">No images available</p>
                        </div>
                    )}

                    <div className="space-y-4">
                        <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm border border-blue-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex justify-end">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg hover:shadow-blue-500/30"
                            >
                                Visit Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
