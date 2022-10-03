import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Experience, Projects, Skills } from "./data/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { AnimatePresence, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

function App() {
  const [isActive, setisActive] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen  min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <nav className="w-full z-50 fixed inset-x-0 top-2 flex justify-center items-center px-6">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium py-1">
              Adegbite Raheem
            </p>
            <div className=" hidden md:flex gap-6 ml-6 flex-1">
              <a
                href="#home"
                className=" text-base text-textBase py-1 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                {" "}
                Home
              </a>
              <a
                href="#about"
                className=" text-base text-textBase py-1 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                {" "}
                About
              </a>
              <a
                href="#project"
                className=" text-base text-textBase py-1 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                {" "}
                Projects
              </a>
              <a
                href="#skills"
                className=" text-base text-textBase py-1 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                {" "}
                Skills
              </a>
              <a
                href="#contact"
                className=" text-base text-textBase py-1 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                {" "}
                Contact
              </a>
              <a
                href="https://myresume22.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className=" ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              >
                {" "}
                Download
              </a>
            </div>
            <motion.div
              whileTap={{ scale: 0.5 }}
              className=" block md:hidden ml-auto cursor-pointer "
              onClick={() => setisActive(!isActive)}
            >
              <IoMenu className=" text-2xl text-textBase" />
            </motion.div>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className=" text-base text-textBase py-1 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setisActive(false)}
                >
                  {" "}
                  Home
                </a>
                <a
                  href="#about"
                  className=" text-base text-textBase py-1 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setisActive(false)}
                >
                  {" "}
                  About
                </a>
                <a
                  href="#project"
                  className=" text-base text-textBase py-1 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setisActive(false)}
                >
                  {" "}
                  Projects
                </a>
                <a
                  href="#skills"
                  className=" text-base text-textBase py-1 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setisActive(false)}
                >
                  {" "}
                  Skills
                </a>
                <a
                  href="#contact"
                  className=" text-base text-textBase py-1 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setisActive(false)}
                >
                  {" "}
                  Contact
                </a>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href="https://myresume22.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                  onClick={(e) => setisActive(false)}
                >
                  {" "}
                  Download
                </motion.a>
              </motion.div>
            )}
          </div>
        </nav>
        <main className="w-[80%] mt-5">
          <section
            className="w-full flex items-center justify-center "
            id="about"
          >
            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p class="text-md mt-6 text-textBase text-center lg:text-3xl lg:tracking-wider  lg:px-16 lg:mt-20 ">
                I am <b class=" text-cyan-700">Adegbite Raheem</b>,
                <b class=" text-cyan-700">Full Stack Developer </b>. I create
                interactive experiences for people using modern web
                technology,independent fellow who has soft spot for team/group
                work. Committed to high standards of service, performance and
                integrity. Dedicated and reliable with organized, proactive and
                problem-solving nature.
              </p>

              <motion.button
                whileTap={{ scale: 0.8 }}
                class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
              >
                <span
                  class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                  onClick={(e) =>
                    window.open("https://myresume22.herokuapp.com/", "_blank")
                  }
                >
                  Download CV
                </span>
              </motion.button>
            </div>
          </section>

          <p className=" text-4xl text-cyan-700 flex items-center justify-center font-bold">
            Skills
          </p>
          <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4 "
            id="skills"
          >
            {Skills &&
              Skills.map((data, idx) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  id={idx}
                  className=" border border-zinc-800 rounded-md  p-2 min-w-[280px] md:max-w-[275px] hover:bg-primary duration-100 ease-in-out cursor-pointer bg-navBar"
                >
                  <div className="flex items-center justify-center">
                    {data.iconSrc}
                  </div>
                  <p className=" text-1xl text-gray-300 text-center my-3">
                    {data.name}{" "}
                  </p>
                  <p className=" text-base text-gray-300 text-center my-2 mx-2">
                    {data.description.length > 25
                      ? `${data.description.slice(0, 25)}...`
                      : data.description}{" "}
                  </p>
                </motion.div>
              ))}
          </section>
          <p className=" text-4xl text-cyan-700 flex items-center justify-center font-bold">
            Experience
          </p>
          <section
            className="w-full flex items-center justify-center"
            id="experience"
          >
            <VerticalTimeline>
              {Experience &&
                Experience.map((data, idx) => (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#0f273d", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  #0f273d" }}
                    date={data.date}
                    iconStyle={{ background: "#0f273d", color: "#fff" }}
                    icon={data.iconsSrc}
                    key={idx}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {data.title}{" "}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {data.location}{" "}
                    </h4>
                    <p>{data.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>
          <p className=" text-4xl text-cyan-700 flex items-center justify-center font-bold mt-2">
            Projects
          </p>
          <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="project"
          >
            {Projects &&
              Projects.map((data, idx) => (
                <div
                  className=" border border-zinc-800 rounded-md  p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out cursor-pointer"
                  key={idx}
                >
                  <p
                    className="flex  items-center justify-center text-md text-textBase font-medium uppercase"
                    onClick={(e) => window.open(data.site, "_blank")}
                  >
                    {data.name.length > 25
                      ? `${data.name.slice(0, 25)}...`
                      : data.name}
                    <span className="p-2 text-base">
                      <BsFillArrowRightCircleFill
                        onClick={(e) => window.open(data.site, "_blank")}
                      />
                    </span>
                  </p>
                  <img
                    src={data.imageSrc}
                    alt="dd"
                    className="w-full h-full object-cover rounded-md my-4"
                  />
                  <div className="flex flex-1 items-center justify-between">
                    <p className=" text-lg text-gray-300">
                      Technogies
                      <span className=" block text-sm text-gray-500">
                        {data.techs}
                      </span>
                    </p>
                    <a href={data.github} target="_blank" rel="noreferrer">
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <IoLogoGithub className=" text text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </div>
              ))}
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
