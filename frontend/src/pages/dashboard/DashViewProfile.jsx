import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Sidebar } from "../../common/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaDownload } from "react-icons/fa";

export function DashViewProfile() {
  let location = useLocation();
  let data = location.state;

  let [registerdata, setregisterdata] = useState([]);
  let [imgurl, setimgurl] = useState("");
  console.log(imgurl);

  console.log(registerdata);
  let viewdata = () => {
    axios
      .get("https://api.hivexv.com/view-investors")
      .then((res) => {
        setimgurl(res.data.imgurl);
        setregisterdata(
          res.data.viewdata.filter((items) => data.Email === items.Email)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewdata();
  }, []);

  let notifyerror = (error) => toast.error(error);
  let naviget = useNavigate();
  let updatestatus = (value) => {
    axios.put("https://api.hivexv.com/update-status", value).then((res) => {
      if (res.data.Status === 1) {
        naviget("/requests");
      } else {
        notifyerror(res.data.Message);
      }
    });
  };
  return (
    <>
      <section className="main border-[1px] border-[black] bg-[black]">
        <section className="dashboard_inner w-[100%] flex justify-between">
          <Sidebar />

          <section className="w-[90%] h-[100vh] rounded-s-[35px] flex items-center flex-col bg-[white] border-[1px] border-[white] overflow-y-scroll">
            <section className="page_label w-[90%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[30px]">
              <h1>View Profile</h1>
            </section>

            {registerdata.length === 0 ? (
              <>
                <div className="text-[30px]">No Data Found</div>
                <div className="text-[30px]">User Doesn't Fill The Form</div>
              </>
            ) : (
              <section className="w-[90%]">
                <section className="page_label w-[100%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                  <div>
                    <p>
                      {data.FirstName} {data.LastName}'s Profile
                    </p>
                  </div>

                  <div className="my-3 border-[1px] border-[black] text-black text-[18px]">
                    <div className="my-3">
                      <p>
                        Name : {data.FirstName} {data.LastName}
                      </p>
                    </div>

                    <div className="my-3">
                      <p>Email : {data.Email}</p>
                    </div>

                    <div className="my-3">
                      <p>Phone : {data.Phone}</p>
                    </div>

                    <div className="my-3">
                      <p>Join as : {data.Join_as}</p>
                    </div>

                    {registerdata.map((items, index) => {
                      if (registerdata.length === 0) {
                        return (
                          <>
                            <div className="text-black text-center my-5">
                              User Doesn't Fill form
                            </div>
                            ;
                          </>
                        );
                      } else {
                        return (
                          <>
                            <div className="my-3">
                              <p>Address : {items.Address}</p>
                            </div>

                            <div className="my-5 text-[30px]">
                              <p>Bank Information</p>
                            </div>

                            <div className="my-3">
                              <p>Bank Name : {items.Bank_Name}</p>
                            </div>

                            <div className="my-3">
                              <p>Account Number : {items.Account_Number}</p>
                            </div>

                            <div className="my-3">
                              <p>IFSC Code : {items.IFSC_Code}</p>
                            </div>

                            <div className="my-5 text-[30px]">
                              <p>Verification Documents</p>
                            </div>

                            <div className="w-[100%] text-white flex">
                              <a
                                href={imgurl + items.PanCard}
                                download={imgurl + items.PanCard}
                              >
                                <button className="bg-[#e02708] w-[150px] p-2 py-4 rounded-[10px] flex justify-between items-center">
                                  Pan Card <FaDownload />
                                </button>
                              </a>

                              <a
                                href={imgurl + items.AadhaarCard}
                                className="ms-2"
                              >
                                <button className="bg-[#e02708] w-[150px] p-2 py-4 rounded-[10px] flex justify-between items-center">
                                  Aadhar Card <FaDownload />
                                </button>
                              </a>

                              <a
                                href={imgurl + items.Bank_Proof}
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
                                onClick={() => updatestatus(items)}
                              >
                                Accept
                              </button>

                              <button className="bg-[red] w-[150px] p-2 py-4 rounded-[10px] ms-2 items-center">
                                Reject
                              </button>
                            </div>
                          </>
                        );
                      }
                    })}
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
