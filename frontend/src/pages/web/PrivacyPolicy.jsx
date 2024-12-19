import React from "react";
import { Header } from "../../common/Header";
import { Footer } from "../../common/Footer";
import right_banner from "../../images/Hive XV (1080 x 1350 px) (1).png";

export function PrivacyPolicy() {
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
                <h2 className="landing_heading w-[500px] m-auto rounded-[10px] text-white text-center bg-[#e02708] text-[50px] font-[500] my-2">
                  Privacy Policy
                </h2>
                <br />
                This Privacy Policy ("Policy") outlines how Hivexv Private
                Limited ("Hivexv," "we," "our," "us") collects, uses, and
                safeguards your personal data when you interact with our website
                and services (collectively referred to as the "Platform").
                <br />
                <br />
                We reserve the right to update this Policy periodically. We
                encourage you to review this page regularly to stay informed
                about how we protect your information.
                <br />
                <br />
                Data We Collect
                <br />
                When you access or use the Platform, we may collect the
                following data:
                <br />
                <br />
                Your IP address.
                <br />
                Contact information, including your name, email address, and
                phone number.
                <br />
                Preferences, interests, and other personal details you
                voluntarily provide.
                <br />
                Data related to your behavior on our Platform, such as pages
                visited and time spent on them.
                <br />
                <br />
                Why We Collect Your Data
                <br />
                The data we collect serves the following purposes:
                <br />
                <br />
                To understand and meet your needs better.
                <br />
                To enhance the quality and relevance of our services.
                <br />
                To send you updates, newsletters, and promotional content
                tailored to your interests.
                <br />
                To gather insights through surveys or market research.
                <br />
                To customize your experience based on your preferences and
                activity.
                <br />
                <br />
                Protecting Your Data
                <br />
                We take data protection seriously. Hivexv employs advanced
                technologies and security protocols to safeguard your personal
                data from unauthorized access, theft, and misuse.
                <br />
                <br />
                Cookie Policy
                <br />
                Our Platform uses cookies to improve your browsing experience.
                By accepting cookies, you agree to the collection of data
                regarding your online activity (e.g., pages visited, time
                spent). This helps us tailor our Platform to better serve you.
                <br />
                <br />
                Cookies do not grant us access to your computer or personal
                information beyond the data you voluntarily share.
                <br />
                You can manage or disable cookies in your browser settings.
                [Provide links for cookie management in popular browsers].
                <br />
                <br />
                Updates to This Privacy Policy
                <br />
                We may revise this Policy at any time. Any changes will become
                effective immediately upon being published on the Platform. Your
                continued use of the Platform signifies your agreement to the
                updated Policy.
                <br />
                <br />
                Third-Party Links
                <br />
                Our Platform may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                external sites. We encourage you to read the privacy policies of
                any third-party sites you visit.
                <br />
                <br />
                Payment Details
                <br />
                Payments on our Platform are processed securely through trusted
                third-party providers, such as Razorpay. Payment details,
                including credit/debit card information, are handled directly by
                these providers. Please refer to their privacy policies for
                further details (Razorpay's Privacy Policy). Hivexv does not
                store or have access to your payment information.
                <br />
                <br />
                Restricting the Use of Your Data
                <br />
                We respect your privacy. Your personal data will not be sold,
                leased, or shared with third parties unless required to comply
                with legal obligations. Your data will only be used to provide
                services or send you promotional material, subject to your
                consent.
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
