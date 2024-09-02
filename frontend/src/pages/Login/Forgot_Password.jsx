import React from 'react'
import logo from "../../images/mascot-logo-design_P1_900x420-removebg-preview.png"
import { Field, Form, Formik } from 'formik'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'

export function Forgot_Password() {

    let naviget = useNavigate()

    let otppage = () => {
        naviget('/otp')
    }
    return (
        <>
            <section className='main_login d-flex justify-content-center align-items-center'>
                <section className='login_inner  d-flex justify-content-center'>
                    <section className='main_login_content my-4 position-relative'>
                        <div className=' position-absolute back_arrow'>
                            <Link to={"/"} className='text-black'>
                                <IoIosArrowBack />
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <img src={logo} alt="" width={300} />
                        </div>
                        <section className='login_head text-center mb-5'><h1>FORGOT PASSWORD</h1></section>
                        <Formik
                            initialValues={
                                {
                                    Email: "",
                                }
                            }
                        >
                            <Form>
                                <Field type="email" className='all_Login_input w-100 py-2 px-2 rounded-1 border border-1 border-secondary' placeholder='Email' name="Email" />
                                <button className=' login_btn w-100 fs-4 rounded-3 border-0 text-white' onClick={otppage}>Next</button>
                            </Form>
                        </Formik>
                    </section>
                </section>
            </section>
        </>
    )
}
