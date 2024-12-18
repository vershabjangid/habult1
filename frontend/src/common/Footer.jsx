import React from "react";
import logo from "../images/Hive XV (1080 x 1350 px) (1).png";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import istart from "../images/nw6o7plxlj6ehfcwwddx.9254a6f53866eeb97d19.webp";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <>
      <section className="w-[100%] bg-[#212121] p-3 flex items-center justify-between flex-wrap text-white">
        <div className="w-[250px] flex justify-center items-center m-auto flex-col">
          <div className="w-[150px]">
            <img src={logo} alt="" />
          </div>

          <div className="text-white text-center w-[50%]">
            <p>Social Media</p>

            <div className="flex justify-between mt-2">
              <div className="w-[30px] h-[30px] rounded-[50%] text-[20px] flex justify-center items-center bg-[white] text-[#e02708]">
                <FaFacebook />
              </div>

              <div className="w-[30px] h-[30px] rounded-[50%] text-[20px] flex justify-center items-center bg-[white] text-[#e02708]">
                <FaLinkedin />
              </div>

              <div className="w-[30px] h-[30px] rounded-[50%] text-[20px] flex justify-center items-center bg-[white] text-[#e02708]">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>

        <div className="m-auto">
          <ul className="mt-5 leading-10">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/terms-condition"}>Terms & Conditions</Link>
            </li>
            <li>
              <Link to={"/disclaimer"}>Disclaimer</Link>
            </li>
          </ul>
        </div>

        <div className="m-auto  flex justify-center items-center flex-col">
          <img src={istart} alt="" className=" brightness-200" />
          <p>Registration ID NO :- 5F63239</p>
          <p>
            Approved by Department of IT and Communication Govt of Rajasthan
          </p>
        </div>
      </section>
    </>
  );
}
