import React from "react";
import { Header } from "../../common/Header";
import right_banner from "../../images/download.svg";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { Footer } from "../../common/Footer";
import personimg from "../../images/portrait-beautiful-young-woman-standing-grey-wall.jpg";
import { FaLocationPin, FaMessage } from "react-icons/fa6";
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

            <section className="landing_section bg-[black] py-[40px]">
              <section className="landing_section w-[90%] m-auto h-auto flex justify-center items-center">
                <section className=" w-[50%] text-start text-white px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading text-[50px] font-[500] my-5 bg-[#e02708] rounded-[10px] text-center">
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

                <section className="w-[50%] flex justify-center items-center">
                  <img src={right_banner} alt="" />
                </section>
              </section>
            </section>

            <section className="landing_section bg-[white] py-[40px]">
              <section className="landing_section w-[90%] m-auto h-auto flex justify-center items-center">
                <section className="w-[50%] flex justify-center items-center">
                  <img src={right_banner} alt="" />
                </section>
                <section className=" w-[50%] text-start text-black px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading text-[50px] text-[white] font-[500] my-5 bg-[#e02708] rounded-[10px] text-center">
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

            <section className="landing_section bg-[black]">
              <section className="landing_section w-[100%] flex">
                <section className=" w-[100%] h-[100%] text-center text-white px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading w-[400px] rounded-[10px] m-auto text-[50px] font-[500] my-5 bg-[#e02708]">
                    Our Founder
                  </h1>

                  <div className="w-[100%]">
                    <div className="w-[100%] py-5 flex">
                      <div className="w-[50%] flex justify-center items-center flex-col">
                        {/* <IoPerson className="text-[35px]" /> */}

                        <div className="w-[300px] h-[300px]  rounded-[50%]   overflow-hidden border-[1px] border-[white]">
                          <img
                            src={personimg}
                            alt=""
                            className="w-[700px] h-[300px]"
                          />
                        </div>

                        <h4 className="text-[25px] font-[600] mt-[5px]">
                          Prakash Sharma
                        </h4>
                        <p className="text-[20px] mt-[5px]">
                          Founder & Chief Executive Officer
                        </p>

                        <FaLinkedin className="text-[30px] mt-[10px]" />
                      </div>

                      <div className="w-[46%] text-justify flex justify-center items-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Laboriosam minus, dicta dolor necessitatibus quod
                        deserunt animi officia facilis eos impedit reiciendis
                        dolorem iste aperiam mollitia neque ex debitis minima
                        accusamus. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Non dolorum sed, harum, excepturi
                        optio asperiores ad quos pariatur illo tenetur vitae
                        earum laudantium commodi. Animi, fugiat! Soluta natus
                        numquam nihil?
                      </div>
                    </div>

                    <div className="w-[100%] py-5 flex">
                      <div className="w-[50%] px-5 text-justify flex justify-center items-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Laboriosam minus, dicta dolor necessitatibus quod
                        deserunt animi officia facilis eos impedit reiciendis
                        dolorem iste aperiam mollitia neque ex debitis minima
                        accusamus. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Non dolorum sed, harum, excepturi
                        optio asperiores ad quos pariatur illo tenetur vitae
                        earum laudantium commodi. Animi, fugiat! Soluta natus
                        numquam nihil?
                      </div>
                      <div className="w-[50%] flex justify-center items-center flex-col">
                        {/* <IoPerson className="text-[35px]" /> */}

                        <div className="w-[300px] h-[300px]  rounded-[50%]   overflow-hidden border-[1px] border-[white]">
                          <img
                            src={personimg}
                            alt=""
                            className="w-[700px] h-[300px]"
                          />
                        </div>

                        <h4 className="text-[25px] font-[600] mt-[5px]">
                          Prakash Sharma
                        </h4>
                        <p className="text-[20px] mt-[5px]">
                          Founder & Chief Executive Officer
                        </p>

                        <FaLinkedin className="text-[30px] mt-[10px]" />
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </section>

            <section className="landing_section bg-[white] py-[40px]">
              <section className="landing_section w-[90%] m-auto h-auto flex justify-center items-center">
                <section className="w-[50%] flex justify-center items-center">
                  <img src={right_banner} alt="" />
                </section>
                <section className=" w-[50%] text-start text-black px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading text-[50px] text-[white] font-[500] my-5 bg-[#e02708] rounded-[10px] text-center">
                    We are hiring
                  </h1>

                  <p className="text-[18px] my-3">
                    Are you ready to reshape fund raising for Startups in India
                    with us. We are eagar to hire fresh talent.
                  </p>

                  <p className="text-[18px] font-[600] underline">
                    Email at info@hubalt.in
                  </p>
                </section>
              </section>
            </section>

            <section className="landing_section bg-[black] text-[white] py-[40px]">
              <section className="landing_section w-[90%] m-auto h-auto flex justify-center items-center">
                <section className=" w-[50%] text-start px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading text-[50px] font-[500] my-5 bg-[#e02708] rounded-[10px] text-center">
                    Get in touch
                  </h1>

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
                <section className="w-[50%] flex justify-center items-center">
                  <img src={right_banner} alt="" />
                </section>
              </section>
            </section>
            <Footer />
          </section>
        </section>
      </section>
    </>
  );
}
