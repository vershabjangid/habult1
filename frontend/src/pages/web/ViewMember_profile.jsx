import React, { useState } from 'react'
import { Sidebar } from '../../common/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaDownload, FaLinkedin } from 'react-icons/fa'
import { FaEarthAsia } from 'react-icons/fa6'
import { useFormik } from 'formik'
import axios from 'axios'

export function ViewMember_profile() {

    let location = useLocation()
    let data = location.state
    console.log(data)


    let [acceptmodal, setacceptmodal] = useState(false)
    let [rejecttmodal, setrejecttmodal] = useState(false)
    let [trendingmodal, settrendingmodal] = useState(false)

    let naviget = useNavigate()

    var [rejectapplication, setrejectapplication] = useState('')
    let formik = useFormik({
        initialValues: {
            _id: data.data._id,
            Activestatus: "",
            Message: "",
            Email: data.data.Email
        },

        onSubmit: (() => {
            updatestartups(formik.values)
        })
    })


    let updatestartups = (value) => {
        axios.put('https://api.hivexv.com/update-investor', value)
            .then((res) => {
                naviget('/dashboard-panel')
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <>

            {
                acceptmodal ? <section className='w-[100%] h-[100vh] fixed flex justify-center items-center bg-[#00000064]'>
                    <form onSubmit={formik.handleSubmit}>
                        <section className='w-[600px] border-[3px] p-[5px] py-[20px] rounded-[15px] bg-[white]'>
                            <h1 className='text-center text-[25px]'>Are you sure you want to accept</h1>

                            <div className='flex justify-evenly my-[15px]'>
                                <button className='bg-[red] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => setacceptmodal(false)}>Cancel</button>
                                <button type='submit' className='bg-[green] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => formik.setFieldValue('Activestatus', "ok")}>Accept</button>
                            </div>
                        </section>
                    </form>
                </section> : null
            }


            {
                rejecttmodal ? <section className='w-[100%] h-[100vh] fixed flex justify-center items-center bg-[#00000064]'>
                    <form onSubmit={formik.handleSubmit}>
                        <section className='w-[600px] border-[3px] p-[5px] py-[20px] rounded-[15px] bg-[white]'>
                            <h1 className='text-center text-[25px]'>Are you sure you want to Reject</h1>
                            <div className='flex items-center justify-center flex-col my-[20px]'>
                                <div className='w-[95%]'>
                                    <p>Reason for rejection</p>
                                </div>
                                <input type="text" name='Message' className='border-[1px] border-black p-2 rounded my-[10px] w-[95%] ' onChange={(e) => formik.setFieldValue('Message', e.target.value)} />
                            </div>
                            <div className='flex justify-evenly my-[15px]'>
                                <button className='bg-[red] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => setrejecttmodal(false)}>Cancel</button>
                                <button type='submit' className='bg-[green] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => formik.setFieldValue('Activestatus', "reject")}>Reject</button>
                            </div>
                        </section>
                    </form>
                </section> : null
            }



            <section className='dashboard_main w-[100%] h-[100vh] bg-[#ccfecc] flex justify-between '>
                <Sidebar />

                <div className='dashboard_inner h-[100vh] bg-white pt-[40px] px-[40px] overflow-y-scroll'>




                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className=''>
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>{data.data.Company_Name}</h1>
                        </div>


                        {/* <div className='icons_section text-[30px]'>
                            <IoIosNotificationsOutline />
                        </div> */}
                    </section>


                    <section className='w-[100%] flex justify-between my-[40px] flex-wrap'>
                        <section className='page_label p-[10px] rounded-[8px] w-[100%] mt-[30px]'>
                            <section className='flex justify-center'>

                                <div className='w-[95%]'>

                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Name : {data.data.Company_Name}</h4>
                                    </div>

                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Email : {data.data.Email}</h4>
                                    </div>

                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Phone : {data.data.Phone}</h4>
                                    </div>



                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Address : {data.data.Address}</h4>
                                    </div>
                                </div>
                            </section>

                            <section className='flex justify-evenly items-center'>

                                <div className='w-[95%]'>
                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500] text-[30px]'>Bank Details</h4>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                        <h4 className='font-[500]'>Bank Name : {data.data.BankName}</h4>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                        <h4 className='font-[500] uppercase'>IFSC_Code : {data.data.IFSC_Code}</h4>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                        <h4 className='font-[500]'>AccountNumber : {data.data.AccountNumber}</h4>
                                    </div>


                                    <div className='w-[100%] my-4'>
                                        <h4 className='font-[500]'>AccountNumber : {data.data.AccountNumber}</h4>
                                    </div>

                                </div>
                            </section>


                            <section className='flex justify-evenly items-center'>

                                <div className='w-[95%] flex justify-evenly flex-wrap'>

                                    <div className='my-2'>
                                        <a href={data.imgurl + data.data.AadharCard} download={data.imgurl + data.data.AadharCard} className='bg-[#c6f4c6] w-[250px] p-4 rounded-[25px] font-[600] text-[black] text-[20px] flex justify-between items-center'>Aadhar Card
                                            <div>
                                                <FaDownload />
                                            </div>
                                        </a>
                                    </div>



                                    <div className='my-2'>
                                        <a href={data.imgurl + data.data.Pan} download={data.imgurl + data.data.Pan} className='bg-[#c6f4c6] w-[250px] p-4 rounded-[25px] font-[600] text-[black] text-[20px] flex justify-between items-center'>Pan Card
                                            <div>
                                                <FaDownload />
                                            </div>
                                        </a>
                                    </div>


                                    <div className='my-2'>
                                        <a href={data.imgurl + data.data.BankProof} download={data.imgurl + data.data.BankProof} className='bg-[#c6f4c6] w-[250px] p-4 rounded-[25px] font-[600] text-[black] text-[20px] flex justify-between items-center'>BankProof
                                            <div>
                                                <FaDownload />
                                            </div>
                                        </a>
                                    </div>


                                </div>
                            </section>





                            <section className='w-[100%] flex  justify-center'>
                                <div className='w-[95%] flex justify-center flex-wrap my-5'>

                                    <button className='m-2 bg-[red] py-[10px] px-[25px] rounded-[10px] text-[white] text-[20px] font-[500]' onClick={() => setrejecttmodal(true)}>
                                        Reject
                                    </button>


                                    <button className='m-2 bg-[green] py-[10px] px-[25px] rounded-[10px] text-[white] text-[20px] font-[500]' onClick={() => setacceptmodal(true)}>
                                        Accept
                                    </button>

                                </div>
                            </section>
                        </section>

                    </section>

                </div >
            </section >
        </>
    )
}
