import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Sidebar } from "../../common/Sidebar";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function DashIndustry() {
  let formik = useFormik({
    initialValues: {
      Industry_Name: "",
    },

    onSubmit: () => {
      insertindustry(formik.values);
    },
  });

  let notifyerror = (error) => toast.error(error);
  let notifysuccess = (success) => toast.success(success);

  let insertindustry = (value) => {
    axios
      .post("https://api.hivexv.com/add-industry", value, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        if (res.data.Status === 1) {
          notifysuccess(res.data.Message);
          viewindustry();
        } else {
          notifyerror(res.data.Message);
        }
      });
  };

  let [getindustry, setgetindustry] = useState([]);

  let viewindustry = () => {
    axios
      .get("https://api.hivexv.com/view-industry", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        setgetindustry(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewindustry();
  }, []);

  let naviget = useNavigate();

  let updateindustry = (value) => {
    naviget("/update-industry", { state: value });
  };

  let [deletemodal, setdeletemodal] = useState(false);
  let [deletedata, setdeletedata] = useState("");

  let deleteindustry = (value) => {
    let data = {
      _id: value._id,
    };

    axios
      .delete(
        "https://api.hivexv.com/delete-industry",
        { data },
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("admintoken")),
          },
        }
      )
      .then((res) => {
        notifysuccess(res.data.Message);
        viewindustry();
      })
      .catch((error) => {
        console.log(error);
      });

    // value.preventDefault()
  };

  return (
    <>
      {deletemodal ? (
        <section className="w-[100%] h-[100vh] fixed flex justify-center items-center bg-[#00000064]">
          <section className="w-[600px] border-[3px] p-[5px] py-[20px] rounded-[15px] bg-[white]">
            <h1 className="text-center text-[25px]">
              Are you sure to want delete Industry
            </h1>

            <div className="flex justify-evenly my-[15px]">
              <button
                className="bg-[red] w-[47%] text-[20px] py-[10px] rounded text-white"
                onClick={() => setdeletemodal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[green] w-[47%] text-[20px] py-[10px] rounded text-white"
                onClick={() =>
                  deleteindustry(deletedata) || setdeletemodal(false)
                }
              >
                Delete
              </button>
            </div>
          </section>
        </section>
      ) : null}

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
                  <p>Add Industry</p>
                </div>

                <div className="text-[black]">
                  <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                    <label>Industry Name</label>
                    <input
                      type="text"
                      className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
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

            <section className="w-[90%]" onSubmit={formik.handleSubmit}>
              <section className="page_label w-[100%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                <div>
                  <p>View Industry</p>
                </div>

                <form className="w-[100%] my-5" onSubmit={formik.handleSubmit}>
                  <table className="w-[100%] border-[1px] border-black">
                    <tr className="">
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        Industry Name
                      </th>
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        Edit
                      </th>
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        Delete
                      </th>
                    </tr>
                    {getindustry.map((items) => {
                      return (
                        <>
                          <tr className="border-t-[1px] border-black">
                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {items.Industry_Name}
                            </td>
                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {" "}
                              <div
                                className="w-[150px] mx-auto my-2 py-2 px-6 rounded-[15px] text-white bg-[green]"
                                onClick={() => updateindustry(items)}
                              >
                                Edit
                              </div>
                            </td>
                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {" "}
                              <div
                                className="w-[150px] mx-auto my-2 py-2 px-6 rounded-[15px] text-white bg-[#f34141]"
                                onClick={() =>
                                  setdeletedata(items) || setdeletemodal(true)
                                }
                              >
                                Delete
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </table>
                </form>
              </section>
            </section>
          </section>
        </section>
      </section>
      <ToastContainer />
    </>
  );
}
