import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../common/Sidebar'
import { FaPersonWalkingLuggage } from 'react-icons/fa6'
import { IoPerson, IoServerOutline } from 'react-icons/io5'
import ReactECharts from "echarts-for-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function DashboardPanel() {


    let [investors, setinvestors] = useState([])
    let [investorspending, setinvestorspending] = useState([])
    let [investorslength, setinvestorslength] = useState([])
    let [investorrejected, setinvestorrejected] = useState([])
    let getinvestors = () => {
        axios.get('http://147.79.71.69:5000/get-members', {
            headers: {
                authorization: JSON.parse(localStorage.getItem('admintoken'))
            }
        })
            .then((res) => {

                setinvestors(res.data.getdata.filter((items) => items.Activestatus.includes("ok")))
                setinvestorspending(res.data.getdata.filter((items) => items.Activestatus.includes("pending")))
                setinvestorrejected(res.data.getdata.filter((items) => items.Activestatus.includes("trending")))

            })
            .catch((error) => {
                console.log(error)
            })
    }



    let [startups, setstartups] = useState([])
    let [startupspending, setstartupspending] = useState([])
    let [startupstrending, setstartupstrending] = useState([])
    let [startupsrejected, setstartupsrejected] = useState([])



    var [imgurl, setimgurl] = useState('')
    let getstartups = () => {
        axios.get('http://147.79.71.69:5000/get-startups', {
            headers: {
                authorization: JSON.parse(localStorage.getItem('admintoken'))
            }
        })
            .then((res) => {
                setimgurl(res.data.imgurl)
                setstartups(res.data.getdata.filter((items) => items.Activestatus.includes("ok")))
                setstartupspending(res.data.getdata.filter((items) => items.Activestatus.includes("pending")))
                setstartupstrending(res.data.getdata.filter((items) => items.Activestatus.includes("trending")))
                setstartupsrejected(res.data.getdata.filter((items) => items.Activestatus.includes("reject")))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getinvestors()
        getstartups()
    }, [])

    let navigate = useNavigate()
    let viewstartup = (value) => {
        navigate('/view-startup-profile', {
            state: {
                data: value,
                imgurl: imgurl
            }
        })
    }

    let viewmember = (value) => {
        navigate('/view-member-profile', {
            state: {
                data: value,
                imgurl: imgurl
            }
        })
    }

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthsval = new Date().getMonth()
    return (
        <>
            <section className='dashboard_main w-[100%] h-[100vh] bg-[#ccfecc] flex justify-between '>
                <Sidebar />

                <div className='dashboard_inner h-[100vh] bg-white pt-[40px] px-[40px] overflow-y-scroll'>




                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className=''>
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>Dashboard</h1>
                        </div>


                        {/* <div className='icons_section text-[30px]'>
                            <IoIosNotificationsOutline />
                        </div> */}
                    </section>









                    <section className='w-[100%] flex justify-between'>

                        <section className='page_label p-[10px] rounded-[8px] w-[30%]'>
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] rounded-[50%] border-[1px] bg-[#ccfecca9] flex justify-center items-center'><FaPersonWalkingLuggage className='text-[25px]' /></div>
                                <div>
                                    <h2 className='text-[20px] font-[500] ms-3'>Visitors</h2>
                                    <p className='ms-3'>Total Visitors : </p>
                                </div>
                            </div>
                            <div className='w-[100%] border-[1px] my-5 p-0'>
                                <Visitors />
                            </div>
                        </section>


                        <section className='page_label p-[10px] rounded-[8px] w-[30%]'>
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] rounded-[50%] border-[1px] bg-[#ccfecca9] flex justify-center items-center'><IoPerson className='text-[25px]' /></div>
                                <div>
                                    <h2 className='text-[20px] font-[500] ms-3'>Users</h2>
                                    <p className='ms-3'>Total Users : </p>
                                </div>
                            </div>
                            <div className='w-[100%] border-[1px] my-5'>
                                <Userschart value={investors} />
                            </div>
                        </section>




                        <section className='page_label p-[10px] rounded-[8px] w-[30%]'>
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] rounded-[50%] border-[1px] bg-[#ccfecca9] flex justify-center items-center'><IoServerOutline className='text-[25px]' /></div>
                                <div>
                                    <h2 className='text-[20px] font-[500] ms-3'>Services</h2>
                                    {/* <p className='ms-3'>Total Services : </p> */}
                                </div>

                            </div>
                            <div className='w-[100%] border-[1px] my-5'>
                                <Services />
                            </div>
                        </section>
                    </section>





                    <section className='w-[100%] flex justify-between my-[40px] flex-wrap'>
                        <section className='page_label p-[10px] rounded-[8px] w-[49%] mt-[30px]'>
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] rounded-[50%] border-[1px] bg-[#ccfecca9] flex justify-center items-center'><FaPersonWalkingLuggage className='text-[25px]' /></div>
                                <div>
                                    <h2 className='text-[20px] font-[500] ms-3'>New Member Requests</h2>
                                    {/* <p className='ms-3'>Total New Member Requests : {investorslength} </p> */}
                                </div>
                            </div>
                            <div className='w-[100%] border-[1px] my-5 p-0 h-[400px] overflow-y-scroll'>
                                <table className='w-[100%]'>
                                    <tr>
                                        <th className='py-2'>Name</th>
                                        <th className='py-2'>Email</th>
                                        <th className='py-2'>Phone.no</th>
                                        <th className='py-2'>View Profile</th>
                                    </tr>
                                    {
                                        investorspending.map((items, i) => {
                                            if (items == []) {
                                                return (
                                                    <>
                                                        <div className=''>No Data Found</div>
                                                    </>
                                                )
                                            }

                                            else {
                                                return (
                                                    <>

                                                        <tr className=''>
                                                            <td className='py-2 text-center'>{items.Company_Name}</td>
                                                            <td className='py-2 text-center'>{items.Email}</td>
                                                            <td className='py-2 text-center'> {items.Phone}</td>
                                                            <td className='py-2 text-center'>
                                                                <button className='p-2 bg-[green] rounded text-white' onClick={() => viewmember(items)}>
                                                                    View Profile
                                                                </button>
                                                            </td>
                                                        </tr>

                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </table>

                            </div>
                        </section>

                        <section className='page_label p-[10px] rounded-[8px] w-[49%] mt-[30px]'>
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] rounded-[50%] border-[1px] bg-[#ccfecca9] flex justify-center items-center'><FaPersonWalkingLuggage className='text-[25px]' /></div>
                                <div>
                                    <h2 className='text-[20px] font-[500] ms-3'>New Startups Requests</h2>
                                    {/* <p className='ms-3'>Total New Startups Requests : {investorslength} </p> */}
                                </div>
                            </div>
                            <div className='w-[100%] border-[1px] my-5 p-0 h-[400px] overflow-y-scroll'>
                                <table className='w-[100%]'>
                                    <tr>
                                        <th className='py-2'>Name</th>
                                        <th className='py-2'>Email</th>
                                        <th className='py-2'>Phone.no</th>
                                        <th className='py-2'>View Profile</th>
                                    </tr>
                                    {
                                        startupspending.map((items, i) => {
                                            console.log(items)
                                            return (
                                                <>

                                                    <tr className=''>
                                                        <td className='py-2 text-center'>{items.Company_Name}</td>
                                                        <td className='py-2 text-center'>{items.Email}</td>
                                                        <td className='py-2 text-center'> {items.Phone}</td>
                                                        <td className='py-2 text-center'>
                                                            <button className='p-2 bg-[green] rounded text-white' onClick={() => viewstartup(items)}>
                                                                View Profile
                                                            </button>
                                                        </td>
                                                    </tr>

                                                </>
                                            )
                                        })
                                    }
                                </table>

                            </div>
                        </section>





                        <section className='page_label p-[10px] rounded-[8px] w-[49%] mt-[30px]'>
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] rounded-[50%] border-[1px] bg-[#ccfecca9] flex justify-center items-center'><FaPersonWalkingLuggage className='text-[25px]' /></div>
                                <div>
                                    <h2 className='text-[20px] font-[500] ms-3'>Startups</h2>
                                    {/* <p className='ms-3'>Total Startups : {startupslength} </p> */}
                                </div>
                            </div>
                            <div className='w-[100%] border-[1px] my-5 p-0 h-[400px] overflow-y-scroll'>
                                <table className='w-[100%]'>
                                    <tr>
                                        <th className='py-2'>Name</th>
                                        <th className='py-2'>Email</th>
                                        <th className='py-2'>Phone.no</th>
                                        <th className='py-2'>View Profile</th>
                                    </tr>
                                    {
                                        startups.map((items, i) => {
                                            return (
                                                <>

                                                    <tr className=''>
                                                        <td className='py-2 text-center'>{items.Company_Name}</td>
                                                        <td className='py-2 text-center'>{items.Email}</td>
                                                        <td className='py-2 text-center'> {items.Phone}</td>
                                                        <td className='py-2 text-center'>
                                                            <button className='p-2 bg-[green] rounded text-white' onClick={() => viewstartup(items)}>
                                                                View Profile
                                                            </button>
                                                        </td>
                                                    </tr>

                                                </>
                                            )
                                        })
                                    }
                                </table>

                            </div>
                        </section>









                        <section className='page_label p-[10px] rounded-[8px] w-[49%] mt-[30px]'>
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] rounded-[50%] border-[1px] bg-[#ccfecca9] flex justify-center items-center'><FaPersonWalkingLuggage className='text-[25px]' /></div>
                                <div>
                                    <h2 className='text-[20px] font-[500] ms-3'>Members</h2>
                                    {/* <p className='ms-3'>Total Members : {investorslength} </p> */}
                                </div>
                            </div>
                            <div className='w-[100%] border-[1px] my-5 p-0 h-[400px] overflow-y-scroll'>
                                <table className='w-[100%]'>
                                    <tr>
                                        <th className='py-2'>Name</th>
                                        <th className='py-2'>Email</th>
                                        <th className='py-2'>Phone.no</th>
                                        <th className='py-2'>View Profile</th>
                                    </tr>
                                    {
                                        investors.map((items, i) => {
                                            return (
                                                <>

                                                    <tr className=''>
                                                        <td className='py-2 text-center'>{items.Company_Name}</td>
                                                        <td className='py-2 text-center'>{items.Email}</td>
                                                        <td className='py-2 text-center'> {items.Phone}</td>
                                                        <td className='py-2 text-center'>
                                                            <button className='p-2 bg-[green] rounded text-white' onClick={() => viewmember(items)}>
                                                                View Profile
                                                            </button>
                                                        </td>
                                                    </tr>

                                                </>
                                            )
                                        })
                                    }
                                </table>

                            </div>
                        </section>


                        <section className='page_label p-[10px] rounded-[8px] w-[49%] mt-[30px]'>
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] rounded-[50%] border-[1px] bg-[#ccfecca9] flex justify-center items-center'><FaPersonWalkingLuggage className='text-[25px]' /></div>
                                <div>
                                    <h2 className='text-[20px] font-[500] ms-3'>Trending</h2>
                                    {/* <p className='ms-3'>Total Members : {investorslength} </p> */}
                                </div>
                            </div>
                            <div className='w-[100%] border-[1px] my-5 p-0 h-[400px] overflow-y-scroll'>
                                <table className='w-[100%]'>
                                    <tr>
                                        <th className='py-2'>Name</th>
                                        <th className='py-2'>Email</th>
                                        <th className='py-2'>Phone.no</th>
                                        <th className='py-2'>View Profile</th>
                                    </tr>
                                    {
                                        startupstrending.map((items, i) => {
                                            return (
                                                <>

                                                    <tr className=''>
                                                        <td className='py-2 text-center'>{items.Company_Name}</td>
                                                        <td className='py-2 text-center'>{items.Email}</td>
                                                        <td className='py-2 text-center'> {items.Phone}</td>
                                                        <td className='py-2 text-center'>
                                                            <button className='p-2 bg-[green] rounded text-white' onClick={() => viewstartup(items)}>
                                                                View Profile
                                                            </button>
                                                        </td>
                                                    </tr>

                                                </>
                                            )
                                        })
                                    }
                                </table>

                            </div>
                        </section>



                        <section className='page_label p-[10px] rounded-[8px] w-[49%] mt-[30px]'>
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] rounded-[50%] border-[1px] bg-[#ccfecca9] flex justify-center items-center'><FaPersonWalkingLuggage className='text-[25px]' /></div>
                                <div>
                                    <h2 className='text-[20px] font-[500] ms-3'>Reject</h2>
                                    {/* <p className='ms-3'>Total Members : {investorslength} </p> */}
                                </div>
                            </div>
                            <div className='w-[100%] border-[1px] my-5 p-0 h-[400px] overflow-y-scroll'>
                                <table className='w-[100%]'>
                                    <tr>
                                        <th className='py-2'>Name</th>
                                        <th className='py-2'>Email</th>
                                        <th className='py-2'>Phone.no</th>
                                        <th className='py-2'>View Profile</th>
                                    </tr>
                                    {
                                        startupsrejected.map((items, i) => {
                                            return (
                                                <>

                                                    <tr className=''>
                                                        <td className='py-2 text-center'>{items.Company_Name}</td>
                                                        <td className='py-2 text-center'>{items.Email}</td>
                                                        <td className='py-2 text-center'> {items.Phone}</td>
                                                        <td className='py-2 text-center'>
                                                            <button className='p-2 bg-[green] rounded text-white' onClick={() => viewstartup(items)}>
                                                                View Profile
                                                            </button>
                                                        </td>
                                                    </tr>

                                                </>
                                            )
                                        })
                                    }
                                </table>

                            </div>
                        </section>


                        <section className='page_label p-[10px] rounded-[8px] w-[49%] mt-[30px]'>
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] rounded-[50%] border-[1px] bg-[#ccfecca9] flex justify-center items-center'><FaPersonWalkingLuggage className='text-[25px]' /></div>
                                <div>
                                    <h2 className='text-[20px] font-[500] ms-3'>Investor Reject</h2>
                                    {/* <p className='ms-3'>Total Members : {investorslength} </p> */}
                                </div>
                            </div>
                            <div className='w-[100%] border-[1px] my-5 p-0 h-[400px] overflow-y-scroll'>
                                <table className='w-[100%]'>
                                    <tr>
                                        <th className='py-2'>Name</th>
                                        <th className='py-2'>Email</th>
                                        <th className='py-2'>Phone.no</th>
                                        <th className='py-2'>View Profile</th>
                                    </tr>
                                    {
                                        investorrejected.map((items, i) => {
                                            return (
                                                <>

                                                    <tr className=''>
                                                        <td className='py-2 text-center'>{items.Company_Name}</td>
                                                        <td className='py-2 text-center'>{items.Email}</td>
                                                        <td className='py-2 text-center'> {items.Phone}</td>
                                                        <td className='py-2 text-center'>
                                                            <button className='p-2 bg-[green] rounded text-white' onClick={() => viewmember(items)}>
                                                                View Profile
                                                            </button>
                                                        </td>
                                                    </tr>

                                                </>
                                            )
                                        })
                                    }
                                </table>

                            </div>
                        </section>


                    </section>








                </div>
            </section>
        </>
    )
}





export function Userschart(value) {

    let option = {
        xAxis: {
            type: 'category',
            data: ['', '', '', '', '', '', '', '']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [0, value.value.length],
                type: 'line'
            }
        ]
    };
    return (
        <>
            <ReactECharts option={option} />
        </>
    )
}

export function Visitors() {

    let option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['', '', '', '', '', '', '']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }
        ]
    };

    return (
        <>
            <ReactECharts option={option} />
        </>
    )
}




export function Services() {

    let option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }
        ]
    };

    return (
        <>
            <ReactECharts option={option} />
        </>
    )
}