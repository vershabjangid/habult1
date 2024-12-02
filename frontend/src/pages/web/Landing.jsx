import React from "react";
import { Header } from "../../common/Header";
import right_banner from "../../images/download.svg";
import { FaChevronRight, FaIcons, FaPhone } from "react-icons/fa";
import { FaLocationPin, FaMessage } from "react-icons/fa6";
import { Footer } from "../../common/Footer";
export function Landing() {
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
                  Startups- Educate - Connect - Invest - Update
                </h1>
                <h2 className="landing_subheading text-[30px] font-[500] my-4">
                  subheadline
                </h2>
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
                <section className=" w-[100%] h-[100%] text-start text-[black] px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading text-[50px] text-center font-[500] mb-[50px] text-[#e02708]">
                    Why Choose Us
                  </h1>

                  <section className=" flex justify-between flex-wrap">
                    <section className="why_choose_cards w-[350px] my-3 p-3 bg-[black] rounded-[10px] text-[white]">
                      <div className="flex items-center mb-2">
                        <div className="icon_section w-[50px] h-[50px] me-2 rounded flex justify-center items-center bg-[#e02708]">
                          <FaIcons />
                        </div>

                        <div>
                          <p className="text-[20px] font-[600]">Hello</p>
                        </div>
                      </div>

                      <div className=" text-justify">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Libero ratione adipisci corrupti consequatur
                          suscipit accusantium, laudantium labore illum ducimus,
                          eligendi non, explicabo autem porro. Rem rerum dolor
                          exercitationem molestiae obcaecati! Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Explicabo vero,
                          nesciunt voluptate, perferendis at incidunt illo
                          molestiae in dicta quaerat fugit. Cumque reiciendis,
                          aperiam laborum nam ipsam dolor alias modi!
                        </p>
                      </div>
                    </section>

                    <section className="why_choose_cards w-[350px] my-3 p-3 bg-[black] rounded-[10px] text-[white]">
                      <div className="flex items-center mb-2">
                        <div className="icon_section w-[50px] h-[50px] me-2 rounded flex justify-center items-center bg-[#e02708]">
                          <FaIcons />
                        </div>

                        <div>
                          <p className="text-[20px] font-[600]">Hello</p>
                        </div>
                      </div>

                      <div className="text-justify">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Libero ratione adipisci corrupti consequatur
                          suscipit accusantium, laudantium labore illum ducimus,
                          eligendi non, explicabo autem porro. Rem rerum dolor
                          exercitationem molestiae obcaecati! Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Explicabo vero,
                          nesciunt voluptate, perferendis at incidunt illo
                          molestiae in dicta quaerat fugit. Cumque reiciendis,
                          aperiam laborum nam ipsam dolor alias modi!
                        </p>
                      </div>
                    </section>

                    <section className="why_choose_cards w-[350px] my-3 p-3 bg-[black] rounded-[10px] text-[white]">
                      <div className="flex items-center mb-2">
                        <div className="icon_section w-[50px] h-[50px] me-2 rounded flex justify-center items-center bg-[#e02708]">
                          <FaIcons />
                        </div>

                        <div>
                          <p className="text-[20px] font-[600]">Hello</p>
                        </div>
                      </div>

                      <div className="text-justify">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Libero ratione adipisci corrupti consequatur
                          suscipit accusantium, laudantium labore illum ducimus,
                          eligendi non, explicabo autem porro. Rem rerum dolor
                          exercitationem molestiae obcaecati! Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Explicabo vero,
                          nesciunt voluptate, perferendis at incidunt illo
                          molestiae in dicta quaerat fugit. Cumque reiciendis,
                          aperiam laborum nam ipsam dolor alias modi!
                        </p>
                      </div>
                    </section>

                    <section className="why_choose_cards w-[350px] my-3    p-3 bg-[black] rounded-[10px] text-[white]">
                      <div className=" flex items-center mb-2">
                        <div className="icon_section w-[50px] h-[50px] me-2 rounded flex justify-center items-center bg-[#e02708]">
                          <FaIcons />
                        </div>

                        <div>
                          <p className="text-[20px] font-[600]">Hello</p>
                        </div>
                      </div>

                      <div className="text-justify">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Libero ratione adipisci corrupti consequatur
                          suscipit accusantium, laudantium labore illum ducimus,
                          eligendi non, explicabo autem porro. Rem rerum dolor
                          exercitationem molestiae obcaecati! Lorem ipsum dolor
                          sit amet consectetur adipisicing elit. Explicabo vero,
                          nesciunt voluptate, perferendis at incidunt illo
                          molestiae in dicta quaerat fugit. Cumque reiciendis,
                          aperiam laborum nam ipsam dolor alias modi!
                        </p>
                      </div>
                    </section>

                    <section className="w-[350px] my-3  bg-[black] rounded-[10px] text-[white]"></section>
                    <section className="w-[350px] my-3  bg-[black] rounded-[10px] text-[white]"></section>
                    <section className="w-[350px] my-3  bg-[black] rounded-[10px] text-[white]"></section>
                  </section>
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

              <section className="landing_section bg-[white] h-[100vh]">
                <section className="landing_section w-[100%] h-[calc(100vh-110px)] flex">
                  <section className=" w-[100%] h-[100%] text-start text-[black] px-5 flex justify-center flex-col mt-2">
                    <section className=" flex justify-between flex-wrap">
                      <section className=" w-[100%] my-[20px] p-3 py-[50px] bg-[black] rounded-[10px] text-[white]">
                        <div className="flex items-center mb-2">
                          <div className="icon_section w-[50px] h-[50px] me-2 rounded flex justify-center items-center bg-[#e02708]">
                            <FaPhone className=" rotate-[90deg]" />
                          </div>
                          <h1 className="landing_heading text-[50px] text-center font-[500] ms-3 text-[#e02708]">
                            Contact Us
                          </h1>
                        </div>

                        <div className="contact_inner w-[100%] flex justify-between">
                          <div className="w-[50%] text-start">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Libero ratione adipisci corrupti consequatur
                              suscipit accusantium, laudantium labore illum
                              ducimus, eligendi non, explicabo autem porro. Rem
                              rerum dolor exercitationem molestiae obcaecati!
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Explicabo vero, nesciunt voluptate,
                              perferendis at incidunt illo molestiae in dicta
                              quaerat fugit. Cumque reiciendis, aperiam laborum
                              nam ipsam dolor alias modi!
                            </p>

                            <p className="my-5 flex items-center">
                              <FaPhone className=" rotate-[90deg] me-2" />{" "}
                              <span>5665465465</span>
                            </p>

                            <p className="my-5 flex items-center">
                              <FaMessage className=" me-2" />{" "}
                              <span>jangdivershab23@gmail.com</span>
                            </p>

                            <p className="my-5 flex items-center">
                              <FaLocationPin className=" me-2" />{" "}
                              <span>istart nest jodhpur, rajasthan</span>
                            </p>
                          </div>

                          <div className="w-[50%] flex justify-center">
                            <form className="w-[90%] text-start">
                              <div className="w-[100%]">
                                <label>Name</label>
                                <input
                                  type="text"
                                  className="w-[100%] py-2 rounded-[10px] my-2"
                                />
                              </div>

                              <div className="w-[100%]">
                                <label>Email</label>
                                <input
                                  type="email"
                                  className="w-[100%] py-2 rounded-[10px] my-2"
                                />
                              </div>

                              <button className="my-5 w-[100%] rounded-[10px] py-3 bg-[#e02708]">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </section>
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
