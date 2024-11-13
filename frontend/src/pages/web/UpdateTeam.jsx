import React from 'react'
import { Sidebar } from '../../common/Sidebar'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
import axios, { toFormData } from 'axios'

export function UpdateTeam() {
    let notifysuccess = (success) => toast.successs(success)
    let notifyerror = (error) => toast.error(error)
    let location = useLocation()
    let data = location.state
    console.log(data)


    var formik = useFormik({
        initialValues: {
            First_Name: data.data.First_Name || "",
            Last_Name: data.data.Last_Name || "",
            Email: data.data.Email || "",
            Phone: data.data.Phone || "",
            Password: data.data.Password || "",
            Aadhar_Card: data.data.Aadhar_Card || "",
            Pan_Card: data.data.Pan_Card || "",
            Address: data.data.Address || "",
            Bank_Name: data.data.Bank_Name || "",
            Account_Number: data.data.Account_Number || "",
            IFSC_Code: data.data.IFSC_Code || "",
            Bank_Proof: data.data.Bank_Proof || "",
            _id: data.data._id
        },

        onSubmit: () => {
            updatetteam(formik.values)
        }
    })

    let naviget = useNavigate()
    let updatetteam = (value) => {
        console.log(value)
        axios.put('https://api.hivexv.com/delete-team', toFormData(value))
            .then((res) => {
                if (res.data.Status == 1) {
                    naviget("/view-team")
                    notifysuccess(res.data.Message)
                }
                else {
                    notifyerror(res.data.Message)
                }
            })
            .catch((error) => {
                console.log(error)
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


                        {/* <div className='icons_section text-[30px]'>
                            <IoIosNotificationsOutline />
                        </div> */}
                    </section>


                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className='w-[100%]'>
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>Update Team</h1>

                            <form className='w-[100%] my-5' onSubmit={formik.handleSubmit}>
                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'> First Name</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' defaultValue={data.data.First_Name} onChange={(e) => formik.setFieldValue('First_Name', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'> Last Name</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' defaultValue={data.data.Last_Name} onChange={(e) => formik.setFieldValue('Last_Name', e.target.value)} placeholder='Enter industry name' />


                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Email</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' defaultValue={data.data.Email} onChange={(e) => formik.setFieldValue('Email', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Phone</h2>
                                    <input type="number" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' defaultValue={data.data.Phone} onChange={(e) => formik.setFieldValue('Phone', e.target.value)} placeholder='Enter industry name' />
                                </section>


                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Password</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' defaultValue={data.data.Password} onChange={(e) => formik.setFieldValue('Password', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Address</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' defaultValue={data.data.Address} onChange={(e) => formik.setFieldValue('Address', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Bank Name</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' defaultValue={data.data.Bank_Name} onChange={(e) => formik.setFieldValue('Bank_Name', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Account Number</h2>
                                    <input type="number" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' defaultValue={data.data.Account_Number} onChange={(e) => formik.setFieldValue('Account_Number', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>IFSC Code</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' defaultValue={data.data.IFSC_Code} onChange={(e) => formik.setFieldValue('IFSC_Code', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>

                                    <div className='flex justify-end my-[15px]'>
                                        <button type='submit' className='bg-[#113c11] text-[20px] py-2 px-10 rounded-[15px] text-white'>Save</button>
                                    </div>
                                </section>

                            </form>

                        </div>

                    </section>
                </div>



            </section>
        </>
    )
}
