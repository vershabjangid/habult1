import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../../common/Logo'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';




export function RegisterPage() {


    let [joinstatus, setjoinstatus] = useState('Member');
    let naviget = useNavigate();

    const validationschema = Yup.object().shape({
        Email: Yup.string().required("Email Required"),
        Phone: Yup.string().required("Phone Required"),
        ReferredBy: Yup.string().required("Referred By Required")
    })


    let insertdata = (value) => {
        let data = {
            Join_as: joinstatus,
            Email: value.Email,
            Phone: value.Phone,
            ReferredBy: value.ReferredBy
        }

        localStorage.setItem('register-data', JSON.stringify(data))
        naviget('/register-otp', { state: value })
    }

    return (
        <>
            <section className='login_main w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <section className='login_inner w-[572px] p-[35px] bg-white rounded-[12px]'>
                    <div className='login_input_section h-[100%] '>
                        <Formik

                            initialValues={{
                                Join_as: "",
                                Email: "",
                                Phone: "",
                                ReferredBy: ""
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

                                <div className='w-[100%] h-[] my-[3px] text-black mb-8'>
                                    <p className='mb-1 text-[grey]'>Join as</p>
                                    <div className='w-[100%] h-[62px] bg-[#f9f4ff] rounded flex'>
                                        <div onClick={() => setjoinstatus("Member")} className={joinstatus == "Member" ? ' w-[50%] border-b-[5px] border-[var(--button-color--)] text-[var(--button-color--)] flex items-center justify-center font-[500]' : ' w-[50%] text-[grey] flex items-center justify-center font-[500]'}>Member</div>
                                        <div onClick={() => setjoinstatus("startup")} className={joinstatus == "startup" ? ' w-[50%] border-b-[5px] border-[var(--button-color--)] text-[var(--button-color--)] flex items-center justify-center font-[500]' : ' w-[50%] text-[grey] flex items-center justify-center font-[500]'}>Startups</div>
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

                                    <label className=''>Referred By</label>
                                    <Field as="select" className=' w-[100%] my-1 border-[1px] p-[10px] rounded-[8px]' name='ReferredBy' >
                                        <option value="1">dlksflsk</option>
                                        <option value="1werwjrl">dlksflsk</option>
                                    </Field>
                                    <div className='requires_message'>
                                        <ErrorMessage name='ReferredBy' className='' />
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
