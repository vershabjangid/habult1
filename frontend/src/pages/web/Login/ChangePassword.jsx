import { useFormik } from "formik";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import axios from "axios";

export function ChangePassword() {
  let location = useLocation();
  let data = location.state;

  let notifyerror = (error) => toast.error(error);

  let formik = useFormik({
    initialValues: {
      Email: data.Email,
      Password: "",
      New_Password: "",
    },

    onSubmit: () => {
      if (formik.values.Password === formik.values.New_Password) {
        updatepassword(formik.values);
      } else {
        notifyerror("Incorrect Password");
      }
    },
  });

  let naviget = useNavigate();
  let updatepassword = (value) => {
    axios
      .put("https://api.hivexv.com/change-password", value)
      .then((res) => {
        if (res.data.Status === 1) {
          naviget("/");
        } else {
          notifyerror("Cannot Change Password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <section className="login_page bg-[black] w-[100%] h-[100vh] flex justify-center items-center">
        <div className="login_inner w-[500px] text-[black] bg-[#ffffff] border-[3px] border-[#e02708] p-3 rounded-[10px] bg-[#000000]">
          <img src={logo} alt="" className="w-[150px] m-auto" />

          <h1 className="text-center text-[35px] font-[600] mb-5">
            Change Password
          </h1>

          <form onSubmit={formik.handleSubmit}>
            <div>
              <label className="font-[500]">New Password</label>
              <input
                type="password"
                className="w-[100%] p-[10px] rounded-[5px] my-2 border-[1px] border-[black]"
                onChange={(e) =>
                  formik.setFieldValue("Password", e.target.value)
                }
              />
            </div>

            <div>
              <label className="font-[500]">Confirm Password</label>
              <input
                type="password"
                className="w-[100%] p-[10px] rounded-[5px] my-2 border-[1px] border-[black]"
                onChange={(e) =>
                  formik.setFieldValue("New_Password", e.target.value)
                }
              />
            </div>

            <button
              type="submit"
              className="w-[100%] my-3 py-[10px] rounded-[5px] bg-[#e02708] text-[25px] text-white font-[600]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
