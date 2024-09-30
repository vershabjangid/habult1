import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../../common/Logo'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth0 } from '@auth0/auth0-react';




export function RegisterPage() {
    let { user, loginWithRedirect } = useAuth0()



    let [joinstatus, setjoinstatus] = useState('investor');
    let naviget = useNavigate();

    const validationschema = Yup.object().shape({
        Email: Yup.string().required("Email Required")
    })


    let insertdata = (value) => {
        let data = {
            Join_as: joinstatus,
            Email: value.Email,
        }
        axios.post('http://localhost:5000/add-register-otp', data)
            .then((res) => {
                localStorage.setItem('registerdata', JSON.stringify(data))
                naviget('/register-otp', { state: res.data })
            })
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
                                        <div onClick={() => setjoinstatus("investor")} className={joinstatus == "investor" ? ' w-[50%] border-b-[5px] border-[var(--button-color--)] text-[var(--button-color--)] flex items-center justify-center font-[500]' : ' w-[50%] text-[grey] flex items-center justify-center font-[500]'}>Investor</div>
                                        <div onClick={() => setjoinstatus("startup")} className={joinstatus == "startup" ? ' w-[50%] border-b-[5px] border-[var(--button-color--)] text-[var(--button-color--)] flex items-center justify-center font-[500]' : ' w-[50%] text-[grey] flex items-center justify-center font-[500]'}>Startups</div>
                                    </div>
                                </div>

                                <div className='my-[8px] text-black'>
                                    <Field type='email' className=' w-[100%] border-[1px] p-[10px]  rounded-[8px]' placeholder='Email' name='Email' />
                                    <div className='requires_message'>
                                        <ErrorMessage name='Email' className='' />
                                    </div>
                                </div>




                                <div className='my-[8px] text-black'>
                                    <button type='submit' className='border-[1px] w-[100%] py-[16px] px-[32px] my-[10px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]'>Next</button>
                                </div>

                                <div className='w-[100%] flex items-center justify-between my-3'>
                                    <div className='w-[50%] border-b-[1px] border-[black]'></div>
                                    <p className='mx-5'>OR</p>
                                    <div className='w-[50%] border-b-[1px] border-[black]'></div>
                                </div>

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
