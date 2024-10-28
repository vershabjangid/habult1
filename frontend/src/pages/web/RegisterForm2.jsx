import axios, { toFormData } from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa6'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from "yup"


export function RegisterForm2() {




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
            Company_Name: data.Company_Name,
            Industry: data.Industry,
            LinkedinUrl: data.LinkedinUrl,
            Company_Pan: data.Company_Pan,
            Website: data.Website,
            Funding_Ask: data.Funding_Ask,
            Stage: data.Stage,
            Equity_Dilution: data.Equity_Dilution,
            ReferredBy: data.ReferredBy,
            Logo: "",
            Company_Description: "",
            Highlight1: "",
            Highlight2: "",
            Highlight3: "",
            Highlight4: "",
            Highlight5: "",
            TeamProfile1: "",
            TeamName1: "",
            TeamDesignation1: "",
            TeamExperience1: "",

            TeamProfile2: "",
            TeamName2: "",
            TeamDesignation2: "",
            TeamExperience2: "",

            BackersProfile1: "",
            BackersName1: "",
            BackersDesignation1: "",
            BackersExperience1: "",


            BackersProfile2: "",
            BackersName2: "",
            BackersDesignation2: "",
            BackersExperience2: "",

            Problem: "",
            Solution: "",
            Video_Link: "",
            Pitch_Deck: "",
            Incorporation_Certificate: "",
            TermsAndConditions: ""
        },


        onSubmit: () => {
            insertdata(formik.values)
        }
    })
    let insertdata = (value) => {


        axios.post('http://147.79.71.69:5000/register', toFormData(value), {
            headers: {
                authorization: JSON.parse(localStorage.getItem('authenticate'))
            }
        })
            .then((res) => {
                if (res.data.Status == 1) {
                    naviget('/startup-success')
                }
                else {
                    notificationerror(res.data.Message)
                }
            })
            .catch((error) => {
                console.log(error)
            })


        value.preventDefault()
    }




    return (
        <>
            <section className='login_main p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>



                <form className='login_inner w-[872px] p-[35px] bg-white rounded-[12px]' onSubmit={formik.handleSubmit} >

                    <div className='login_input_section h-[100%] '>


                        <div className='my-[10px]'>
                            <h1 className='text-center text-[28px] font-[500]'>Please fill your startup Details</h1>
                        </div>

                        <div>
                            <h2 className='text-[25px] font-[600] mb-[10px]'>Your details</h2>
                        </div>


                        <div className='registerforms flex justify-between'>

                            <div className='registerformsleft my-[8px] text-black w-[48%]'>
                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>First Name <sup className='text-[red]'>*</sup> </p>
                                    <input type='text' name="Company_Name" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' placeholder='First Name' disabled value={data.FirstName} />
                                </div>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Mobile.No <sup className='text-[red]'>*</sup> </p>
                                    <input type='text' name="Company_Name" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' placeholder='First Name' disabled value={data.Phone} />
                                </div>

                            </div>

                            <div className='registerformsright my-[8px] text-black w-[48%]'>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Last Name <sup className='text-[red]'>*</sup> </p>
                                    <input type='text' name="Company_Name" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' placeholder='First Name' disabled value={data.LastName} />
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



                        <div className='registerforms flex justify-between w-[100%]'>

                            <div className='registerformsleft my-[8px] text-black w-[100%]'>
                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Company Logo <sup className='text-[red]'>*</sup> </p>
                                    <input type='file' name="Logo" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Logo", e.target.files[0])} />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Logo}</div>
                                </div>



                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Company Description <sup className='text-[red]'>*</sup> </p>
                                    <textarea type='text' name="Company_Description" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Company_Description", e.target.value)} placeholder='Company Description' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Company_Description}</div>
                                </div>


                                <div className='my-5'>
                                    <div className='mb-3'>
                                        <p className='font-[500] mb-2'>Highlights <sup className='text-[red]'>*</sup> </p>
                                        <input type='text' name="Highlight1" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Highlight1", e.target.value)} placeholder='Highlight 1' />
                                    </div>


                                    <div className='mb-3'>
                                        <input type='text' name="Highlight2" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Highlight2", e.target.value)} placeholder='Highlight 2' />
                                    </div>


                                    <div className='mb-3'>
                                        <input type='text' name="Highlight3" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Highlight3", e.target.value)} placeholder='Highlight 3' />
                                    </div>


                                    <div className='mb-3'>
                                        <input type='text' name="Highlight4" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Highlight4", e.target.value)} placeholder='Highlight 4 ( optional )' />
                                    </div>


                                    <div className='mb-3'>
                                        <input type='text' name="Highlight5" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Highlight5", e.target.value)} placeholder='Highlight 5 ( optional )' />
                                    </div>
                                </div>




                                <div className='my-5'>
                                    <div className='mb-3'>
                                        <p className='font-[500] mb-2'>Team <sup className='text-[red]'>*</sup> </p>
                                    </div>


                                    <div className='flex justify-between'>


                                        <div className='mb-3 w-[45%]'>
                                            <div className=' h-[220px] relative'>
                                                <button className='w-[200px] h-[200px] start-[50%] translate-x-[-50%] border-[1px] border-[#8637F8] text-[#8637F8] rounded-[50%] absolute flex justify-center items-center flex-col'><FaUser className='text-[25px]' />
                                                    <div className='text-[12px] mt-1'>
                                                        Upload Image
                                                    </div>
                                                </button>
                                                <input type='file' name="TeamProfile1" className=' w-[100%] h-[200px] absolute opacity-0  border-[1px] p-[10px]  rounded-[50%]' onChange={(e) => formik.setFieldValue("TeamProfile1", e.target.files[0])} placeholder='Highlight 2' />
                                            </div>
                                            <div>
                                                <input type='text' name="TeamName1" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("TeamName1", e.target.value)} placeholder='Full Name' />
                                                <input type='text' name="TeamDesignation1" className=' w-[100%] my-2  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("TeamDesignation1", e.target.value)} placeholder='Designation' />
                                                <input type='text' name="TeamExperience1" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("TeamExperience1", e.target.value)} placeholder='Experience' />
                                            </div>
                                        </div>


                                        <div className='mb-3 w-[45%]'>
                                            <div className='h-[220px] relative'>
                                                <button className='w-[200px] h-[200px] start-[50%] translate-x-[-50%] border-[1px] border-[#8637F8] text-[#8637F8] rounded-[50%] absolute flex justify-center items-center flex-col'><FaUser className='text-[25px]' />
                                                    <div className='text-[12px] mt-1'>
                                                        Upload Image
                                                    </div>
                                                </button>
                                                <input type='file' name="TeamProfile2" className=' w-[100%] h-[200px] absolute opacity-0  border-[1px] p-[10px]  rounded-[50%]' onChange={(e) => formik.setFieldValue("TeamProfile2", e.target.files[0])} placeholder='Highlight 2' />
                                            </div>
                                            <div>
                                                <input type='text' name="TeamName2" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("TeamName2", e.target.value)} placeholder='Full Name' />
                                                <input type='text' name="TeamDesignation2" className=' w-[100%] my-2  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("TeamDesignation2", e.target.value)} placeholder='Designation' />
                                                <input type='text' name="TeamExperience2" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("TeamExperience2", e.target.value)} placeholder='Experience' />
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className='my-5 W-[100%]'>
                                    <div className='mb-3'>
                                        <p className='font-[500] mb-2'>Backers <sup className='text-[red]'>*</sup> </p>
                                    </div>


                                    <div className='flex justify-between W-[100%]'>


                                    <div className='mb-3 w-[45%]'>
                                            <div className='h-[220px] relative'>
                                                <button className='w-[200px] h-[200px] start-[50%] translate-x-[-50%] border-[1px] border-[#8637F8] text-[#8637F8] rounded-[50%] absolute flex justify-center items-center flex-col'><FaUser className='text-[25px]' />
                                                    <div className='text-[12px] mt-1'>
                                                        Upload Image
                                                    </div>
                                                </button>
                                                <input type='file' name="BackersProfile2" className=' w-[100%] h-[150px] absolute opacity-0  border-[1px] p-[10px]  rounded-[50%]' onChange={(e) => formik.setFieldValue("BackersProfile1", e.target.files[0])} placeholder='Highlight 2' />
                                            </div>
                                            <div>
                                                <input type='text' name="BackersName2" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("BackersName1", e.target.value)} placeholder='Full Name' />
                                                <input type='text' name="BackersDesignation2" className=' w-[100%] my-2  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("BackersDesignation1", e.target.value)} placeholder='Designation' />
                                                <input type='text' name="BackersExperience2" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("BackersExperience1", e.target.value)} placeholder='Experience' />
                                            </div>
                                        </div>


                                        <div className='mb-3 w-[45%]'>
                                            <div className='h-[220px] relative'>
                                                <button className='w-[200px] h-[200px] start-[50%] translate-x-[-50%] border-[1px] border-[#8637F8] text-[#8637F8] rounded-[50%] absolute flex justify-center items-center flex-col'><FaUser className='text-[25px]' />
                                                    <div className='text-[12px] mt-1'>
                                                        Upload Image
                                                    </div>
                                                </button>
                                                <input type='file' name="BackersProfile2" className=' w-[100%] h-[150px] absolute opacity-0  border-[1px] p-[10px]  rounded-[50%]' onChange={(e) => formik.setFieldValue("BackersProfile2", e.target.files[0])} placeholder='Highlight 2' />
                                            </div>
                                            <div>
                                                <input type='text' name="BackersName2" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("BackersName2", e.target.value)} placeholder='Full Name' />
                                                <input type='text' name="BackersDesignation2" className=' w-[100%] my-2  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("BackersDesignation2", e.target.value)} placeholder='Designation' />
                                                <input type='text' name="BackersExperience2" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("BackersExperience2", e.target.value)} placeholder='Experience' />
                                            </div>
                                        </div>


                                    </div>
                                </div>






                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Problem your startup is addressing <sup className='text-[red]'>*</sup> </p>
                                    <input type='text' name="Problem" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Problem", e.target.value)} placeholder='Problem  in Brief' />
                                </div>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Solution your startup is offering <sup className='text-[red]'>*</sup> </p>
                                    <input type='text' name="Solution" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Solution", e.target.value)} placeholder='Solution in Brief' />
                                </div>



                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Video link for demo <sup className='text-[red]'>*</sup> </p>
                                    <input type='url' name="Video_Link" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Video_Link", e.target.value)} placeholder='Video link' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Video_Link}</div>
                                </div>


                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Pitch deck<sup className='text-[red]'>*</sup> </p>
                                    <input type='file' name="Pitch_Deck" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Pitch_Deck", e.target.files[0])} placeholder='Video link' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.LinkedinUrl}</div>
                                </div>



                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Incorporation certificate<sup className='text-[red]'>*</sup> </p>
                                    <input type='file' name="Incorporation_Certificate" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Incorporation_Certificate", e.target.files[0])} placeholder='Video link' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.LinkedinUrl}</div>
                                </div>

                                <div className='flex items-center my-[30px] text-[blue] '><input onChange={(e) => formik.setFieldValue('TermsAndConditions', e.target.checked)} type="checkbox" className='w-[15px] h-[15px] border-[1px] border-[#8637F8] me-[5px]' />I hereby acknowledge and accept all &nbsp;"<Link to={"/terms"} className='underline decoration-solid'>terms and conditions outlined in the agreement.</Link>"</div>
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
        </>
    )
}
