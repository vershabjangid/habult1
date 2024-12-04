import React from 'react'
import { Header } from '../../common/Header'
import right_banner from "../../images/download.svg";
import { FaPhone } from 'react-icons/fa';
import { FaLocationPin, FaMessage } from 'react-icons/fa6';
import { Footer } from '../../common/Footer';
export function ContactUs() {
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
                  Contact Us
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

            <section className="landing_section bg-[white]">
                <section className="landing_section w-[100%] flex">
                  <section className=" w-[100%] h-[100%] text-start text-[black] px-5 flex justify-center flex-col mt-2">
                    <section className=" flex justify-between flex-wrap">
                      <section className=" w-[100%] my-[20px] p-3 py-[50px] bg-[black] rounded-[10px] text-[white]">
                        <div className="ms-[65px] flex justify-center items-center mb-2">
                          <div className="icon_section mb-10 w-[400px] me-2 rounded-[10px] bg-[#e02708]">
                            <h1 className="landing_heading text-[50px] text-center font-[500] ms-3 text-[white]">
                              Contact Us
                            </h1>
                          </div>
                        </div>

                        <div className="contact_inner w-[100%] flex justify-evenly">
                          <div className="w-[47%] text-justify">
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

                          <div className="w-[43%] flex justify-center">
                            <form className="w-[100%] text-start">
                              <div className="w-[100%]">
                                <label>Name</label>
                                <input
                                  type="text"
                                  className="w-[100%] py-2 rounded-[10px] px-1 text-[black] my-2"
                                />
                              </div>

                              <div className="w-[100%]">
                                <label>Email</label>
                                <input
                                  type="email"
                                  className="w-[100%] py-2 px-1 rounded-[10px] text-[black] my-2"
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
  )
}
