import React from 'react'
import { Logo } from '../../common/Logo'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

export function New_Password() {

    let location = useLocation()
    let data = location.state;
    let naviget = useNavigate()

    let notifyerror = (error) => toast.error(error)
    let changepassword = (value) => {
        if (data.Join_as == "Member") {
            axios.put('https://api.hivexv.com/update-investor-register', value, {
                headers: {
                    authorization: JSON.parse(localStorage.getItem('newpasstoken'))
                }
            })
                .then((res) => {
                    if (res.data.Status == 1) {
                        naviget('/login')
                    }
                })
        }

        else {
            axios.put('http://147.79.71.69:5000/update-register', value, {
                headers: {
                    authorization: JSON.parse(localStorage.getItem('newpasstoken'))
                }
            })
                .then((res) => {
                    if (res.data.Status == 1) {
                        naviget('/login')
                    }
                })
        }
    }


    return (
        <>
            <section className='login_main w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <Formik

                    initialValues={{
                        Email: data.Email,
                        Password: "",
                        Confirm_Password: "",
                    }}

                    onSubmit={(value) => {
                        if (value.Confirm_Password == value.Password) {
                            changepassword(value)
                        }
                        else {
                            notifyerror("Enter Same Password")
                        }
                    }}
                >
                    <Form>

                        <section className='login_inner w-[572px] h-[658px] p-[35px] bg-white rounded-[12px]'>
                            <div className='login_input_section h-[100%] '>
                                <div className='logo_section w-[300px] m-auto flex justify-center'>
                                    <Logo />
                                </div>
                                <div className='my-[30px]'>
                                    <h1 className='text-center text-[32px] font-[500]'>FORGOT PASSWORD</h1>
                                </div>

                                <div className='my-[8px] text-black'>
                                    <Field as="input" name="Password" type='text' className=' w-[100%] border-[1px] p-[10px]  rounded-[8px]' placeholder='Enter New Password' />
                                    <Field as="input" name="Confirm_Password" type='password' className=' w-[100%] mt-[25px] border-[1px] p-[10px]  rounded-[8px]' placeholder='Confirm Password' />
                                </div>


                                <div className='my-[8px] text-black'>
                                    <button className='border-[1px] w-[100%] py-[16px] px-[32px] my-[20px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]'>Next</button>
                                </div>

                                <div className='my-[8px] text-black'>
                                    <p className='text-[grey] text-center'>Don’t have an account?<Link to={'/register'}><span className='text-black font-[500]'>SIGNUP</span></Link></p>
                                </div>
                            </div>

                        </section>
                    </Form>
                </Formik>
            </section>
            <ToastContainer />
        </>
    )
}
