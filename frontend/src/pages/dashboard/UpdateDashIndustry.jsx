import { useFormik } from "formik";
import React from "react";
import { Sidebar } from "../../common/Sidebar";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";

export function UpdateDashIndustry() {
  let location = useLocation();
  let data = location.state;
  console.log(data);

  let formik = useFormik({
    initialValues: {
      _id: data._id,
      Industry_Name: "",
    },

    onSubmit: () => {
      updatedata(formik.values);
    },
  });

  let notifyerror = (error) => toast.error(error);
  let notifysuccess = (success) => toast.success(success);

  let updatedata = (value) => {
    axios
      .put("https://api.hivexv.com/update-industry", value, {
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
              <h1>Industry</h1>
            </section>
            <form className="w-[90%]" onSubmit={formik.handleSubmit}>
              <section className="page_label w-[100%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                <div>
                  <p>Update Industry</p>
                </div>

                <div className="text-[black]">
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Industry Name</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      defaultValue={data.Industry_Name}
                      onChange={(e) =>
                        formik.setFieldValue("Industry_Name", e.target.value)
                      }
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <button className="w-[200px] my-2 bg-[#e02708] text-[white] py-3 rounded-[10px]">
                      Save
                    </button>
                  </div>
                </div>
              </section>
            </form>
          </section>
        </section>
      </section>
      <ToastContainer />
    </>
  );
}
