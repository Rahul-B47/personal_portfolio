import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = ({ onCertificationsClick, onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    // ✅ Special handling for Contact + Certifications
    if (sectionId === "certifications") {
      onCertificationsClick?.(); // hide contact
    } else if (sectionId === "contact") {
      onContactClick?.(); // show contact
    }

    // ✅ Smooth scroll to section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[4vw] md:px-[2vw] lg:px-[8vw] xl:px-[12vw] 2xl:px-[15vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Rahul</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">G</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:gap-4 lg:gap-8 xl:gap-12 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
          <li className="flex space-x-4 ml-6">
            <a
              href="https://github.com/Rahul-B47"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8245ec] text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-poojary-a47aab260/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8245ec] text-white"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
        </ul>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-4 md:hidden">
          <a
            href="https://github.com/Rahul-B47"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-poojary-a47aab260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={20} />
          </a>
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[50%] bg-[#0f0c1d]/70 backdrop-blur-md text-white transform transition-transform duration-300 ease-in-out z-50 rounded-l-xl shadow-lg md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
          <h2 className="text-md font-bold text-[#8245ec]">Menu</h2>
          <FiX
            className="text-2xl text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="flex flex-col space-y-5 px-6 py-6 text-sm font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
          <li className="flex space-x-4 pt-6 border-t border-gray-700">
            <a
              href="https://github.com/Rahul-B47"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-poojary-a47aab260/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={22} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
