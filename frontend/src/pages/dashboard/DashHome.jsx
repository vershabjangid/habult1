import React from "react";
import { Sidebar } from "../../common/Sidebar";
import { useFormik } from "formik";
import axios, { toFormData } from "axios";
import { toast, ToastContainer } from "react-toastify";
import { HomeBanner } from "./DashHome/HomeBanner";
import { HomeAbout } from "./DashHome/HomeAbout";
import { HomeWhyChoose } from "./DashHome/HomeWhyChoose";

export function DashHome() {
  let formik = useFormik({
    initialValues: {
      HomeHeading: "",
      HomeSubHeading: "",
      HomeParagraph: "",
      HomeBanner: "",
    },

    onSubmit: () => {
      insertdata(formik.values);
    },
  });

  let notifyerror = (error) => toast.error(error);
  let notifysuccess = (success) => toast.success(success);

  let insertdata = (value) => {
    axios
      .post("https://api.hivexv.com/add-admin-home", toFormData(value), {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        if (res.data.Status === 1) {
          notifysuccess(res.data.Message);
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
              <h1>Home</h1>
            </section>

            <HomeBanner />
            <HomeAbout />
            <HomeWhyChoose />
          </section>
        </section>
      </section>
      <ToastContainer />
    </>
  );
}
