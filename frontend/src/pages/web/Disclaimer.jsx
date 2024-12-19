import React from "react";
import { Footer } from "../../common/Footer";
import { Header } from "../../common/Header";
import right_banner from "../../images/Hive XV (1080 x 1350 px) (1).png";
import { Link } from "react-router-dom";
export function Disclaimer() {
  return (
    <>
      <section className="main w-[100%]">
        <section className="">
          <section className="home_banner_2 h-[100vh] pt-3">
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

            <section className="landing_section text-black w-[100%] flex mt-2">
              <section className=" w-[100%] text-start px-5 flex justify-center flex-col mt-2">
                <h2 className="landing_heading w-[400px] m-auto rounded-[10px] text-white text-center bg-[#e02708] text-[50px] font-[500] my-2">
                  Disclaimer
                </h2>
                <br />
                The information provided on Hivexv.com is for general
                informational purposes only. Hivexv Private Limited ("Hivexv,"
                "we," "our," "us") strives to ensure the accuracy and
                reliability of the information on this Platform. However, we
                make no representations or warranties of any kind, express or
                implied, about the completeness, accuracy, reliability,
                suitability, or availability of the content, products, services,
                or related graphics contained on the Platform for any purpose.
                <br />
                <br />
                No Professional Advice
                <br />
                The content on this Platform does not constitute professional,
                financial, legal, or investment advice. Visitors are encouraged
                to consult with qualified professionals before making decisions
                based on the information provided. Your use of the content or
                reliance on any information provided is solely at your own risk.
                <br />
                <br />
                Investment Risks
                <br />
                Hivexv provides tools, resources, and services for startups and
                investors. However, any investment-related decisions you make
                based on information from this Platform carry inherent risks,
                including potential financial loss. Hivexv does not guarantee
                any specific outcomes or returns.
                <br />
                <br />
                External Links Disclaimer
                <br />
                The Platform may contain links to third-party websites for your
                convenience. These external links are provided for additional
                information and do not signify our endorsement. Hivexv has no
                control over the content or availability of these websites and
                assumes no responsibility for their practices or policies.
                <br />
                <br />
                Limitation of Liability
                <br />
                To the fullest extent permitted by law, Hivexv shall not be
                liable for any loss, damage, or inconvenience caused by reliance
                on information obtained through this Platform or linked
                third-party services. This includes, but is not limited to,
                direct, indirect, consequential, or incidental damages.
                <br />
                <br />
                Platform Availability
                <br />
                We endeavor to keep the Platform accessible and operational.
                However, Hivexv does not guarantee uninterrupted access or
                error-free functionality. Temporary unavailability due to
                technical issues or maintenance may occur, and we accept no
                responsibility for such disruptions.
                <br />
                <br />
                Changes to the Disclaimer
                <br />
                We reserve the right to modify this Disclaimer at any time
                without prior notice. By continuing to use the Platform, you
                agree to the terms of the updated Disclaimer. It is your
                responsibility to review this page periodically for any changes.
                <br />
                <br />
                <p>
                  {" "}
                  If you have any questions regarding this Disclaimer, please
                  contact us at{" "}
                  <Link className="text-[blue] font-[600]" to={"/contact-us"}>
                    contact form
                  </Link>
                  .
                </p>
                <br />
                <br />
                <br />
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
