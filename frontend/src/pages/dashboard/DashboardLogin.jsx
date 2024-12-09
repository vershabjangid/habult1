import React from "react";
import logo from "../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
export function DashboardLogin() {
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

  let notifyerror = (error) => toast.error(error);

  let insertdata = (value) => {
    axios.post("https://api.hivexv.com/admin-login", value).then((res) => {
      if (res.data.Status === 1) {
        localStorage.setItem("admintoken", JSON.stringify(res.data.Token));
        naviget("/dashboard");
      } else {
        notifyerror(res.data.Message);
      }
    });
  };
  return (
    <>
      <section className="dashboard_login_page w-[100%] h-[100vh] flex justify-center items-center">
        <div className="dashboard_login_inner w-[500px] text-[white] border-[3px] border-[#e02708] p-3 rounded-[10px] bg-[#000000]">
          <img src={logo} alt="" className="w-[150px] m-auto" />

          <h1 className="text-center text-[35px] font-[600] mb-5">
            Dashboard Login
          </h1>

          <form onSubmit={formik.handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="Email"
                className="w-[100%] p-[10px] rounded-[5px] my-2 bg-[black] border-[1px] border-[white]"
                onChange={(e) => formik.setFieldValue("Email", e.target.value)}
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                className="w-[100%] p-[10px] rounded-[5px] my-2 bg-[black] border-[1px] border-[white]"
                onChange={(e) =>
                  formik.setFieldValue("Password", e.target.value)
                }
              />
            </div>

            <button className="w-[100%] my-3 py-[10px] rounded-[5px] bg-[#e02708] text-[25px]">
              Login
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
