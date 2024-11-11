import { useFormik } from 'formik'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Logo } from '../../common/Logo'
import axios, { toFormData } from 'axios'
import { toast, ToastContainer } from 'react-toastify'
export function BankVerification() {


    let notifyerror = (error) => toast.error(error)

    let location = useLocation()
    let data = location.state

    let formik = useFormik({
        initialValues: {
            Join_as: data.Join_as,
            FirstName: data.FirstName,
            LastName: data.LastName,
            Email: data.Email,
            Phone: data.Phone,
            Pan: data.Pan,
            Address: data.Address,
            AadharCard: data.AadharCard,
            Password: data.Password,
            All_Instructions: data.All_Instructions,
            TermsAndConditions: data.TermsAndConditions,
            Company_Name: data.Company_Name,
            BankName: "",
            IFSC_Code: "",
            AccountNumber: "",
            BankProof: ""
        },

        validationSchema: Yup.object().shape({
            BankName: Yup.string().required("Bank Name required"),
            IFSC_Code: Yup.string().required("IFSC Code  required"),
            AccountNumber: Yup.number().required("Account Number required"),
            BankProof: Yup.mixed().required("Bank Proof required")
        }),

        onSubmit: () => {
            insertdata(formik.values)
        }

    })


    let naviget = useNavigate()
    let insertdata = (value) => {
        axios.post('https://api.hivexv.com/investor-register', toFormData(value), {
            headers: {
                authorization: JSON.parse(localStorage.getItem('authenticate'))
            }
        })
            .then((res) => {
                if (res.data.Status == 1) {
                    naviget('/startup-success')
                }
                else {
                    notifyerror(res.data.Message)
                }
            })
    }
    return (
        <>
            <section className='login_main w-[100%] p-[15px]  bg-[#FCFAFF] flex flex-col justify-center items-center'>
                <div className='login_inner_term w-[872px] py-2 my-[10px] px-[35px] rounded-[12px] bg-white flex items-center'>
                    {/* <MdVerified className='text-[blue] text-[50px]' /> */}
                    <div className='w-[100px]'>
                        <Logo />
                    </div>
                    <div>
                        <p className='mx-2 text-[23px] font-[700] text-[#8637F8]'>Become An Verified Member</p>
                        <p className='mx-2  text-[16px] font-[700]'>In 4 simple steps</p>
                    </div>
                </div>

                <div className='login_inner_term w-[872px] py-2 my-[10px] px-[35px] rounded-[12px] flex items-center justify-between'>
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
                        <div className='bg-[#8637F8] text-white w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>3</div>
                        <p className='font-[500] text-center'>Bank Verification</p>
                    </div>
                    {/* <div className='w-[20%] border-b-[1px]'></div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='bg-[#8637F81A] text-[#8637F8] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>4</div>
                        <p className='font-[500]'>Payment</p>
                    </div> */}
                </div>


                <form className='login_inner_term w-[872px] py-[35px] bg-white rounded-[12px]' onSubmit={formik.handleSubmit} >



                    <div className='login_input_section '>


                        <div className='pb-[25px] px-[35px] mb-[12px] border-b-[1px] flex justify-center flex-col'>
                            <h1 className=' text-[32px] font-[500]'>Fill all bank details to complete registration</h1>
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

                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Bank Name <sup className='text-[red]'>*</sup></p>
                                    <input type='text' placeholder='Enter bank name' className=' w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' name='BankName' onChange={(e) => formik.setFieldValue("BankName", e.target.value)} />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.BankName}</div>
                                </div>
                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>IFSC Code  <sup className='text-[red]'>*</sup></p>
                                    <input type='text' className=' uppercase w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' placeholder='Enter IFSC Code' onChange={(e) => formik.setFieldValue("IFSC_Code", e.target.value)} />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.IFSC_Code}</div>
                                </div>
                            </div>

                            <div className='registerformsright my-[8px] text-black w-[48%]'>

                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Account Number <sup className='text-[red]'>*</sup></p>
                                    <input type='number' placeholder='Enter account number' className=' w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("AccountNumber", e.target.value)} />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.AccountNumber}</div>
                                </div>



                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Bank Proof ( Cheque / Passbook ) <sup className='text-[red]'>*</sup> </p>
                                    <input type='file' className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("BankProof", e.target.files[0])} />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.BankProof}</div>
                                </div>


                            </div>
                        </div>



                        <div className='button_section my-[8px] text-black px-[35px]'>
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
