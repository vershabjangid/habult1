import React, { useState } from 'react'
import { Logo } from '../../common/Logo'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios, { all, toFormData } from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import { FaXmark } from 'react-icons/fa6'
import * as yup from "yup"

export function RegisterForm() {


    let notificationsuccess = (success) => toast.success(success)
    let notificationerror = (error) => toast.error(error)

    let location = useLocation();
    let data = location.state


    let naviget = useNavigate()
    let [terms, setterms] = useState()


    const formik = useFormik({
        initialValues: {
            Join_as: data.Join_as,
            Email: data.Email,
            Phone: data.Phone,
            FirstName: data.FirstName,
            LastName: data.LastName,
            Password: data.Password,
            Company_Name: "",
            Industry: "",
            LinkedinUrl: "",
            Company_Pan: "",
            Website: "",
            Funding_Ask: "",
            Stage: "",
            Equity_Dilution: "",
            ReferredBy: data.ReferredBy,
        },
        validationSchema: yup.object({
            Company_Name: yup.string().required("Company Name Required"),
            Industry: yup.string().required("Industry Required"),
            LinkedinUrl: yup.string().url().required("Linkedin Url Required"),
            Company_Pan: yup.mixed().required("Company Pancard Required"),
            Website: yup.string().url().required("Website Required"),
            Funding_Ask: yup.number().required("Funding Ask Required"),
            Stage: yup.string().required("Stage Required"),
            Equity_Dilution: yup.number().min(1).max(100, 'Out Of Range').required("Stage Required")
        }),

        onSubmit: () => {
            insertdata(formik.values)
        }
    })
    let insertdata = (value) => {
        naviget('/create-startup-profile', { state: value })
    }

    let [termsmodal, settermsmodal] = useState(false)
    return (
        <>
            <section className='login_main w-[100%] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>



                <form className='login_inner w-[872px] p-[35px] bg-white rounded-[12px]' onSubmit={formik.handleSubmit} >

                    <div className='login_input_section h-[100%] '>


                        <div className='my-[10px]'>
                            <h1 className='text-center text-[28px] font-[500]'>Please enter your company details</h1>
                        </div>

                        <div>
                            <h2 className='text-[25px] font-[600] mb-[10px]'>Your details</h2>
                        </div>


                        <div className='registerforms flex justify-between'>

                            <div className='registerformsleft my-[8px] text-black w-[48%]'>
                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>First Name <sup className='text-[red]'>*</sup> </p>
                                    <input type='text' className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' placeholder='First Name' disabled value={data.FirstName} />
                                </div>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Mobile.No <sup className='text-[red]'>*</sup> </p>
                                    <input type='text' className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' placeholder='First Name' disabled value={data.Phone} />
                                </div>

                            </div>

                            <div className='registerformsright my-[8px] text-black w-[48%]'>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Last Name <sup className='text-[red]'>*</sup> </p>
                                    <input type='text' className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' placeholder='First Name' disabled value={data.LastName} />
                                </div>


                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Email <sup className='text-[red]'>*</sup></p>
                                    <input type='text' className=' w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' disabled value={data.Email} />
                                </div>

                            </div>
                        </div>



                        <div>
                            <h2 className='text-[25px] font-[600] my-4'>Your startup details</h2>
                        </div>



                        <div className='registerforms flex justify-between'>

                            <div className='registerformsleft my-[8px] text-black w-[48%]'>
                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Company Name <sup className='text-[red]'>*</sup> </p>
                                    <input type='text' name="Company_Name" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Company_Name", e.target.value)} placeholder='Company Name' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Company_Name}</div>
                                </div>



                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Linkedin Url <sup className='text-[red]'>*</sup> </p>
                                    <input type='url' name="LinkedinUrl" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("LinkedinUrl", e.target.value)} placeholder='Linkedin Url' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.LinkedinUrl}</div>
                                </div>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Website <sup className='text-[red]'>*</sup> </p>
                                    <input type='url' name="Website" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Website", e.target.value)} placeholder='Website' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Website}</div>
                                </div>



                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Stage <sup className='text-[red]'>*</sup></p>
                                    <select name="Stage" className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Stage", e.target.value)}>
                                        <option>State</option>
                                        <option value={"Seed"}>Seed</option>
                                        <option value={"Pre-Seed"}>Pre-Seed</option>
                                    </select>
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Stage}</div>
                                </div>







                            </div>


                            <div className='registerformsleft my-[8px] text-black w-[48%]'>

                                <div className=' text-black'>
                                    <p className='font-[500] mb-0'>Industry <sup className='text-[red]'>*</sup></p>
                                    <select name="Industry" className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Industry", e.target.value)}>
                                        <option>Business Industry</option>
                                        <option value={"Entertainment"}>Entertainment</option>
                                        <option value={"IT Services"}>IT Services</option>
                                        <option value={"Education"}>Education</option>
                                    </select>
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Industry}</div>
                                </div>



                                <div className='my-2'>
                                    <p className='font-[500] mb-2'>Company Pan Card <sup className='text-[red]'>*</sup> </p>
                                    <input type='file' name="Company_Pan" className='uppercase w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Company_Pan", e.target.files[0])} placeholder='Company Pan Card' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Company_Pan}</div>
                                </div>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Funding Ask  <sup className='text-[red]'>*</sup> </p>
                                    <input type='number' name="Funding_Ask" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Funding_Ask", e.target.value)} placeholder='Funding Ask' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Funding_Ask}</div>
                                </div>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Equity in (%) <sup className='text-[red]'>*</sup> </p>
                                    <input type='number' name="Equity_Dilution" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Equity_Dilution", e.target.value)} placeholder='Equity Dilution' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Equity_Dilution}</div>
                                </div>



                            </div>
                        </div>


                        <div className='my-[8px] text-black'>
                            <button type='submit' className='border-[1px] text-center w-[100%] py-[16px] px-[32px] my-[20px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]'>Next</button>
                        </div>

                        <div className='my-[8px] text-black'>
                            <p className='text-[grey] text-center'>Already have an account?<Link to={'/login'}><span className='text-black font-[500] ms-1'>LOGIN</span></Link></p>
                        </div>
                    </div>

                </form>
            </section>
            <ToastContainer />
        </>
    )
}
