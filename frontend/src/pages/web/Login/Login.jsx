import React from "react";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";

export function Login() {
  let notifyerror = (error) => toast.error(error);

  let formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },

    onSubmit: () => {
      insertdata(formik.values);
    },
  });

  let naviget = useNavigate();

  let insertdata = (value) => {
    axios
      .post("https://api.hivexv.com/login", value)
      .then((res) => {
        if (res.data.Status !== 0) {
          localStorage.setItem("logintoken", JSON.stringify(res.data.Token));
          naviget("/user-panel", { state: res.data });
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

          <h1 className="text-center text-[35px] font-[600] mb-5">LOGIN</h1>

          <form onSubmit={formik.handleSubmit}>
            <div>
              <label className="font-[500]">Email</label>
              <input
                type="Email"
                className="w-[100%] p-[10px] rounded-[5px] my-2 border-[1px] border-[black]"
                onChange={(e) => formik.setFieldValue("Email", e.target.value)}
              />
            </div>

            <div>
              <label className="font-[500]">Password</label>
              <input
                type="password"
                className="w-[100%] p-[10px] rounded-[5px] my-2 border-[1px] border-[black]"
                onChange={(e) =>
                  formik.setFieldValue("Password", e.target.value)
                }
              />
            </div>

            <div className="my-1 text-end">
              <Link to={"/forgot-password"}>
                <p className="font-[600]">Forget Password?</p>
              </Link>
            </div>

            <button
              type="submit"
              className="w-[100%] my-3 py-[10px] rounded-[5px] bg-[#e02708] text-[25px] text-white font-[600]"
            >
              Login
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
