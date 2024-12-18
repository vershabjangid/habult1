import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/Hive_XV_Logo-removebg-preview.94d6ce75b0bdc1a4b7bf.png";
import { useFormik } from "formik";
import * as Yup from "yup";

export function Register() {
  let formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
    },
    validationSchema: Yup.object().shape({
      FirstName: Yup.string().required("First name is required"),
      LastName: Yup.string().required("Last name is required"),
      Email: Yup.string().email("Invalid Email").required("Email is required"),
      Phone: Yup.number()
        .min(1000000000, "Too Short!")
        .max(9999999999, "Too Long!")
        .required("Phone is required"),
    }),

    onSubmit: () => {
      insertdata(formik.values);
    },
  });

  let naviget = useNavigate();
  
  let insertdata = (value) => {
    naviget("/register2", { state: value });
  };

  return (
    <>
      <section className="login_page bg-[black] w-[100%] h-[100vh] flex justify-center items-center">
        <div className="login_inner w-[500px] text-[black] bg-[#ffffff] border-[3px] border-[#e02708] p-3 rounded-[10px] bg-[#000000]">
          <img src={logo} alt="" className="w-[150px] m-auto" />

          <h1 className="text-center text-[35px] font-[600] mb-5">SIGNUP</h1>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-between">
              <div className="w-[49%]">
                <label>First Name</label>
                <input
                  type="text"
                  className="w-[100%] p-[10px] rounded-[5px] my-2 border-[1px] border-[black]"
                  onChange={(e) =>
                    formik.setFieldValue("FirstName", e.target.value)
                  }
                />
                <div className="text-[red]">{formik.errors.FirstName}</div>
              </div>

              <div className="w-[49%]">
                <label>Last Name</label>
                <input
                  type="text"
                  className="w-[100%] p-[10px] rounded-[5px] my-2 border-[1px] border-[black]"
                  onChange={(e) =>
                    formik.setFieldValue("LastName", e.target.value)
                  }
                />
                <div className="text-[red]">{formik.errors.LastName}</div>
              </div>
            </div>

            <div>
              <label>Email</label>
              <input
                type="Email"
                className="w-[100%] p-[10px] rounded-[5px] my-2 border-[1px] border-[black]"
                onChange={(e) => formik.setFieldValue("Email", e.target.value)}
              />
              <div className="text-[red]">{formik.errors.Email}</div>
            </div>

            <div>
              <label>Phone</label>
              <input
                type="number"
                className="w-[100%] p-[10px] rounded-[5px] my-2 border-[1px] border-[black]"
                onChange={(e) => formik.setFieldValue("Phone", e.target.value)}
              />
              <div className="text-[red]">{formik.errors.Phone}</div>
            </div>

            <button
              type="submit"
              className="w-[100%] my-3 py-[10px] rounded-[5px] bg-[#e02708] text-[25px] text-white font-[600]"
            >
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
    </>
  );
}
