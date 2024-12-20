import React, { useEffect, useState } from "react";
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
import axios from "axios";
export function AboutUs() {
  let [aboutbanner, setaboutbanner] = useState([]);
  let [imgurl, setimgurl] = useState("");
  let viewaboutbanner = () => {
    axios
      .get("https://api.hivexv.com/view-about-banner")
      .then((res) => {
        setaboutbanner(res.data.viewdata);
        setimgurl(res.data.imgurl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let [admincontent, setadmincontent] = useState([]);
  let viewaboutcontent = () => {
    axios
      .get("https://api.hivexv.com/view-about-content")
      .then((res) => {
        console.log(res.data);
        setadmincontent(res.data.viewdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let [ourmission, setourmission] = useState([]);
  let viewourmission = () => {
    axios
      .get("https://api.hivexv.com/view-about-ourmission")
      .then((res) => {
        setourmission(res.data.viewdata);
        setimgurl(res.data.imgurl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewaboutbanner();
    viewaboutcontent();
    viewourmission();
  }, []);
  return (
    <>
      <section className="main w-[100%] bg-[#292828b4]">
        <section className="">
          <section className="home_banner h-[100vh] bg-[#00000065] pt-3">
            <Header />

            {aboutbanner.map((items, index) => {
              return (
                <>
                  <section className="landing_section w-[100%] h-[calc(100vh-110px)] flex mt-2">
                    <section className="w-[50%] h-[100%] flex justify-center items-center">
                      <img src={imgurl + `${items.AboutBanner}`} alt="" />
                    </section>

                    <section className=" w-[50%] h-[100%] text-end text-white px-5 flex justify-center flex-col mt-2">
                      <h1 className="landing_heading text-[50px] font-[500] my-5">
                        About Us
                      </h1>

                      <h3 className="landing_heading text-[50px] font-[500] my-5">
                        {items.AboutHeading}
                      </h3>

                      <p className="text-[18px] my-3">{items.AboutParagraph}</p>

                      <div className="my-3">
                        <Link to={"/login"}>
                          <button className="landing_btn w-[300px] h-[50px] bg-[#e02708] rounded-[10px]">
                            Become an investor
                          </button>
                        </Link>
                        <Link to={"/login"}>
                          <button className="landing_btn w-[300px] h-[50px] bg-[white] text-black rounded-[10px] ms-2">
                            Submit Pitch Deck
                          </button>
                        </Link>
                      </div>
                    </section>
                  </section>
                </>
              );
            })}

            <section className="landing_section bg-[white] py-[40px]">
              <section className="landing_section w-[90%] m-auto h-auto flex justify-center items-center">
                <section className=" w-[90%] text-start text-[black] px-5 flex justify-center flex-col mt-2">
                  <div className="flex justify-center">
                    <h1 className="landing_heading w-[400px] text-[50px] font-[500] my-5 text-[white] bg-[#e02708] rounded-[10px] text-center">
                      About Us
                    </h1>
                  </div>

                  {admincontent.map((items, index) => {
                    return (
                      <>
                        <p className="text-[18px] text-[black] my-3">
                          {items.About_Content}
                        </p>
                      </>
                    );
                  })}
                </section>
              </section>
            </section>

            <section className="landing_section bg-[white] py-[40px]">
              {ourmission.map((items, index) => {
                return (
                  <>
                    <section className="landing_section w-[90%] m-auto h-auto flex justify-center items-center">
                      <section className="w-[50%] flex justify-center items-center">
                        <img src={imgurl + `${items.WhyChooseBanner}`} alt="" />
                      </section>
                      <section className=" w-[50%] text-start text-black px-5 flex justify-center flex-col mt-2">
                        <div className="flex justify-center">
                          <h1 className="landing_heading w-[400px] text-[50px] text-[white] font-[500] my-5 bg-[#e02708] rounded-[10px] text-center">
                            Our Mission
                          </h1>
                        </div>

                        <p className="text-[18px] my-3">
                          {items.WhyChooseParagraph}
                        </p>
                      </section>
                    </section>
                  </>
                );
              })}
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
              <section className="landing_section bg-[white] w-[100%] flex">
                <section className=" w-[100%] h-[100%] text-center px-5 flex justify-center flex-col mt-2">
                  <h1 className="landing_heading w-[500px] rounded-[10px] m-auto text-[50px] font-[500] my-5 text-[white] bg-[#e02708]">
                    Meet With Founder
                  </h1>

                  <div className="w-[100%]">
                    <div className="meet_Founder w-[100%] py-5 flex ">
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
