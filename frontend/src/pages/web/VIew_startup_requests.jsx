import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../common/Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function VIew_startup_requests() {

    let [startupspending, setstartupspending] = useState([])
    let [img, setimg] = useState(null)
    
    console.log(startupspending)
    let getstartups = () => {
        axios.get('https://api.hivexv.com/get-startups', {
            headers: {
                authorization: JSON.parse(localStorage.getItem('admintoken'))
            }
        })
            .then((res) => {
                setimg(res.data.imgurl)
                setstartupspending(res.data.getdata.filter((items) => items.Activestatus.includes("pending")))
            })
            .catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {
        getstartups()
    }, [])

    let naviget = useNavigate()
    let viewstartup = (value) => {
        console.log(value)
        naviget('/view-startup-profile', {
            state: {
                data: value,
                imgurl: img
            }
        })
    }
    return (
        <>
            <section className='dashboard_main w-[100%] h-[100vh] bg-[#ccfecc] flex justify-between '>
                <Sidebar />

                <div className='dashboard_inner h-[100vh] bg-white pt-[40px] px-[40px] overflow-y-scroll'>




                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className=''>
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>Startups Requests</h1>
                        </div>


                        {/* <div className='icons_section text-[30px]'>
                            <IoIosNotificationsOutline />
                        </div> */}
                    </section>

                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className='w-[100%]'>
                            <section>
                                <>
                                    <table className='page_label p-2 rounded-[8px] my-[25px] bg-white w-[100%] '>

                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>View Profile</th>
                                        </tr>
                                        {
                                            startupspending.map((items, index) => {
                                                return (
                                                    <tr className=''>
                                                        <td className='text-center'>{items.Company_Name}</td>
                                                        <td className='text-center'>{items.Email}</td>
                                                        <td className='text-center'>{items.Phone}</td>
                                                        <td className='text-center'><button className='bg-[#113c11] m-3 py-2 px-3 rounded-[15px] text-white' onClick={() => viewstartup(items)}>View Profile</button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </table>
                                </>
                            </section>

                        </div>

                    </section>


                </div>



            </section>
        </>
    )
}
