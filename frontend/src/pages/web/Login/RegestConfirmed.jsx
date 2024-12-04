import React from "react";
import { ToastContainer } from "react-toastify";
import logo from "../../../images/verified-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";

export function RegestConfirmed() {
  let naviget = useNavigate();
  setTimeout(() => {
    naviget("/login");
  }, 5000);
  return (
    <>
      <section className="login_page w-[100%] h-[100vh] py-3 px-2 flex justify-center items-center">
        <div className="login_inner w-[700px] text-[black]">
          <div className="flex items-center justify-center flex-col bg-[#ffffff] border-[3px] border-[#e02708] p-3 rounded-[10px]">
            <img src={logo} alt="" className="w-[180px]" />

            <h1 className="text-[35px] font-[600]">Request Submitted</h1>

            <p className="w-[80%] my-5 text-[20px] text-center">
              Your request has been submitted for verification. Once the
              verification is complete, we will begin your services
            </p>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
