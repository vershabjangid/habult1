import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
export function Register2() {
  let [joinas, setjoinas] = useState("Member");

  let location = useLocation();
  let data = location.state;
  console.log(data);

  let notifyerror = (error) => toast.error(error);

  let naviget = useNavigate();

  let formik = useFormik({
    initialValues: {
      FirstName: data.FirstName,
      LastName: data.LastName,
      Email: data.Email,
      Phone: data.Phone,
      Join_as: "",
      Password: "",
      ConfirmPassword: "",
    },

    validationSchema: Yup.object().shape({
      Password: Yup.string().required("Password is required"),
      ConfirmPassword: Yup.string().required("Confirm Password is required"),
    }),

    onSubmit: () => {
      if (formik.values.Password !== formik.values.ConfirmPassword) {
        notifyerror("Incorrect Password");
      } else {
        formik.values.Join_as = joinas;
        axios
          .post("https://api.hivexv.com/register", formik.values)
          .then((res) => {
            if (res.data.Status === 1) {
              naviget("/register-otp", { state: formik.values });
            } else {
              notifyerror(res.data.Message);
            }
          });
      }
    },
  });

  return (
    <>
      <section className="login_page bg-[black] w-[100%] h-[100vh] flex justify-center items-center">
        <div className="login_inner w-[500px] text-[black] bg-[#ffffff] border-[3px] border-[#e02708] p-3 rounded-[10px] bg-[#000000]">
          <img src={logo} alt="" className="w-[150px] m-auto" />

          <h1 className="text-center text-[35px] font-[600] mb-5">SIGNUP</h1>

          <form onSubmit={formik.handleSubmit}>
            <div>
              <label>Join as</label>
              <div className="w-[100%] rounded-[5px] bg-[black] text-white text-center flex">
                <div
                  className={
                    joinas === "Member"
                      ? "w-[50%] py-4 font-[500] border-b-[5px] border-[#e02708]"
                      : "w-[50%] py-4 font-[500]"
                  }
                  onClick={() => setjoinas("Member")}
                >
                  <p>Member</p>
                </div>
                <div
                  className={
                    joinas === "Startup"
                      ? "w-[50%] py-4 font-[500] border-b-[5px] border-[#e02708]"
                      : "w-[50%] py-4 font-[500]"
                  }
                  onClick={() => setjoinas("Startup")}
                >
                  <p>Startup</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label>Password</label>
              <input
                type="Password"
                className="w-[100%] p-[10px] rounded-[5px] my-2 border-[1px] border-[black]"
                onChange={(e) =>
                  formik.setFieldValue("Password", e.target.value)
                }
              />
              <div className="text-[red]">{formik.errors.Password}</div>
            </div>

            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                className="w-[100%] p-[10px] rounded-[5px] my-2 border-[1px] border-[black]"
                onChange={(e) =>
                  formik.setFieldValue("ConfirmPassword", e.target.value)
                }
              />
              <div className="text-[red]">{formik.errors.ConfirmPassword}</div>
            </div>

            <button className="w-[100%] my-3 py-[10px] rounded-[5px] bg-[#e02708] text-[25px] text-white font-[600]">
              Register
            </button>

            <div className="my-1 text-center">
              <p>
                Already have an account{" "}
                <Link to={"/login"}>
                  <span className="font-[700]">LOGIN</span>
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
