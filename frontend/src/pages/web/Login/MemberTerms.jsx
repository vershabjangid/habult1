import React from "react";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
export function MemberTerms() {
  let location = useLocation();
  let data = location.state;
  console.log(data);

  let naviget = useNavigate();

  let formik = useFormik({
    initialValues: {
      Email: data.Email,
      FirstName: data.FirstName,
      LastName: data.LastName,
      Phone: data.Phone,
      All_Instructions: "",
      TermsAndConditions: "",
    },
    onSubmit: () => {
      nextnavigate(formik.values);
    },
  });

  let notifyerror = (error) => toast.error(error);

  let nextnavigate = (value) => {
    console.log(value);
    if (value.All_Instructions === "" || value.TermsAndConditions === "") {
      notifyerror("Please accept all the terms");
    } else {
      naviget("/member-kyc", { state: value });
    }
  };
  return (
    <>
      <section className="login_page w-[100%] py-3  px-2 flex justify-center items-center">
        <div className="login_inner w-[1000px] text-[black]">
          <div className="flex items-center justify-start bg-[#ffffff] border-[3px] border-[#e02708] p-3 rounded-[10px]">
            <img src={logo} alt="" className="w-[120px]" />

            <div>
              <h1 className=" text-[30px] font-[700] ms-5 text-[#e02708]">
                Become An Verified Member
              </h1>
              <h2 className=" text-[20px] font-[600] ms-5">
                Become An Verified Member
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#ffffff] border-[3px] my-4 border-[#e02708] p-3 rounded-[10px]">
            <div className="w-[20%] flex justify-center items-center flex-col my-2">
              <div className="w-[40px] h-[40px] text-white flex justify-center items-center font-[600] bg-[#e02708] rounded-[50%]">
                1
              </div>
              <p>Assessment</p>
            </div>
            <div className="w-[15%] border-b-[1px] border-[black]"></div>
            <div className="w-[20%] flex justify-center items-center flex-col my-2">
              <div className="w-[40px] h-[40px] text-white flex justify-center items-center font-[600] bg-[black] rounded-[50%]">
                2
              </div>
              <p>KYC</p>
            </div>
            <div className="w-[15%] border-b-[1px] border-[black]"></div>
            <div className="w-[20%] flex justify-center items-center flex-col my-2">
              <div className="w-[40px] h-[40px] text-white flex justify-center items-center font-[600] bg-[black] rounded-[50%]">
                3
              </div>
              <p>Bank Verification</p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#ffffff] border-[3px] my-4 border-[#e02708] p-3 rounded-[10px]">
            <div className="w-[100%]">
              <div className=" border-b-[1px] flex justify-center py-4">
                <div className="w-[90%]">
                  <h2 className="text-[35px] font-[600]">Let's start now</h2>
                  <p>
                    Carefully review the key points below and confirm your
                    understanding by checking all the boxes.
                  </p>
                </div>
              </div>

              <div className=" border-b-[1px] flex justify-center py-4">
                <div className="w-[90%]">
                  <li>
                    Startup investments come with a high degree of volatility.
                  </li>
                </div>
              </div>

              <div className=" border-b-[1px] flex justify-center py-4">
                <div className="w-[90%]">
                  <li>Investing in startups involves limited liquidity.</li>
                </div>
              </div>

              <div className=" border-b-[1px] flex justify-center py-4">
                <div className="w-[90%]">
                  <li>
                    Backing startups carries substantial risk with no guaranteed
                    returns.
                  </li>
                </div>
              </div>

              <div className=" border-b-[1px] flex justify-center py-4">
                <div className="w-[90%]">
                  <li>
                    Startup investors shouldn't expect regular dividends from
                    their investments.
                  </li>
                </div>
              </div>

              <div className=" border-b-[1px] flex justify-center py-4">
                <div className="w-[90%]">
                  <li>
                    Investors acknowledge that failed startups may result in
                    minimal or no returns.
                  </li>
                </div>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className=" flex justify-center py-4">
                  <div className="w-[90%]">
                    <div className="w-[90%] flex items-center">
                      <input
                        type="checkbox"
                        className="w-[15px] h-[15px]"
                        onChange={(e) =>
                          formik.setFieldValue(
                            "All_Instructions",
                            e.target.checked
                          )
                        }
                      />
                      <div className="ms-2">Agree all instructions</div>
                    </div>

                    <div className="w-[90%] flex items-center my-[30px]">
                      <input
                        type="checkbox"
                        className="w-[15px] h-[15px]"
                        onChange={(e) =>
                          formik.setFieldValue(
                            "TermsAndConditions",
                            e.target.checked
                          )
                        }
                      />
                      <div className="ms-2">
                        hereby acknowledge and accept all "terms and conditions
                        outlined in the agreement."
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[100%] flex justify-center text-[white]">
                  <button
                    type="submit"
                    className="w-[90%] bg-[#e02708] py-3 mb-3 rounded-[10px] font-[600]"
                  >
                    NEXT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
