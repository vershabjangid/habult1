import React from "react";
import { Header } from "../../common/Header";
import right_banner from "../../images/download.svg";
import { Footer } from "../../common/Footer";
import { ContactUs1 } from "../../common/ContactUs";
import { GetInTouch } from "../../common/GetInTouch";
import { Link } from "react-router-dom";
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

            <section className="landing_section bg-[white]">
              <section className="landing_section w-[100%] flex">
                <section className=" w-[100%] h-[100%] text-start text-[black] px-5 flex justify-center flex-col mt-2">
                  <ContactUs1 />
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
