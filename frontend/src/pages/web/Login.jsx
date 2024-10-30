import React, { useState } from 'react'
import { Logo } from '../../common/Logo'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { toast, ToastContainer } from 'react-toastify'
export function Login() {
    let notificationerr = (error) => toast.error(error)

    let naviget = useNavigate();
    let [joinstatus, setjoinstatus] = useState('Member');

    var handlelogin = (value) => {
        if (joinstatus == "Member") {
            axios.post('http://147.79.71.69:5000/get-investor', value)
                .then((res) => {
                    if (res.data.getdata.length != 0 && res.data.getdata[0].Activestatus != "Pending") {
                        localStorage.setItem('userLogin', JSON.stringify(res.data.getdata))
                        localStorage.setItem('token', JSON.stringify(res.data.Token))
                        naviget('/startups')
                    }

                    else {
                        notificationerr("Incorrect Email or Password")
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }


        else {
            axios.post('http://147.79.71.69:5000/login', value)
                .then((res) => {
                    if (res.data.getdata.length != 0 && res.data.getdata.Activestatus != "Pending") {
                        localStorage.setItem('userLogin', JSON.stringify(res.data.getdata))
                        localStorage.setItem('token', JSON.stringify(res.data.Token))
                        naviget('/startups')
                    }

                    else {
                        notificationerr("Incorrect Email or Password")
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    let forgotnaviget = () => {
        naviget('/forgot-password', { state: joinstatus })
    }


    return (
        <>
            <section className='login_main w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <section className='login_inner w-[572px] h-[658px] p-[35px] bg-white rounded-[12px]'>
                    <Formik
                        initialValues={{
                            Email: "",
                            Password: ""
                        }}

                        onSubmit={(values) => {
                            handlelogin(values)
                        }}
                    >
                        <Form>
                            <div className='login_input_section w-[100%] h-[100%] '>
                                <div className='logo_section w-[200px] m-auto flex justify-center'>
                                    <Logo />
                                </div>
                                <div className='my-[30px]'>
                                    <h1 className='text-center text-[32px] font-[500]'>LOGIN</h1>
                                </div>

                                <div className='w-[100%] my-[3px] text-black mb-8'>
                                    <p className='mb-1 text-[grey]'>Login as</p>
                                    <div className='w-[100%] h-[62px] bg-[#f9f4ff] rounded flex'>
                                        <div onClick={() => setjoinstatus("Member")} className={joinstatus == "Member" ? ' w-[50%] border-b-[5px] border-[var(--button-color--)] text-[var(--button-color--)] flex items-center justify-center font-[500]' : ' w-[50%] text-[grey] flex items-center justify-center font-[500]'}>Member</div>
                                        <div onClick={() => setjoinstatus("startup")} className={joinstatus == "startup" ? ' w-[50%] border-b-[5px] border-[var(--button-color--)] text-[var(--button-color--)] flex items-center justify-center font-[500]' : ' w-[50%] text-[grey] flex items-center justify-center font-[500]'}>Startups</div>
                                    </div>
                                </div>

                                <div className='my-[8px] text-black'>
                                    <Field as="input" name="Email" type='email' className=' w-[100%] border-[1px] p-[10px]  rounded-[8px]' placeholder='Enter Email' />
                                </div>

                                <div className='mt-[25px] text-black'>
                                    <Field as="input" name="Password" type='password' className=' w-[100%] border-[1px] p-[10px] pe-[55px]  rounded-[8px]' placeholder='Enter Password' />
                                    <div></div>
                                </div>


                                <div className='my-3 flex justify-between items-center'>
                                    <div className='flex items-center'>
                                    </div>


                                    <div onClick={forgotnaviget}>
                                        <p className='text-[var(--button-color--)] text-[16px] font-[600]'>Forgot Password?</p>
                                    </div>
                                </div>

                                <div className='my-[8px] text-black'>
                                    <button className='border-[1px] w-[100%] py-[16px] px-[32px] my-[20px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]'>Login</button>
                                </div>

                                <div className='my-[8px] text-black'>
                                    <p className='text-[grey] text-center'>Don’t have an account? <Link to={'/register'}><span className='text-black font-[500]'>SIGNUP</span></Link></p>
                                </div>
                            </div>

                        </Form>
                    </Formik>

                </section>
            </section>
            <ToastContainer />
        </>
    )
}
