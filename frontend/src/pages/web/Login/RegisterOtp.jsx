import { useFormik } from "formik";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import axios from "axios";

export function RegisterOtp() {
  let location = useLocation();
  let data = location.state;

  console.log(data);

  let formik = useFormik({
    initialValues: {
      otpvalue: "",
    },
  });

  let notifyerror = (error) => toast.error(error);
  let notifysuccess = (success) => toast.success(success);

  let sendotp = () => {
    let Email = data.Email;
    axios.post("http://localhost:5000/register-otp", {Email})
    .then((res) => {
      if (res.data.Status === 0) {
        notifyerror(res.data.Message);
      } else {
        notifysuccess("OTP Sended Successfully");
      }
    })
    .catch((error)=>{
        console.log(error)
    })
  };
  return (
    <>
      <section
        className="login_page bg-[black] w-[100%] h-[100vh] flex justify-center items-center"
        onLoad={sendotp}
      >
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
              />
            </div>

            <button className="w-[100%] my-3 py-[10px] rounded-[5px] bg-[#e02708] text-[25px] text-white font-[600]">
              Verify
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
