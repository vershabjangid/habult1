import React from "react";
import { Sidebar } from "../../common/Sidebar";
import { useFormik } from "formik";
import axios, { toFormData } from "axios";
import { toast, ToastContainer } from "react-toastify";

export function DashHome() {
  let formik = useFormik({
    initialValues: {
      HomeHeading:"",
      HomeSubHeading:"",
      HomeParagraph:"",
      HomeBanner:"",
    },

    onSubmit: () => {
      insertdata(formik.values);
    },
  });

  let notifyerror = (error) => toast.error(error);
  let notifysuccess = (success) => toast.success(success);

  let insertdata = (value) => {
    axios.post("https://api.hivexv.com/add-admin-home", toFormData(value),{
      headers : {
        Authorization : JSON.parse(localStorage.getItem('admintoken'))
      }
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
            <form className="w-[90%]" onSubmit={formik.handleSubmit}>
              <section className="page_label w-[100%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                <div>
                  <p>Home Banner</p>
                </div>

                <div className="text-[black]">
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Heading</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("HomeHeading", e.target.value)
                      }
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Sub - Heading</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("HomeSubHeading", e.target.value)
                      }
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Paragraph</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("HomeParagraph", e.target.value)
                      }
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Banner Image</label>
                    <input
                      type="file"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("HomeBanner", e.target.files[0])
                      }
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <button
                      type="submit"
                      className="w-[200px] my-2 bg-[#e02708] text-[white] py-3 rounded"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </section>

              <section className="page_label w-[100%] mt-[50px] rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                <p>About Us</p>
    
                <div className="text-[black]">
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Heading</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("About_Heading", e.target.value)
                      }
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Sub - Heading</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("About_SubHeading", e.target.value)
                      }
                    />
                  </div>
    

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Paragraph</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("About_Paragraph", e.target.value)
                      }
                    />
                  </div>

                
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Paragraph2 ('Optional')</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("About_Paragraph1", e.target.value)
                      }
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Banner Image</label>
                    <input
                      type="file"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                      onChange={(e) =>
                        formik.setFieldValue("About_BannerImage", e.target.files[0])
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

              <section className="page_label w-[100%] mt-[50px] rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                <p>Why Choose Us</p>

                <div className="text-[black]">
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Heading</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Paragraph</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Icon Image</label>
                    <input
                      type="file"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <button className="w-[200px] my-2 bg-[#e02708] text-[white] py-3 rounded">
                      Save
                    </button>
                  </div>
                </div>
              </section>

              <section className="page_label w-[100%] mt-[50px] rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                <p>Faq ( Frequently Asked Questions )</p>

                <div className="text-[black]">
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Question</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Answer</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <button className="w-[200px] my-2 bg-[#e02708] text-[white] py-3 rounded">
                      Save
                    </button>
                  </div>
                </div>
              </section>

              <section className="page_label w-[100%] my-[50px] rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                <p>Contact Us</p>

                <div className="text-[black]">
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Head Icon</label>
                    <input
                      type="file"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Paragraph</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Phone</label>
                    <input
                      type="number"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Email</label>
                    <input
                      type="email"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                    />
                  </div>

                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Location</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
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
          </section>
        </section>
      </section>
      <ToastContainer />
    </>
  );
}
