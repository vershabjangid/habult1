import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Sidebar } from "../../common/Sidebar";
import { FaFile } from "react-icons/fa";
import axios, { toFormData } from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export function DashTeam() {
  let [aadharcard, setaadharcard] = useState("Upload Your Aadhar Card");
  let [pancard, setpancard] = useState("Upload Your Pan Card");
  let [bankproof, setbankproof] = useState("Upload Bank Documents");

  let notifyerror = (error) => toast.error(error);
  let notifysuccess = (success) => toast.success(success);

  let formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Phone: "",
      AadhaarCard: "",
      Address: "",
      Email: "",
      PanCard: "",
      Bank_Name: "",
      Account_Number: "",
      IFSC_Code: "",
      Bank_Proof: "",
    },

    validationSchema: Yup.object().shape({
      FirstName: Yup.string().required("First Name is required"),
      LastName: Yup.string().required("Last Name is required"),
      Phone: Yup.number().required("Phone Number is required"),
      AadhaarCard: Yup.mixed().required("AadharCard is required"),
      Address: Yup.string().required("Address is required"),
      Email: Yup.string().email("invalid email").required("Email is required"),
      PanCard: Yup.mixed().required("PanCard is required"),
      Bank_Name: Yup.string().required("Bank name is required"),
      Account_Number: Yup.number().required("Account Number is required"),
      IFSC_Code: Yup.string().required("IFSC Code is required"),
      Bank_Proof: Yup.mixed().required("Bank Proof is required"),
    }),
    onSubmit: () => {
      insertdata(formik.values);
    },
  });

  let insertdata = (value) => {
    axios
      .post("http://localhost:5000/add-team", toFormData(value), {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        if (res.data.Status === 1) {
          notifysuccess(res.data.Message);
          viewdata();
        } else {
          notifyerror(res.data.Message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let [viewteam, setteam] = useState([]);
  let [imgurl, setimgurl] = useState("");
  let viewdata = () => {
    axios
      .get("http://localhost:5000/view-team", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        setteam(res.data.viewteam);
        setimgurl(res.data.imgurl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewdata();
  }, []);

  let naviget = useNavigate();

  let viewprofile = (value) => {
    naviget("/view-team-profile", { state: [value, imgurl] });
  };
  return (
    <>
      <section className="main border-[1px] border-[black] bg-[black]">
        <section className="dashboard_inner w-[100%] flex justify-between">
          <Sidebar />

          <section className="w-[90%] h-[100vh] rounded-s-[35px] flex items-center flex-col bg-[white] border-[1px] border-[white] overflow-y-scroll">
            <section className="page_label w-[90%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[30px]">
              <h1>Team</h1>
            </section>
            <form className="w-[90%]" onSubmit={formik.handleSubmit}>
              <section className="page_label w-[100%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                <div>
                  <p>Add Team</p>
                </div>

                <div className="text-[black]">
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>First Name</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("FirstName", e.target.value)
                      }
                    />
                     <div className="text-[red] my-2">
                      {formik.errors.FirstName}
                    </div>
                  </div>
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("LastName", e.target.value)
                      }
                    />
                     <div className="text-[red] my-2">
                      {formik.errors.LastName}
                    </div>
                  </div>
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Phone</label>
                    <input
                      type="number"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("Phone", e.target.value)
                      }
                    />
                     <div className="text-[red] my-2">
                      {formik.errors.Phone}
                    </div>
                  </div>
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Address</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("Address", e.target.value)
                      }
                    />
                     <div className="text-[red] my-2">
                      {formik.errors.Address}
                    </div>
                  </div>
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Email</label>
                    <input
                      type="email"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("Email", e.target.value)
                      }
                    />
                     <div className="text-[red] my-2">
                      {formik.errors.Email}
                    </div>
                  </div>
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Bank Name</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("Bank_Name", e.target.value)
                      }
                    />
                     <div className="text-[red] my-2">
                      {formik.errors.Bank_Name}
                    </div>
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Account Number</label>
                    <input
                      type="number"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("Account_Number", e.target.value)
                      }
                    />
                     <div className="text-[red] my-2">
                      {formik.errors.Account_Number}
                    </div>
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>IFSC Code</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("IFSC_Code", e.target.value)
                      }
                    />
                     <div className="text-[red] my-2">
                      {formik.errors.IFSC_Code}
                    </div>
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Aadhaar Card</label>
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
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Pan Card</label>
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
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Bank Proof</label>
                    <div className="relative w-[100%] h-[150px] py-2">
                      <input
                        type="file"
                        className="w-[100%] h-[100%] border-[1px] border-[black] p-3 rounded-[10px] absolute opacity-0"
                        onChange={(e) =>
                          setbankproof(e.target.value) ||
                          formik.setFieldValue("Bank_Proof", e.target.files[0])
                        }
                      />

                      <div className="w-[100%] h-[150px] border-dashed border-[1px] border-[black] rounded-[10px] flex justify-center items-center ">
                        <div className="">
                          <FaFile className="text-[30px] m-auto" />
                          <div>{bankproof.slice(12)}...</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[red] my-2">
                      {formik.errors.Bank_Proof}
                    </div>
                  </div>
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <button className="w-[200px] my-2 bg-[#e02708] text-[white] py-3 rounded-[10px]">
                      Save
                    </button>
                  </div>
                </div>
              </section>
            </form>

            <section className="w-[90%]" onSubmit={formik.handleSubmit}>
              <section className="page_label w-[100%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                <div>
                  <p>View Team</p>
                </div>

                <form className="w-[100%] my-5" onSubmit={formik.handleSubmit}>
                  <table className="w-[100%] border-[1px] border-black">
                    <tr className="">
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        Name
                      </th>
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        Email
                      </th>
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        Phone
                      </th>
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        View Profile
                      </th>
                    </tr>
                    {viewteam.map((items) => {
                      return (
                        <>
                          <tr className="border-t-[1px] border-black">
                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {items.FirstName} {items.LastName}
                            </td>

                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {items.Email}
                            </td>

                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {items.Phone}
                            </td>
                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {" "}
                              <div
                                className="w-[150px] mx-auto my-2 py-2 px-6 rounded-[15px] text-white bg-[green]"
                                onClick={() => viewprofile(items)}
                              >
                                View
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </table>
                </form>
              </section>
            </section>
          </section>
        </section>
      </section>
      <ToastContainer />
    </>
  );
}
