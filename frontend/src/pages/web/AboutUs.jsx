import React, { useEffect, useState } from "react";
import { Header } from "../../common/Header";
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
        // setimgurl(res.data.imgurl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let [ourvision, setourvision] = useState([]);
  let viewourvision = () => {
    axios
      .get("https://api.hivexv.com/view-about-ourvision")
      .then((res) => {
        setourvision(res.data.viewdata);
        // setimgurl(res.data.imgurl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let [meetfounder, setmeetfounder] = useState([]);
  let viewmeetfounder = () => {
    axios
      .get("https://api.hivexv.com/view-about-meetfounder")
      .then((res) => {
        setmeetfounder(res.data.viewdata);
        // setimgurl(res.data.imgurl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewaboutbanner();
    viewaboutcontent();
    viewourmission();
    viewourvision();
    viewmeetfounder();
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
              {ourvision.map((items, index) => {
                return (
                  <>
                    <section className="landing_section w-[90%] m-auto h-auto flex justify-center items-center">
                      <section className=" w-[50%] text-start text-black px-5 flex justify-center flex-col mt-2">
                        <div className="flex justify-center">
                          <h1 className="landing_heading w-[400px] text-[50px] text-[white] font-[500] my-5 bg-[#e02708] rounded-[10px] text-center">
                            Our Vision
                          </h1>
                        </div>

                        <p className="text-[18px] my-3">
                          {items.OurVisionParagraph}
                        </p>
                      </section>
                      <section className="w-[50%] flex justify-center items-center">
                        <img src={imgurl + items.OurVisionBanner} alt="" />
                      </section>
                    </section>
                  </>
                );
              })}
            </section>

            <section className="landing_section ">
              <section className="landing_section bg-[white] w-[100%] flex">
                {meetfounder.map((items, index) => {
                  console.log(items);
                  return (
                    <>
                      <section className=" w-[100%] h-[100%] text-center px-5 flex justify-center flex-col mt-2">
                        <h1 className="landing_heading w-[500px] rounded-[10px] m-auto text-[50px] font-[500] my-5 text-[white] bg-[#e02708]">
                          Meet With Founder
                        </h1>

                        <div className="w-[100%]">
                          <div className="meet_Founder w-[100%] py-5 flex ">
                            <div className="w-[50%] flex justify-center items-center flex-col">
                              <img
                                src={imgurl + items.MeetFounderIcon}
                                alt=""
                                className="w-[200px]"
                              />

                              <h4 className="text-[25px] font-[600] mt-[5px]">
                                {items.MeetFounderName}
                              </h4>
                              <p className="text-[20px] mt-[5px]">
                                {items.MeetFounderDesignation}
                              </p>

                              {/* <FaLinkedin className="text-[30px] mt-[10px]" /> */}
                            </div>

                            <div className="w-[46%] text-justify flex justify-center items-center flex-col">
                              <p className="my-2">
                                {items.MeetFounderParagraph}
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>
                    </>
                  );
                })}
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
