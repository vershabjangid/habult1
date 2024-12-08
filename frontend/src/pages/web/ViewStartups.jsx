import React, { useEffect, useState } from "react";
import { Footer } from "../../common/Footer";
import { Header } from "../../common/Header";
import right_banner from "../../images/Hive XV (1080 x 1350 px) (1).png";
import minimalist from "../../images/in-liquid-object-2.svg";
import axios from "axios";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export function ViewStartups() {
  let [getstartups, setgetstartups] = useState([]);
  let [gettrendingstartups, setgettrendingstartups] = useState([]);
  console.log(gettrendingstartups);
  let [imgurl, setimgurl] = useState("");

  let viewstartups = () => {
    axios
      .get("https://api.hivexv.com/view-allstartups", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("logintoken")),
        },
      })
      .then((res) => {
        setgetstartups(
          res.data.viewdata.filter(
            (items) => items.Status === "Accept" || items.Is_Trending === true
          )
        );
        setgettrendingstartups(
          res.data.viewdata.filter((items) => items.Is_Trending === true)
        );
        setimgurl(res.data.imgurl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewstartups();
  }, []);

  let naviget = useNavigate();
  let viewstartupprofile = (value) => {
    naviget("/startup-profile", { state: [value,imgurl] });
  };
  return (
    <>
      <section className="main w-[100%] bg-[#292828b4]">
        <section className="">
          <section className="home_banner_2 h-[100vh] bg-[#00000064] pt-3">
            <Header />

            <section className="landing_section bg-[#0000008b] w-[100%] h-[calc(100vh-110px)] flex mt-2">
              <section className=" w-[50%] h-[100%] text-start text-white px-5 flex justify-center flex-col mt-2">
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
              </section>
              <section className="w-[50%] h-[100%] flex justify-center items-center">
                <img src={right_banner} alt="" className="w-[50%] logo" />
              </section>
            </section>

            <section className="landing_section bg-[white] w-[100%] flex">
              <section className=" w-[100%] h-[100%] text-start text-black px-5 flex justify-center flex-col mt-2">
                {gettrendingstartups.length === 0 ? null : (
                  <>
                    <h1 className="landing_heading bg-[#e02708] text-white w-[500px] rounded-[10px] text-center text-[50px] font-[500] my-2">
                      Trending Startups
                    </h1>

                    <section className="my-3 border-[1px] border-[black] flex justify-between items-center flex-wrap">
                      {gettrendingstartups.map((items, index) => {
                        return (
                          <>
                             <div
                          className="my-3 border-[1px] border-[black] bg-[#3d3d3d] rounded-[10px] w-[450px]"
                          onClick={() => viewstartupprofile(items)}
                        >
                          <div className="w-[100%] overflow-hidden relative">
                            <div className=" absolute right-[-75px] top-[-75px] z-10">
                              <img src={minimalist} alt="" />
                            </div>

                            <div className="m-3">
                              <div className="w-[140px] h-[150px] rounded-[10px]">
                                <img
                                  src={imgurl + items.Company_Logo}
                                  alt=""
                                  className="w-[100%]"
                                />
                              </div>
                            </div>

                            <div className="m-3 mt-[60px] flex justify-between items-center">
                              <h2 className="text-[white] text-[35px] font-[700]">
                                {items.Company_Name}
                              </h2>

                              {/* <div className="text-[22px] text-[white] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
                          <FaShare />
                        </div> */}
                            </div>

                            <div className=" mx-3 mt-[2px]">
                              <p className="text-[white] text-[18px]">
                                {items.Company_Description}
                              </p>
                            </div>

                            <div className="px-3 mt-[30px] flex justify-between my-5">
                              <div className="text-[white] w-[49%] py-2 rounded-[10px] border-[1px] text-[20px]">
                                <p className="text-center">Equity</p>
                                <p className="text-center mt-2">
                                  {items.Equity}%
                                </p>
                              </div>

                              <div className="text-[white] w-[49%] py-2 rounded-[10px] border-[1px] text-[20px]">
                                <p className="text-center">Funding Ask</p>
                                <p className="text-center mt-2 flex items-center justify-center">
                                  <FaRupeeSign /> {items.Funding_Ask}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                          </>
                        );
                      })}

                      <div className="my-3  w-[450px]"></div>
                      <div className="my-3  w-[450px]"></div>
                      <div className="my-3  w-[450px]"></div>
                    </section>
                  </>
                )}
              </section>
            </section>

            <section className="landing_section bg-[white] w-[100%] flex">
              <section className=" w-[100%] h-[100%] text-start text-black px-5 flex justify-center flex-col mt-2">
                <h1 className="landing_heading bg-[#e02708] text-white w-[500px] rounded-[10px] text-center text-[50px] font-[500] my-2">
                  All Startups
                </h1>

                <section className="my-3 border-[1px] border-[black] flex justify-between items-center flex-wrap">
                  {getstartups.map((items, index) => {
                    return (
                      <>
                        <div
                          className="my-3 border-[1px] border-[black] bg-[#3d3d3d] rounded-[10px] w-[450px]"
                          onClick={() => viewstartupprofile(items)}
                        >
                          <div className="w-[100%] overflow-hidden relative">
                            <div className=" absolute right-[-75px] top-[-75px] z-10">
                              <img src={minimalist} alt="" />
                            </div>

                            <div className="m-3">
                              <div className="w-[140px] h-[150px] rounded-[10px]">
                                <img
                                  src={imgurl + items.Company_Logo}
                                  alt=""
                                  className="w-[100%]"
                                />
                              </div>
                            </div>

                            <div className="m-3 mt-[60px] flex justify-between items-center">
                              <h2 className="text-[white] text-[35px] font-[700]">
                                {items.Company_Name}
                              </h2>

                              {/* <div className="text-[22px] text-[white] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
                          <FaShare />
                        </div> */}
                            </div>

                            <div className=" mx-3 mt-[2px]">
                              <p className="text-[white] text-[18px]">
                                {items.Company_Description}
                              </p>
                            </div>

                            <div className="px-3 mt-[30px] flex justify-between my-5">
                              <div className="text-[white] w-[49%] py-2 rounded-[10px] border-[1px] text-[20px]">
                                <p className="text-center">Equity</p>
                                <p className="text-center mt-2">
                                  {items.Equity}%
                                </p>
                              </div>

                              <div className="text-[white] w-[49%] py-2 rounded-[10px] border-[1px] text-[20px]">
                                <p className="text-center">Funding Ask</p>
                                <p className="text-center mt-2 flex items-center justify-center">
                                  <FaRupeeSign /> {items.Funding_Ask}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}

                  <div className="my-3 w-[450px]"></div>
                  <div className="my-3 w-[450px]"></div>
                  <div className="my-3 w-[450px]"></div>
                </section>
              </section>
            </section>

            <section className="landing_section bg-[white]">
              <Footer />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
