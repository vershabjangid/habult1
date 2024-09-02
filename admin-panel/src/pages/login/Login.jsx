import React from 'react'
import logo from "../../images/mascot-logo-design_P1_900x420-removebg-preview.png"
import { Field, Form, Formik } from 'formik'
export function Login() {
    return (
        <>
            <section className='main_login'>
                <section className='main_login_inner'>
                    <div className='w-75 m-auto'>
                        <img src={logo} alt="" className='w-100' />
                    </div>
                    <h1 className='text-center '>ADMIN LOGIN</h1>
                    <Formik>
                        <Form>
                            <div className='d-flex justify-content-center mt-4'>
                                <Field type="text" className="w-75 p-2 rounded border" placeholder="Enter Email" />
                            </div>

                            <div className='d-flex justify-content-center mt-3'>
                                <Field type="text" className="w-75 p-2 rounded border" placeholder="Enter Mobile number" />
                            </div>

                            <div className='d-flex justify-content-center mt-3'>
                                <Field type="text" className="w-75 p-2 rounded border" placeholder="Enter Password" />
                            </div>
                            

                            <div className='d-flex justify-content-center mt-5'>
                            <button className=' login_btn w-75 py-3 rounded-1 border-0' type='submit'>Next</button>
                            </div>
                        </Form>
                    </Formik>
                </section>
            </section>
        </>
    )
}
