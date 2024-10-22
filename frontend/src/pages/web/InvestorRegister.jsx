import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { ErrorMessage, Field, Form } from 'formik'
import { FaXmark } from 'react-icons/fa6'
import * as yup from "yup"
import axios, { toFormData } from 'axios'
import { MdVerified } from 'react-icons/md'
import { Logo } from '../../common/Logo'



export function InvestorRegister() {
    let notificationsuccess = (success) => toast.success(success)
    let notificationerror = (error) => toast.error(error)


    let location = useLocation();
    let data = location.state
console.log(data)
    let naviget = useNavigate()


    const formik = useFormik({
        initialValues: {
            Email: data.Email,
            FirstName: data.FirstName,
            Join_as: data.Join_as,
            LastName: data.LastName,
            Password: data.Password,
            Phone: data.Phone,
            All_Instructions: "",
            TermsAndConditions: "",
        },


        onSubmit: () => {
            insertdata(formik.values)
        }
    })


    let insertdata = (value) => {
        console.log(value)
        if (value.TermsAndConditions == true && value.All_Instructions == true) {
            naviget("/investor-2", { state: value })
        }
        else {
            notificationerror("Accept all terms and conditions")
        }
    }

    return (
        <>
            <section className='login_main w-[100%] p-[15px]  bg-[#FCFAFF] flex flex-col justify-center items-center'>
                <div className='login_inner w-[872px] py-2 my-[10px] px-[35px] rounded-[12px] bg-white flex items-center'>
                    {/* <MdVerified className='text-[blue] text-[50px]' /> */}
                    <div className='w-[100px]'>
                        <Logo />
                    </div>
                    <div>
                        <p className='mx-2 text-[23px] font-[700] text-[#8637F8]'>Become An Verified Member</p>
                        <p className='mx-2  text-[16px] font-[700]'>In 4 simple steps</p>
                    </div>
                </div>

                <div className=' w-[872px] py-2 my-[10px] px-[35px] rounded-[12px] flex items-center'>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='bg-[#8637F8] text-white w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>1</div>
                        <p className='font-[500]'>Assessment</p>
                    </div>
                    <div className='w-[20%] border-b-[1px]'></div>
                    <div className='flex justify-center items-center flex-col mx-[10px]'>
                        <div className='bg-[#8637F81A] text-[#8637F8] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>2</div>
                        <p className='font-[500]'>KYC</p>
                    </div>
                    <div className='w-[20%] border-b-[1px]'></div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='bg-[#8637F81A] text-[#8637F8] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>3</div>
                        <p className='font-[500] text-center'>Bank Verification</p>
                    </div>
                    <div className='w-[20%] border-b-[1px]'></div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='bg-[#8637F81A] text-[#8637F8] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>4</div>
                        <p className='font-[500]'>Agreement</p>
                    </div>
                </div>


                <form className='login_inner w-[872px] py-[35px] bg-white rounded-[12px]' onSubmit={formik.handleSubmit} >



                    <div className='login_input_section '>


                        <div className='pb-[25px] px-[35px] mb-[12px] border-b-[1px] flex justify-center flex-col'>
                            <h1 className=' text-[32px] font-[500]'>Let's start now</h1>
                            <p>Carefully review the key points below and confirm your understanding by checking all the boxes.</p>
                        </div>


                        <div className='registerforms flex justify-between px-[35px]'>
                            <ul className=' list-disc w-[100%]'>
                                <li className='py-[20px] border-b-[1px]'>
                                    <p>Startup investments come with a high degree of volatility.</p>
                                </li>

                                <li className='py-[20px] border-b-[1px]'>
                                    <p>Investing in startups involves limited liquidity.</p>
                                </li>

                                <li className='py-[20px] border-b-[1px]'>
                                    <p>Backing startups carries substantial risk with no guaranteed returns.</p>
                                </li>

                                <li className='py-[20px] border-b-[1px]'>
                                    <p>Startup investors shouldn't expect regular dividends from their investments.</p>
                                </li>

                                <li className='py-[20px] '>
                                    <p>Investors acknowledge that failed startups may result in minimal or no returns.</p>
                                    <div className='flex items-center my-[20px]'><input onChange={(e) => formik.setFieldValue('All_Instructions', e.target.checked)} type="checkbox" className='w-[15px] h-[15px] border-[1px] border-[#8637F8] me-[5px]' />Agree all instructions</div>
                                </li>


                                <div className='flex items-center my-[30px] text-[blue] '><input onChange={(e) => formik.setFieldValue('TermsAndConditions', e.target.checked)} type="checkbox" className='w-[15px] h-[15px] border-[1px] border-[#8637F8] me-[5px]' />I hereby acknowledge and accept all &nbsp;"<Link to={"/terms"} className='underline decoration-solid'>terms and conditions outlined in the agreement.</Link>"</div>

                            </ul>
                        </div>


                        <div className='my-[8px] text-black px-[35px]'>
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



// <div className='registerformsleft my-[8px] text-black w-[48%]'>
//                                 <div className='mb-2'>
//                                     <p className='font-[500] mb-2'>Company Name <sup className='text-[red]'>*</sup> </p>
//                                     <input type='text' name="Company_Name" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Company_Name", e.target.value)} placeholder='Company Name' />
//                                 </div>
//                                 <div className='requires_message'>
//                                     <div>{formik.errors.Company_Name}</div>
//                                 </div>



//                                 <div className='my-[8px] text-black'>
//                                     <p className='font-[500] mb-0'>Company Sector <sup className='text-[red]'>*</sup></p>
//                                     <select name="Startup_Sector" className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Startup_Sector", e.target.value)}>
//                                         <option>Business Category</option>
//                                         <option value={"Entertainment"}>Entertainment</option>
//                                         <option value={"IT Services"}>IT Services</option>
//                                         <option value={"Education"}>Education</option>
//                                     </select>
//                                 </div>
//                                 <div className='requires_message'>
//                                     <div>{formik.errors.Startup_Sector}</div>
//                                 </div>



//                                 <div className='my-[8px] text-black'>
//                                     <p className='font-[500] mb-0'>Address <sup className='text-[red]'>*</sup></p>
//                                     <input type='text' className=' w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Address", e.target.value)} name='Address' />
//                                 </div>
//                                 <div className='requires_message'>
//                                     <div>{formik.errors.Address}</div>
//                                 </div>

//                                 <div className='my-[8px] text-black'>
//                                     <p className='font-[500] mb-0'>Password <sup className='text-[red]'>*</sup></p>
//                                     <input type='text' className=' w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Password", e.target.value)} name='Password' />
//                                 </div>
//                                 <div className='requires_message'>
//                                     <div>{formik.errors.Password}</div>
//                                 </div>
//                             </div>

//                             <div className='registerformsright my-[8px] text-black w-[48%]'>
//                                 <div className='my-[8px] text-black'>
//                                     <p className='font-[500] mb-0'>Logo <sup className='text-[red]'>*</sup></p>
//                                     <input name="Logo" type='file' className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Logo", e.target.files[0])} />
//                                 </div>
//                                 <div className='requires_message'>
//                                     <div>{formik.errors.Logo}</div>
//                                 </div>

//                                 <div className='mb-2'>
//                                     <p className='font-[500] mb-2'>Pan <sup className='text-[red]'>*</sup> </p>
//                                     <input type='file' name="Pan" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Pan", e.target.files[0])} placeholder='Enter Pan' />
//                                 </div>
//                                 <div className='requires_message'>
//                                     <div>{formik.errors.Pan}</div>
//                                 </div>


//                                 <div className='my-[8px] text-black'>
//                                     <p className='font-[500] mb-0'>Aadhar Card <sup className='text-[red]'>*</sup></p>
//                                     <input type='file' className=' w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("AadharCard", e.target.files[0])} name='AadharCard' />
//                                 </div>
//                                 <div className='requires_message'>
//                                     <div>{formik.errors.AadharCard}</div>
//                                 </div>


//                                 <div className='my-[8px] text-black'>
//                                     <p className='font-[500] mb-0'>Bank Proof <sup className='text-[red]'>*</sup></p>
//                                     <input name="BankDocuments" type='file' className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("BankDocuments", e.target.files[0])} />
//                                 </div>
//                                 <div className='requires_message'>
//                                     <div>{formik.errors.BankDocuments}</div>
//                                 </div>



//                             </div>


// axios.post('http://localhost:5000/investor-register', toFormData(value))
// .then((res) => {
//     naviget('/startup-success')
// })
// .catch((error) => {
//     console.log(error)
// })

// Join_as: getlocaldata.Join_as,
// Email: getlocaldata.Email,
// Phone: getlocaldata.Phone,
// Company_Name: "",
// Startup_Sector: "",
// Address: "",
// Password: "",
// Logo: "",
// Pan: "",
// AadharCard: "",
// BankDocuments: "",
// Activestatus: "pending",
// All_Instructions: "",
// TermsAndConditions: "",
// ReferredBy: getlocaldata.ReferredBy,