import React, { useState } from "react";
import logo from "../images/Hive_XV_Logo__1_-removebg-preview.9525a124c76d3121e5c7.png";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
export function Header() {
  let [sidebar, setsidebar] = useState(false);

  let [logintoken, setlogintoken] = useState(
    JSON.parse(localStorage.getItem("logintoken"))
  );

  let naviget = useNavigate();
  let deletelocal = (value) => {
    localStorage.removeItem(value);
    naviget("/");
  };
  return (
    <>
      <header className="border-[1px] border-[#6d6c6c] w-[1100px] m-auto p-3 px-4 bg-[white] rounded-[10px] flex items-center justify-between">
        <div>
          <img src={logo} alt="" className="w-[200px]" />
        </div>

        <div className="w-[30%] options_section">
          <ul className="flex justify-between items-center ">
            <Link to={"/"}>
              <li className="options">Home</li>
            </Link>

            {logintoken !== null ? (
              <Link to={"/user-panel"}>
                <li className="options">Startups</li>
              </Link>
            ) : null}

            <Link to={"/about"}>
              <li className="options">About</li>
            </Link>
            <Link to={"/contact-us"}>
              <li className="options">Contact</li>
            </Link>
          </ul>
        </div>

        <div className="buttons_sections">
          {logintoken === null ? (
            <>
              <Link to={"/Login"}>
                <button className="bg-[black] text-[white] w-[100px] h-[40px] rounded-[10px]">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="bg-[#e02708] text-[white] w-[100px] h-[40px] rounded-[10px] ms-2">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <div className="" onClick={() => deletelocal("logintoken")}>
              <button className="bg-[#e02708] text-[white] w-[100px] h-[40px] rounded-[10px] ms-2">
                Logout
              </button>
            </div>
          )}
        </div>

        <div className="menubar text-[20px]">
          <FaBars onClick={() => setsidebar(!sidebar)} />
        </div>
      </header>

      {sidebar ? (
        <section className="sidebar w-[100%] bg-[white] fixed top-0 text-[#e02708] overflow-y-scroll">
          <div className="flex justify-between items-center px-2">
            <div>
              <img src={logo} alt="" className="w-[200px]" />
            </div>

            <div className="">
              <FaXmark onClick={() => setsidebar(!sidebar)} />
            </div>
          </div>

          <div className="h-[100vh]">
            <Link to={"/"}>
              <div className="flex justify-between items-center px-2">
                <div className=" w-[100%] py-3">
                  <p>Home</p>
                </div>

                <div className="">
                  <FaChevronRight />
                </div>
              </div>
            </Link>

            <Link to={"/about"}>
              <div className="flex justify-between items-center px-2">
                <div className=" w-[100%] py-3">
                  <p>About</p>
                </div>

                <div className="">
                  <FaChevronRight />
                </div>
              </div>
            </Link>

            <Link to={"/contact-us"}>
              <div className="flex justify-between items-center px-2">
                <div className=" w-[100%] py-3">
                  <p>Contact Us</p>
                </div>

                <div className="">
                  <FaChevronRight />
                </div>
              </div>
            </Link>

            {/* <div className="flex justify-between items-center px-2">
              <div className=" w-[100%] py-3">
                <p>FAQ's</p>
              </div>

              <div className="">
                <FaChevronRight />
              </div>
            </div>

            <div className="flex justify-between items-center px-2">
              <div className=" w-[100%] py-3">
                <p>Privacy Policy</p>
              </div>

              <div className="">
                <FaChevronRight />
              </div>
            </div>

            <div className="flex justify-between items-center px-2">
              <div className=" w-[100%] py-3">
                <p>Terms & Conditions</p>
              </div>

              <div className="">
                <FaChevronRight />
              </div>
            </div> */}
          </div>
        </section>
      ) : null}
    </>
  );
}
