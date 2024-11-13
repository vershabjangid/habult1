import React, { useState } from 'react'
import { Sidebar } from '../../common/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export function ViewTeaminfo() {

    let location = useLocation()
    let data = location.state
    console.log(data)

    let [teammodal, setteammodal] = useState(false)
    let [teammodaldata, setteammodaldata] = useState([])

    let naviget = useNavigate();
    let updateteam = (value) => {
        naviget('/update-team', { state: value })
    }

    let deletedata = (value) => {
        let data = {
            _id: value
        }

        console.log(data)
        axios.delete('https://hivexv.com/delete-team', { data })
            .then((res) => {
                console.log(res.data)
                naviget('/view-team')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>

            {
                teammodal ? <section className='w-[100%] h-[100vh] fixed flex justify-center items-center bg-[#00000064]'>
                    <div className='w-[600px]'>
                        <section className='w-[100%] border-[3px] p-[5px] py-[20px] rounded-[15px] bg-[white]'>
                            <div className='text-center text-[25px]'>Are you sure to want delete</div>

                            <div className='flex justify-evenly my-[15px]'>
                                <button className='bg-[green] w-[25%] text-[20px] py-[10px] rounded text-white' onClick={() => setteammodal(false)}>Cancel</button>
                                <button className='bg-[red] w-[25%] text-[20px] py-[10px] rounded text-white' onClick={() => deletedata(teammodaldata)}>Delete</button>
                            </div>
                        </section>
                    </div>
                </section> : null
            }


            <section className='dashboard_main w-[100%] h-[100vh] bg-[#ccfecc] flex justify-between '>
                <Sidebar />

                <div className='dashboard_inner h-[100vh] bg-white pt-[40px] px-[40px] overflow-y-scroll'>




                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className=''>
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>View Team</h1>
                        </div>
                    </section>


                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className='w-[100%]'>


                            <p className=' text-[25px]'>Personal Information</p>
                            <p className=' text-[20px] my-2 '> Name : {data.data.First_Name} {data.data.Last_Name}</p>
                            <p className=' text-[20px] my-2 '> Email : {data.data.Email}</p>
                            <p className=' text-[20px] my-2 '> Phone : {data.data.Phone}</p>
                            <p className=' text-[20px] my-2 '> Address : {data.data.Address}</p>
                            <p className=' text-[25px] mt-[25px]'>Bank Information</p>
                            <p className=' text-[20px] my-2'> Bank Name : {data.data.Bank_Name}</p>
                            <p className=' text-[20px] my-2'> IFSC Code : {data.data.IFSC_Code}</p>
                            <p className=' text-[20px] my-2'> Account Number : {data.data.Account_Number}</p>
                            <p className=' text-[20px] my-2'> Reffered Code : {data.data.Reffered_Code}</p>

                            <div className='my-[55px]'>
                                <p className=' text-[25px] mb-[20px]'>Documents</p>
                                <a href={data.imgurl + data.data.Pan_Card} download={data.imgurl + data.data.Pan_Card} className=' bg-[#c6f4c6] text-black my-[15px] py-4 px-8 rounded-[10px]'>Pan Card</a>
                                <a href={data.imgurl + data.data.Aadhar_Card} download={data.imgurl + data.data.Aadhar_Card} className=' bg-[#c6f4c6] ms-2 text-black my-[15px] py-4 px-8 rounded-[10px]'>Aadhar Card</a>
                                <a href={data.imgurl + data.data.Bank_Proof} download={data.imgurl + data.data.Bank_Proof} className=' bg-[#c6f4c6] ms-2 text-black my-[15px] py-4 px-8 rounded-[10px]'>Bank Proof</a>
                            </div>


                            <div>
                                <button className=' bg-[#229fd1] text-white my-3 py-2 px-8 rounded-[10px]' onClick={() => updateteam({ data: data.data, imgurl: data.imgurl })}>Edit</button>
                                <button className=' bg-[red] ms-2 text-white my-3 py-2 px-8 rounded-[10px]' onClick={() => setteammodal(true) || setteammodaldata(data.data._id)}>Delete</button>
                            </div>
                        </div>

                    </section>
                </div>



            </section>
        </>
    )
}
