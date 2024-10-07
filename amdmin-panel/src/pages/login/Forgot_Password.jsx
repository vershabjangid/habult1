import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Forgot_Password() {
    let naviget = useNavigate();
    let otpnavigate = () => {
        naviget('/otp-page')
    }
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
                            <h1 className=' text-center text-[40px] font-[700] text-[#0c4422]'>Forgot Password</h1>
                        </div>

                        <div className='mt-[15px]'>
                            <div className='form_inputs'>
                                <input type="email" className='mt-[32px] w-[100%] p-2 px-4 bg-transparent text-[white]' placeholder='Enter email' required />
                            </div>
                        </div>

                        <div className=''>
                            <button type='submit' onClick={otpnavigate} className='w-[100%] my-[50px] font-[500] text-[28px] py-3 rounded-[5px] bg-white text-black'>Login</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
