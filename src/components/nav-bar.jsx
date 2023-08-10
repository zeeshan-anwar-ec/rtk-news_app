import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import x from "../assets/x.png";
import menu from "../assets/menu.png";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 768 ? setToggle(true) : setToggle(false);
    };

    window.addEventListener("resize", handleResize);

  }, [window.innerWidth]);


  return (
    <>
      <header className={`w-full bg-white border-2 flex flex-wrap items-center max-md:flex-col`}>
        <div className="flex-1 flex justify-between items-center max-md:w-full max-md:justify-between">
          <Link to={"/"} className="animate-bounce">
            <img
              className="ml-3 w-10 max-md:m-3"
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
        <nav className={`w-3/12 ${toggle ? "block" : "hidden"} max-md:w-full`}>
          <ul className=" py-4 flex items-center justify-end  max-md:h-32 text-base text-gray-700 max-md:flex-col max-md:items-center">
            <li className="max-md:mb-5">
              <Link
                to={"/"}
                className="py-3 px-2 border-b-2 max-md:py-2 border-transparent hover:border-sky-400 transition-all duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/search"}
                className="py-3 px-2 mr-8 max-md:mr-0 border-b-2 border-transparent hover:border-sky-400 transition-all duration-500"
              >
                search
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
