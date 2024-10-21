import React from 'react'
import { Logo } from '../../common/Logo'
import { Link, useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export function Forgot() {

    let naviget = useNavigate();
    let notifysuccess = (success) => toast.success(success)
    let notifyerror = (error) => toast.error(error)

    let emailverify = (value) => {
        axios.post('http://localhost:5000/forgot-password', value)
            .then((res) => {
                if (res.data.Status === 0) {
                    notifyerror(res.data.Message)
                }

                else {
                    notifysuccess("Email Verified Successfully")
                    naviget('/otp-verification', { state: res.data })
                }
            })
    }


    return (
        <>
            <section className='login_main w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <section className='login_inner w-[572px] h-[658px] p-[35px] bg-white rounded-[12px]'>
                    <div className='login_input_section h-[100%] '>
                        <div className='logo_section w-[300px] m-auto flex justify-center'>
                            <Logo />
                        </div>
                        <div className='my-[30px]'>
                            <h1 className='text-center text-[32px] font-[500]'>FORGOT PASSWORD</h1>
                        </div>

                        <Formik

                            initialValues={{
                                Email: ""
                            }}

                            onSubmit={(value) => {
                                emailverify(value)
                            }}
                        >
                            <Form>
                                <div className='my-[8px] text-black'>
                                    <Field type='email' as="input" name="Email" className=' w-[100%] border-[1px] p-[10px]  rounded-[8px]' placeholder='Enter Email' />
                                </div>


                                <div className='my-[8px] text-black'>
                                    <button type='submit' className='border-[1px] w-[100%] py-[16px] px-[32px] my-[20px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]'>Next</button>
                                </div>
                            </Form>
                        </Formik>

                        <div className='my-[8px] text-black'>
                            <p className='text-[grey] text-center'>Don’t have an account? <Link to={'/register'}><span className='text-black font-[500]'>SIGNUP</span></Link></p>
                        </div>
                    </div>

                </section>
            </section>
            <ToastContainer />
        </>
    )
}
