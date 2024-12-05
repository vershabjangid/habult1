import React from 'react'
import getintouch from "../images/a-photo-of-a-rectangular-orange-sign-with-white-te-8Sgfm3S1SEiiBkPg_1njiA--Lwc6QryQgORPjy-IN3rjA (1).png";
import { FaLocationPin, FaMessage } from "react-icons/fa6";
import {FaPhone } from "react-icons/fa";
export function GetInTouch() {
  return (
    <>
       <section className="landing_section text-[black] py-[40px]">
              <section className="landing_section w-[90%] m-auto h-auto flex justify-center ">
                <section className="w-[50%] flex justify-center items-center">
                  <img src={getintouch} alt="" className="w-[70%]" />
                </section>
                <section className=" w-[50%] text-start px-5 flex flex-col mt-2">
                  <div className="flex justify-center">
                  <h1 className="landing_heading w-[400px] text-[white] text-[50px] font-[500] my-5 bg-[#e02708] rounded-[10px] text-center">
                    Get in touch
                  </h1>
                  </div>

                  <p className="text-[18px] my-3 flex items-center">
                    <FaLocationPin />
                    &nbsp;<p> 18/CHB Jodhpur , (Raj) , 342003 India</p>
                  </p>

                  <p className="text-[18px] my-3 flex items-center">
                    <FaPhone className=" rotate-[90deg]" />
                    &nbsp;<p> +91 8005960160</p>
                  </p>

                  <p className="text-[18px] my-3 flex items-center">
                    <FaMessage className="" />
                    &nbsp;<p>info@hubalt.in</p>
                  </p>
                </section>
              </section>
            </section>
    </>
  )
}
