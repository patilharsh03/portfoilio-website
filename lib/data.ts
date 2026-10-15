export const profile = {
  firstName: "Harsh",
  lastName: "Patil",
  role: "Full Stack Developer",
  // Words that cycle under my name in the hero
  cycleWords: ["React", "Next.js", "Node.js", "MongoDB", "Real-time apps"],
  email: "harshpatil223@gmail.com",
  github: "https://github.com/patilharsh03",
  linkedin: "https://www.linkedin.com/in/harshpatil03/",
  
  resume: "/resume.pdf",
};

export const aboutStatement =
  "I build full stack web apps that are fast, clean and built to last — from real-time tools to complete products, end to end.";

export const aboutText =
  "I work across the MERN stack and Next.js, and I like understanding how things work before I reach for a library. I've shipped real-time collaborative apps, form-driven tools, and API-backed products. I'm looking for opportunities where I can keep building and learning inside a strong team.";

export const aboutHighlights = ["fast", "clean", "last", "end"];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveHref: string;
  repoHref: string;
};

export const projects: Project[] = [
  {
    title: "Gym Fitness App",
    description:
      "A modern, responsive gym and fitness application built using React, TypeScript, Tailwind CSS, Vite, and Framer Motion, featuring smooth animations and an engaging user interface.",
    stack: ["React", "TypeScript", "Tailwind css"],
    liveHref: "https://gym-fitness-app-seven.vercel.app/",
    repoHref: "https://github.com/patilharsh03/gym-fitness-app",
  },
  {
    title: "Blog App MERN",
    description:
      " A full-stack blogging platform that allows users to sign up, log in, write, publish, and manage blog posts through a secure authentication system. Built using MongoDB, Express.js, React.js, and Node.js.",
    stack: ["React", "TypeScript", "Express", "Node.js", "Mongodb", "React-router-dom"],
    liveHref: "https://blog-app-mern-two.vercel.app/",
    repoHref: "https://github.com/patilharsh03/Blog-App-MERN",
  },
  {
    title: "vr landing page",
    description:
      "A modern, responsive virtual reality landing page built with React.js and Tailwind CSS, featuring smooth scroll animations, interactive UI elements, and engaging video and carousel components for an immersive user experience.",
    stack: ["React", "Tailwind css", "swiper.js"],
    liveHref: "https://vr-landing-page-hazel.vercel.app/",
    repoHref: "https://github.com/patilharsh03/vr-landing-page",
  },
  {
    title: "firebase social media",
    description:
      "A social media web app built with Firebase, featuring Google Sign-In authentication, content sharing, and real-time data management.",
    stack: ["TypeScript", "Firebase", "CSS"],
    liveHref: "https://social-media-project-e5f5c.web.app/",
    repoHref: "https://github.com/patilharsh03/firebase-social-media",
  },
  // {
  //   title: "Project Five",
  //   description:
  //     "Replace this with a one or two line description of what the project does and the problem it solves.",
  //   stack: ["React", "Express", "MongoDB"],
  //   liveHref: "https://example.com",
  //   repoHref: "https://github.com/your-username/project-five",
  // },
  // {
  //   title: "Project Six",
  //   description:
  //     "Replace this with a one or two line description of what the project does and the problem it solves.",
  //   stack: ["JavaScript", "DOM", "LocalStorage"],
  //   liveHref: "https://example.com",
  //   repoHref: "https://github.com/your-username/project-six",
  // },
];

export const skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "Socket.io",
  "Git",
];
