import React from 'react'
import correctoption from '../../images/new_releases_21dp_E8EAED_FILL1_wght400_GRAD0_opsz20 1.png'
export function StartupRegister() {
    return (
        <>
            <section className='registered_success_message w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <section className='login_inner w-[672px] p-[35px] bg-white rounded-[12px]'>
                    <img src={correctoption} alt="" className='m-auto' />
                    <h1 className='text-[25px] font-bold text-center'>Request Registered Successfully</h1>
                    <p className='text-center my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit corrupti tenetur error architecto voluptatibus fugiat placeat officia saepe cupiditate iusto officiis eum reiciendis impedit, vero debitis laboriosam doloribus aliquid? Esse.</p>
                </section>
            </section>
        </>
    )
}
