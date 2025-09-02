import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Fybr App (Mobile Application & Website)",
    description:
      "Fybr is a product-based platform that allows users to purchase and receive instant delivery of fashion items from local merchants.",
    tools: [
      "React Native",
      "Node.js",
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "React.js",
    ],
    role: "Full Stack Developer",
    responsibilities: [
      "Engaged directly with founders to refine business requirements and ensure technical feasibility.",
      "Gathered detailed functional and technical needs from stakeholders.",
      "Proposed and implemented scalable solutions aligned with user experience and business goals.",
      "Coordinated with the development team to ensure smooth execution of features and timely delivery.",
      "Worked on both the mobile application (React Native) and the website (MERN Stack).",
    ],
    code: "",
    demo: "https://fybrnow.com/Login",
    image: crefin, // replace with actual image import
  },
  {
    id: 2,
    name: "Octopus (Service Booking & E-Commerce Website)",
    description:
      "Octopus is a platform that integrates service booking and e-commerce, enabling users to schedule services and purchase products seamlessly.",
    tools: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
    role: "Full Stack Developer",
    responsibilities: [
      "Collaborated closely with the founding team to gather requirements and define the business logic.",
      "Designed solution flows ensuring both the booking and e-commerce modules work cohesively.",
      "Supervised development and guided the implementation of best practices.",
      "Acted as a bridge between stakeholders and the technical team to align expectations and ensure quality delivery.",
      "Implemented scalable APIs and optimized MongoDB queries for performance.",
    ],
    code: "",
    demo: "https://portal.theoctopus.ai/login",
    image: crefin, // replace with actual image import
  },
  {
    id: 3,
    name: "Biwadi Marathon Website (MERN Stack)",
    description:
      "Developed an online registration platform for the Biwadi Marathon, enabling runners to easily sign up for the event. The system provided automated confirmation emails and issued digital certificates of participation to all registered runners, ensuring a smooth and efficient registration process.",
    tools: [
      "MERN Stack",
      "Express",
      "MongoDB",
      "OpenAI API",
      "AWS SES",
      "AWS S3",
      "Node Mailer",
      "Joi",
      "Puppeteer",
      "EC2",
      "PM2",
      "Nginx",
    ],
    role: "Full Stack Developer",
    responsibilities: [
      "Built a complete registration system for the marathon using MERN Stack.",
      "Integrated AWS SES for automated confirmation emails.",
      "Implemented Puppeteer to generate digital participation certificates.",
      "Deployed application on AWS EC2 with PM2 and Nginx for scalability.",
      "Ensured data validation and security using Joi middleware.",
    ],
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 4,
    name: "Memories MERN Stack",
    description:
      "I have designed and developed a full-stack web app for 2Expedition, a Memories in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.",
    tools: [
      "NextJS",
      "MERN Stack",
      "Tailwind CSS",
      "Google Maps",
      "NestJS",
      "TypeScript",
      "MySQL",
      "AWS S3",
      "Sun-Editor",
      "Gmail Passkey",
    ],
    role: "Full Stack Developer",
    responsibilities: [
      "Developed a multi-language, multi-currency platform for travel experiences.",
      "Built responsive UI with NextJS, TailwindCSS, MUI, and React Slick.",
      "Implemented Google Maps integration and Sun-Editor for content creation.",
      "Developed scalable APIs using NestJS, TypeScript, and MySQL with TypeORM.",
      "Deployed frontend on AWS Amplify and backend on AWS EC2 for reliability.",
    ],
    code: "",
    demo: "",
    image: travel,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
