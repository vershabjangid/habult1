import React from 'react'
import { Logo } from '../../common/Logo'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { toast, ToastContainer } from 'react-toastify'
export function Login() {
    let notificationerr = (error) => toast.error(error)

    let naviget = useNavigate();
    let handlelogin = (value) => {
        axios.post('http://localhost:5000/login', value)
            .then((res) => {
                if (res.data.getdata.length != 0) {
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
                            <div className='login_input_section h-[100%] '>
                                <div className='logo_section w-[200px] m-auto flex justify-center'>
                                    <Logo />
                                </div>
                                <div className='my-[30px]'>
                                    <h1 className='text-center text-[32px] font-[500]'>LOGIN</h1>
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


                                    <Link to={'/forgot-password'}>
                                        <p className='text-[var(--button-color--)] text-[16px] font-[600]'>Forgot Password?</p>
                                    </Link>
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
