// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import campuspulseLogo from "./assets/project_logo/campuspulseLogo.png";
import geminiLogo from "./assets/project_logo/geminiLogo.png";



 // ✅ or .jpg, .svg — match the actual file

import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import netlifyLogo from './assets/tech_logo/netlify.png';
import renderLogo from './assets/tech_logo/renderLogo.svg';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

import intellijLogo from './assets/tech_logo/intellij.svg';
import sqliteLogo from './assets/tech_logo/sqlite.svg';
import googleCloudLogo from './assets/tech_logo/googlecloud.svg';

import swaggerLogo from './assets/tech_logo/swagger.svg';

import androidLogo from './assets/tech_logo/android.svg';
// Experience Section Logo's 
import QspidersLogo from "./assets/company_logo/QspidersLogo.png"
import nextWaveLogo from "./assets/company_logo/nextWaveLogo.png";
import futureInternsLogo from "./assets/company_logo/future_interns_logo.png"
// Education Section Logo's
import smsLogo from './assets/education_logo/smsLogo.png';
import canaraLogo from './assets/education_logo/canaraLogo.png';

//Certification Section Logo's
import simplilearnLogo from "./assets/certifications_logo/simplilearn_logo.png";
// import nptelLogo from "./assets/certifications_logo/nptel_logo.png";
import powerBiLogo from "./assets/certifications_logo/powerbi_workshop_logo.png";


// Project Section Logo's

import portfolioLogo from './assets/project_logo/portfolio_logo.png';
import whatsappLogo from "./assets/project_logo/whatsappLogo.png";
import lostFoundLogo from "./assets/project_logo/lostFoundLogo.png";
import eshopLogo from "./assets/project_logo/eshopLogo.png";
import bmiLogo from "./assets/project_logo/bmiLogo.png";
import tictactoeLogo from "./assets/project_logo/tictactoeLogo.png";
import { render } from 'react-dom';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'C', logo: cLogo },
      { name: 'SQL (MySQL)', logo: mysqlLogo },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Android Studio', logo: androidLogo }, // Add androidLogo if you have it
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages & Cloud',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C', logo: cLogo },
      { name: 'Netlify', logo: netlifyLogo },
      {name:'Render', logo:renderLogo},
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'GCP', logo: googleCloudLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'IntelliJ', logo: intellijLogo },,
      { name: 'SQLite', logo: sqliteLogo },
      { name: 'Swagger', logo: swaggerLogo },
    ],
  },
];

export const certifications = [
  // 
  {
    id: 2,{
  //   id: 1,
  //   title: "Programming in Java",
  //   issuer: "NPTEL",
  //   date: "May 2024",
  //   desc: "Completed an NPTEL-certified course on Java programming, gaining in-depth knowledge of OOPs, exception handling, multithreading, and Java libraries.",
  //   skills: ["Java", "OOP", "Exception Handling", "Multithreading"],
  //   keywords: ["NPTEL", "Certified", "Java SE"],
  //   image:nptelLogo, // Place your image in public/certificates
  //   certificateLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs43/Course/NPTEL24CS43S96140045130652942.pdf", // Replace with real link if available
  //   downloadLink: "/certificates/nptel_java.pdf", // Replace with actual file
  // },
    title: "JavaScript for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "June 2024",
    desc: "Completed a beginner-friendly JavaScript course covering fundamentals such as variables, functions, DOM manipulation, and event handling.",
    skills: ["JavaScript", "DOM", "Functions", "Variables"],
    keywords: ["Frontend", "JavaScript", "Simplilearn"],
    image: simplilearnLogo,
    certificateLink: "https://drive.google.com/file/d/124CuZKLD9BydFyNdqA-jgxZyJ2T-rIDj/view?usp=drivesdk", // Replace if available
    downloadLink: "/certificates/Simplilearn.pdf",
  },
 {
  id: 3,
  title: "PowerBI Workshop",
  issuer: "OfficeMaster / Unstop",
  date: "Jul 2025",
  desc: "Completed hands-on workshop on creating AI-powered interactive dashboards using PowerBI in under 30 minutes.",
  skills: ["PowerBI", "AI Dashboards", "Data Visualization"],
  keywords: ["PowerBI", "Dashboard", "Workshop"],
  image:powerBiLogo, // Replace with actual image path
  certificateLink: "https://unstop.com/workshops/powerbi-ai-dashboard", // Replace with actual URL
  downloadLink: "/certificates/powerbi_workshop.pdf", // Replace with your PDF path
},

];



export const experiences = [
  {
    id: 0,
    role: "Trainee – Fullstack & Aptitude",
    company: "QSpiders Pvt. Ltd (Canara Campus Program)",
    date: "Feb 2025",
    image:QspidersLogo,
    desc: "Completed training focused on C programming, Data Structures, and Aptitude. Strengthened problem-solving and technical foundations through hands-on sessions.",
    skills: ["C", "Data Structures", "Aptitude"],
  },
   {
    id: 1,
    title: "Full Stack Web Dev Intern",
    company: "Future Interns",
    date: "July 2025",
    image: futureInternsLogo,
    desc: "Completed 3 projects: portfolio site, e-commerce app with OTP login, and AI-powered website rebrand.",
    skills: [
      "React", "Next.js", "Tailwind CSS", "Firebase",
      "EmailJS", "UI/UX", "OTP Auth", "SEO"
    ],
  },
  {
    id: 2,
    role: "Participant – Generative AI Workshop",
    company: "NxtWave Disruptive Technologies",
    date: "Aug 2024",
    image:nextWaveLogo,
    desc: "Explored real-world AI applications with ChatGPT, DALL·E, and code assistants. Built low-code AI-powered tools during the workshop.",
    skills: ["Generative AI", "Prompt Engineering", "No-code/Low-code Tools"],
  },

];

// constants.js
export const education = [
  {
    id: 0,
    school: "Canara Engineering College, Mangalore",
    date: "Dec 2022 – Present",
    grade: "",
    desc: "Currently pursuing Bachelor of Engineering in Computer Science.",
    degree: "B.E. in Computer Science",
    img: canaraLogo, // ⬅️ Add path to logo image here
  },
  {
    id: 1,
    school: "SMS Pre-University College, Brahmavar",
    date: "Jun 2020 – May 2022",
    grade: "97.7%",
    desc: "Completed Pre-University education in PCMC.",
    degree: "PUC – PCMC Stream",
    img: smsLogo, // ⬅️ Add path to second logo
  },
   {
    id: 2,
    school: "Government Pre-University College, Brahmavar",
    date: "June 2015 – May 2020",
    grade: "96.5%",
    desc: "Completed SSLC with strong academic performance in core subjects like Science and Mathematics.",
    degree: "SSLC (Secondary School Leaving Certificate)",
    img: "", // ✅ Same fallback school icon
  },
];


export const projects = [
  {
    id: 0,
    title: "Campus Pulse – Smart Assistant Navigation System",
    description:
      "Developed a real-time AR-based indoor navigation system using Java, XML, TinyDB, and Google ARCore. Implemented immersive AR routes with role-based user access.",
    tags: ["Java", "XML", "TinyDB", "ARCore", "Android Studio"],
    github: "https://github.com/Rahul-B47/canara-navigator",
    image: campuspulseLogo,
    apk:"https://drive.google.com/file/d/1cQBORvHyM_Jnqi8Q51wlF9MER4_Nh74y/view",
  },
  {
    id: 1,
    title: "WhatsApp Clone",
    description:
      "A real-time messaging app built using Flutter, Firebase, and Node.js. Features include authentication, live chat, user status, and responsive UI inspired by WhatsApp.",
    tags: ["Flutter","Nodejs", "Socket.IO"],
    github: "https://github.com/Rahul-B47/ChatApp_Clone",
    image: whatsappLogo,
    apk: "https://drive.google.com/file/d/14X7Ox4pSVVbETNgnZemhnP7OBrw_9yKr/view?usp=drivesdk",
  },
  {
    id: 2,
    title: "Lost & Found Portal (Ongoing)",
    description:
      "An ongoing Flutter + Firebase app where users can report and claim lost or found items. Includes OTP login, security questions, claim approval by owners, and image uploads.",
    tags: ["Flutter", "Firebase", "Firestore", "OTP", "Lost & Found"],
    github:"", // update if different
    image: lostFoundLogo,
  },
  {
    id: 3,
    title: "E-Shop – Full Stack E-Commerce Storefront",
    description:
      "A complete e-commerce platform with user authentication (OTP & Google), product listing, cart, order handling, and admin dashboard. Built during Future Interns internship.",
    tags: [
      "React JS",
      "Tailwind CSS",
      "FastAPI",
      "Firebase",
      "MongoDB",
      "Render",
    ],
    webapp: "https://e-shop-frontend-h7yb.onrender.com",
    github: "https://github.com/Rahul-B47/E-Shop",
    image: eshopLogo,
  },
  {
    id: 4,
    title: "BMI Calculator",
    description:
      "A simple yet responsive web app to calculate Body Mass Index based on height and weight inputs. Provides instant results with category info (underweight, healthy, etc).",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/Rahul-B47/Body_Mass_Index_Calculator", // update if needed
    webapp: "https://body-mass-index-calculator-gfsq.onrender.com/", // replace with real link
    image: bmiLogo,
  },
  {
    id: 5,
    title: "Gemini Clone",
    description:
      "A chatbot interface replicating Gemini AI using ReactJS and Google's Generative AI API. Enables real-time natural language interaction with smart prompts and output.",
    tags: ["React JS", "Google Gen AI", "Tailwind", "Chatbot"],
    github: "https://github.com/Rahul-B47/gemini-clone",
    webapp: "https://gemini-clone13.netlify.app/", // update if different
    image: geminiLogo,
  },
  {
  id: 6,
  title: "Personal Portfolio",
  description:
    "A sleek and interactive personal portfolio website showcasing my projects, skills, certifications, and resume. Built using modern frontend technologies with smooth animations and responsive design.",
  tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  github: "https://github.com/Rahul-B47/personal_portfolio", // update if needed
  webapp: "https://rahulrakesh-portfolio.onrender.com/", // replace with real deployed link
  image: portfolioLogo, // replace with actual image variable
},
  {
    id: 7,
    title: "Tic Tac Toe Game",
    description:
      "Classic Tic Tac Toe game built using HTML, CSS, and JavaScript. Features game reset, win detection, and simple AI opponent in a clean responsive layout.",
    tags: ["JavaScript", "HTML", "CSS", "Game Dev"],
    github: "https://github.com/Rahul-B47/tic-tac-toe",
    webapp: "https://tic-tac-toe-vrlh.onrender.com/", // update if deployed
    image: tictactoeLogo,
  },
];
