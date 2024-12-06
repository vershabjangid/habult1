import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import axios from "axios";
export function ForgotPassword() {
  let formik = useFormik({
    initialValues: {
      Email: "",
    },

    onSubmit: () => {
      insertdata(formik.values);
    },
  });

  let notifyerror = (error) => toast.error(error);
  let notifysuccess = (success) => toast.success(success);

  let insertdata = (value) => {
    axios
      .post("https://api.hivexv.com/forgot-password", value)
      .then((res) => {
        if (res.data.Status !== 0) {
          notifysuccess("hello");
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
      <section className="login_page bg-[black] w-[100%] h-[100vh] flex justify-center items-center">
        <div className="login_inner w-[500px] text-[black] bg-[#ffffff] border-[3px] border-[#e02708] p-3 rounded-[10px] bg-[#000000]">
          <img src={logo} alt="" className="w-[150px] m-auto" />

          <h1 className="text-center text-[35px] font-[600] mb-5">
            Forget Password
          </h1>

          <form onSubmit={formik.handleSubmit}>
            <div>
              <label className="font-[500]">Email</label>
              <input
                type="Email"
                className="w-[100%] p-[10px] rounded-[5px] my-2 border-[1px] border-[black]"
                onChange={(e) => formik.setFieldValue("Email", e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-[100%] my-3 py-[10px] rounded-[5px] bg-[#e02708] text-[25px] text-white font-[600]"
            >
              Verify
            </button>

            <div className="my-1 text-center">
              <p>
                Doesn't have an account{" "}
                <Link to={"/register"}>
                  <span className="font-[700]">REGISTER</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
