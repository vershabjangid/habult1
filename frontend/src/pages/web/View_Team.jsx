import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../common/Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function View_Team() {
    let [team, setteam] = useState([])
    var [url, seturl] = useState([])
    console.log(url)
    let viewteam = () => {
        axios.get('https://api.hivexv.com/view-team')
            .then((res) => {
                setteam(res.data.viewteam)
                seturl(res.data.imgurl)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        viewteam()
    }, [])


    let naviget = useNavigate();
    let teaminfo = (value) => {
        naviget('/view-team-info', {
            state: {
                data: value,
                 imgurl: url
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
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>Team</h1>
                        </div>
                    </section>


                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className='w-[100%]'>
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>View Team</h1>
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
                                            team.map((items, index) => {
                                                return (
                                                    <tr className=''>
                                                        <td className='text-center'>{items.First_Name} {items.Last_Name}</td>
                                                        <td className='text-center'>{items.Email}</td>
                                                        <td className='text-center'>{items.Phone}</td>
                                                        <td className='text-center'><button className='bg-[#113c11] m-3 py-2 px-3 rounded-[15px] text-white' onClick={() => teaminfo(items)}>View Profile</button></td>
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
