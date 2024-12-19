import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Sidebar } from "../../common/Sidebar";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export function UpdateDashFaq() {
  let location = useLocation();
  let data = location.state;

  let formik = useFormik({
    initialValues: {
      _id: data._id,
      Question: data.Question || "",
      Answer: data.Answer || "",
    },

    onSubmit: () => {
      updatedata(formik.values);
    },
  });

  let notifyerror = (error) => toast.error(error);
  let notifysuccess = (success) => toast.success(success);

  let naviget = useNavigate();
  let updatedata = (value) => {
    axios
      .put("https://api.hivexv.com/update-faq", value,{
        headers:{
          Authorization : JSON.parse(localStorage.getItem('webtoken'))
        }
      })
      .then((res) => {
        if (res.data.Status === 1) {
          notifysuccess(res.data.Message);
          naviget("/faq");
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
              <h1>Faq</h1>
            </section>
            <form className="w-[90%]" onSubmit={formik.handleSubmit}>
              <section className="page_label w-[100%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                <div>
                  <p>Update Faq</p>
                </div>

                <div className="text-[black]">
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Question</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      defaultValue={data.Question}
                      onChange={(e) =>
                        formik.setFieldValue("Question", e.target.value)
                      }
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Answer</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      defaultValue={data.Answer}
                      onChange={(e) =>
                        formik.setFieldValue("Answer", e.target.value)
                      }
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <button
                      type="submit"
                      className="w-[200px] my-2 bg-[#e02708] text-[white] py-3 rounded-[10px]"
                    >
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
