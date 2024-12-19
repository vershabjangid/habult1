import axios, { toFormData } from "axios";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";

export function HomeBanner() {
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
      </form>
    </>
  );
}
