import React, { useState } from 'react'
import { Logo } from '../../common/Logo'
import { Link, useLocation } from 'react-router-dom'
import { useFormik } from 'formik'

export function InvestorRegister2() {
    let location = useLocation();
    let data = location.state

    const formik = useFormik({
        initialValues: {
            Join_as: data.Join_as,
            FirstName: data.FirstName,
            LastName: data.LastName,
            Email: data.Email,
            Phone: data.Phone,
            Pan: "",
            Address: "",
            AadharCard: "",
            Password: data.Password,
            All_Instructions: data.All_Instructions,
            TermsAndConditions: data.TermsAndConditions,
            Company_Name: "",
        },


        onSubmit: () => {
            insertdata(formik.values)
        }
    })

    let insertdata = (value) => {
        value.Company_Name = value.FirstName + " " + value.LastName
    }

    let [check, setcheckbox] = useState(true)

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
                        <div className='bg-[#8637F8] text-white w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>2</div>
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
                            <h1 className=' text-[32px] font-[500]'>Fill all details to complete registration</h1>
                        </div>


                        {/* <div className=' px-[35px] py-[10px] flex'>
                            <div className='flex items-center'>
                                <input checked={check ? true : ""} onChange={() => setcheckbox(true)} type="checkbox" className='w-[30px] h-[20px] bg-[#be7fbe]' />
                                <p className=' font-[600]'>Individual Investor</p>
                            </div>

                            <div className='flex items-center ms-[30px]'>
                                <input type="checkbox" checked={check ? false : true} onChange={() => setcheckbox(false)} className='w-[30px] h-[20px] bg-[#be7fbe]' />
                                <p className=' font-[600]'>Company Representative</p>
                            </div>
                        </div> */}


                        <div className='registerforms flex justify-between px-[35px]'>
                            <div className='registerformsleft my-[8px] text-black w-[48%]'>
                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>First Name <sup className='text-[red]'></sup> </p>
                                    <input type='text' value={data.FirstName} disabled className=' w-[100%]  border-[1px] p-[10px] bg-[#fdc7fd]  rounded-[8px]' placeholder='Company Name' />
                                </div>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Email <sup className='text-[red]'></sup> </p>
                                    <input type='email' value={data.Email} disabled className=' w-[100%]  border-[1px] p-[10px] bg-[#fdc7fd]  rounded-[8px]' placeholder='Company Name' />
                                </div>



                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Aadhar Card <sup className='text-[red]'>*</sup></p>
                                    <input type='file' className=' w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("AadharCard", e.target.files[0])} name='AadharCard' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.AadharCard}</div>
                                </div>
                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Address <sup className='text-[red]'>*</sup></p>
                                    <input type='text' className=' w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Address", e.target.value)} name='Address' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Address}</div>
                                </div>
                            </div>

                            <div className='registerformsright my-[8px] text-black w-[48%]'>
                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Last Name <sup className='text-[red]'></sup> </p>
                                    <input type='text' value={data.LastName} disabled className=' w-[100%]  border-[1px] p-[10px] bg-[#fdc7fd]  rounded-[8px]' placeholder='Company Name' />
                                </div>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Phone <sup className='text-[red]'></sup> </p>
                                    <input type='text' value={data.Phone} disabled className=' w-[100%]  border-[1px] p-[10px] bg-[#fdc7fd]  rounded-[8px]' placeholder='Company Name' />
                                </div>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Pan <sup className='text-[red]'>*</sup> </p>
                                    <input type='file' name="Pan" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Pan", e.target.files[0])} placeholder='Enter Pan' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Pan}</div>
                                </div>


                            </div>
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

        </>
    )
}

