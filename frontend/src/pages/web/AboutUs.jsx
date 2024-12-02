import React from "react";
import { Header } from "../../common/Header";
import right_banner from "../../images/download.svg";
import { FaChevronRight, FaIcons, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaLocationPin, FaMessage } from "react-icons/fa6";
import { Footer } from "../../common/Footer";
import { IoPerson } from "react-icons/io5";
export function AboutUs() {
  return (
    <>
      <section className="main w-[100%] bg-[#292828b4]">
        <section className="">
          <section className="home_banner h-[100vh] bg-[#00000065] pt-3">
            <Header />

            <section className="landing_section w-[100%] h-[calc(100vh-110px)] flex mt-2">
              <section className="w-[50%] h-[100%] flex justify-center items-center">
                <img src={right_banner} alt="" />
              </section>

              <section className=" w-[50%] h-[100%] text-end text-white px-5 flex justify-center flex-col mt-2">
                <h1 className="landing_heading text-[50px] font-[500] my-5">
                  About Us
                </h1>

                <p className="text-[18px] my-3">
                  We are a member only marketplace for Startup education,
                  awareness and Investor community
                </p>

                <div className="my-3">
                  <button className="landing_btn w-[300px] h-[50px] bg-[#e02708] rounded-[10px]">
                    Become an investor
                  </button>

                  <button className="landing_btn w-[300px] h-[50px] bg-[white] text-black rounded-[10px] ms-2">
                    Submit Pitch Deck
                  </button>
                </div>
              </section>
            </section>

            <section className="landing_section bg-[black] h-[100vh]">
              <section className="landing_section w-[100%] h-[calc(100vh-110px)] flex">
                <section className=" w-[50%] h-[100%] text-start text-white px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading text-[50px] font-[500] my-5">
                    About Us
                  </h1>

                  <p className="text-[18px] my-3">
                    HubAlt,A digital marketplace strives to make the Startup
                    investment space more inclusive by granting retail investors
                    access to the opportunities that were previously available
                    only to the wealthy 1%.
                  </p>

                  <p className="text-[18px] my-3">
                    HubAlt,A digital marketplace strives to make the Startup
                    investment space more inclusive by granting retail investors
                    access to the opportunities that were previously available
                    only to the wealthy 1%.
                  </p>
                </section>

                <section className="w-[50%] h-[100%] flex justify-center items-center">
                  <img src={right_banner} alt="" />
                </section>
              </section>
            </section>

            <section className="landing_section bg-[white] h-[100vh]">
              <section className="landing_section w-[100%] h-[calc(100vh-110px)] flex">
                <section className="w-[50%] h-[100%] flex justify-center items-center">
                  <img src={right_banner} alt="" />
                </section>
                <section className=" w-[50%] h-[100%] text-start text-black px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading text-[50px] font-[500] my-5">
                    Our Mission
                  </h1>

                  <p className="text-[18px] my-3">
                    HubAlt,A digital marketplace strives to make the Startup
                    investment space more inclusive by granting retail investors
                    access to the opportunities that were previously available
                    only to the wealthy 1%.
                  </p>

                  <p className="text-[18px] my-3">
                    HubAlt,A digital marketplace strives to make the Startup
                    investment space more inclusive by granting retail investors
                    access to the opportunities that were previously available
                    only to the wealthy 1%.
                  </p>
                </section>
              </section>
            </section>

            <section className="landing_section bg-[black] h-[100vh]">
              <section className="landing_section w-[100%] h-[calc(100vh-110px)] flex">
                <section className=" w-[100%] h-[100%] text-center text-white px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading text-[50px] font-[500] my-5">
                    Our Founder
                  </h1>

                  <div className="w-[100%] border-[1px] flex justify-between">
                    <div className="w-[50%] border-[1px] py-5 flex justify-center items-center flex-col">
                      <IoPerson className="text-[35px]" />

                      <h4 className="text-[25px] font-[600] mt-[5px]">
                        Prakash Sharma
                      </h4>
                      <p className="text-[20px] mt-[5px]">
                        Founder & Chief Executive Officer
                      </p>

                      <FaLinkedin className="text-[30px] mt-[10px]" />
                    </div>


                    <div className="w-[50%] border-[1px] py-5 flex justify-center items-center flex-col">
                      <IoPerson className="text-[35px]" />

                      <h4 className="text-[25px] font-[600] mt-[5px]">
                       Rakesh Shankar
                      </h4>
                      <p className="text-[20px] mt-[5px]">
                      CO-Founder & Channel Head
                      </p>

                      <FaLinkedin className="text-[30px] mt-[10px]" />
                    </div>
                  </div>
                </section>
              </section>
            </section>

            <section className="landing_section bg-[black] h-[100vh]">
              <section className="landing_section w-[100%] h-[calc(100vh-110px)] flex">
                <section className=" w-[100%] h-[100%] text-center text-white px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading text-[50px] font-[500] my-5">
                    FAQ's
                  </h1>

                  <section className="text-start text-[black]">
                    <section className="w-[100%] bg-[white] p-4 font-[600] rounded-[10px] my-5">
                      <div className="flex justify-between items-center">
                        <p className="text-[20px]">
                          1. sfsfddsfsdfsd sdfsfds sdfsdfsdfs sfdsfsfdsdf
                          sdfsfdsdfs sdfsfsfdsdfs
                        </p>
                        <FaChevronRight />
                      </div>
                      <p className="font-[500] text-[16px]">answer</p>
                    </section>

                    <section className="w-[100%] bg-[white] p-4 font-[600] rounded-[10px] my-5">
                      <div className="flex justify-between items-center">
                        <p className="text-[20px]">
                          1. sfsfddsfsdfsd sdfsfds sdfsdfsdfs sfdsfsfdsdf
                          sdfsfdsdfs sdfsfsfdsdfs
                        </p>
                        <FaChevronRight />
                      </div>
                      {/* <p className="font-[500] text-[16px]">answer</p> */}
                    </section>

                    <section className="w-[100%] bg-[white] p-4 font-[600] rounded-[10px] my-5">
                      <div className="flex justify-between items-center">
                        <p className="text-[20px]">
                          1. sfsfddsfsdfsd sdfsfds sdfsdfsdfs sfdsfsfdsdf
                          sdfsfdsdfs sdfsfsfdsdfs
                        </p>
                        <FaChevronRight />
                      </div>
                      {/* <p className="font-[500] text-[16px]">answer</p> */}
                    </section>

                    <section className="w-[100%] bg-[white] p-4 font-[600] rounded-[10px] my-5">
                      <div className="flex justify-between items-center">
                        <p className="text-[20px]">
                          1. sfsfddsfsdfsd sdfsfds sdfsdfsdfs sfdsfsfdsdf
                          sdfsfdsdfs sdfsfsfdsdfs
                        </p>
                        <FaChevronRight />
                      </div>
                      {/* <p className="font-[500] text-[16px]">answer</p> */}
                    </section>

                    <section className="w-[100%] bg-[white] p-4 font-[600] rounded-[10px] my-5">
                      <div className="flex justify-between items-center">
                        <p className="text-[20px]">
                          1. sfsfddsfsdfsd sdfsfds sdfsdfsdfs sfdsfsfdsdf
                          sdfsfdsdfs sdfsfsfdsdfs
                        </p>
                        <FaChevronRight />
                      </div>
                      {/* <p className="font-[500] text-[16px]">answer</p> */}
                    </section>
                  </section>
                </section>
              </section>

              <Footer />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
