import "/src/index.css";
import { ReactTyped } from "react-typed";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Projects() {
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
            <a href="/projects">Projects</a>
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
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-white">
        <h1 className="md:text-7xl sn:text-6xl text-4xl font-bold md:py-6">
          This is supposed to be catalog of my projects
        </h1>
      </div>
    </>
  );
}
