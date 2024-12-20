import axios, { toFormData } from "axios";
import { useFormik } from "formik";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

export function DashAboutOurMission() {
  let formik = useFormik({
    initialValues: {
      WhyChooseParagraph: "",
      WhyChooseBanner: "",
    },

    onSubmit: () => {
      insertdata(formik.values);
    },
  });

  let notifyerror = (error) => toast.error(error);
  let notifysuccess = (success) => toast.success(success);

  let insertdata = (value) => {
    axios
      .post("https://api.hivexv.com/add-about-ourmission", toFormData(value), {
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
      <form className="w-[90%]" onSubmit={formik.handleSubmit}>
        <section className="page_label w-[100%] mt-[50px] rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
          <p>Our mission</p>

          <div className="text-[black]">
            <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
              <label>Paragraph</label>
              <input
                type="text"
                className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                onChange={(e) =>
                  formik.setFieldValue("WhyChooseParagraph", e.target.value)
                }
              />
            </div>

            <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
              <label>Section Image</label>
              <input
                type="file"
                className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                onChange={(e) =>
                  formik.setFieldValue("WhyChooseBanner", e.target.files[0])
                }
              />
            </div>

            <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
              <button className="w-[200px] my-2 bg-[#e02708] text-[white] py-3 rounded">
                Save
              </button>
            </div>
          </div>
        </section>
      </form>
      {/* <ToastContainer /> */}
    </>
  );
}
