import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Sidebar } from "../../common/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaDownload, FaRupeeSign } from "react-icons/fa";

export function DashViewProfile() {
  let location = useLocation();
  let data = location.state;

  let [registerdata, setregisterdata] = useState([]);
  let [registerdatastartups, setregisterdatastartpus] = useState([]);
  let [imgurl, setimgurl] = useState("");
  console.log(imgurl);
  console.log(registerdatastartups);

  let viewdata = () => {
    axios
      .get("https://api.hivexv.com/view-admininvestors", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
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

  let viewstartup = () => {
    axios
      .get("https://api.hivexv.com/view-adminstartup", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        setimgurl(res.data.imgurl);
        setregisterdatastartpus(
          res.data.viewdata.filter((items) => data.Email === items.Email)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewstartup();
    viewdata();
  }, []);

  let notifyerror = (error) => toast.error(error);
  let naviget = useNavigate();
  let updatestatus = (value) => {
    if (data.Join_as === "Member") {
      let data = {
        Email: value.Email,
        Status: "Accept",
      };
      axios.put("https://api.hivexv.com/update-status", data, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      });
      axios
        .put("https://api.hivexv.com/update-investor-status", data, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("admintoken")),
          },
        })
        .then((res) => {
          if (res.data.Status === 1) {
            naviget("/requests");
          } else {
            notifyerror(res.data.Message);
          }
        });
    } else {
      let data = {
        Email: value.Email,
        Status: "Accept",
      };
      axios.put("https://api.hivexv.com/update-status", data, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      });
      axios
        .put("https://api.hivexv.com/update-startup-status", data, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("admintoken")),
          },
        })
        .then((res) => {
          if (res.data.Status === 1) {
            naviget("/requests");
          } else {
            notifyerror(res.data.Message);
          }
        });
    }
  };

  let [deletemodal, setdeletemodal] = useState(false);
  let [deletedata, setdeletedata] = useState("");

  let notifysuccess = (success) => toast.success(success);

  let deleteinvestor = (value) => {
    console.log(value);

    axios.delete(
      "https://api.hivexv.com/delete-register",
      { data: value },
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      }
    )
    axios
      .delete(
        "https://api.hivexv.com/delete-investors-profile",
        { data: value },
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("admintoken")),
          },
        }
      )
      .then((res) => {
        notifysuccess(res.data.Message);
        naviget('/requests')
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
              <h1>View Profile</h1>
            </section>

            {registerdata.length === 0 && registerdatastartups.length === 0 ? (
              <>
                <div className="text-[30px]">No Data Found</div>
                <div className="text-[30px]">User Doesn't Fill The Form</div>
              </>
            ) : data.Join_as === "Member" ? (
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

                              <button
                                className="bg-[red] w-[150px] p-2 py-4 rounded-[10px] ms-2 items-center"
                                onClick={() =>
                                  setdeletedata(items) || setdeletemodal(true)
                                }
                              >
                                Delete
                              </button>
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                </section>
              </section>
            ) : (
              <section className="w-[90%]">
                <section className="page_label w-[100%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                  <div>
                    <p>
                      {data.FirstName} {data.LastName}'s Profile
                    </p>
                  </div>

                  <div className="my-3 border-[1px] border-[black] text-black text-[18px]">
                    {registerdatastartups.map((items, index) => {
                      if (registerdatastartups.length === 0) {
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
                            <div className="m-8 w-[300px]">
                              <img src={imgurl + items.Company_Logo} alt="" />
                            </div>

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

                            <div className="my-5 text-[30px]">
                              <p>Company Information</p>
                            </div>

                            <div className="my-3">
                              <p>Company Name : {items.Company_Name}</p>
                            </div>

                            <div className="my-3">
                              <p>
                                Company Description :{" "}
                                {items.Company_Description}
                              </p>
                            </div>

                            <div className="my-3">
                              <p>Highlights 1 : {items.Highlights1}</p>
                            </div>

                            <div className="my-3">
                              <p>Highlights 2: {items.Highlights2}</p>
                            </div>

                            <div className="my-3">
                              <p>Industry : {items.Industry}</p>
                            </div>

                            <div className="my-3">
                              <p>Stage : {items.Stage}</p>
                            </div>

                            <div className="my-3">
                              <p>
                                Linkedin Url :{" "}
                                <a
                                  rel="stylesheet"
                                  href={items.Linkedin_Url}
                                  className="text-[blue] underline"
                                >
                                  {items.Linkedin_Url}
                                </a>
                              </p>
                            </div>

                            <div className="my-3">
                              <p>
                                Website Url :{" "}
                                <a
                                  rel="stylesheet"
                                  href={items.Website_Url}
                                  className="text-[blue] underline"
                                >
                                  {items.Website_Url}
                                </a>
                              </p>
                            </div>

                            <div className="my-5 text-[30px]">
                              <p>Funding Information</p>
                            </div>
                            <div className="my-3">
                              <p className="flex items-center">
                                Funding Ask :<FaRupeeSign /> {items.Funding_Ask}
                              </p>
                            </div>

                            <div className="my-3">
                              <p>Equity : {items.Equity}%</p>
                            </div>

                            <div className="my-5 text-[30px]">
                              <p>Team Information</p>
                            </div>

                            <div className="w-[100%] flex justify-start">
                              <div className="bg-[black] text-white rounded-[10px] py-3">
                                <div className="w-[300px] flex justify-center items-center flex-col">
                                  <div className="w-[200px] h-[200px]  rounded-[50%] flex justify-center items-center overflow-hidden">
                                    <img
                                      src={imgurl + items.Team_Profile}
                                      alt=""
                                    />
                                  </div>

                                  <div className="w-[80%] mt-3 ">
                                    <p>Name : {items.Team_Name}</p>
                                  </div>

                                  <div className="w-[80%] mt-3 ">
                                    <p>
                                      Designation : {items.Team_Designation}
                                    </p>
                                  </div>

                                  <div className="w-[80%] my-3 ">
                                    <p>Experience : {items.Team_Experience}</p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-[black] text-white rounded-[10px] py-3 ms-3">
                                <div className="w-[300px] flex justify-center items-center flex-col">
                                  <div className="w-[200px] h-[200px] rounded-[50%] flex justify-center items-center overflow-hidden">
                                    <img
                                      src={imgurl + items.Team_Profile1}
                                      alt=""
                                    />
                                  </div>

                                  <div className="w-[80%] mt-3">
                                    <p>Name : {items.Team_Name1}</p>
                                  </div>

                                  <div className="w-[80%] mt-3">
                                    <p>
                                      Designation : {items.Team_Designation1}
                                    </p>
                                  </div>

                                  <div className="w-[80%] my-3">
                                    <p>Experience : {items.Team_Experience1}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="my-5 text-[30px]">
                              <p>Backers Information</p>
                            </div>

                            <div className="w-[100%] flex justify-start">
                              <div className="bg-[black] text-white rounded-[10px] py-3">
                                <div className="w-[300px] flex justify-center items-center flex-col">
                                  <div className="w-[200px] h-[200px]  rounded-[50%] flex justify-center items-center overflow-hidden">
                                    <img
                                      src={imgurl + items.Backers_Profile}
                                      alt=""
                                    />
                                  </div>

                                  <div className="w-[80%] mt-3 ">
                                    <p>Name : {items.Backers_Name}</p>
                                  </div>

                                  <div className="w-[80%] mt-3 ">
                                    <p>
                                      Designation : {items.Backers_Designation}
                                    </p>
                                  </div>

                                  <div className="w-[80%] my-3 ">
                                    <p>
                                      Experience : {items.Backers_Experience}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-[black] text-white rounded-[10px] py-3 ms-3">
                                <div className="w-[300px] flex justify-center items-center flex-col">
                                  <div className="w-[200px] h-[200px] rounded-[50%] flex justify-center items-center overflow-hidden">
                                    <img
                                      src={imgurl + items.Backers_Profile1}
                                      alt=""
                                    />
                                  </div>

                                  <div className="w-[80%] mt-3">
                                    <p>Name : {items.Backers_Name1}</p>
                                  </div>

                                  <div className="w-[80%] mt-3">
                                    <p>
                                      Designation : {items.Backers_Designation1}
                                    </p>
                                  </div>

                                  <div className="w-[80%] my-3">
                                    <p>
                                      Experience : {items.Backers_Experience1}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="my-5 text-[30px]">
                              <p>Problem</p>
                            </div>
                            <div className="my-3">
                              <p>{items.Problem_Statement}</p>
                            </div>

                            <div className="my-5 text-[30px]">
                              <p>Solution</p>
                            </div>
                            <div className="my-3">
                              <p>{items.Solution}</p>
                            </div>

                            <div className="my-5 text-[30px]">
                              <p>Competitor</p>
                            </div>
                            <div className="my-3">
                              <p>{items.Competitor}</p>
                            </div>

                            <div className="my-5 text-[30px]">
                              <p>Market Size</p>
                            </div>
                            <div className="my-3">
                              <p> {items.Market_Size}</p>
                            </div>

                            <div className="my-5 text-[30px]">
                              <p>Video Link</p>
                            </div>

                            <iframe
                              width="560"
                              height="315"
                              src={items.Video_Link}
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerpolicy="strict-origin-when-cross-origin"
                              allowfullscreen
                            ></iframe>
                            <div className="my-5 text-[30px]">
                              <p>Verification Documents</p>
                            </div>

                            <div className="w-[100%] text-white flex">
                              <div className="me-2">
                                <a
                                  href={imgurl + items.Company_Pan}
                                  className="bg-[#e02708] text-[white] w-[150px] p-2 py-4 rounded-[10px] flex justify-center items-center"
                                >
                                  Company Pan <FaDownload className="ms-2" />
                                </a>
                              </div>
                              <a
                                href={imgurl + items.Financial_Projection}
                                download={imgurl + items.Financial_Projection}
                              >
                                <button className="bg-[#e02708] w-[200px] p-2 py-4 rounded-[10px] flex justify-between items-center">
                                  Financial Projection <FaDownload />
                                </button>
                              </a>

                              <a
                                href={imgurl + items.Pitch_Deck}
                                className="ms-2"
                              >
                                <button className="bg-[#e02708] w-[150px] p-2 py-4 rounded-[10px] flex justify-between items-center">
                                  Pitch Deck <FaDownload />
                                </button>
                              </a>

                              <a
                                href={imgurl + items.Incorporation_Certificate}
                                className="ms-2"
                              >
                                <button className="bg-[#e02708] w-[250px] p-2 py-4 rounded-[10px] flex justify-between items-center">
                                  Incorporation Certificate <FaDownload />
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
                                Trending
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
