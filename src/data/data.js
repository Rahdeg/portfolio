import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { DiJavascript1, DiNodejs, DiCss3, DiReact } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { AiFillDatabase, AiFillHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMaterialui,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import img1 from "../images/thumb-fooddeliveryapp-reactjs-dec.png";
import img2 from "../images/url.jpg";

import img4 from "../images/dash.jpg";
import img5 from "../images/api.jpg";
import img10 from "../images/admin.jpg";
import img11 from "../images/store.jpg";
import img8 from "../images/tithew.jpg";
import img100 from "../images/companion.jpg";

export const Experience = [
  {
    id: 0,
    date: "2012 - 2014",
    iconsSrc: <IoCodeWorking />,
    title: "OPERATIONS OFFICER",
    location: "Ogun, Nigeria",
    description:
      "Creative Direction, User Experience, Backend Engnr , Project Management, Team Leading",
  },
  {
    id: 1,
    date: "2015 - 2021",
    iconsSrc: <IoCodeWorking />,
    title: "CAFE MANAGER",
    location: "Ogun, Nigeria",
    description:
      "Contribute to business development ,  Project Management, Team Leading",
  },
  {
    id: 2,
    date: "2022 - Tilldate",
    iconsSrc: <IoCodeWorking />,
    title: "WEB DEVELOPER",
    location: "Nigeria",
    description:
      "Contribute to building React Project ,  Project Management, Team Leading",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Companion AI",
    imageSrc: img100,
    techs: "Next Js,Crisp,Clerk,Chadcn,Tailwind",
    github: "https://github.com/Rahdeg/my-companion",
    site: "https://my-companion-puce.vercel.app/",
  },
  {
    id: 2,
    name: "Ecommerce Admin",
    imageSrc: img10,
    techs: "Next 13,Clerk,Prisma,MySQL,Tailwind",
    github: "https://github.com/Rahdeg/e-commerce",
    site: "https://e-commerce-admin-khaki.vercel.app/",
  },
  {
    id: 3,
    name: "Ecommerce Store",
    imageSrc: img11,
    techs: "Next 13,React,Prisma,MySQL,Tailwind",
    github: "https://github.com/Rahdeg/ecommerce-store",
    site: "https://ecommerce-store-teal-five.vercel.app/",
  },
  {
    id: 4,
    name: "Food Delivery UI Mockup",
    imageSrc: img1,
    techs: "React Js, Redux, Material UI",
    github: "https://github.com/Rahdeg/foodtribes",
    site: "https://restaurant-10db5.web.app/",
  },
  {
    id: 5,
    name: "Itunez App",
    imageSrc: img5,
    techs: "React Js, Firebase,Nodejs Tailwind css",
    github: "https://github.com/Rahdeg/mymusic",
    site: "https://itunez.vercel.app/",
  },
  {
    id: 6,
    name: "Titheapp Api",
    imageSrc: img8,
    techs: "Nodejs, MongoDB, Flutterwave,",
    github: "https://github.com/Rahdeg/TitheBox",
    site: "https://tithebox.org/",
  },
  {
    id: 7,
    name: "Responsive Dashboard",
    imageSrc: img4,
    techs: "React Js,  Material UI",
    github: "https://github.com/Rahdeg/dashboard",
    site: "https://effervescent-crepe-47cc81.netlify.app/",
  },

  {
    id: 8,
    name: "Url Shortner ",
    imageSrc: img2,
    techs: "React Js, Nodejs,Express Mongodb",
    github: "https://github.com/Rahdeg/crudeapi/tree/main/project-3",
    site: "https://shorturl22b.herokuapp.com/",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Rahdeg",
  },
  {
    id: 1,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: "YouTube",
    link: "#",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "https://twitter.com/Walett25?t=_1LdjsWrzbufJqVqTD8uWA&s=09",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raheemadegbite/",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: " https://wa.me/message/JKPVPVN3EQPYH1",
  },
];

export const Skills = [
  {
    id: 1,
    iconSrc: (
      <DiJavascript1 className=" text text-slate-200  text-4xl cursor-pointer " />
    ),
    name: "JAVASCRIPT",
    description: " one of the best Progamming Language.",
  },
  {
    id: 11,
    iconSrc: (
      <SiTypescript className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Typescript",
    description: "one of the best Progamming Language",
  },
  {
    id: 2,
    iconSrc: <DiNodejs className="text-green-500 text-3xl cursor-pointer" />,
    name: "Node js",
    description: " Nodejs,Express... ",
  },
  {
    id: 3,
    iconSrc: (
      <AiFillDatabase className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Database Management",
    description: " MySql,MongoDB and Postgresql ",
  },
  {
    id: 4,
    iconSrc: <AiFillHtml5 className="text-red-500 text-3xl cursor-pointer" />,
    name: "Html 5",
    description:
      "Tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web.",
  },
  {
    id: 5,
    iconSrc: <DiCss3 className="text-blue-500 text-3xl cursor-pointer" />,
    name: "Cascading Style Sheets",
    description: "Cascading Style Sheets  for Styling Applications.",
  },
  {
    id: 6,
    iconSrc: <DiReact className="text-blue-800 text-3xl cursor-pointer" />,
    name: "React",
    description: " front-end JavaScript library for UI components.",
  },
  {
    id: 7,
    iconSrc: (
      <TbBrandNextjs className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Next",
    description: "Building blocks to create web applications. ",
  },
  {
    id: 8,
    iconSrc: <SiMaterialui className="text-blue-800 text-3xl cursor-pointer" />,
    name: "Shadcn UI",
    description: "React components that implement Google's Material Design.",
  },
  {
    id: 9,
    iconSrc: (
      <SiStyledcomponents className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Styled Components",
    description: "Using component-level styles in your app.",
  },
  {
    id: 10,
    iconSrc: (
      <SiTailwindcss className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Tailwind CSS",
    description: "For Responsive website",
  },
];
