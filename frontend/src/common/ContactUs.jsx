import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationPin, FaMessage } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
export function ContactUs1() {
  let formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Phone: "",
      Message: "",
    },

    validationSchema: Yup.object().shape({
      Name: Yup.string().required("Name is required"),
      Email: Yup.string().email("Invalid Email").required("Name is required"),
      Phone: Yup.number()
        .max(9999999999, "Invalid Phone")
        .required("Phone is required"),
      Message: Yup.string().required("Message is required"),
    }),

    onSubmit: () => {
      insertdata(formik.values);
    },
  });

  let notifysuccess = (success) => toast.success(success);
  let notifyerror = (error) => toast.error(error);

  let insertdata = (value) => {
    axios
      .post("https://api.hivexv.com/Contact-Us", value)
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
      <section className="landing_section bg-[white]">
        <section className="landing_section w-[100%] flex">
          <section className=" w-[100%] h-[100%] text-start text-[black] px-5 flex justify-center flex-col mt-2">
            <section className=" flex justify-between flex-wrap">
              <section className=" w-[100%] my-[20px] p-3 py-[50px] bg-[white] rounded-[10px]">
                <div className="ms-[65px] flex justify-center items-center mb-2">
                  <div className="icon_section mb-5 w-[400px] me-2 rounded-[10px] bg-[#e02708]">
                    <h1 className="landing_heading text-[50px] text-center font-[500] ms-3 text-[white]">
                      Contact Us
                    </h1>
                  </div>
                </div>

                <div className="contact_inner w-[100%] flex justify-evenly">
                  <div className="w-[47%] text-justify">
                    <h2 className=" text-[40px] text-start font-[500] py-3  rounded-[10px] text-center">
                      We're Here to Help
                    </h2>
                    <p>
                      At Hivexv.com, we're committed to providing seamless
                      support to both startups and investors. Whether you have
                      questions about how the platform works, need assistance
                      with your profile, or want to learn more about the
                      services we offer, our team is ready to assist you.
                    </p>

                    <p className="my-4">
                      Feel free to reach out to us through any of the following
                      channels, and we'll get back to you as soon as possible.
                      Your success is our priority, and we’re here to ensure you
                      have the best experience on Hivexv.com.
                    </p>

                    <p className="my-5 flex items-center">
                      <FaPhone className=" rotate-[90deg] me-3 text-[30px]" />{" "}
                      <span>+91 8005960160</span>
                    </p>

                    <p className="my-5 flex items-center">
                      <FaMessage className=" me-3 text-[30px]" />{" "}
                      <span>info@hubalt.in</span>
                    </p>

                    <p className="my-5 flex items-center">
                      <FaLocationPin className=" me-3 text-[30px]" />{" "}
                      <span>istart nest jodhpur, rajasthan</span>
                    </p>
                  </div>

                  <div className="w-[43%] flex justify-center">
                    <form className="w-[100%] text-start" onSubmit={formik.handleSubmit}>
                      <div className="w-[100%]">
                        <label>Name</label>
                        <input
                          type="text"
                          className="w-[100%] py-2 rounded-[10px] border-[1px] border-[black] p-2 mt-2"
                          onChange={(e) =>
                            formik.setFieldValue("Name", e.target.value)
                          }
                        />
                        <div className="text-[red]">{formik.errors.Name}</div>
                      </div>

                      <div className="w-[100%]">
                        <label>Email</label>
                        <input
                          type="email"
                          className="w-[100%] py-2 rounded-[10px] border-[1px] border-[black] p-2 mt-2"
                          onChange={(e) =>
                            formik.setFieldValue("Email", e.target.value)
                          }
                        />
                        <div className="text-[red]">{formik.errors.Email}</div>
                      </div>

                      <div className="w-[100%]">
                        <label>Phone</label>
                        <input
                          type="number"
                          className="w-[100%] py-2 rounded-[10px] border-[1px] border-[black] p-2 mt-2"
                          onChange={(e) =>
                            formik.setFieldValue("Phone", e.target.value)
                          }
                        />
                        <div className="text-[red]">{formik.errors.Phone}</div>
                      </div>

                      <div className="w-[100%]">
                        <label>Message</label>
                        <textarea
                          className="w-[100%] h-[200px] py-2 rounded-[10px] border-[1px] border-[black] p-2 mt-2"
                          onChange={(e) =>
                            formik.setFieldValue("Message", e.target.value)
                          }
                        />
                        <div className="text-[red]">
                          {formik.errors.Message}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="my-5 w-[100%] rounded-[10px] text-[white] py-3 bg-[#e02708]"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
      <ToastContainer />
    </>
  );
}
