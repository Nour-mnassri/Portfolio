// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mnassri Nour",
  tagline: "Web developer",
  img: profile,
  about: `I am a web developer, I have a passion for web development and love to create for web and mobile devices. I am a hard worker and I am always looking for new challenges to improve my skills.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://github.com/Nour-mnassri",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/nour_mnassry27/",
};

// Enter your Work Experience here
export const workDetails = [


  {
    Position: "Internship",
    Company: `Zitoona Bank`,
    Location: "Gafsa",
    Type: "Internship",
    Duration: "Jan 2021 - Fev 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor's Degree",
    Company: "ISET Gafsa",
    Location: "Gafsa",
    Type: "Full Time",
    Duration: "2021 - Present",
  },

];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,

};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "E-commerce Website",
    image: "projectImage1",
    description: `Developed a full-fledged e-commerce website with features like user authentication, 
        product catalog, shopping cart, and secure payment processing. Implemented responsive design 
        for seamless user experience across devices.`,
    techstack: "React, Node.js, Express, MongoDB",
    previewLink: "#",
    githubLink: "https://github.com/",
},
{
  title: "Contact Manager App",
  image: "contactManagerAppImage",
  description: `Developed a contact manager application to organize and manage contacts efficiently. 
      Implemented features such as adding new contacts, editing existing ones, and deleting contacts. 
      Used local storage for data persistence and provided a clean and intuitive user interface.`,
  techstack: "Angular, Bootstrap",
  previewLink: "#",
  githubLink: "https://github.com/example-contact-manager",
},
{
  title: "Task Tracker App",
  image: "taskTrackerAppImage", 
  description: `Designed and implemented a task tracker application to help users manage their tasks efficiently. 
      The app includes features like adding tasks, setting priorities, marking tasks as completed, and 
      organizing tasks by category. Integrated a clean and responsive user interface for an optimal user experience.`,
  techstack: "Vue.js, Vuex, SCSS, Firebase",
  previewLink: "#",
  githubLink: "https://github.com",
}
];

// Enter your Contact Details here
export const contactDetails = {
  email: "nourmnassry27@gmail.com",
  phone: "+216 22 22 22 22",
};
