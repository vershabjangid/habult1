import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import logo from "../../images/mascot-logo-design_P1_900x420-removebg-preview.png"
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { FcGoogle } from 'react-icons/fc'

export function Register() {
    let naviget = useNavigate()

    let otpage = () => {
        naviget("/register-otp")
    }

    let [joinstatus, setstatus] = useState("Investor");
    return (
        <>
            <section className='main_register d-flex justify-content-center align-items-center'>
                <section className='register_inner h-auto  d-flex justify-content-center'>
                    <section className='main_login_content my-4 position-relative'>
                        <div className=' position-absolute back_arrow'>
                            <Link to={"/"} className='text-black'>
                                <IoIosArrowBack />
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img src={logo} alt="" width={300} />
                        </div>
                        <section className='login_head text-center mb-2'><h1>SIGNUP</h1></section>
                        <Formik
                            initialValues={
                                {
                                    Mobile_No: "",
                                    Password: "",
                                    Name: ""
                                }
                            }
                        >
                            <Form>
                                <div className='join_section w-100'>
                                    <div className='mb-1'>Join as</div>
                                    <div className='join_as_inner w-100 d-flex justify-content-center align-items-center'>
                                        <div onClick={() => setstatus("Investor")} className={joinstatus == "Investor" ? 'join_as_inner_investor d-flex align-items-center justify-content-center w-50 text-center' : "d-flex align-items-center justify-content-center w-50 text-center"} >Investor</div>
                                        <div onClick={() => setstatus("Startups")} className={joinstatus == "Startups" ? 'join_as_inner_investor d-flex align-items-center justify-content-center w-50 text-center' : "d-flex align-items-center justify-content-center w-50 text-center"}>Startups</div>
                                    </div>
                                </div>
                                <Field type="name" className='all_Login_input w-100 py-2 px-2 rounded-1 border border-1 border-secondary  ' placeholder='Name' name="Name" />
                                <Field type="number" className='all_Login_input w-100 py-2 px-2 rounded-1 border border-1 border-secondary  ' placeholder='Phone Number' name="Mobile_No" />
                                <Field type="email" className='all_Login_input w-100 py-2 px-2 rounded-1 border border-1 border-secondary' placeholder='Email' name="Email" />

                                <button className=' login_btn w-100 fs-4 rounded-3 border-0 text-white' onClick={otpage}>Next</button>

                                <div className='w-100 d-flex justify-content-between align-items-center'>
                                    <div className='w-50 me-2 border-top border-1 border-secondary'></div>
                                    OR
                                    <div className='w-50 ms-2 border-top border-1 border-secondary'></div>
                                </div>

                                <button className='bg-white w-100 fs-5 rounded-3 border border-1 border-secondary py-1 mt-3'><span className='fs-3'><FcGoogle /> </span>Google</button>

                                <div className='text-center text-secondary mt-3'>Already have an account? <Link to={"/"} className='text-decoration-none'><span className='text-black fw-bold'>LOGIN</span></Link></div>
                            </Form>
                        </Formik>
                    </section>
                </section>
            </section>
        </>
    )
}
