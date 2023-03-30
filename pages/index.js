import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import face from "../public/face.png";
// import icon from "../public/icon.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Christian Majid Portfolio</title>
        <meta name="description" content="Christian Majid Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="lg:px-15 bg-white px-7 dark:bg-gray-900 md:px-10">
        <section className="min-h-screen">
          <nav className=" mb-10  flex items-center justify-between py-8 dark:text-white">
            <ul className="flex items-center">
              <div className="relative  h-8 w-8  overflow-hidden rounded-full bg-white md:h-14 md:w-14 lg:h-20 lg:w-20">
                <Image
                  src="/favicon.ico"
                  layout="fill"
                  flex
                  alt="McMaster CS Panda Bear"
                />
              </div>
              <h1 className="text-l mx-3 font-burtons md:mx-4 md:text-3xl lg:mx-6 lg:text-5xl">
                Christian Majid
              </h1>
            </ul>
            <div className="">
              <ul className="flex items-center ">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-4xl"
                  />
                </li>
                <li>
                  <a
                    className="text- ml-8 rounded-md border-none  bg-gradient-to-b from-teal-500 to-blue-400 px-8 py-4 text-2xl text-white"
                    href="resume.pdf"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="p-10 py-10 text-center">
            <div className="flex justify-center gap-16 py-3 text-7xl text-gray-700 dark:text-gray-500 ">
              <a
                href="https://twitter.com/Christian_Majid"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.linkedin.com/in/christian-majid/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/ChristianMajid"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="mailto:majidc@mcmaster.ca"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillMail />
              </a>
            </div>
            <span class=" bg-gradient-to-b from-teal-500 to-blue-400 bg-clip-text  py-2 text-5xl font-bold text-transparent md:text-6xl">
              Kindly fall down a hole
            </span>
            <h3 className="py-2 text-2xl dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              molestias natus quia saepe velit odit consectetur fugiat illo
              aliquid doloribus?
            </p>

            <div className="relative mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 object-center md:h-96 md:w-96">
              <Image src={face} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="py-1 text-3xl dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              repellendus eum suscipit incidunt ex. Porro, voluptas rerum? Quia,
              rem. Ea!
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              enim molestiae repellat eos temporibus harum sint, ipsum quod
              voluptas libero?
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium voluptatum nam commodi vero, similique alias!
            </p>
          </div>
          <div className="gap-10 lg:flex">
            <div className="my-10 flex-1 rounded-xl p-10 text-center  shadow-lg dark:bg-teal-900">
              <Image src={design} width={100} height={100} />
              <h3 className="pb-2 pt-8 text-lg font-bold font-medium dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-100">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                accusamus earum voluptatem eos molestias velit.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 dark:text-gray-200">Photoshop</p>
              <p className="py-1 dark:text-gray-200">Illustrator</p>
              <p className="py-1 dark:text-gray-200">Figma</p>
              <p className="py-1 dark:text-gray-200">Indesign</p>
            </div>
            <div className="my-10 flex-1 rounded-xl p-10 text-center shadow-xl dark:bg-teal-900">
              <Image src={code} width={100} height={100} />
              <h3 className="pb-2 pt-8 text-lg font-bold font-medium dark:text-white ">
                Code your dream project
              </h3>
              <p className="py-2 dark:text-gray-100  ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus doloremque quae tempora iste dolore vel.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 dark:text-gray-200">Photoshop</p>
              <p className="py-1 dark:text-gray-200">Illustrator</p>
              <p className="py-1 dark:text-gray-200">Figma</p>
              <p className="py-1 dark:text-gray-200">Indesign</p>
            </div>
            <div className="my-10 flex-1 rounded-xl p-10 text-center shadow-lg dark:bg-teal-900">
              <Image src={consulting} width={100} height={100} />
              <h3 className="pb-2 pt-8 text-lg font-bold  font-medium  dark:text-white">
                Consulting
              </h3>
              <p className="py-2 dark:text-gray-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora dolorum obcaecati facilis accusamus corporis officia!
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 dark:text-gray-200">Photoshop</p>
              <p className="py-1 dark:text-gray-200">Illustrator</p>
              <p className="py-1 dark:text-gray-200">Figma</p>
              <p className="py-1 dark:text-gray-200">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="py-1 text-3xl dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis ipsam repudiandae nostrum sapiente recusandae velit.
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              rerum voluptas ratione mollitia eius sit.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              provident molestias porro mollitia necessitatibus nostrum.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
