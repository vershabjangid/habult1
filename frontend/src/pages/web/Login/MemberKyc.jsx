import { useFormik } from "formik";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import { FaFile } from "react-icons/fa";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

export function MemberKyc() {
  let location = useLocation();
  let data = location.state;

  let file = ["application/pdf"];

  let formik = useFormik({
    initialValues: {
      Email: data.Email,
      FirstName: data.FirstName,
      LastName: data.LastName,
      Phone: data.Phone,  
      AadhaarCard: "",
      PanCard: "",
      Address: "",
    },

    validationSchema: Yup.object().shape({
      AadhaarCard: Yup.mixed()
        .test("fileFormat", "Unsupported file format", (value) =>
          value.type.includes(file)
        )
        .required("Aadhar card is required"),
      PanCard: Yup.mixed()
        .test("fileFormat", "Unsupported file format", (value) =>
          value.type.includes(file)
        )
        .required("Pan card is required"),
      Address: Yup.string().required("Address is required"),
    }),

    onSubmit: () => {
      bankverification(formik.values);
    },
  });

  let naviget = useNavigate();

  let bankverification = (value) => {
    naviget("/member-bank-verification", { state: value });
  };

  let [aadharcard, setaadharcard] = useState("Upload Your Aadhar Card");
  let [pancard, setpancard] = useState("Upload Your Pan Card");
  return (
    <>
      <section className="login_page w-[100%] py-3 px-2 flex justify-center items-center">
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
              <div className="w-[40px] h-[40px] text-white flex justify-center items-center font-[600]  bg-[black]  rounded-[50%]">
                1
              </div>
              <p>Assessment</p>
            </div>
            <div className="w-[15%] border-b-[1px] border-[black]"></div>
            <div className="w-[20%] flex justify-center items-center flex-col my-2">
              <div className="w-[40px] h-[40px] text-white flex justify-center items-center font-[600] bg-[#e02708] rounded-[50%]">
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
                  <h2 className="text-[35px] font-[600]">
                    Fill all details to complete registration
                  </h2>
                </div>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      Aadhar Card
                    </label>

                    <div className="relative w-[100%] h-[150px] py-2">
                      <input
                        type="file"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px] absolute opacity-0"
                        onChange={(e) =>
                          setaadharcard(e.target.value) ||
                          formik.setFieldValue("AadhaarCard", e.target.files[0])
                        }
                      />

                      <div className="w-[100%] h-[150px] border-dashed border-[1px] border-[black] rounded-[10px] flex justify-center items-center ">
                        <div className="">
                          <FaFile className="text-[30px] m-auto" />
                          <div>{aadharcard.slice(12)}...</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[red] my-2">
                      {formik.errors.AadhaarCard}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      Pan Card
                    </label>

                    <div className="relative w-[100%] h-[150px] py-2">
                      <input
                        type="file"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px] absolute opacity-0"
                        onChange={(e) =>
                          setpancard(e.target.value) ||
                          formik.setFieldValue("PanCard", e.target.files[0])
                        }
                      />

                      <div className="w-[100%] h-[150px] border-dashed border-[1px] border-[black] rounded-[10px] flex justify-center items-center ">
                        <div className="">
                          <FaFile className="text-[30px] m-auto" />
                          <div>{pancard.slice(12)}...</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[red] my-2">
                      {formik.errors.PanCard}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      Address
                    </label>

                    <div className="relative w-[100%] h-[70px] py-1">
                      <input
                        type="text"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px]"
                        onChange={(e) =>
                          formik.setFieldValue("Address", e.target.value)
                        }
                      />
                    </div>
                    <div className="text-[red] mb-2">
                      {formik.errors.Address}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center text-[white]">
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
