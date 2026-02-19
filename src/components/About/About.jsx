import React from "react";
import ReactTypingEffect from "react-typing-effect";
// import Tilt from 'react-parallax-tilt';
// import profileImage from '../assets/profile.jpg'; // Uncomment and provide your profile image

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-2 sm:mt-4 md:mt-8 lg:mt-14"
    >
      <div className="flex md:flex-row justify-center items-center w-full">
        {/* Left Side */}
        <div className="md:w-full text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight text-center">
            Hi, I'm Rahul
          </h1>

          {/* Typing Role Text */}
          <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I'm a </span>
            <ReactTypingEffect
              text={[
                "Full Stack Developer",
                "Frontend Developer",
                "React.js Developer",
                "JavaScript Programmer",
                "Firebase Enthusiast",
                "Problem Solver",
                "Computer Science Student",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          <p className="text-center text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-2 leading-relaxed">
            As a fresher, I'm eager to contribute to innovative projects,
            continuously learn new tools and frameworks, and grow into a
            confident and impactful software engineer.
          </p>

          {/* Resume Button */}
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/file/d/1eiNMt5pamVKIw0o3KhmZYHat6Pp3DB71/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="items-center inline-block text-white py-3 px-8 rounded-full mt-2 sm:mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Optional Right Side (Profile Image with Tilt Effect) */}
        {/*
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Rahulrakesh Poojary"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
        */}
      </div>
    </section>
  );
};

export default About;
