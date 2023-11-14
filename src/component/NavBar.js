import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  let Links = [
    { name: "Who am I?", link: "/Home" },
    { name: "About", link: "/About" },
    { name: "Projects", link: "/Projects" },
    { name: "Contact", link: "/Contact" },
  ];
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div class="flex justify-center space-x-10 p-8">
      <div
        onClick={() => setIsOpen(!isOpen)}
        class="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
      >
        {isOpen ? (
          <IoMdClose class="border-indigo-300" />
        ) : (
          <FaBars class="border-indigo-300" />
        )}
      </div>
      <ul
        class={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-inherit z-[1] left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          isOpen
            ? "top2 bg-slate-100 h-max w-48  rounded-3xl justify-center"
            : "top-[-490px]"
        }`}
      >
        {Links.map((link) => (
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <a
              href={link.link}
              class="border-solid px-4 py-2 border-indigo-500 border-y-2 rounded-md p-3"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
