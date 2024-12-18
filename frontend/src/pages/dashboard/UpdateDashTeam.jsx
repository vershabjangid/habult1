import { useFormik } from "formik";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Sidebar } from "../../common/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

export function UpdateDashTeam() {
  let location = useLocation();
  let data = location.state;

  let formik = useFormik({
    initialValues: {
      _id: data[0]._id,
      FirstName: data[0].FirstName || "",
      LastName: data[0].LastName || "",
      Phone: data[0].Phone || "",
      Address: data[0].Address || "",
      Email: data[0].Email || "",
      Bank_Name: data[0].Bank_Name || "",
      Account_Number: data[0].Account_Number || "",
      IFSC_Code: data[0].IFSC_Code || "",
    },

    validationSchema: Yup.object().shape({
      FirstName: Yup.string().required("First Name is required"),
      LastName: Yup.string().required("Last Name is required"),
      Phone: Yup.number().required("Phone Number is required"),
      Address: Yup.string().required("Address is required"),
      Email: Yup.string().email("invalid email").required("Email is required"),
      Bank_Name: Yup.string().required("Bank name is required"),
      Account_Number: Yup.number().required("Account Number is required"),
      IFSC_Code: Yup.string().required("IFSC Code is required"),
    }),
    onSubmit: () => {
      insertdata(formik.values);
    },
  });

  let notifyerror = (error) => toast.error(error);
  let notifysuccess = (success) => toast.success(success);

  let naviget = useNavigate();

  let insertdata = (value) => {
    axios
      .put("http://localhost:5000/update-team", value, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        if (res.data.Status === 1) {
          notifysuccess(res.data.Message);
          naviget("/team");
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
                      defaultValue={data[0].FirstName}
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
                      defaultValue={data[0].LastName}
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
                      defaultValue={data[0].Phone}
                    />
                    <div className="text-[red] my-2">{formik.errors.Phone}</div>
                  </div>
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Address</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("Address", e.target.value)
                      }
                      defaultValue={data[0].Address}
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
                      defaultValue={data[0].Email}
                    />

                    <div className="text-[red] my-2">{formik.errors.Email}</div>
                  </div>
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Bank Name</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("Bank_Name", e.target.value)
                      }
                      defaultValue={data[0].Bank_Name}
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
                      defaultValue={data[0].Account_Number}
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
                      defaultValue={data[0].IFSC_Code}
                    />
                    <div className="text-[red] my-2">
                      {formik.errors.IFSC_Code}
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
          </section>
        </section>
      </section>
      <ToastContainer />
    </>
  );
}
