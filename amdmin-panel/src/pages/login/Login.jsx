import axios from 'axios';
import { Form, Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Login() {

    let [checked, setchecked] = useState(false);
    let naviget = useNavigate();

    let loginsuccessfully = () => {
        naviget('/dashboard')
    }

    // let insertdata = (value) => {
    //     axios.post(`http://localhost:5000/admin-login`, value)
    //         .then((res) => {
    //             console.log(res.data)
    //         })
    // }

    useEffect(()=>{
        // insertdata();
    },[])
    return (
        <>
            <section className='relative w-[100%] h-[100vh]'>
                <section className='admin_login absolute  w-[100%] h-[100vh] '>
                </section>

                <div className='admin_inner_form w-[500px] p-[30px] absolute  rounded-[12px] '>
                    <div className='w-100'>
                        <div className='flex justify-center my-3'>
                            {/* <Image
                                src={logo}
                                className='w-[200px]'
                            /> */}
                        </div>

                        <div className=''>
                            <h1 className=' text-center text-[40px] font-[700] text-[#0c4422]'>Welcome Back</h1>
                        </div>

                        <Formik
                            initialValues={{
                                "Email": "",
                                "Password": "",
                                "Remember": ""
                            }}

                            onSubmit={(value) => {
                                // insertdata(value)
                            }}

                        >
                            <Form>
                                <div className='mt-[15px]'>
                                    <div className='form_inputs'>
                                        <Field type="email" className='mt-[32px] w-[100%] p-2 px-4 bg-transparent text-[white]' placeholder='Enter email' name="Email" />
                                    </div>

                                    <div className='form_inputs mt-[20px]'>
                                        <Field type="text" className='mt-[25px] w-[100%] p-2 px-4 bg-transparent text-[white]' placeholder='Enter Password' name="Password" />
                                    </div>
                                </div>

                                <div className='flex justify-between mt-[30px]'>
                                    <div className='flex items-center'>
                                        <Field type="checkbox" onClick={() => setchecked(!checked)} className='w-[24px] h-[24px]' name="Remember" />
                                        <p className='ms-3'>Remember Me</p>
                                    </div>
                                    <div>
                                        <Link to={"/forgot-password"}>
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>

                                <div className=''>
                                    <button onClick={loginsuccessfully} type='submit' className='w-[100%] my-[50px] font-[500] text-[28px] py-3 rounded-[5px] bg-white text-black'>Login</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </section>
        </>
    )
}
