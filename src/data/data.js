import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoYoutube,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
  } from "react-icons/io5";
  import {DiJavascript1,DiNodejs,DiCss3,DiReact} from "react-icons/di"
  import {AiFillDatabase,AiFillHtml5} from 'react-icons/ai'
  import{TbBrandNextjs} from 'react-icons/tb'
  import {SiMaterialui,SiStyledcomponents,SiTailwindcss} from 'react-icons/si'
  import img1 from "../images/thumb-fooddeliveryapp-reactjs-dec.png";
  import img2 from "../images/url.jpg";
  import img3 from "../images/thumb-google-map-clone-nextjs-feb22.png";
  import img4 from "../images/dash.jpg";
  import img5 from "../images/api.jpg";
  import img6 from "../images/thumb-whatsappui-clone-nextjs.png";
  
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
      name: "Food Delivery UI Mockup",
      imageSrc: img1,
      techs: "React Js, Redux, Material UI",
      github: "https://github.com/Rahdeg",
      site:""
    },
    {
      id: 2,
      name: "Url Shortner ",
      imageSrc: img2,
      techs: "React Js, Nodejs,Express Mongodb",
      github: "https://github.com/Rahdeg/crudeapi/tree/main/project-3",
      site:"https://shorturl22b.herokuapp.com/"
    },
    {
      id: 3,
      name: "Travel Advisor",
      imageSrc: img3,
      techs: "React Js, Chakra UI, Google API",
      github: "https://github.com/Rahdeg",
      site:""
    },
    {
      id: 4,
      name: "Responsive Dashboard",
      imageSrc: img4,
      techs: "React Js,  Material UI",
      github: "https://github.com/Rahdeg/dashboard",
      site:"https://effervescent-crepe-47cc81.netlify.app/"
    },
    {
      id: 5,
      name: "Crude Music API",
      imageSrc: img5,
      techs: "React Js, Chara UI, Firebase",
      github: "https://github.com/Rahdeg/crudeapi/tree/main/project-4",
      site:"https://musicappa.herokuapp.com/"
    },
    {
      id: 6,
      name: "Whatsapp UI Clone",
      imageSrc: img6,
      techs: "NextJs, Firebase Auth",
      github: "https://github.com/Rahdeg",
      site:""
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
      link: "www.linkedin.com/in/raheemadegbite",
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
      iconSrc: <DiJavascript1 className=" text text-slate-200  text-4xl cursor-pointer "/>,
      name: "JAVASCRIPT",
      description: " one of the best Progamming Language.",
    },
    {
        id: 1,
        iconSrc: (
          <DiNodejs className="text-green-500 text-3xl cursor-pointer" />
        ),
        name: "Node js",
        description: " Nodejs,Express... ",
      },
      {
        id: 1,
        iconSrc: (
          <AiFillDatabase className="text-green-500 text-3xl cursor-pointer" />
        ),
        name: "Database Management",
        description: " MySql,MongoDB and Postgresql ",
      },
    {
      id: 1,
      iconSrc: <AiFillHtml5 className="text-red-500 text-3xl cursor-pointer" />,
      name: "Html 5",
      description: "Tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web.",
    },
    {
      id: 1,
      iconSrc: (
        <DiCss3 className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Cascading Style Sheets",
      description: "Cascading Style Sheets  for Styling Applications.",
    },
    {
      id: 1,
      iconSrc: (
        <DiReact className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "React",
      description: " front-end JavaScript library for UI components.",
    },
    {
      id: 1,
      iconSrc: (
        <TbBrandNextjs className="text-green-500 text-3xl cursor-pointer" />
      ),
      name: "Next",
      description: "Building blocks to create web applications. ",
    },
    {
        id: 1,
        iconSrc: (
          <SiMaterialui className="text-blue-800 text-3xl cursor-pointer" />
        ),
        name: "Material UI",
        description: "React components that implement Google's Material Design.",
      },
      {
        id: 1,
        iconSrc: (
          <SiStyledcomponents className="text-green-500 text-3xl cursor-pointer" />
        ),
        name: "Styled Components",
        description: "Using component-level styles in your app.",
      },
      {
        id: 1,
        iconSrc: (
          <SiTailwindcss className="text-green-500 text-3xl cursor-pointer" />
        ),
        name: "Tailwind CSS",
        description: "For Responsive website",
      },
    
  ];
  