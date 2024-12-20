import React, { useEffect, useState } from "react";
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
import axios from "axios";
export function Landing() {
  let [homebanner, sethomebanner] = useState([]);
  let [imgurl, setimgurl] = useState("");
  let viewbanner = () => {
    axios
      .get("https://api.hivexv.com/view-home-banner", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        sethomebanner(res.data.viewdata);
        setimgurl(res.data.imgurl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let [homeabout, sethomeabout] = useState([]);
  let viewhomeabout = () => {
    axios
      .get("https://api.hivexv.com/view-admin-home-about", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        sethomeabout(res.data.viewdata);
        setimgurl(res.data.imgurl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let [homewhychoose, sethomewhychoose] = useState([]);
  let viewhomewhychoose = () => {
    axios
      .get("https://api.hivexv.com/view-admin-home-whychoose", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        sethomewhychoose(res.data.viewdata);
        setimgurl(res.data.imgurl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewbanner();
    viewhomeabout();
    viewhomewhychoose();
  }, []);
  return (
    <>
      <section className="main w-[100%] bg-[#292828b4]">
        <section className="">
          <section className="home_banner h-[100vh] bg-[#00000064] pt-3">
            <Header />

            {homebanner.map((items, index) => {
              return (
                <>
                  <section className="landing_section w-[100%] h-[calc(100vh-110px)] flex mt-2">
                    <section className="w-[50%] h-[100%] flex justify-center items-center">
                      <img
                        src={imgurl + `${items.HomeBanner}`}
                        alt="no image found"
                        className="w-[100%]"
                      />
                    </section>

                    <section className=" w-[50%] h-[100%] text-end text-white px-5 flex justify-center flex-col mt-2">
                      <h1 className="landing_heading text-[50px] font-[500] my-2">
                        {items.HomeHeading}
                      </h1>
                      <h2 className="landing_subheading text-[30px] font-[500] my-2">
                        {items.HomeSubHeading}
                      </h2>
                      <p className="text-[18px] my-3">{items.HomeParagraph}</p>

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
                </>
              );
            })}

            <section className="landing_section bg-[white] py-[40px]">
              {homeabout.map((items, index) => {
                return (
                  <>
                    <section className="landing_section_about w-[90%] m-auto h-auto flex justify-center items-center">
                      <section className=" w-[50%] text-start text-black px-5 flex justify-center flex-col mt-2">
                        <div className="flex justify-center">
                          <h1 className="landing_heading w-[400px] text-[50px] font-[500] my-5 bg-[#e02708] text-[white] rounded-[10px] text-center">
                            About Us
                          </h1>
                        </div>

                        <h2 className=" text-[35px] leading-[50px] font-[500] my-5  rounded-[10px]">
                          {items.HomeAboutHeading}
                        </h2>

                        <p className="text-[18px] my-3">
                          {items.HomeAboutParagraph}
                        </p>
                      </section>

                      <section className="w-[50%] flex justify-center items-center">
                        <img src={imgurl + `${items.HomeAboutBanner}`} alt="" />
                      </section>
                    </section>
                  </>
                );
              })}
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
                    {homewhychoose.map((items, index) => {
                      if (items.length === 0) {
                        return null;
                      } else {
                        return (
                          <>
                            <section className="why_choose_cards w-[48%] my-3 p-3 rounded-[10px] text-[black] flex justify-between">
                              <div className="icon_section w-[100px] h-[100px] text-[25px] me-2 my-2 rounded-[50%] flex justify-center items-center">
                                <img
                                  src={
                                    imgurl + `${items.HomeWhyChooseAboutBanner}`
                                  }
                                  alt=""
                                />
                              </div>

                              <div className=" mb-2 w-[calc(100%-110px)]">
                                <div className="">
                                  <p className="text-[30px] font-[600]">
                                    {items.HomeWhyChooseHeading}
                                  </p>
                                </div>
                                <div className=" text-justify">
                                  <p>{items.HomeWhyChooseAboutParagraph}</p>
                                  {/* <p className="my-3 underline">View More</p> */}
                                </div>
                              </div>
                            </section>
                          </>
                        );
                      }
                    })}
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
