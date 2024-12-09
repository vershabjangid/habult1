import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import axios from "axios";

export function VerifyForgot() {
  const [seconds, setseconds] = useState(60);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      if (seconds > 0) {
        setseconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  let location = useLocation();
  let data = location.state;

  let formik = useFormik({
    initialValues: {
      Email: data.Email,
      OTP: "",
    },

    onSubmit: () => {
      sendotp(formik.values);
    },
  });

  let notifyerror = (error) => toast.error(error);
  //   let notifysuccess = (success) => toast.success(success);

  let naviget = useNavigate();

  let sendotp = (value) => {
    axios
      .post("https://api.hivexv.com/verify-register", value)
      .then((res) => {
        if (res.data.Status === true) {
          localStorage.setItem("forgottoken", JSON.stringify(res.data.Token));
          naviget("/change-password", { state: { Email: data.Email } });
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
            OTP - VERIFICATION
          </h1>

          <form onSubmit={formik.handleSubmit}>
            <div className="">
              <input
                type="number"
                className="border-[1px] border-[black] w-[100%] py-2 rounded-[10px] text-center"
                onChange={(e) => formik.setFieldValue("OTP", e.target.value)}
              />
            </div>

            <button type="submit" className="w-[100%] my-3 py-[10px] rounded-[5px] bg-[#e02708] text-[25px] text-white font-[600]">
              Verify
            </button>

            <div className="w-[100%] my-3 py-[10px] rounded-[5px] text-[18px] font-[500] text-center text-[black]">
              {seconds > 0 ? (
                `00:${seconds}`
              ) : (
                <p className="">
                  Unable to receive OTP{" "}
                  <span
                    className="font-[700] underline"
                    // onClick={() => resendotp(data.Email)}
                  >
                    Resend
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
