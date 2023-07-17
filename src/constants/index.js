import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Front & Backend  Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Service & Sales Manager",
    company_name: "Yuan Yuan Sheng",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - March 2023",
    points: [
      "Developing and maintaining food stock using loyverse POS.",
      "Integrate food delivery app with restaurant.",
      "Collect and review constructive feedback from customers.",
    ],
  },
  {
    title: "Marketing & IT Assistant",
    company_name: "Crescendo International College",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2023 - August 2023",
    points: [
      "Developing and maintaining student mangement system.",
      "Collaborating with third-party (First online) website service provider and other developers to create student management system.",
      "Designed website contents to promote student intakes",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];


const testimonials = [
  {
    testimonial:
      "Jerry was hardworking and has the correct attitude towards his work",
    name: "Aaron",
    designation: "Head Manager",
    company: "Vivo Sdn Bhd",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "He has an artistic sense to create beautiful designs for clients",
    name: "Alicia",
    designation: "Marketing Executive",
    company: "Crescendo International College",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "For the future employer",
    name: "Future Employer",
    designation: "N/A",
    company: "N/A",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Data Analysis",
    description:
      "Exploring sentiment of movie plot by webscrapping Wikipedia data, compare demographics (budget,genre,box office revenues)",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "regex",
        color: "green-text-gradient",
      },
      {
        name: "beautifulSoup",
        color: "pink-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    eye_link:"https://google.com/",
  },
  {
    name: "Pixel mini-game ",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Recipe Website",
    description:
      "Recipe sharing platform that allows users to look for recommendations for popular foods.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };