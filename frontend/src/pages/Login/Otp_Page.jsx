import React from 'react'
import { Field, Form, Formik } from 'formik'
import { IoIosArrowBack } from 'react-icons/io'
import logo from "../../images/mascot-logo-design_P1_900x420-removebg-preview.png"
import { Link, useNavigate } from 'react-router-dom'

export function Otp_Page() {
    let naviget = useNavigate();

    let changepassword = () =>{
        naviget('/change-password')
    }
    return (
        <>
            <section className='main_login d-flex justify-content-center align-items-center'>
                <section className='login_inner  d-flex justify-content-center'>
                    <section className='main_login_content my-4 position-relative'>
                        <div className=' position-absolute back_arrow'>
                            <Link to={"/forgot-password"} className='text-black'>
                                <IoIosArrowBack />
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img src={logo} alt="" width={300} />
                        </div>
                        <section className='login_head text-center mb-5'><h1>ENTER OTP</h1></section>
                        <Formik
                            initialValues={
                                {
                                    Email: "",
                                }
                            }
                        >
                            <Form>
                                <div className='d-flex w-100 otp_input_section justify-content-evenly'>
                                    <Field type="number" className=' py-2 text-center rounded-1 border border-1 border-secondary  ' />
                                    <Field type="number" className=' py-2 text-center rounded-1 border border-1 border-secondary' />
                                    <Field type="number" className=' py-2 text-center rounded-1 border border-1 border-secondary ' />
                                    <Field type="number" className=' py-2 text-center rounded-1 border border-1 border-secondary' />
                                </div>

                                <button className=' login_btn w-100 fs-4 rounded-3 border-0 text-white mb-2' onClick={changepassword}>Login</button>
                                <div className='text-center text-black fw-bold m-0 fs-6'>00:00</div>
                                <div className='text-center text-secondary mt-3'>Didn’t receive OTP? <span className='text-black fw-bold'>RESEND</span></div>
                            </Form>
                        </Formik>
                    </section>
                </section>
            </section>
        </>
    )
}
