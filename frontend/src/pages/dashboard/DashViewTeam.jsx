import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Sidebar } from "../../common/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import axios from "axios";

export function DashViewTeam() {
  let location = useLocation();
  let data = location.state;

  let naviget = useNavigate();
  let updatenaviget = (value) => {
    naviget("/update-team-profile", { state: value });
  };

  let [deletemodal, setdeletemodal] = useState(false);
  let [deletedata, setdeletedata] = useState("");

  let deleteteam = (value) => {
    axios
      .delete("http://localhost:5000/delete-team", {
        data: value,
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        naviget("/team");
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
                onClick={() => deleteteam(deletedata) || setdeletemodal(false)}
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
              <h1>View Profile</h1>
            </section>

            {data[0].length === 0 ? (
              <>
                <div className="text-[30px]">No Data Found</div>
                <div className="text-[30px]">User Doesn't Fill The Form</div>
              </>
            ) : (
              <section className="w-[90%]">
                <section className="page_label w-[100%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                  <div>
                    <p>
                      {data[0].FirstName} {data[0].LastName}'s Profile
                    </p>
                  </div>

                  <div className="my-3 border-[1px] border-[black] text-black text-[18px]">
                    <div className="my-3">
                      <p>
                        Name : {data[0].FirstName} {data[0].LastName}
                      </p>
                    </div>

                    <div className="my-3">
                      <p>Email : {data[0].Email}</p>
                    </div>

                    <div className="my-3">
                      <p>Phone : {data[0].Phone}</p>
                    </div>

                    {data.length === 0 ? (
                      <>
                        <div className="text-black text-center my-5">
                          User Doesn't Fill form
                        </div>
                        ;
                      </>
                    ) : (
                      <>
                        <div className="my-3">
                          <p>Address : {data[0].Address}</p>
                        </div>

                        <div className="my-5 text-[30px]">
                          <p>Bank Information</p>
                        </div>

                        <div className="my-3">
                          <p>Bank Name : {data[0].Bank_Name}</p>
                        </div>

                        <div className="my-3">
                          <p>Account Number : {data[0].Account_Number}</p>
                        </div>

                        <div className="my-3">
                          <p>IFSC Code : {data[0].IFSC_Code}</p>
                        </div>
                        <div className="my-3">
                          <p>Code : {data[0].Profile_Id}</p>
                        </div>

                        <div className="my-5 text-[30px]">
                          <p>Verification Documents</p>
                        </div>

                        <div className="w-[100%] text-white flex">
                          <a
                            href={data[1] + data[0].PanCard}
                            download={data[1] + data[0].PanCard}
                          >
                            <button className="bg-[#e02708] w-[150px] p-2 py-4 rounded-[10px] flex justify-between items-center">
                              Pan Card <FaDownload />
                            </button>
                          </a>

                          <a
                            href={data[1] + data[0].AadhaarCard}
                            className="ms-2"
                          >
                            <button className="bg-[#e02708] w-[150px] p-2 py-4 rounded-[10px] flex justify-between items-center">
                              Aadhar Card <FaDownload />
                            </button>
                          </a>

                          <a
                            href={data[1] + data[0].Bank_Proof}
                            className="ms-2"
                          >
                            <button className="bg-[#e02708] w-[150px] p-2 py-4 rounded-[10px] flex justify-between items-center">
                              Bank Proof <FaDownload />
                            </button>
                          </a>
                        </div>
                        <div className="my-5 w-[100%] text-start flex justify-end border-[1px] text-[white] text-[20px]">
                          <button
                            className="bg-[green] w-[150px] p-2 py-4 rounded-[10px]  items-center"
                            onClick={() => updatenaviget(data)}
                          >
                            Edit
                          </button>

                          <button
                            className="bg-[red] w-[150px] p-2 py-4 rounded-[10px] ms-2 items-center"
                            onClick={() =>
                              setdeletedata(data[0]) || setdeletemodal(true)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </section>
              </section>
            )}
          </section>
        </section>
      </section>
      <ToastContainer />
    </>
  );
}
