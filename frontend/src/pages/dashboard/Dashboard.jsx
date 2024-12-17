import React, { useEffect, useState } from "react";
import { Sidebar } from "../../common/Sidebar";
import axios from "axios";
import { FaUser } from "react-icons/fa";
export function Dashboard() {
  return (
    <>
      <section className="main border-[1px] border-[black] bg-[black]">
        <section className="dashboard_inner w-[100%] flex justify-between">
          <Sidebar />

          <section className="w-[90%] h-[100vh] rounded-s-[35px] flex items-center flex-col bg-[white] border-[1px] border-[white] overflow-y-scroll">
            <section className="page_label w-[90%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[30px]">
              <h1>Dashboard</h1>
            </section>

            <section className="page_label w-[90%] my-2 rounded-[10px] p-2  font-[600] flex justify-between">
              <div className="w-[25%]">
                <div className="w-[100%] p-3 rounded-[20px] bg-[#e02708] text-white border-[1px] ">
                  <p className="text-[25px]"> Users</p>

                  <div className=" flex justify-between items-center">
                    <div className="my-4">
                      <FaUser className="text-[30px]" />
                    </div>

                    <UserCharts />
                  </div>
                </div>
              </div>

              <div className="w-[25%]">
                <div className="w-[100%] p-3 rounded-[20px] bg-[#e02708] text-white border-[1px] ">
                  <p className="text-[25px]">Team</p>

                  <div className=" flex justify-between items-center">
                    <div className="my-4">
                      <FaUser className="text-[30px]" />
                    </div>

                    <Teamcharts />
                  </div>
                </div>
              </div>

              <div className="w-[25%]">
                <div className="w-[100%] p-3 rounded-[20px] bg-[#e02708] text-white border-[1px] ">
                  <p className="text-[25px]"> Users</p>

                  <div className=" flex justify-between items-center">
                    <div className="my-4">
                      <FaUser className="text-[30px]" />
                    </div>

                    <UserCharts />
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export function UserCharts() {
  let [requests, setrequests] = useState([]);
  let [count, setcount] = useState(1);
  let value = [];
  let viewrequests = () => {
    axios
      .get("https://api.hivexv.com/view-register", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        setrequests(
          res.data.filter(
            (items) => items.Is_Verified === true && items.All_Fields === true
          )
        );
        console.log(requests);
        setcount(requests.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewrequests();
  }, []);

  return (
    <>
      <div className="text-[25px]">{count}</div>
    </>
  );
}

export function Teamcharts() {
  let [count, setcount] = useState(0);
  let value = [];
  let viewrequests = () => {
    axios
      .get("https://api.hivexv.com/view-team", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("admintoken")),
        },
      })
      .then((res) => {
        setcount(res.data.viewteam.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewrequests();
  }, []);

  return (
    <>
      <div className="text-[25px]">{count}</div>
    </>
  );
}
