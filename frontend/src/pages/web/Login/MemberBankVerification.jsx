import React, { useState } from "react";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { FaFile } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios, { toFormData } from "axios";

export function MemberBankVerification() {
  let [aadharcard, setaadharcard] = useState("Upload Bank Documents");

  let file = ["application/pdf"];

  let location = useLocation();
  let data = location.state;

  let formik = useFormik({
    initialValues: {
      AadhaarCard: data.AadhaarCard,
      Address: data.Address,
      Email: data.Email,
      PanCard: data.PanCard,
      Bank_Name: "",
      Account_Number: "",
      IFSC_Code: "",
      Bank_Proof: "",
      All_Fields: "",
    },

    validationSchema: Yup.object().shape({
      Bank_Name: Yup.string().required("Bank Name is required"),
      Account_Number: Yup.number().required("Account Number is required"),
      IFSC_Code: Yup.string().required("IFSC Code is required"),
      Bank_Proof: Yup.mixed()
        .test("fileFormat", "Unsupported file format", (value) =>
          value.type.includes(file)
        )
        .required("Bank proof is required"),
    }),

    onSubmit: () => {
      insertdata(formik.values);
    },
  });

  let notifysuccess = (success) => toast.success(success);
  let notifyerror = (error) => toast.error(error);

  let naviget = useNavigate();
  let insertdata = (value) => {
    axios
      .post("https://api.hivexv.com/add-investors", toFormData(value), {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("webtoken")),
        },
      })
      .then((res) => {
        if (res.data.Status === 1) {
          updateallfilds(value);
        } else {
          notifyerror(res.data.Message);
        }
      });
  };

  let updateallfilds = (value) => {
    let data = {
      Email: value.Email,
      All_Fields: true,
    };
    axios
      .put("https://api.hivexv.com/change-all-field", data)
      .then((res) => {
        if (res.data.Status === 1) {
          naviget("/request-confirmed");
        } else {
          notifyerror(res.data.Message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
              <div className="w-[40px] h-[40px] text-white flex justify-center items-center font-[600] bg-[black] rounded-[50%]">
                2
              </div>
              <p>KYC</p>
            </div>
            <div className="w-[15%] border-b-[1px] border-[black]"></div>
            <div className="w-[20%] flex justify-center items-center flex-col my-2">
              <div className="w-[40px] h-[40px] text-white flex justify-center items-center font-[600] bg-[#e02708] rounded-[50%]">
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
                    Fill all bank details to complete registration
                  </h2>
                </div>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      Bank Name
                    </label>

                    <div className="relative w-[100%] h-[60px] py-1">
                      <input
                        type="text"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px]"
                        onChange={(e) =>
                          formik.setFieldValue("Bank_Name", e.target.value)
                        }
                      />
                    </div>
                    <div className="text-[red] mb-2">
                      {formik.errors.Bank_Name}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      Account Number
                    </label>

                    <div className="relative w-[100%] h-[60px] py-1">
                      <input
                        type="number"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px]"
                        onChange={(e) =>
                          formik.setFieldValue("Account_Number", e.target.value)
                        }
                      />
                    </div>
                    <div className="text-[red] mb-2">
                      {formik.errors.Account_Number}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      IFSC Code
                    </label>

                    <div className="relative w-[100%] h-[60px] py-1">
                      <input
                        type="text"
                        className="w-[100%] h-[100%] border-[1px] uppercase border-[black] p-3 rounded-[10px]"
                        onChange={(e) =>
                          formik.setFieldValue("IFSC_Code", e.target.value)
                        }
                      />
                    </div>
                    <div className="text-[red] mb-2">
                      {formik.errors.IFSC_Code}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      Bank Proof ( Cheque / Passbook )
                    </label>

                    <div className="relative w-[100%] h-[150px] py-2">
                      <input
                        type="file"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px] absolute opacity-0"
                        onChange={(e) =>
                          setaadharcard(e.target.value) ||
                          formik.setFieldValue("Bank_Proof", e.target.files[0])
                        }
                      />

                      <div className="w-[100%] h-[150px] border-dashed border-[1px] border-[black] rounded-[10px] flex justify-center items-center ">
                        <div className="">
                          <FaFile className="text-[30px] m-auto" />
                          <div>{aadharcard.slice(7)}...</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[red] my-2">
                      {formik.errors.Bank_Proof}
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
