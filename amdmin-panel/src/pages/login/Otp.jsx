import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Otp() {

    let naviget = useNavigate();

    let newpassword = ()=>{
        naviget('/new-password')
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
                            <h1 className=' text-center text-[40px] font-[700] text-[#0c4422]'>OTP Verification</h1>
                        </div>

                        <div className='mt-[15px]'>
                            <div className='form_inputs_otp flex  justify-evenly'>
                                <input type="number" className='mt-[32px] w-[55px] text-center h-[55px] p-2 rounded-[5px] px-4 bg-transparent text-[white] border-[1px] border-white' required />
                                <input type="number" className='mt-[32px] w-[55px] text-center h-[55px] p-2 rounded-[5px] px-4 bg-transparent text-[white] border-[1px] border-white' required />
                                <input type="number" className='mt-[32px] w-[55px] text-center h-[55px] p-2 rounded-[5px] px-4 bg-transparent text-[white] border-[1px] border-white' required />
                                <input type="number" className='mt-[32px] w-[55px] text-center h-[55px] p-2 rounded-[5px] px-4 bg-transparent text-[white] border-[1px] border-white' required />
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <button type='submit' className='w-[80%] mt-[50px] font-[500] text-[20px] py-3 rounded-[5px] bg-white text-black' onClick={newpassword}>Verify</button>
                        </div>
                        <div><p className='text-center mt-1'>00:00</p></div>
                        <div><p className='text-center mt-1'>Didn't receive OTP? <span className='font-[600]'>RESEND</span></p></div>
                    </div>
                </div>
            </section>
    </>
  )
}
