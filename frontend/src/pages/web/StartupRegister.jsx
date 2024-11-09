import React from 'react'
import correctoption from '../../images/new_releases_21dp_E8EAED_FILL1_wght400_GRAD0_opsz20 1.png'
import { useNavigate } from 'react-router-dom'
export function StartupRegister() {

    let naviget = useNavigate()
    setTimeout(() => {
        naviget('/')
    }, 10000);
    return (
        <>
            <section className='registered_success_message w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <section className='login_inner w-[672px] p-[35px] bg-white rounded-[12px]'>
                    <img src={correctoption} alt="" className='m-auto' />
                    <h1 className='text-[25px] font-bold text-center'>Request Registered Successfully</h1>
                    <p className='text-center my-3'>Your registration was successful! Your request is currently under review.
                        <br />Once it is approved, you will be able to log in. Please stay patient.
                        <br />Thank you</p>
                </section>
            </section>
        </>
    )
}
