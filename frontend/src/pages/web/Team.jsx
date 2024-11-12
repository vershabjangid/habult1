import React from 'react'
import { Sidebar } from '../../common/Sidebar'
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';

export function Team() {

    let notifysuccess = (success) => toast.success(success)
    let notifyerror = (error) => toast.error(error)

    let formik = useFormik({
        initialValues: {
            First_Name: "",
            Last_Name: "",
            Email: "",
            Phone: "",
            Password: "",
            Aadhar_Card: "",
            Pan_Card: "",
            Address: "",
            Bank_Name: "",
            Account_Number: "",
            IFSC_Code: "",
            Bank_Proof: ""
        },

        onSubmit: () => {
            insertteam(formik.values)
        }
    });


    let insertteam = () => {
        axios.post('https://api.hivexv.com/add-team')
            .then((res) => {
                if (res.data.Status == 1) {
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
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>Add Team</h1>

                            <form className='w-[100%] my-5' onSubmit={formik.handleSubmit}>
                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'> First Name</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('First_Name', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'> Last Name</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('Last_Name', e.target.value)} placeholder='Enter industry name' />


                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Email</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('Email', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Phone</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('Email', e.target.value)} placeholder='Enter industry name' />
                                </section>


                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Password</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('Password', e.target.value)} placeholder='Enter industry name' />
                                </section>


                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Aadhar Card</h2>
                                    <input type="file" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('Aadhar_Card', e.target.files)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Pan Card</h2>
                                    <input type="file" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('Pan_Card', e.target.files)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Address</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('Address', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Bank Name</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('Bank_Name', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Account Number</h2>
                                    <input type="number" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('Account_Number', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>IFSC Code</h2>
                                    <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('IFSC_Code', e.target.value)} placeholder='Enter industry name' />
                                </section>

                                <section>
                                    <h2 className='text-[#113c11] text-[20px] font-[500]'>Bank Proof</h2>
                                    <input type="file" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('Bank_Proof', e.target.files)} placeholder='Enter industry name' />

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
