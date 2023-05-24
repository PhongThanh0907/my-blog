import Anpha from "../../public/logoanpha.jpg";
import Image from "next/image";
import CSS from "../../public/technologies/css.png";
import HTML from "../../public/technologies/html.png";
import JAVASCRIPT from "../../public/technologies/javascript.png";
import MONGO from "../../public/technologies/mongodb.png";
import NODE from "../../public/technologies/nodejs.png";
import REACT from "../../public/technologies/reactjs.png";
import REDUX from "../../public/technologies/redux.png";
import TAILWIND from "../../public/technologies/tailwind.png";
import TYPESCRIPT from "../../public/technologies/typescript.png";
import NEXT from "../../public/technologies/nextjs.png";
import ANTD from "../../public/technologies/antd.png";
import GIT from "../../public/technologies/git.png";

export const MENU_HEADER = [
  { title: "Banner", id: "/", delay: "200" },
  { title: "About", id: "/", delay: "300" },
  { title: "Work Experience", id: "/", delay: "400" },
  { title: "Skills", id: "/", delay: "500" },
  { title: "Project", id: "/", delay: "600" },
  { title: "Contact", id: "/", delay: "700" },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Acom Company",
    icon: Anpha,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    technology:
      "HTML, CSS, Javascript, Typescript, ReactJS, Redux-saga, Redux, TailwindCSS, Ant Design, MySQL, NodeJS, More... ",
    points: [
      "Developing and maintaining web applications using React.js, Typescript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Acom",
  //   icon: Anpha,
  //   iconBg: "#383E56",
  //   date: "June 2022 - Present",
  //   technology:
  //     "HTML, CSS, Javascript, Typescript, ReactJS, Redux-saga, Redux, TailwindCSS, Ant Design, MySQL, NodeJS, More... ",
  //   points: [
  //     "Developing and maintaining web applications using React.js, Typescript and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: <Image src={HTML} alt="icon" />,
    transition: 0.3,
  },
  {
    name: "CSS 3",
    icon: <Image src={CSS} alt="icon" />,
    transition: 0.6,
  },
  {
    name: "JavaScript",
    icon: <Image src={JAVASCRIPT} alt="icon" />,
    transition: 0.9,
  },
  {
    name: "TypeScript",
    icon: <Image src={TYPESCRIPT} alt="icon" />,
    transition: 1.2,
  },
  {
    name: "React JS",
    icon: <Image src={REACT} alt="icon" />,
    transition: 1.5,
  },
  {
    name: "Next JS",
    icon: <Image src={NEXT} alt="icon" />,
    transition: 1.8,
  },
  {
    name: "Redux Toolkit",
    icon: <Image src={REDUX} alt="icon" />,
    transition: 2.1,
  },
  {
    name: "Tailwind CSS",
    icon: <Image src={TAILWIND} alt="icon" />,
    transition: 2.4,
  },
  {
    name: "Ant Design",
    icon: <Image src={ANTD} alt="icon" />,
    transition: 2.7,
  },
  {
    name: "Node JS",
    icon: <Image src={NODE} alt="icon" />,
    transition: 3,
  },
  {
    name: "MongoDB",
    icon: <Image src={MONGO} alt="icon" />,
    transition: 3.3,
  },

  {
    name: "git",
    icon: <Image src={GIT} alt="icon" />,
    transition: 3.6,
  },
];
