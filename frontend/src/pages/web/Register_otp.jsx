import React, { useEffect, useState } from 'react'
import { Logo } from '../../common/Logo'
import { useLocation, useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

export function Register_otp() {
    const [seconds, setseconds] = useState(60)

    var timer
    useEffect(() => {
        timer = setInterval(() => {
            if (seconds > 0) {
                setseconds(seconds - 1)
            }

        }, 1000)
        return () => clearInterval(timer)
    })

    let locatedata = useLocation()
    let data = locatedata.state;

    let count = 0;
    let [otp, setotp] = useState();
    let [token, settoken] = useState();

    let otpdata = (value) => {
        setseconds(60)
        let getotp = {
            Email: value
        }

        axios.post('http://147.79.71.69:5000/register-otp', getotp)
            .then((res) => {
                setotp(res.data.data.OTP)
                settoken(res.data.Token)
                count++;
            })
            .catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {
        if (count == 1) {
            return;
        }
        else {
            otpdata(data.Email)
        }
    }, [])


    let naviget = useNavigate()
    localStorage.setItem("authenticate", JSON.stringify(null))
    let register_form = (value) => {
        console.log(token)
        let allvalue = value;
        let concat = `${allvalue.value1}` + `${allvalue.value2}` + `${allvalue.value3}` + `${allvalue.value4}`
        if (concat == otp) {
            localStorage.setItem("authenticate", JSON.stringify(token))
            naviget('/register-form')
        }
        else {
            
        }

    }


    return (
        <>
            <section className='login_main w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <Formik
                    initialValues={{
                        value1: "",
                        value2: "",
                        value3: "",
                        value4: ""
                    }}

                    onSubmit={(value) => {
                        register_form(value)
                    }}
                >
                    <Form className='login_inner w-[572px] h-[658px] p-[35px] bg-white rounded-[12px]'>
                        <div className='login_input_section h-[100%] '>
                            <div className='logo_section w-[300px] m-auto flex justify-center'>
                                <Logo />
                            </div>
                            <div className='my-[30px]'>
                                <h1 className='text-center text-[32px] font-[500]'>OTP Verification</h1>
                            </div>

                            <div className='otp_input my-[8px] text-black flex justify-evenly'>
                                <Field type='number' name="value1" className=' w-[65px] h-[65px] border-[1px] p-[10px]  rounded-[8px] text-center' maxLength={1} min={0} max={9} />
                                <Field type='number' name="value2" className=' w-[65px] h-[65px] border-[1px] p-[10px]  rounded-[8px] text-center' maxLength={1} min={0} max={9} />
                                <Field type='number' name="value3" className=' w-[65px] h-[65px] border-[1px] p-[10px]  rounded-[8px] text-center' maxLength={1} min={0} max={9} />
                                <Field type='number' name="value4" className=' w-[65px] h-[65px] border-[1px] p-[10px]  rounded-[8px] text-center' maxLength={1} min={0} max={9} />
                            </div>



                            <div className='my-[8px] text-black'>
                                <button type="submit" className='border-[1px] w-[100%] py-[16px] px-[32px] my-[20px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]'>Next</button>
                            </div>

                            <div className='text-center'><p className='font-[500]'>00:{seconds}</p></div>
                            <div className='my-[8px] text-black'>
                                {
                                    seconds == 0 ? <p className='text-[grey] text-center'>Didn’t receive OTP? <span className='text-black font-[500] cursor-pointer' onClick={() => otpdata(data.Email)}>RESEND</span></p> : null
                                }
                            </div>
                        </div>

                    </Form>
                </Formik>
            </section>
        </>
    )
}
