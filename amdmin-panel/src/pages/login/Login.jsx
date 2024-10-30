import axios from 'axios';
import { Form, Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/download-removebg-preview.png'
export function Login() {

    let naviget = useNavigate();
    naviget('/dashboard')

    let insertdata = (value) => {
        axios.post(`http://localhost:5000/get-auth`, value)
            .then((res) => {
                if (res.data.Status === 1) {
                    localStorage.setItem('admintoken', JSON.stringify(res.data.TokenVal))
                }
                else {
                    console.log("sorry oops")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <>
            <section className='relative w-[100%] h-[100vh]'>
                <section className='admin_login absolute  w-[100%] h-[100vh] '>
                </section>

                <div className='admin_inner_form w-[500px] p-[30px] absolute  rounded-[12px] '>
                    <div className='w-100'>
                        <div className='flex justify-center my-3'>
                            <img
                                src={logo}
                                className='w-[200px]'
                            />
                        </div>

                        <div className=''>
                            <h1 className=' text-center text-[40px] font-[700] text-[#0c4422]'>Welcome Back</h1>
                        </div>

                        <Formik
                            initialValues={{
                                "Email": "",
                                "Password": ""
                            }}

                            onSubmit={(value) => {
                                insertdata(value)
                            }}

                        >
                            <Form>
                                <div className='mt-[15px]'>
                                    <div className='form_inputs'>
                                        <Field type="email" className='mt-[32px] w-[100%] p-2 px-4 bg-transparent text-[white]' placeholder='Enter email' name="Email" />
                                    </div>

                                    <div className='form_inputs mt-[20px]'>
                                        <Field type="password" className='mt-[25px] w-[100%] p-2 px-4 bg-transparent text-[white]' placeholder='Enter Password' name="Password" />
                                    </div>
                                </div>

                                <div className=''>
                                    <button type='submit' className='w-[100%] my-[50px] font-[500] text-[28px] py-3 rounded-[5px] bg-white text-black'>Login</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </section>
        </>
    )
}
