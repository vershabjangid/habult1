import React, { useEffect, useState } from 'react'
import { Logo } from '../../common/Logo'
import { useLocation, useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

export function OTP() {
    const [seconds, setseconds] = useState(10)
    var timer
    useEffect(() => {
        timer = setInterval(() => {
            if (seconds > 0) {
                setseconds(seconds - 1)
            }

        }, 1000)
        return () => clearInterval(timer)
    })


    let naviget = useNavigate()

    let location = useLocation();
    let data = location.state

    let [otpdata, setotpdata] = useState('')
    let [Email, setEmail] = useState('')
    let [token, settoken] = useState('')

    let generateotp = () => {
        let otpdata = {
            Email: data.Email
        }
        axios.post('http://147.79.71.69:5000/forgot-password-otp', otpdata)
            .then((res) => {
                setEmail(res.data.data.Email.Email)
                setotpdata(res.data.data.OTP)
                settoken(res.data.Token)
            })
            .catch((error) => {
                console.log(error)
            })
    }





    let verifyuser = (value) => {
        let allvalue = value;
        let concat = `${allvalue.value1}` + `${allvalue.value2}` + `${allvalue.value3}` + `${allvalue.value4}`
        if (otpdata == concat) {
            localStorage.setItem('userauthenticateemail', JSON.stringify(Email))
            localStorage.setItem('userauthenticate', JSON.stringify("succeeded"))
            localStorage.setItem('newpasstoken', JSON.stringify(token))
            naviget('/new-password', { state: data })
        }
    }






    return (
        <>
            <section className='login_main w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center' onLoad={generateotp}>
                <Formik
                    initialValues={{
                        value1: "",
                        value2: "",
                        value3: "",
                        value4: "",
                    }}

                    onSubmit={(value) => {
                        verifyuser(value)
                    }}
                >
                    <Form>
                        <section className='login_inner w-[572px] h-[658px] p-[35px] bg-white rounded-[12px]'>
                            <div className='login_input_section h-[100%] '>
                                <div className='logo_section w-[300px] m-auto flex justify-center'>
                                    <Logo />
                                </div>
                                <div className='my-[30px]'>
                                    <h1 className='text-center text-[32px] font-[500]'>ENTER OTP</h1>
                                </div>

                                <div className='otp_input my-[8px] text-black flex justify-evenly'>
                                    <Field as="input" type='number' name="value1" className=' w-[65px] h-[65px] border-[1px] p-[10px]  rounded-[8px] text-center' maxLength={1} min={0} max={9} />
                                    <Field as="input" type='number' name="value2" className=' w-[65px] h-[65px] border-[1px] p-[10px]  rounded-[8px] text-center' maxLength={1} min={0} max={9} />
                                    <Field as="input" type='number' name="value3" className=' w-[65px] h-[65px] border-[1px] p-[10px]  rounded-[8px] text-center' maxLength={1} min={0} max={9} />
                                    <Field as="input" type='number' name="value4" className=' w-[65px] h-[65px] border-[1px] p-[10px]  rounded-[8px] text-center' maxLength={1} min={0} max={9} />
                                </div>


                                <div className='my-[8px] text-black'>
                                    <button className='border-[1px] w-[100%] py-[16px] px-[32px] my-[20px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]'>Next</button>
                                </div>

                                <div className='text-center'><p className='font-[500]'>00:{seconds}</p></div>
                                {
                                    seconds == 0 ? <div className='my-[8px] text-black'>
                                        {/* <p className='text-[grey] text-center'>Didn’t receive OTP? <span className='text-black font-[500]' onClick={() => resend(data)}>RESEND</span></p> */}
                                    </div> : null
                                }
                            </div>

                        </section>
                    </Form>
                </Formik>
            </section>
        </>
    )
}
