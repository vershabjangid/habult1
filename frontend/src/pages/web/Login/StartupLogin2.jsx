import { useFormik } from "formik";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import { FaFile, FaUser } from "react-icons/fa";
import * as Yup from "yup";
import axios, { toFormData } from "axios";

export function StartupLogin2() {
  let location = useLocation();
  let data = location.state;
  console.log(data);

  let notifyerror = (error) => toast.error(error);

  let file = ["application/pdf"];
  let file1 = ["image/png"];

  let formik = useFormik({
    initialValues: {
      FirstName: data.FirstName,
      LastName: data.LastName,
      Phone: data.Phone,
      Company_Name: data.Company_Name,
      Company_Pan: data.Company_Pan,
      Email: data.Email,
      Funding_Ask: data.Funding_Ask,
      Industry: data.Industry,
      Linkedin_Url: data.Linkedin_Url,
      Stage: data.Stage,
      Website_Url: data.Website_Url,
      Equity: data.Equity,
      Company_Logo: "",
      Company_Description: "",
      Highlights1: "",
      Highlights2: "",

      Team_Profile: "",
      Team_Name: "",
      Team_Designation: "",
      Team_Experience: "",

      Team_Profile1: "",
      Team_Name1: "",
      Team_Designation1: "",
      Team_Experience1: "",

      Backers_Profile: "",
      Backers_Name: "",
      Backers_Designation: "",
      Backers_Experience: "",

      Backers_Profile1: "",
      Backers_Name1: "",
      Backers_Designation1: "",
      Backers_Experience1: "",

      Video_Link: "",
      Competitor: "",
      Market_Size: "",
      Solution: "",
      Problem_Statement: "",
      Financial_Projection: "",
      Pitch_Deck: "",
      Incorporation_Certificate: "",
      Terms_Conditions: "",
    },

    validationSchema: Yup.object().shape({
      Company_Logo: Yup.mixed()
        .test(
          "fileFormat",
          "Unsupported file format",
          (value) =>
            value.type.includes("image/png") ||
            value.type.includes("image/jpg") ||
            value.type.includes("image/jpeg")
        )
        .required("Company Logo is required"),
      Company_Description: Yup.string().required(
        "Company Description is required"
      ),

      Highlights1: Yup.string().required("Highlights is required"),

      Team_Profile: Yup.mixed()
        .test(
          "fileFormat",
          "Unsupported file format",
          (value) =>
            value.type.includes("image/png") ||
            value.type.includes("image/jpg") ||
            value.type.includes("image/jpeg")
        )
        .required("Team Profile is required"),

      Team_Name: Yup.string().required("Team Name is required"),
      Team_Designation: Yup.string().required("Team Designation is required"),
      Team_Experience: Yup.number().required("Team Experience is required"),

      Team_Profile1: Yup.mixed()
        .test(
          "fileFormat",
          "Unsupported file format",
          (value) =>
            value.type.includes("image/png") ||
            value.type.includes("image/jpg") ||
            value.type.includes("image/jpeg")
        )
        .required("Team Profile is required"),

      Team_Name1: Yup.string().required("Team Name is required"),
      Team_Designation1: Yup.string().required("Team Designation is required"),
      Team_Experience1: Yup.number().required("Team Experience is required"),

      Backers_Profile: Yup.mixed()
        .test(
          "fileFormat",
          "Unsupported file format",
          (value) =>
            value.type.includes("image/png") ||
            value.type.includes("image/jpg") ||
            value.type.includes("image/jpeg")
        )
        .required("Backers Profile is required"),

      Backers_Name: Yup.string().required("Backers Name is required"),
      Backers_Designation: Yup.string().required(
        "Backers Designation is required"
      ),
      Backers_Experience: Yup.number().required(
        "Backers Experience is required"
      ),

      Backers_Profile1: Yup.mixed()
        .test(
          "fileFormat",
          "Unsupported file format",
          (value) =>
            value.type.includes("image/png") ||
            value.type.includes("image/jpg") ||
            value.type.includes("image/jpeg")
        )
        .required("Backers Profile is required"),

      Backers_Name1: Yup.string().required("Backers Name is required"),
      Backers_Designation1: Yup.string().required(
        "Backers Designation is required"
      ),
      Backers_Experience1: Yup.number().required(
        "Backers Experience is required"
      ),

      Video_Link: Yup.string()
        .url("Invalid Url")
        .required("Video Link is required"),
      Market_Size: Yup.number().required("Market Size is required"),
      Competitor: Yup.string().required("Competitor is required"),
      Solution: Yup.string().required("Solution is required"),
      Problem_Statement: Yup.string().required("Problem Statement is required"),
      Financial_Projection: Yup.mixed()
        .test(
          "fileFormat",
          "Unsupported file format",
          (value) =>
            value.type.includes("application/pdf") ||
            value.type.includes("image/png") ||
            value.type.includes("image/jpg") ||
            value.type.includes("image/jpeg")
        )
        .required("Financial Projection is required"),
      Pitch_Deck: Yup.mixed()
        .test(
          "fileFormat",
          "Unsupported file format",
          (value) =>
            value.type.includes("application/pdf") ||
            value.type.includes("image/png") ||
            value.type.includes("image/jpg") ||
            value.type.includes("image/jpeg")
        )
        .required("Pitch Deck is required"),
      Incorporation_Certificate: Yup.mixed()
        .test(
          "fileFormat",
          "Unsupported file format",
          (value) =>
            value.type.includes("application/pdf") ||
            value.type.includes("image/png") ||
            value.type.includes("image/jpg") ||
            value.type.includes("image/jpeg")
        )
        .required("IncorporationCertificate is required"),
    }),

    onSubmit: () => {
      if (formik.values.Terms_Conditions === true) {
        insertdata(formik.values);
      } else {
        notifyerror("Accept all terms and conditions");
      }
    },
  });

  let naviget = useNavigate();

  let insertdata = (value) => {
    axios
      .post("https://api.hivexv.com/add-startup", toFormData(value), {
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
      .put("https://api.hivexv.com/change-all-field", data, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("webtoken")),
        },
      })
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

  let [logoval, setlogo] = useState("Upload your Company logo");
  let [teamval, setteam] = useState("Upload team Profile Picture");
  let [teamval1, setteam1] = useState("Upload team Profile Picture");
  let [backers1, setbackers1] = useState("Upload team Profile Picture");
  let [backers2, setbackers2] = useState("Upload team Profile Picture");
  let [FinancialProjection, setFinancialProjection] = useState(
    "Upload team Financial Projection"
  );
  let [PitchDeck, setPitchDeck] = useState("Upload your Pitch Deck");
  let [IncorporationCertificate, setIncorporationCertificate] = useState(
    "Upload your Incorporation Certificate"
  );
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

                <div className="flex justify-center border-b-[1px] py-4 w-[100%]">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      Company Logo
                    </label>

                    <div className="relative w-[100%] h-[150px] py-2">
                      <input
                        type="file"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px] absolute opacity-0"
                        onChange={(e) =>
                          setlogo(e.target.value) ||
                          formik.setFieldValue(
                            "Company_Logo",
                            e.target.files[0]
                          )
                        }
                      />

                      <div className="w-[100%] h-[150px] border-dashed border-[1px] border-[black] rounded-[10px] flex justify-center items-center ">
                        <div className="">
                          <FaFile className="text-[30px] m-auto" />
                          <div>{logoval.slice(12)}...</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[red] my-2">
                      {formik.errors.Company_Logo}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Company Description</label>
                    <textarea
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue(
                          "Company_Description",
                          e.target.value
                        )
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Company_Description}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Highlights 1</label>
                    <input
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Highlights1", e.target.value)
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Highlights1}
                    </div>

                    <label className="font-[600]">
                      Highlights 2 (Optional){" "}
                    </label>
                    <input
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Highlights2", e.target.value)
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Highlights2}
                    </div>
                  </div>
                </div>

                <div className="w-[100%] flex justify-center">
                  <div className=" border-b-[1px] w-[100%] py-4">
                    <div className="w-[90%] m-auto">
                      <label className="font-[600] text-start ">Team</label>
                    </div>
                    <div className="flex justify-between w-[90%] m-auto">
                      <div className="w-[45%] flex justify-center items-center flex-col">
                        <div className="w-[200px] h-[200px] relative">
                          <input
                            type="file"
                            className=" w-[100%] h-[100%] bg-[transparent] p-2 rounded-[50%] absolute opacity-0"
                            onChange={(e) =>
                              setteam(e.target.value) ||
                              formik.setFieldValue(
                                "Team_Profile",
                                e.target.files[0]
                              )
                            }
                          />

                          <div className="w-[200px] h-[200px] flex justify-center items-center flex-col rounded-[50%] border-dashed border-[1px] border-[black]">
                            <FaUser className="text-[25px]" />
                            <div className="text-center">
                              {teamval.slice(12)}...
                            </div>
                          </div>
                        </div>
                        <div className="w-[100%] text-center my-1 text-[red]">
                          {formik.errors.Team_Profile}
                        </div>
                        <div className=" w-[100%] mt-4">
                          <input
                            type="text"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] mt-1"
                            placeholder="Enter Name"
                            onChange={(e) =>
                              formik.setFieldValue("Team_Name", e.target.value)
                            }
                          />
                          <div className="w-[100%] my-1 mb-3 text-[red]">
                            {formik.errors.Team_Name}
                          </div>

                          <input
                            type="text"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] "
                            placeholder="Designation"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "Team_Designation",
                                e.target.value
                              )
                            }
                          />
                          <div className="w-[100%] my-1 mb-3 text-[red]">
                            {formik.errors.Team_Designation}
                          </div>

                          <input
                            type="number"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px]"
                            placeholder="Experience"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "Team_Experience",
                                e.target.value
                              )
                            }
                          />
                          <div className="w-[100%] my-1 mb-3 text-[red]">
                            {formik.errors.Team_Experience}
                          </div>
                        </div>
                      </div>

                      <div className="w-[45%] flex justify-center items-center flex-col">
                        <div className="w-[200px] h-[200px] relative">
                          <input
                            type="file"
                            className=" w-[100%] h-[100%] bg-[transparent] p-2 rounded-[50%] absolute opacity-0"
                            onChange={(e) =>
                              setteam1(e.target.value) ||
                              formik.setFieldValue(
                                "Team_Profile1",
                                e.target.files[0]
                              )
                            }
                          />

                          <div className="w-[200px] h-[200px] flex justify-center items-center flex-col rounded-[50%] border-dashed border-[1px] border-[black]">
                            <FaUser className="text-[25px]" />
                            <div className="text-center">
                              {teamval1.slice(12)}...
                            </div>
                          </div>
                        </div>
                        <div className="w-[100%] text-center my-1 text-[red]">
                          {formik.errors.Team_Profile1}
                        </div>
                        <div className=" w-[100%] mt-4">
                          <input
                            type="text"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] mt-1"
                            placeholder="Enter Name"
                            onChange={(e) =>
                              formik.setFieldValue("Team_Name1", e.target.value)
                            }
                          />
                          <div className="w-[100%] my-1 mb-3 text-[red]">
                            {formik.errors.Team_Name1}
                          </div>

                          <input
                            type="text"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] "
                            placeholder="Designation"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "Team_Designation1",
                                e.target.value
                              )
                            }
                          />
                          <div className="w-[100%] my-1 mb-3 text-[red]">
                            {formik.errors.Team_Designation1}
                          </div>

                          <input
                            type="number"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px]"
                            placeholder="Experience"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "Team_Experience1",
                                e.target.value
                              )
                            }
                          />
                          <div className="w-[100%] my-1 mb-3 text-[red]">
                            {formik.errors.Team_Experience1}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[100%] flex justify-center">
                  <div className=" border-b-[1px] w-[100%] py-4">
                    <div className="w-[90%] m-auto">
                      <label className="font-[600] text-start ">Backers</label>
                    </div>
                    <div className="flex justify-between w-[90%] m-auto">
                      <div className="w-[45%] flex justify-center items-center flex-col">
                        <div className="w-[200px] h-[200px] relative">
                          <input
                            type="file"
                            className=" w-[100%] h-[100%] bg-[transparent] p-2 rounded-[50%] absolute opacity-0"
                            onChange={(e) =>
                              setbackers1(e.target.value) ||
                              formik.setFieldValue(
                                "Backers_Profile",
                                e.target.files[0]
                              )
                            }
                          />

                          <div className="w-[200px] h-[200px] flex justify-center items-center flex-col rounded-[50%] border-dashed border-[1px] border-[black]">
                            <FaUser className="text-[25px]" />
                            <div className="text-center">
                              {backers1.slice(12)}...
                            </div>
                          </div>
                        </div>
                        <div className="w-[100%] text-center my-1 text-[red]">
                          {formik.errors.Backers_Profile}
                        </div>

                        <div className=" w-[100%] mt-1">
                          <input
                            type="text"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] mt-3"
                            placeholder="Name"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "Backers_Name",
                                e.target.value
                              )
                            }
                          />
                          <div className="w-[100%] my-1 text-[red]">
                            {formik.errors.Backers_Name}
                          </div>

                          <input
                            type="text"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] mt-3"
                            placeholder="Designation"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "Backers_Designation",
                                e.target.value
                              )
                            }
                          />
                          <div className="w-[100%]  my-1 text-[red]">
                            {formik.errors.Backers_Designation}
                          </div>

                          <input
                            type="number"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] mt-3"
                            placeholder="Experience"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "Backers_Experience",
                                e.target.value
                              )
                            }
                          />
                        </div>

                        <div className="text-[red] w-[100%] my-1">
                          {formik.errors.Backers_Experience}
                        </div>
                      </div>

                      <div className="w-[45%] flex justify-center items-center flex-col">
                        <div className="w-[200px] h-[200px] relative">
                          <input
                            type="file"
                            className=" w-[100%] h-[100%] bg-[transparent] p-2 rounded-[50%] absolute opacity-0"
                            onChange={(e) =>
                              setbackers2(e.target.value) ||
                              formik.setFieldValue(
                                "Backers_Profile1",
                                e.target.files[0]
                              )
                            }
                          />

                          <div className="w-[200px] h-[200px] flex justify-center items-center flex-col rounded-[50%] border-dashed border-[1px] border-[black]">
                            <FaUser className="text-[25px]" />
                            <div className="text-center">
                              {backers2.slice(12)}...
                            </div>
                          </div>
                        </div>

                        <div className="w-[100%] text-center my-1 text-[red]">
                          {formik.errors.Backers_Profile1}
                        </div>

                        <div className=" w-[100%] mt-1">
                          <input
                            type="text"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] mt-3"
                            placeholder="Name"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "Backers_Name1",
                                e.target.value
                              )
                            }
                          />
                          <div className="w-[100%] my-1 text-[red]">
                            {formik.errors.Backers_Name1}
                          </div>

                          <input
                            type="text"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] mt-3"
                            placeholder="Designation"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "Backers_Designation1",
                                e.target.value
                              )
                            }
                          />
                          <div className="w-[100%]  my-1 text-[red]">
                            {formik.errors.Backers_Designation1}
                          </div>

                          <input
                            type="number"
                            className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] mt-3"
                            placeholder="Experience"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "Backers_Experience1",
                                e.target.value
                              )
                            }
                          />
                        </div>

                        <div className="text-[red] w-[100%] my-1">
                          {formik.errors.Backers_Experience1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Problem Statement</label>
                    <input
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue(
                          "Problem_Statement",
                          e.target.value
                        )
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Problem_Statement}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Solution</label>
                    <input
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Solution", e.target.value)
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Solution}
                    </div>
                  </div>
                </div>

                <div className=" border-b-[1px] flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Market Size </label>
                    <input
                      type="number"
                      className="border-[1px] border-[black] w-[100%] p-2 py-3 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Market_Size", e.target.value)
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Market_Size}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Competitor</label>
                    <input
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Competitor", e.target.value)
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Competitor}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-4">
                  <div className="w-[90%]">
                    <label className="font-[600]">Video link</label>
                    <input
                      type="text"
                      className="border-[1px] border-[black] w-[100%] p-2 rounded-[10px] my-2"
                      onChange={(e) =>
                        formik.setFieldValue("Video_Link", e.target.value)
                      }
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.Video_Link}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center border-b-[1px] py-4 w-[100%]">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      Pitch Deck
                    </label>

                    <div className="relative w-[100%] h-[150px] py-2">
                      <input
                        type="file"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px] absolute opacity-0"
                        onChange={(e) =>
                          setPitchDeck(e.target.value) ||
                          formik.setFieldValue("Pitch_Deck", e.target.files[0])
                        }
                      />

                      <div className="w-[100%] h-[150px] border-dashed border-[1px] border-[black] rounded-[10px] flex justify-center items-center ">
                        <div className="">
                          <FaFile className="text-[30px] m-auto" />
                          <div>{PitchDeck.slice(12)}...</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[red] my-2">
                      {formik.errors.Pitch_Deck}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center border-b-[1px] py-4 w-[100%]">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      Financial Projection
                    </label>

                    <div className="relative w-[100%] h-[150px] py-2">
                      <input
                        type="file"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px] absolute opacity-0"
                        onChange={(e) =>
                          setFinancialProjection(e.target.value) ||
                          formik.setFieldValue(
                            "Financial_Projection",
                            e.target.files[0]
                          )
                        }
                      />

                      <div className="w-[100%] h-[150px] border-dashed border-[1px] border-[black] rounded-[10px] flex justify-center items-center ">
                        <div className="">
                          <FaFile className="text-[30px] m-auto" />
                          <div>{FinancialProjection.slice(12)}...</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[red] my-2">
                      {formik.errors.Financial_Projection}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center border-b-[1px] py-4 w-[100%]">
                  <div className="w-[90%]">
                    <label htmlFor="" className="text-[20px] font-[600]">
                      Incorporation Certificate
                    </label>

                    <div className="relative w-[100%] h-[150px] py-2">
                      <input
                        type="file"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px] absolute opacity-0"
                        onChange={(e) =>
                          setIncorporationCertificate(e.target.value) ||
                          formik.setFieldValue(
                            "Incorporation_Certificate",
                            e.target.files[0]
                          )
                        }
                      />

                      <div className="w-[100%] h-[150px] border-dashed border-[1px] border-[black] rounded-[10px] flex justify-center items-center ">
                        <div className="">
                          <FaFile className="text-[30px] m-auto" />
                          <div>{IncorporationCertificate.slice(12)}...</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[red] my-2">
                      {formik.errors.Incorporation_Certificate}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-[90%] flex items-center my-[50px]">
                    <input
                      type="checkbox"
                      className="w-[15px] h-[15px]"
                      onChange={(e) =>
                        formik.setFieldValue(
                          "Terms_Conditions",
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
