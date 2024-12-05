import React from "react";
import { Header } from "../../common/Header";
import right_banner from "../../images/a-black-background-with-the-text-about-us-written--58EEDF77TFuu6SSpNM1RMA-3NIl9TxiQOiqKYegQxu4ww (1).png";
import ourmission from "../../images/an-illustration-of-a-lightbulb-with-the-word-missi-k1wfpXxwSfyTxmkd4GBK4Q-7j6IHlP4QOOXs3RnxhEQXQ-removebg-preview (1).png";
import ourvision from "../../images/an-illustration-of-a-light-bulb-with-the-word-visi-qC1h6cYlSY-mQUFbI_0xuQ-Aj5tVA1xQXSaJPqJNc6bZA (1).png";
import hiring from "../../images/a-minimalistic-illustration-of-a-large-orange-rect-o8DWmbQrRH2K014EHAZuLg-nmofR7YrROStZTK9FymyDw-removebg-preview.png";
import { FaLinkedin } from "react-icons/fa";
import { Footer } from "../../common/Footer";
import { IoPerson } from "react-icons/io5";
import { GetInTouch } from "../../common/GetInTouch";
import { Link } from "react-router-dom";
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
                  Hivexv.com is a dedicated platform that connects innovative
                  startups with forward-thinking investors. We aim to create an
                  ecosystem where bold ideas meet the resources they need to
                  flourish and investors discover opportunities that align with
                  their vision. By fostering collaboration, we pave the way for
                  growth, success, and mutual achievement.
                </p>

                <div className="my-3">
                  <Link to={"/login"}>
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

            <section className="landing_section bg-[white ] py-[40px]">
              <section className="landing_section w-[90%] m-auto h-auto flex justify-center items-center">
                <section className=" w-[90%] text-start text-[black] px-5 flex justify-center flex-col mt-2">
                  <div className="flex justify-center">
                    <h1 className="landing_heading w-[400px] text-[50px] font-[500] my-5 text-[white] bg-[#e02708] rounded-[10px] text-center">
                      About Us
                    </h1>
                  </div>

                  <p className="text-[18px] my-3">
                    At Hivexv.com, we’re transforming the way startups and
                    investors connect. Our platform serves as a bridge between
                    innovative entrepreneurs and forward-thinking investors,
                    creating opportunities for growth, collaboration, and
                    success. We understand that building a startup requires more
                    than just a great idea – it requires the right partners and
                    resources to bring that vision to life. That’s where we come
                    in.
                  </p>

                  <p className="text-[18px] my-3">
                    At Hivexv.com, we’re transforming the way startups and
                    investors connect. Our platform serves as a bridge between
                    innovative entrepreneurs and forward-thinking investors,
                    creating opportunities for growth, collaboration, and
                    success. We understand that building a startup requires more
                    than just a great idea – it requires the right partners and
                    resources to bring that vision to life. That’s where we come
                    in.
                  </p>

                  <p className="text-[18px] my-3">
                    For investors, we offer a curated selection of
                    high-potential startups that match their investment
                    preferences. Our platform allows investors to explore a wide
                    range of business opportunities, ensuring they can find the
                    ventures that align with their goals. With a simple and
                    secure platform, investors can easily discover startups,
                    connect with founders, and evaluate investment opportunities
                    in a streamlined and efficient way.
                  </p>

                  <p className="text-[18px] my-3">
                    At Hivexv.com, we prioritize transparency, trust, and
                    collaboration. We understand that successful partnerships
                    are built on open communication and shared objectives.
                    That’s why we’ve created an environment where both startups
                    and investors can engage in meaningful conversations,
                    clarify expectations, and work together to create mutual
                    value. Our goal is to make the process of connecting with
                    investors or finding the right startup opportunity simple,
                    transparent, and effective.
                  </p>

                  <p className="text-[18px] my-3">
                    What makes Hivexv.com unique is the personalized approach we
                    bring to both startups and investors. We offer more than
                    just a marketplace – we provide a space where both sides can
                    thrive through thoughtful connections and lasting
                    relationships. Startups benefit from investor exposure,
                    while investors have access to a carefully selected pool of
                    innovative businesses, giving them the best opportunities to
                    generate returns and support groundbreaking ideas.
                  </p>

                  <p className="text-[18px] my-3">
                    Our platform is built with ease of use in mind, offering
                    startups the ability to create detailed profiles, pitch
                    their ideas, and showcase their potential. Investors, on the
                    other hand, can filter opportunities based on their specific
                    criteria and find startups that align with their investment
                    strategies.
                  </p>

                  <p className="text-[18px] my-3">
                    Hivexv.com is not just a platform, but a community where the
                    entrepreneurial spirit meets investment expertise. Whether
                    you’re launching your first startup or seeking to invest in
                    the next big thing, Hivexv.com is the place where your
                    journey begins
                  </p>
                </section>
              </section>
            </section>

            <section className="landing_section bg-[white] py-[40px]">
              <section className="landing_section w-[90%] m-auto h-auto flex justify-center items-center">
                <section className="w-[50%] flex justify-center items-center">
                  <img src={ourmission} alt="" />
                </section>
                <section className=" w-[50%] text-start text-black px-5 flex justify-center flex-col mt-2">
                  <div className="flex justify-center">
                    <h1 className="landing_heading w-[400px] text-[50px] text-[white] font-[500] my-5 bg-[#e02708] rounded-[10px] text-center">
                      Our Mission
                    </h1>
                  </div>

                  <p className="text-[18px] my-3">
                    At Hivexv.com, our mission is to connect startups with the
                    right investors, enabling innovation to thrive. We aim to
                    provide a seamless platform where entrepreneurs can access
                    the funding and support they need to grow, while investors
                    can discover high-potential opportunities that align with
                    their goals. By fostering meaningful connections and
                    transparent collaborations, we empower both startups and
                    investors to succeed and create lasting impact.
                  </p>
                </section>
              </section>
            </section>

            <section className="landing_section bg-[white] py-[40px]">
              <section className="landing_section w-[90%] m-auto h-auto flex justify-center items-center">
                <section className=" w-[50%] text-start text-black px-5 flex justify-center flex-col mt-2">
                  <div className="flex justify-center">
                    <h1 className="landing_heading w-[400px] text-[50px] text-[white] font-[500] my-5 bg-[#e02708] rounded-[10px] text-center">
                      Our Vision
                    </h1>
                  </div>

                  <p className="text-[18px] my-3">
                    At Hivexv.com, we envision a world where startups and
                    investors collaborate effortlessly to create impactful
                    ventures. Our goal is to build a platform that connects
                    innovative entrepreneurs with visionary investors, fostering
                    a thriving ecosystem where both can grow and succeed
                    together. By bridging the gap between these two worlds, we
                    aim to empower startups with the resources they need to
                    scale and provide investors with curated opportunities that
                    align with their goals.
                  </p>

                  <p className="text-[18px] my-3">
                    We strive to create lasting relationships that drive
                    meaningful progress, shaping the future of industries and
                    transforming ideas into reality.
                  </p>
                </section>
                <section className="w-[50%] flex justify-center items-center">
                  <img src={ourvision} alt="" />
                </section>
              </section>
            </section>

            <section className="landing_section ">
              <section className="landing_section w-[100%] flex">
                <section className=" w-[100%] h-[100%] text-center px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading w-[500px] rounded-[10px] m-auto text-[50px] font-[500] my-5 text-[white] bg-[#e02708]">
                    Meet With Founder
                  </h1>

                  <div className="w-[100%]">
                    <div className="w-[100%] py-5 flex">
                      <div className="w-[50%] flex justify-center items-center flex-col">
                        <IoPerson className="text-[100px] mb-5 " />

                        <h4 className="text-[25px] font-[600] mt-[5px]">
                          Prakash Sharma
                        </h4>
                        <p className="text-[20px] mt-[5px]">
                          Founder & Chief Executive Officer
                        </p>

                        <FaLinkedin className="text-[30px] mt-[10px]" />
                      </div>

                      <div className="w-[46%] text-justify flex justify-center items-center flex-col">
                        <p className="my-2">
                          Prakash sharma, the visionary behind Hivexv.com, is a
                          passionate entrepreneur with a deep understanding of
                          both the startup ecosystem and the investment world.
                          With years of experience in fostering growth and
                          innovation, Prakash Sharma set out to create a
                          platform that bridges the gap between startups and
                          investors, empowering businesses to thrive and
                          investors to discover the next big opportunity.
                        </p>

                        <p className="my-2">
                          Driven by a mission to support entrepreneurs and bring
                          their ideas to life, Prakash Sharma saw the need for a
                          space that not only connects, but nurtures
                          relationships built on trust and transparency. Through
                          Hivexv.com, Prakash Sharma is dedicated to helping
                          startups gain the funding and mentorship they need
                          while providing investors with a curated selection of
                          high-potential ventures.
                        </p>

                        <p className="my-2">
                          Under Prakash Sharma's leadership, Hivexv.com is more
                          than just a platform—it's a thriving community where
                          innovation, growth, and collaboration come together to
                          shape the future.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </section>

            <section className="landing_section bg-[white] py-[40px]">
              <section className="landing_section w-[90%] m-auto h-auto flex justify-center items-center">
                <section className=" w-[50%] text-start text-black px-5 flex justify-center flex-col mt-2">
                  <div className="flex justify-center">
                    <h1 className="landing_heading w-[400px] text-[50px] text-[white] font-[500] my-5 bg-[#e02708] rounded-[10px] text-center">
                      We are hiring
                    </h1>
                  </div>

                  <p className="text-[18px] my-3">
                    At Hivexv.com, we’re always on the lookout for passionate,
                    driven individuals who are excited to make an impact in the
                    startup and investment world. If you're ready to be part of
                    a dynamic, innovative team that’s shaping the future of
                    entrepreneurship and investment, we want to hear from you!
                  </p>

                  <p className="text-[18px] my-3">
                    We offer opportunities for growth, learning, and making a
                    real difference in an exciting, fast-paced environment.
                    Whether you're a startup enthusiast, tech expert, or
                    business development professional, Hivexv.com is the place
                    for you to grow your career and contribute to a thriving
                    community.
                  </p>

                  <p className="text-[18px] my-3">
                    Join us in creating a platform that empowers startups and
                    investors to succeed. Explore our open positions and take
                    the next step in your career with us!
                  </p>
                </section>
                <section className="w-[50%] flex justify-center items-center">
                  <img src={hiring} alt="" />
                </section>
              </section>
            </section>

            <GetInTouch />
            <Footer />
          </section>
        </section>
      </section>
    </>
  );
}
