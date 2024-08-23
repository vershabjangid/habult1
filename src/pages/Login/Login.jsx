import { Field, Form, Formik } from 'formik'
import React from 'react'
import logo from "../../images/mascot-logo-design_P1_900x420-removebg-preview.png"
import { Link } from 'react-router-dom'
export function Login() {
  return (
    <>
      <section className='main_login d-flex justify-content-center align-items-center'>
        <section className='login_inner  d-flex justify-content-center'>
          <section className='main_login_content my-4'>
            <div className='d-flex justify-content-center'>
              <img src={logo} alt="" width={300} />
            </div>
            <section className='login_head text-center mb-5'><h1>LOGIN</h1></section>
            <Formik
              initialValues={
                {
                  Mobile_No: "",
                  Password: "",
                  Remember: false
                }
              }
            >
              <Form>
                <Field type="number" className='w-100 py-2 px-2 rounded-1 border border-1 border-secondary  mb-4' placeholder='Phone Number' name="Mobile_No" />
                <Field type="password" className='w-100 py-2 px-2 rounded-1 border border-1 border-secondary' placeholder='Password' name="Password" />
                <div className='remember_me d-flex justify-content-between'>
                  <div className='remember_section d-flex align-items-center'>
                    <Field type="checkbox" name="Remember" />
                    Remember me
                  </div>

                  <div className='forgot_section'>
                    <Link to={"/forgot-password"} className='text-decoration-none'>
                      <p className='forgot_text'>Forgot Password?</p>
                    </Link>
                  </div>
                </div>

                <button className=' login_btn w-100 fs-4 rounded-3 border-0 text-white'>Login</button>
                <div className='text-center text-secondary'>Don’t have an account? <span className='text-black fw-bold'>SIGNUP</span></div>
              </Form>
            </Formik>
          </section>
        </section>
      </section>
    </>
  )
}
