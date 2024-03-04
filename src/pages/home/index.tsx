import "/src/index.css";
import { ReactTyped } from "react-typed";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-mono">ARDIOPUTRA</h1>
        <ul className="hidden md:flex">
          <li className="p-4 hover:bg-[#c026d3]">
            {" "}
            <a href="/">Home</a>
          </li>
          <li className="p-4 hover:bg-[#c026d3]">
            <a href="/portfolio/projects">Projects</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-600 ease-in-out duration-500"
              : "fixed left-[-100%] ease-in-out duration-500"
          }
        >
          <h1 className="px-4 pt-4 w-full text-3xl font-mono">ARDIOPUTRA</h1>
          <ul className="p-4 pt-4 uppercase font-mono">
            <li className="p-4 border-b border-black-600">
              <a href="/">Home</a>
            </li>
            <li className="p-4 border-b border-black-600">
              <a href="/portfolio/projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <img
            src="pasfoto.png"
            className="w-72 h-96 mx-auto rounded-full"
            alt=""
          />
          <p className="font-bold py-6">LET ME INTRODUCE MYSELF</p>
          <h1 className="md:text-7xl sn:text-6xl text-4xl font-bold md:py-6">
            Ardio Pratama Putra
          </h1>
          <div>
            <ReactTyped
              className="md: text-5xl sm:text-4xl text-xl font-bold"
              strings={[
                "Telecommunication Engineering",
                "Software Engineer",
                "Internet of Things Consultant",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <a href="https://www.linkedin.com/in/ardioputra/" target="_blank">
            <button className="bg-[#c026d3] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
              Hire This Man Already!
            </button>
          </a>
          <a href="/projects" target="_blank">
            <button className="bg-[#c026d3] w-[200px] rounded-md font-medium mx-auto py-3 text-white">
              See My Projects
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
