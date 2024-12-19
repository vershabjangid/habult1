import React from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../../common/Footer";
import { FaCloudDownloadAlt, FaRupeeSign } from "react-icons/fa";
import { Header } from "../../common/Header";
import right_banner from "../../images/Hive XV (1080 x 1350 px) (1).png";

export function ViewProfileStartups() {
  let location = useLocation();
  let data = location.state;

  console.log(data);
  return (
    <>
      <section className="main w-[100%] bg-[#e02708]">
        <section className="">
          <section className=" pt-3">
            <Header />

            <section className="landing_section w-[100%] flex justify-center my-[50px]">
              <div className="w-[95%] bg-[white] rounded-[10px]">
                <div className="w-[100%] flex items-center border-b-[1px]  border-[black] p-5">
                  <div className="flex items-center">
                    <div className=" w-[100px] h-[100px] rounded flex justify-center items-center shadow shadow-[]">
                      <img
                        src={data[1] + data[0].Company_Logo}
                        alt=""
                        className="w-[90px]"
                      />
                    </div>

                    <div className="ms-2">
                      <h1 className="font-[700] text-[25px]">
                        {data[0].Company_Name}
                      </h1>
                      <p className="">{data[0].Company_Description}</p>
                    </div>
                  </div>
                </div>

                <section className="w-[100%] flex items-center justify-between border-b-[1px]  border-[black] p-5">
                  <div className="w-[49%] flex items-center">
                    <div className=" w-[100%] h-[400px] p-4 rounded flex justify-center items-center shadow shadow-[]">
                      <iframe
                        title="video"
                        src={data[0].Video_Link}
                        className="w-[100%] h-[100%] rounded"
                        frameborder="0"
                      ></iframe>
                    </div>
                  </div>

                  <div className="w-[49%] flex items-center">
                    <div className=" w-[100%] h-[400px] p-4 rounded flex justify-center items-center flex-col shadow shadow-[] text-[20px]">
                      <div className="flex justify-between w-[100%] my-2">
                        <div className="w-[50%]">
                          <span className="font-[600]">Equity :</span>{" "}
                          {data[0].Equity}%
                        </div>
                        <div className="w-[50%] flex items-center">
                          <span className="font-[600]">Funding Ask :</span>{" "}
                          <FaRupeeSign className="text-[18px]" />
                          {data[0].Funding_Ask}
                        </div>
                      </div>
                      <div className=" w-[100%] my-2">
                        <span className="font-[600]">Industry :</span>{" "}
                        {data[0].Industry}
                      </div>
                      <div className=" w-[100%] my-2">
                        <span className="font-[600]">Stage :</span>{" "}
                        {data[0].Stage}
                      </div>
                      <div className=" w-[100%] my-2">
                        <span className="font-[600]">Market Size :</span>{" "}
                        {data[0].Market_Size}
                      </div>
                      <div className=" w-[100%] my-2">
                        <span className="font-[600]">Linkedin Url :</span>{" "}
                        <a className="text-[blue]" href={data[0].Linkedin_Url}>
                          {data[0].Linkedin_Url}
                        </a>
                      </div>

                      <div className=" w-[100%] my-2">
                        <span className="font-[600]">Website Url :</span>{" "}
                        <a className="text-[blue]" href={data[0].Website_Url}>
                          {data[0].Website_Url}
                        </a>
                      </div>

                      <a
                        href="https://www.invstt.com/hivexv/Login"
                        className="w-[100%] mt-3"
                      >
                        <div className="bg-[#e02708] w-[100%] text-center py-3 rounded-[10px] text-[white] font-[600]">
                          Invest Now
                        </div>
                      </a>
                    </div>
                  </div>
                </section>
                <section className=" w-[100%] m-auto flex justify-center p-5">
                  <div className="w-[100%] shadow shadow-[] p-4 rounded-[5px]">
                    <div>
                      <h2 className="text-[25px] font-[600]">Highlights 1</h2>
                      <p className="text-[20px] font-[500]">
                        {data[0].Highlights1}
                      </p>
                    </div>

                    {data[0].Highlights2 === "" ? null : (
                      <div className="my-5">
                        <h2 className="text-[25px] font-[600]">Highlights 2</h2>
                        <p className="text-[20px] font-[500]">
                          {data[0].Highlights2}
                        </p>
                      </div>
                    )}

                    <div className="text-[white]">
                      <h2 className="text-[25px] font-[600] text-[black]">
                        Team{" "}
                      </h2>

                      <div className="w-[100%] border-[1px] my-2 flex">
                        <div className="w-[270px] rounded-[10px] p-3 bg-[#e02708] border-[1px]">
                          <div className="w-[100%] h-[200px] flex justify-center overflow-hidden">
                            <img
                              src={data[1] + data[0].Team_Profile}
                              alt=""
                              className="w-[100%] rounded-[5px]"
                            />
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Name : {data[0].Team_Name}
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Designation : {data[0].Team_Designation}
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Experience : {data[0].Team_Experience}
                          </div>
                        </div>

                        <div className="w-[270px] rounded-[10px] ms-5 p-3 bg-[#e02708] border-[1px]">
                          <div className="w-[100%] h-[200px] flex justify-center overflow-hidden">
                            <img
                              src={data[1] + data[0].Team_Profile1}
                              alt=""
                              className="w-[100%] rounded-[5px]"
                            />
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Name : {data[0].Team_Name1}
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Designation : {data[0].Team_Designation1}
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Experience : {data[0].Team_Experience1}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[white]">
                      <h2 className="text-[25px] font-[600] text-[black]">
                        Backers{" "}
                      </h2>

                      <div className="w-[100%] border-[1px] my-2 flex">
                        <div className="w-[270px] rounded-[10px] p-3 bg-[#e02708] border-[1px]">
                          <div className="w-[100%] h-[200px] flex justify-center overflow-hidden">
                            <img
                              src={data[1] + data[0].Backers_Profile}
                              alt=""
                              className="w-[100%] rounded-[5px]"
                            />
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Name : {data[0].Backers_Name}
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Designation : {data[0].Backers_Designation}
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Experience : {data[0].Backers_Experience}
                          </div>
                        </div>

                        <div className="w-[270px] rounded-[10px] ms-5 p-3 bg-[#e02708] border-[1px]">
                          <div className="w-[100%] h-[200px] flex justify-center overflow-hidden">
                            <img
                              src={data[1] + data[0].Backers_Profile1}
                              alt=""
                              className="w-[100%] rounded-[5px]"
                            />
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Name : {data[0].Backers_Name1}
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Designation : {data[0].Backers_Designation1}
                          </div>

                          <div className="my-2 text-[20px] font-[600]">
                            Experience : {data[0].Backers_Experience1}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[white] mb-3">
                      <h2 className="text-[25px] font-[600] text-[black]">
                        Problem{" "}
                        <p className="text-[20px] font-[500]">
                          {data[0].Problem_Statement}
                        </p>
                      </h2>
                    </div>

                    <div className="text-[white] mb-3">
                      <h2 className="text-[25px] font-[600] text-[black]">
                        Solution{" "}
                        <p className="text-[20px] font-[500]">
                          {data[0].Solution}
                        </p>
                      </h2>
                    </div>

                    <div className="text-[white] mb-3">
                      <h2 className="text-[25px] font-[600] text-[black]">
                        Competitor{" "}
                        <p className="text-[20px] font-[500]">
                          {data[0].Competitor}
                        </p>
                      </h2>
                    </div>

                    <div className="mb-3 flex">
                      <a
                        href={data[1] + data[0].Pitch_Deck}
                        className="w-[150px] me-2"
                      >
                        <button className="bg-[#e02708] flex justify-between items-center h-[50px] w-[150px] p-3 text-[white] text-[20px] rounded-[10px]">
                          Pitch Deck <FaCloudDownloadAlt />
                        </button>
                      </a>

                      <a
                        href={data[1] + data[0].Incorporation_Certificate}
                        className="w-[300px] me-2"
                      >
                        <button className="bg-[#e02708] flex justify-between items-center h-[50px] w-[300px] p-3 text-[white] text-[20px] rounded-[10px]">
                          Incorporation Certificate <FaCloudDownloadAlt />
                        </button>
                      </a>

                      <a
                        href={data[1] + data[0].Financial_Projection}
                        className="w-[260px]"
                      >
                        <button className="bg-[#e02708] flex justify-between items-center h-[50px] w-[260px] p-3 text-[white] text-[20px] rounded-[10px]">
                          Financial Projections <FaCloudDownloadAlt />
                        </button>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
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
