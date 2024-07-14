import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Biwadi Marathon Website (MERN Stack)",
    description:
      "Developed an online registration platform for the Biwadi Marathon, enabling runners to easily sign up for the event.The system provided automated confirmation emails and issued digital certificates of participation to all registered runners, ensuring a smooth and efficient registration process.",
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
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
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
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Snapchat Clone (React Js , Firebase)",
    description:
      "Developed an engaging Snapchat Clone using React.js, allowing users to share and view pictures seamlessly. Integrated Firebase for real-time data storage.",
    tools: ["React", "Bootstrap", "SCSS", "Express", "Firebase"],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Resume Builder (React Js , Firebase)",
    description:
      "Developed a web application using React.js for creating and customizing professional resumes.Enabled users to download resumes in multiple formats (PDF, DOCX).",
    tools: ["ReactJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
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
