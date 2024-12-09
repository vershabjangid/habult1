import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Sidebar } from "../../common/Sidebar";
import axios, { toFormData } from "axios";
import { useNavigate } from "react-router-dom";

export function DashRequests() {
  let notifysuccess = (success) => toast.success(success);

  let [requests, setrequests] = useState([]);
  let [data, setdata] = useState([]);
  let viewrequests = () => {
    axios
      .get("https://api.hivexv.com/view-register", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        setdata(res.data);
        setrequests(
          res.data.filter(
            (items) =>
              items.Is_Verified === true &&
              items.All_Fields === true &&
              items.Status == "false"
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewrequests();
  }, []);

  let filterdata = (value) => {
    setrequests(
      data.filter(
        (items) =>
          items.Join_as === value &&
          items.Is_Verified === true &&
          items.All_Fields === true &&
          items.Status === "Accept"
      )
    );
  };

  let filterunverified = (value) => {
    setrequests(
      data.filter(
        (items) =>
          (items.Is_Verified === false && items.All_Fields === false) ||
          (items.Is_Verified === true && items.All_Fields === false)
      )
    );
  };

  let filtertrending = (value) => {
    setrequests(data.filter((items) => items.Status === value));
  };

  let naviget = useNavigate();
  let viewprofile = (value) => {
    naviget("/view-profile", { state: value });
  };

  let [deletemodal, setdeletemodal] = useState(false);
  let [deletedata, setdeletedata] = useState("");

  let deleteinvestor = (value) => {
    let data = {
      _id: value._id,
    };

    console.log(value)

    axios
      .delete("http://localhost:5000/delete-investors",{data : value}, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        }
      })
      .then((res) => {
        notifysuccess(res.data.Message);
        viewrequests();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {deletemodal ? (
        <section className="w-[100%] h-[100vh] fixed flex justify-center items-center bg-[#00000064]">
          <section className="w-[600px] border-[3px] p-[5px] py-[20px] rounded-[15px] bg-[white]">
            <h1 className="text-center text-[25px]">
              Are you sure to want delete
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
                  deleteinvestor(deletedata) || setdeletemodal(false)
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
              <h1>Requests</h1>
            </section>

            <section className="w-[90%]">
              <section className="page_label w-[100%] my-2 rounded-[10px] p-2 text-[white] font-[600] text-[18px] text-end">
                <div className="w-[100%]">
                  <button
                    className="bg-[#e02708] py-2 px-3 mx-2 rounded-[10px]"
                    onClick={() => viewrequests()}
                  >
                    New Requests
                  </button>

                  <button
                    className="bg-[#e02708] py-2 px-3 mx-2 rounded-[10px]"
                    onClick={() => filterdata("Member")}
                  >
                    Members
                  </button>

                  <button
                    className="bg-[#e02708] py-2 px-3 mx-2 rounded-[10px]"
                    onClick={() => filterdata("Startup")}
                  >
                    Startups
                  </button>

                  <button
                    className="bg-[#e02708] py-2 px-3 mx-2 rounded-[10px]"
                    onClick={() => filtertrending("trending")}
                  >
                    Trending
                  </button>

                  <button
                    className="bg-[#e02708] py-2 px-3 mx-2 rounded-[10px]"
                    onClick={() => filterunverified(false)}
                  >
                    Un-Verified
                  </button>
                </div>
              </section>
            </section>

            <section className="w-[90%]">
              <section className="page_label w-[100%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                <div>
                  <p>View Requests</p>
                </div>

                <div className="w-[100%] my-5">
                  <table className="w-[100%] border-[1px] border-black">
                    <tr className="">
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        Join as
                      </th>

                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        Name
                      </th>
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        Email
                      </th>
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        Phone
                      </th>
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        View Profile
                      </th>
                      <th className="text-[#113c11] text-[15px] font-[500]">
                        {" "}
                        Delete
                      </th>
                    </tr>
                    {requests.map((items, index) => {
                      return (
                        <>
                          <tr className="border-t-[1px] border-black">
                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {items.Join_as}
                            </td>

                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {items.FirstName} {items.LastName}
                            </td>

                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {items.Email}
                            </td>
                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {items.Phone}
                            </td>

                            <td className=" text-center text-[#113c11] text-[15px] font-[500]">
                              {" "}
                              <div
                                className="w-[150px] mx-auto my-2 py-2 px-6 rounded-[15px] text-white bg-[green]"
                                onClick={() => viewprofile(items)}
                              >
                                View Profile
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
