import React from "react";
import { Header } from "../../common/Header";
import right_banner from "../../images/banners.png";
import about_Baner from "../../images/About-removebg-preview.png";
import { Footer } from "../../common/Footer";
import icon1 from "../../images/mm.png";
import icon2 from "../../images/mmmm.png";
import icon3 from "../../images/mmmm,.png";
import icon4 from "../../images/mmmmmmm.png";
import { Link } from "react-router-dom";
import { ContactUs1 } from "../../common/ContactUs";
export function Landing() {
  return (
    <>
      <section className="main w-[100%] bg-[#292828b4]">
        <section className="">
          <section className="home_banner h-[100vh] bg-[#00000064] pt-3">
            <Header />

            <section className="landing_section w-[100%] h-[calc(100vh-110px)] flex mt-2">
              <section className="w-[50%] h-[100%] flex justify-center items-center">
                <img src={right_banner} alt="" className="w-[100%]" />
              </section>

              <section className=" w-[50%] h-[100%] text-end text-white px-5 flex justify-center flex-col mt-2">
                <h1 className="landing_heading text-[50px] font-[500] my-2">
                  Bridging Vision and Opportunity
                </h1>
                <h2 className="landing_subheading text-[30px] font-[500] my-2">
                  Empowering startups to rise and investors to
                </h2>
                <p className="text-[18px] my-3">
                  Hivexv.com is a dedicated platform that connects innovative
                  startups with forward-thinking investors. We aim to create an
                  ecosystem where bold ideas meet the resources they need to
                  flourish and investors discover opportunities that align with
                  their vision. By fostering collaboration, we pave the way for
                  growth, success, and mutual achievement.
                </p>

                <div className="my-3">
                  <Link to={"/register"}>
                    <button className="landing_btn w-[300px] h-[50px] bg-[#e02708] rounded-[10px]">
                      Become an investor
                    </button>
                  </Link>

                  <Link to={"/register"}>
                    <button className="landing_btn w-[300px] h-[50px] bg-[white] text-black rounded-[10px] ms-2">
                      Submit Pitch Deck
                    </button>
                  </Link>
                </div>
              </section>
            </section>

            <section className="landing_section bg-[white] py-[40px]">
              <section className="landing_section_about w-[90%] m-auto h-auto flex justify-center items-center">
                <section className=" w-[50%] text-start text-black px-5 flex justify-center flex-col mt-2">
                  <div className="flex justify-center">
                    <h1 className="landing_heading w-[400px] text-[50px] font-[500] my-5 bg-[#e02708] text-[white] rounded-[10px] text-center">
                      About Us
                    </h1>
                  </div>

                  <h2 className=" text-[35px] leading-[50px] font-[500] my-5  rounded-[10px]">
                    Connecting Innovators with Investors for a Better Future
                  </h2>

                  <p className="text-[18px] my-3">
                    At Hivexv.com, we believe that the right partnerships can
                    drive incredible change. Our platform was created to bridge
                    the gap between innovative startups looking for growth
                    opportunities and investors seeking impactful ventures. By
                    simplifying the connection process, we aim to foster a
                    community where both entrepreneurs and investors can thrive.
                  </p>

                  <p className="text-[18px] my-3">
                    Our mission is to empower startups with the resources,
                    guidance, and exposure they need to bring their ideas to
                    life. For investors, we offer access to promising
                    opportunities that align with their goals, enabling them to
                    make informed, impactful investments.
                  </p>

                  <p className="text-[18px] my-3">
                    Whether you're a startup with a vision or an investor
                    seeking the next big thing, Hivexv.com is the space where
                    ideas grow, and opportunities flourish.
                  </p>
                </section>

                <section className="w-[50%] flex justify-center items-center">
                  <img src={about_Baner} alt="" />
                </section>
              </section>
            </section>

            <section className="landing_section bg-[white]">
              <section className="landing_section w-[100%] flex">
                <section className=" w-[100%] text-start text-[black] px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading w-[400px] rounded-[10px] m-auto landing_heading text-[50px] text-center font-[500] my-[10px] bg-[#e02708] text-[white]">
                    Why Choose Us
                  </h1>

                  <h2 className=" text-[40px] font-[500] my-5  rounded-[10px] text-center">
                    Why Hivexv.com Stands Out
                  </h2>

                  <section className="w-[90%] m-auto flex justify-between flex-wrap">
                    <section className="why_choose_cards w-[48%] my-3 p-3 rounded-[10px] text-[black] flex justify-between">
                      <div className="icon_section w-[100px] h-[100px] text-[25px] me-2 my-2 rounded-[50%] flex justify-center items-center">
                        <img src={icon1} alt="" />
                      </div>

                      <div className=" mb-2 w-[calc(100%-110px)]">
                        <div className="">
                          <p className="text-[30px] font-[600]">
                            Tailored Matches
                          </p>
                        </div>
                        <div className=" text-justify">
                          <p>
                            Our advanced matching algorithm ensures that
                            startups connect with the right investors, based on
                            industry, growth stage, and goals. This personalized
                            approach saves time and maximizes the potential for
                            successful partnerships.
                          </p>
                          {/* <p className="my-3 underline">View More</p> */}
                        </div>
                      </div>
                    </section>

                    <section className="why_choose_cards w-[48%] my-3 p-3 rounded-[10px] text-[black] flex justify-between">
                      <div className="icon_section w-[100px] h-[100px] text-[25px] me-2 my-2 rounded-[50%] flex justify-center items-center">
                        <img src={icon2} className="w-[70%]" alt="" />
                      </div>

                      <div className=" mb-2 w-[calc(100%-110px)]">
                        <div className="">
                          <p className="text-[30px] font-[600]">
                            User-Friendly Experience
                          </p>
                        </div>
                        <div className=" text-justify">
                          <p>
                            Hivexv.com is designed to be simple and intuitive,
                            allowing both startups and investors to navigate and
                            interact easily. Whether you're new to the platform
                            or an experienced user, our seamless interface makes
                            collaboration effortless.
                          </p>
                          {/* <p className="my-3 underline">View More</p> */}
                        </div>
                      </div>
                    </section>

                    <section className="why_choose_cards w-[48%] my-3 p-3 rounded-[10px] text-[black] flex justify-between">
                      <div className="icon_section w-[100px] h-[100px] text-[25px] me-2 my-2 rounded-[50%] flex justify-center items-center">
                        <img src={icon3} alt="" />
                      </div>

                      <div className=" mb-2 w-[calc(100%-110px)]">
                        <div className="">
                          <p className="text-[30px] font-[600]">
                            Transparent Communication
                          </p>
                        </div>
                        <div className=" text-justify">
                          <p>
                            We believe in building trust through transparency.
                            Our platform enables clear communication between
                            startups and investors, ensuring both sides
                            understand expectations and goals before moving
                            forward.
                          </p>
                          {/* <p className="my-3 underline">View More</p> */}
                        </div>
                      </div>
                    </section>

                    <section className="why_choose_cards w-[48%] my-3 p-3 rounded-[10px] text-[black] flex justify-between">
                      <div className="icon_section w-[100px] h-[100px] text-[25px] me-2 my-2 rounded-[50%] flex justify-center items-center">
                        <img src={icon4} alt="" />
                      </div>

                      <div className=" mb-2 w-[calc(100%-110px)]">
                        <div className="">
                          <p className="text-[30px] font-[600]">
                            Expert Support & Resources
                          </p>
                        </div>
                        <div className=" text-justify">
                          <p>
                            Beyond connections, we offer startups and investors
                            access to valuable resources, including industry
                            insights and expert advice, empowering users to make
                            informed decisions and drive success.
                          </p>
                          {/* <p className="my-3 underline">View More</p> */}
                        </div>
                      </div>
                    </section>
                  </section>
                </section>
              </section>
            </section>

            <section className="landing_section bg-[white]">
              {/* <section className="landing_section w-[100%] flex">
                <section className=" w-[100%] h-[100%] text-center text-white flex justify-center flex-col mt-2"> */}
              {/* <h1 className="landing_heading w-[400px] rounded-[10px] m-auto bg-[#e02708] text-[50px] font-[500] my-5">
                    FAQ's
                  </h1> */}

              {/* <section className="text-start text-[black] flex justify-between items-center">
                    <section className="w-[49%] flex justify-center">
                      <img src={faqbanner} alt="" className="w-[80%]" />
                    </section>
                    <section className="w-[49%]">
                      <section className="w-[90%] m-auto bg-[white] p-4 font-[600] rounded-[10px] my-5">
                        <div className="flex justify-between items-center">
                          <p className="text-[20px]">
                            1. sfsfddsfsdfsd sdfsfds sdfsdfsdfs sfdsfsfdsdf
                            sdfsfdsdfs sdfsfsfdsdfs
                          </p>
                          <FaChevronRight />
                        </div>
                        <p className="font-[500] text-[16px]">answer</p>
                      </section>

                      <section className="w-[90%] m-auto bg-[white] p-4 font-[600] rounded-[10px] my-5">
                        <div className="flex justify-between items-center">
                          <p className="text-[20px]">
                            1. sfsfddsfsdfsd sdfsfds sdfsdfsdfs sfdsfsfdsdf
                            sdfsfdsdfs sdfsfsfdsdfs
                          </p>
                          <FaChevronRight />
                        </div>
                        <p className="font-[500] text-[16px]">answer</p>
                      </section>

                      <section className="w-[90%] m-auto bg-[white] p-4 font-[600] rounded-[10px] my-5">
                        <div className="flex justify-between items-center">
                          <p className="text-[20px]">
                            1. sfsfddsfsdfsd sdfsfds sdfsdfsdfs sfdsfsfdsdf
                            sdfsfdsdfs sdfsfsfdsdfs
                          </p>
                          <FaChevronRight />
                        </div>
                        <p className="font-[500] text-[16px]">answer</p>
                      </section>

                      <section className="w-[90%] m-auto bg-[white] p-4 font-[600] rounded-[10px] my-5">
                        <div className="flex justify-between items-center">
                          <p className="text-[20px]">
                            1. sfsfddsfsdfsd sdfsfds sdfsdfsdfs sfdsfsfdsdf
                            sdfsfdsdfs sdfsfsfdsdfs
                          </p>
                          <FaChevronRight />
                        </div>
                        <p className="font-[500] text-[16px]">answer</p>
                      </section>

                      <section className="w-[90%] m-auto bg-[white] p-4 font-[600] rounded-[10px] my-5">
                        <div className="flex justify-between items-center">
                          <p className="text-[20px]">
                            1. sfsfddsfsdfsd sdfsfds sdfsdfsdfs sfdsfsfdsdf
                            sdfsfdsdfs sdfsfsfdsdfs
                          </p>
                          <FaChevronRight />
                        </div>
                        <p className="font-[500] text-[16px]">answer</p>
                      </section>
                    </section>
                  </section> */}
              {/* </section>
              </section> */}

              <ContactUs1 />
              <Footer />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
