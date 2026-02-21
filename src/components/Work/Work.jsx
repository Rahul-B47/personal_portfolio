import React, { useEffect, useState, useRef } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiDownload,
  FiPlayCircle, // Added for the Demo button
} from "react-icons/fi";

const Work = ({ title, description, projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modelRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modelRef.current && !modelRef.current.contains(event.target)) {
      setSelectedProject(null);
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedProject]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className="py-24 pb-24 px-[4vw] md:px-[3vw] lg:px-[6vw] font-sans relative bg-black"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          {description}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects &&
          projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="border border-white/10 bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 pt-2 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-purple-900/30 text-[10px] uppercase tracking-wider font-bold text-purple-400 rounded-md px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm">
          <div
            ref={modelRef}
            className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl lg:w-full w-[95%] max-w-4xl overflow-hidden relative"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white text-3xl transition-colors"
            >
              &times;
            </button>

            <div className="flex flex-col">
              {/* Media Section */}
              <div className="w-full bg-black flex justify-center items-center">
                {selectedProject.video ? (
                  <div className="w-full aspect-video">
                    <iframe
                      src={selectedProject.video.replace("/view?usp=sharing", "/preview")}
                      className="w-full h-full"
                      allow="autoplay"
                      title={selectedProject.title}
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-h-[450px] object-contain w-full"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                    >
                      <FiGithub /> View Code
                    </a>
                  )}
                  
                  {/* Priority: Show WebApp/APK if they exist, otherwise show Video link */}
                  {selectedProject.webapp ? (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                    >
                      <FiExternalLink /> View Live
                    </a>
                  ) : selectedProject.apk ? (
                    <a
                      href={selectedProject.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                    >
                      <FiDownload /> Download APK
                    </a>
                  ) : selectedProject.video && (
                    <a
                      href={selectedProject.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                    >
                      <FiPlayCircle /> Watch Full Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;