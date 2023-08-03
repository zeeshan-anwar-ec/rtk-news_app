import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import x from "../assets/x.png";
import menu from "../assets/menu.png";
import { useState } from "react";

export const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-white mb-10 flex flex-wrap items-center drop-shadow-2xl max-md:flex-col">
        <div className="flex-1 flex justify-between items-center max-md:w-full max-md:justify-between">
          <Link to={"/"}>
            <img
              className="ml-3 w-10 hover:animate-bounce max-md:m-3"
              src={logo}
              alt="not found"
            />
          </Link>
          <div
            onClick={() => setToggle(!toggle)}
            className={`hidden  max-md:flex h-10 w-10 items-center justify-between m-3`}
          >
            <img src={toggle ? x : menu} alt="not found" />
          </div>
        </div>
        <nav
          className={`w-3/12 max-md:${
            toggle ? "block" : "hidden"
          } max-md:w-full`}
        >
          <ul className=" py-4 flex items-center justify-evenly max-md:h-32 text-base text-gray-700 max-md:flex-col max-md:items-center">
            <li>
              <Link
                to={"/"}
                className="py-3 px-2 border-b-2 border-transparent hover:border-sky-400 transition-all duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/search"}
                className="py-3 px-2  border-b-2 border-transparent hover:border-sky-400 transition-all duration-500"
              >
                search
              </Link>
            </li>

            <li>
              <Link
                to={"/about"}
                className="py-3 px-2 border-b-2 border-transparent hover:border-sky-400 transition-all duration-500"
              >
                about
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
