import React from "react";
import { ToastContainer } from "react-toastify";
import { Sidebar } from "../../common/Sidebar";

export function DashViewProfile() {
  return (
    <>
      <section className="main border-[1px] border-[black] bg-[black]">
        <section className="dashboard_inner w-[100%] flex justify-between">
          <Sidebar />

          <section className="w-[90%] h-[100vh] rounded-s-[35px] flex items-center flex-col bg-[white] border-[1px] border-[white] overflow-y-scroll">
            <section className="page_label w-[90%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[30px]">
              <h1>View Profile</h1>
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
                    {/* {requests.map((items, index) => {
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
                                // onClick={() =>
                                //   setdeletedata(items) || setdeletemodal(true)
                                // }
                              >
                                Delete
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })} */}
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
