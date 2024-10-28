import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../../common/Logo'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';




export function RegisterPage() {


    let naviget = useNavigate();

    const validationschema = Yup.object().shape({
        FirstName: Yup.string().required("First Name Required"),
        LastName: Yup.string().required("Last Name Required"),
        Email: Yup.string().email("Invalid Email").required("Email Required"),
        Phone: Yup.number().min(1000000000, 'Too Short!').max(9999999999, 'Too Long!').required("Phone Required"),
    })


    let insertdata = (value) => {
  
        let data = {
            FirstName: value.FirstName,
            LastName: value.LastName,
            Email: value.Email,
            Phone: value.Phone
        }

        naviget('/register2', { state: value })
    }

    return (
        <>
            <section className='login_main w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <section className='login_inner w-[572px] p-[35px] bg-white rounded-[12px]'>
                    <div className='login_input_section h-[100%] '>
                        <Formik

                            initialValues={{
                                FirstName: "",
                                LastName: "",
                                Email: "",
                                Phone: ""
                            }}

                            validationSchema={validationschema}
                            onSubmit={(values) => {
                                insertdata(values);
                            }}
                        >
                            <Form>
                                <div className='logo_section w-[200px] m-auto flex justify-center'>
                                    <Logo />
                                </div>
                                <div className='my-[20px]'>
                                    <h1 className='text-center text-[25px] font-[500]'>SIGNUP</h1>
                                </div>

                                <div className='flex'>
                                    <div>
                                        <label className=''>First Name</label>
                                        <Field type='text' className=' w-[97%] my-1 border-[1px] p-[10px]  rounded-[8px]' placeholder='First Name' name='FirstName' />
                                        <div className='requires_message'>
                                            <ErrorMessage name='FirstName' className='' />
                                        </div>
                                    </div>

                                    <div>
                                        <label className=''>Last Name</label>
                                        <Field type='text' className='w-[97%] my-1 border-[1px] p-[10px]  rounded-[8px]' placeholder='Last Name' name='LastName' />
                                        <div className='requires_message'>
                                            <ErrorMessage name='LastName' className='' />
                                        </div>
                                    </div>
                                </div>

                                <div className='my-[8px] text-black'>
                                    <label className=''>Email</label>
                                    <Field type='email' className=' w-[100%] my-1 border-[1px] p-[10px]  rounded-[8px]' placeholder='Email' name='Email' />
                                    <div className='requires_message'>
                                        <ErrorMessage name='Email' className='' />
                                    </div>


                                    <label className=''>Phone</label>
                                    <Field type='number' className=' w-[100%] my-1 border-[1px] p-[10px]  rounded-[8px]' placeholder='Phone Number' name='Phone' />
                                    <div className='requires_message'>
                                        <ErrorMessage name='Phone' className='' />
                                    </div>

                                </div>




                                <div className='my-[8px] text-black'>
                                    <button type='submit' className='border-[1px] w-[100%] py-[16px] px-[32px] my-[10px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]'>Next</button>
                                </div>

                                {/* <div className='w-[100%] flex items-center justify-between my-3'>
                                    <div className='w-[50%] border-b-[1px] border-[black]'></div>
                                    <p className='mx-5'>OR</p>
                                    <div className='w-[50%] border-b-[1px] border-[black]'></div>
                                </div> */}

                            </Form>
                        </Formik>
                        {/* <div className=' text-black'>
                            <button onClick={(e) => loginWithRedirect()} className='border-[1px] w-[100%] py-[16px] px-[32px] my-[2px] bg-[white] rounded-[8px] text-[20px] text-black font-[500] flex items-center justify-center'> <FcGoogle className='text-[35px] me-3' /> Continue with Google</button>
                        </div> */}


                        <div className='my-[8px] text-black'>
                            <p className='text-[grey] text-center'>Already have an account? <Link to={"/login"}><span className='text-black font-[500]'>LOGIN</span></Link></p>
                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}
