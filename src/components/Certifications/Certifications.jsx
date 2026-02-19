import React, { useEffect, useState, useRef } from "react";
import { certifications } from "../../constants";
import { FiEye, FiDownload } from "react-icons/fi";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setSelectedCert(null);
    }
  };

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedCert]);

  return (
    <section
      id="certifications"
      className="py-24 px-6 sm:px-10 lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          Recognized credentials and training programs I've completed to strengthen my skills.
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="cursor-pointer flex flex-col lg:flex-row border border-white bg-[#131025] hover:shadow-[0_0_20px_2px_rgba(130,69,236,0.5)] transition-all duration-300 ease-in-out rounded-2xl overflow-hidden"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 h-52 lg:h-auto flex justify-center items-center bg-[#0f0a1a]">
              <img
                src={cert.image || "/placeholder.png"}
                alt={cert.title}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-6 lg:w-1/2 w-full">
              <div>
                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mb-2">{cert.date}</p>
                <p className="text-gray-300 mb-4 text-sm">{cert.desc}</p>

                {cert.skills?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1 border border-purple-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md px-4 sm:px-6 animate-fadeIn">
          <div
            ref={modalRef}
            className="relative z-[10000] bg-[#181126] w-full max-w-lg rounded-xl overflow-hidden shadow-2xl animate-scaleIn"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setSelectedCert(null)}
                className="text-white text-2xl font-bold hover:text-purple-500 transition"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col items-center text-center px-6 pb-6">
              <img
                src={selectedCert.image || "/placeholder.png"}
                alt={selectedCert.title}
                className="w-full max-h-[250px] object-contain rounded-xl mb-4"
              />

              <h3 className="text-xl font-bold text-white mb-1">{selectedCert.title}</h3>
              <p className="text-gray-400 text-sm">{selectedCert.issuer}</p>
              <p className="text-xs text-gray-500 mb-3">{selectedCert.date}</p>
              <p className="text-gray-300 text-sm mb-4">{selectedCert.desc}</p>

              {/* Skills */}
              {selectedCert.skills?.length > 0 && (
                <>
                  <h5 className="text-white font-medium text-sm mb-2">Skills Learned:</h5>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {selectedCert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1 border border-purple-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                {selectedCert.certificateLink && (
                  <a
                    href={selectedCert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-semibold transition"
                  >
                    <FiEye className="text-lg" /> View
                  </a>
                )}
                {selectedCert.downloadLink && (
                  <a
                    href={selectedCert.downloadLink}
                    download
                    className="flex items-center gap-2 border border-purple-500 text-purple-400 hover:bg-purple-700 hover:text-white px-4 py-2 rounded-xl font-semibold transition"
                  >
                    <FiDownload className="text-lg" /> Download
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
