import React from "react";
import { Footer } from "../../common/Footer";
import { Header } from "../../common/Header";
import right_banner from "../../images/Hive XV (1080 x 1350 px) (1).png";
import minimalist from "../../images/in-liquid-object-2.svg";
export function ViewStartups() {
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
                <h1 className="landing_heading bg-[#e02708] text-white w-[500px] rounded-[10px] text-center text-[50px] font-[500] my-2">
                  Trending Startups
                </h1>

                <section className="my-3 border-[1px] border-[black] flex justify-between items-center flex-wrap">
                  <div className="my-3 border-[1px] border-[black] bg-[#3d3d3d] rounded-[10px] w-[450px]">
                    <div className="w-[100%] overflow-hidden relative">
                      <div className=" absolute right-[-75px] top-[-75px] z-10">
                        <img src={minimalist} alt="" />
                      </div>

                      <div className="m-3">
                        <div className="w-[150px] h-[150px] rounded-[10px]">
                          <img src={right_banner} alt="" />
                        </div>
                      </div>

                      <div className="m-3 mt-[60px] flex justify-between items-center">
                        <h2 className="text-[white] text-[35px] font-[700]">
                          FIRM NAME
                        </h2>

                        {/* <div className="text-[22px] text-[white] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
                          <FaShare />
                        </div> */}
                      </div>

                      <div className=" mx-3 mt-[2px]">
                        <p className="text-[white] text-[18px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aperiam sed at obcaecati, aliquid corporis
                          quidem. Nam eos sint asperiores tenetur rerum et. Ipsa
                          neque eius deleniti impedit ipsum culpa cumque!
                        </p>
                      </div>

                      <div className="px-3 mt-[30px] flex justify-between my-5">
                        <div className="text-[white] w-[49%] py-2 rounded-[10px] border-[1px] text-[20px]">
                          <p className="text-center">Equity</p>
                          <p className="text-center mt-2">100%</p>
                        </div>

                        <div className="text-[white] w-[49%] py-2 rounded-[10px] border-[1px] text-[20px]">
                          <p className="text-center">Funding Ask</p>
                          <p className="text-center mt-2">100000</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-3 border-[1px] border-[black] bg-[#3d3d3d] rounded-[10px] w-[450px]">
                    <div className="w-[100%] overflow-hidden relative">
                      <div className=" absolute right-[-75px] top-[-75px] z-10">
                        <img src={minimalist} alt="" />
                      </div>

                      <div className="m-3">
                        <div className="w-[150px] h-[150px] rounded-[10px]">
                          <img src={right_banner} alt="" />
                        </div>
                      </div>

                      <div className="m-3 mt-[60px] flex justify-between items-center">
                        <h2 className="text-[white] text-[35px] font-[700]">
                          FIRM NAME
                        </h2>

                        {/* <div className="text-[22px] text-[white] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
                          <FaShare />
                        </div> */}
                      </div>

                      <div className=" mx-3 mt-[2px]">
                        <p className="text-[white] text-[18px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aperiam sed at obcaecati, aliquid corporis
                          quidem. Nam eos sint asperiores tenetur rerum et. Ipsa
                          neque eius deleniti impedit ipsum culpa cumque!
                        </p>
                      </div>

                      <div className="px-3 mt-[30px] flex justify-between my-5">
                        <div className="text-[white] w-[49%] py-2 rounded-[10px] border-[1px] text-[20px]">
                          <p className="text-center">Equity</p>
                          <p className="text-center mt-2">100%</p>
                        </div>

                        <div className="text-[white] w-[49%] py-2 rounded-[10px] border-[1px] text-[20px]">
                          <p className="text-center">Funding Ask</p>
                          <p className="text-center mt-2">100000</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-3 border-[1px] border-[black] bg-[#3d3d3d] rounded-[10px] w-[450px]">
                    <div className="w-[100%] overflow-hidden relative">
                      <div className=" absolute right-[-75px] top-[-75px] z-10">
                        <img src={minimalist} alt="" />
                      </div>

                      <div className="m-3">
                        <div className="w-[150px] h-[150px] rounded-[10px]">
                          <img src={right_banner} alt="" />
                        </div>
                      </div>

                      <div className="m-3 mt-[60px] flex justify-between items-center">
                        <h2 className="text-[white] text-[35px] font-[700]">
                          FIRM NAME
                        </h2>

                        {/* <div className="text-[22px] text-[white] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
                          <FaShare />
                        </div> */}
                      </div>

                      <div className=" mx-3 mt-[2px]">
                        <p className="text-[white] text-[18px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aperiam sed at obcaecati, aliquid corporis
                          quidem. Nam eos sint asperiores tenetur rerum et. Ipsa
                          neque eius deleniti impedit ipsum culpa cumque!
                        </p>
                      </div>

                      <div className="px-3 mt-[30px] flex justify-between my-5">
                        <div className="text-[white] w-[49%] py-2 rounded-[10px] border-[1px] text-[20px]">
                          <p className="text-center">Equity</p>
                          <p className="text-center mt-2">100%</p>
                        </div>

                        <div className="text-[white] w-[49%] py-2 rounded-[10px] border-[1px] text-[20px]">
                          <p className="text-center">Funding Ask</p>
                          <p className="text-center mt-2">100000</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-3 border-[1px] border-[black] w-[450px]"></div>
                  <div className="my-3 border-[1px] border-[black] w-[450px]"></div>
                  <div className="my-3 border-[1px] border-[black] w-[450px]"></div>
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
