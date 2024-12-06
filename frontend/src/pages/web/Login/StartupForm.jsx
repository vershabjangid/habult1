import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import { FaFile } from "react-icons/fa";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export function StartupForm() {
  let file = ["application/pdf"];

  let naviget = useNavigate();

  let location = useLocation();
  let data = location.state;
  let formik = useFormik({
    initialValues: {
      Email: data.Email,
      Company_Name: "",
      Industry: "",
      Linkedin_Url: "",
      Company_Pan: "",
      Website_Url: "",
      Funding_Ask: "",
      Stage: "",
      Equity: "",
    },

    validationSchema: Yup.object().shape({
      Company_Name: Yup.string().required("Company Name is required"),
      Industry: Yup.string().required("Industry is required"),
      Linkedin_Url: Yup.string()
        .url("Invalid Url")
        .required("Linkedin url is required"),
      Company_Pan: Yup.mixed()
        .test("fileFormat", "Pdf file format only", (value) =>
          value.type.includes(file)
        )
        .required("Company pan is required"),
      Website_Url: Yup.string()
        .url("Invalid Url")
        .required("Website url is required"),
      Funding_Ask: Yup.number().required("Funding Ask is required"),
      Stage: Yup.string().required("Stage is required"),
      Equity: Yup.number()
        .max(100, "Equity not allowed more than 100% ")
        .required("Equity is required"),
    }),

    onSubmit: () => {
      naviget("/startup-form2", { state: formik.values });
    },
  });

  let [pancard, setpancard] = useState("Upload Your Pan Card");

  let [viewindustry, setviewindustry] = useState([]);
  let viewdata = () => {
    axios
      .get("https://api.hivexv.com/view-web-industry", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("webtoken")),
        },
      })
      .then((res) => {
        setviewindustry(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewdata();
  }, []);
  return (
    <>
      <section className="login_page w-[100%] py-3  px-2 flex justify-center items-center">
        <div className="login_inner w-[1000px] text-[black]">
          <div className="flex items-center justify-start bg-[#ffffff] border-[3px] border-[#e02708] p-3 rounded-[10px]">
            <img src={logo} alt="" className="w-[120px]" />

            <div>
              <h1 className=" text-[30px] font-[700] ms-5 text-[#e02708]">
                Become An Verified Startup
              </h1>
              <h2 className=" text-[20px] font-[600] ms-5">
                Become An Verified Startup
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#ffffff] border-[3px] my-4 border-[#e02708] p-3 rounded-[10px]">
            <div className="w-[20%] flex justify-center items-center flex-col my-2">
              <div className="w-[40px] h-[40px] text-white flex justify-center items-center font-[600] bg-[#e02708] rounded-[50%]">
                1
              </div>
              <p>Startup Details</p>
            </div>
            <div className="w-[15%] border-b-[1px] border-[black]"></div>
            <div className="w-[20%] flex justify-center items-center flex-col my-2">
              <div className="w-[40px] h-[40px] text-white flex justify-center items-center font-[600] bg-[black] rounded-[50%]">
                2
              </div>
              <p>Create Profile</p>
            </div>
            <div className="w-[15%] border-b-[1px] border-[black]"></div>
            <div className="w-[20%] flex justify-center items-center flex-col my-2">
              <div className="w-[40px] h-[40px] text-white flex justify-center items-center font-[600] bg-[black] rounded-[50%]">
                3
              </div>
              <p>Confirmation</p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#ffffff] border-[3px] my-4 border-[#e02708] p-3 rounded-[10px]">
            <form className="w-[100%]" onSubmit={formik.handleSubmit}>
              <div className="w-[100%]">
                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <h2 className="text-[35px] font-[600]">Company details</h2>
                    <p>
                      Carefully review the key points below and confirm your
                      understanding by checking all the boxes.
                    </p>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Company Name</label>
                    <input
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Company_Name", e.target.value)
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Company_Name}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Industry </label>
                    <select
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Industry", e.target.value)
                      }
                    >
                      <option>Choose Your Industry</option>
                      {viewindustry.map((items, index) => {
                        return (
                          <>
                            <option value={items.Industry_Name}>{items.Industry_Name}</option>
                          </>
                        );
                      })}
                    </select>
                    <div className="text-[red] my-2">
                      {formik.errors.Industry}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Linkedin Url </label>
                    <input
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Linkedin_Url", e.target.value)
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Linkedin_Url}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center border-b-[1px] py-4 w-[100%]">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      Company PanCard
                    </label>

                    <div className="relative w-[100%] h-[150px] py-2">
                      <input
                        type="file"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px] absolute opacity-0"
                        onChange={(e) =>
                          setpancard(e.target.value) ||
                          formik.setFieldValue("Company_Pan", e.target.files[0])
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
                      {formik.errors.Company_Pan}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Website URL</label>
                    <input
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Website_Url", e.target.value)
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Website_Url}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Funding Ask </label>
                    <input
                      type="number"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Funding_Ask", e.target.value)
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Funding_Ask}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Stage</label>
                    <select
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 py-3 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Stage", e.target.value)
                      }
                    >
                      <option>Choose Stage</option>
                      <option value="Seed">Seed</option>
                      <option value="Seed">Pre-Seed</option>
                    </select>
                    <div className="text-[red] my-2">{formik.errors.Stage}</div>
                  </div>
                </div>

                <div className="flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Equity in (%)</label>
                    <input
                      type="number"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Equity", e.target.value)
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Equity}
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
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
