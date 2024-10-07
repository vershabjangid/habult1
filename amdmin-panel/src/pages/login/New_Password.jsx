import React from 'react'

export function New_Password() {
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
                            <h1 className=' text-center text-[40px] font-[700] text-[#0c4422]'>Enter Password</h1>
                        </div>

                        <div className='mt-[15px]'>
                            <div className='form_inputs'>
                                <input type="text" className='mt-[32px] w-[100%] h-[55px] p-2 rounded-[5px] px-4 bg-transparent text-[white]' placeholder='Enter New Password'  required />
                                <input type="text" className='mt-[32px] w-[100%] h-[55px] p-2 rounded-[5px] px-4 bg-transparent text-[white]' placeholder='Confirm Password'  required />
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <button type='submit' className='w-[80%] my-[50px] font-[500] text-[20px] py-3 rounded-[5px] bg-white text-black'>Login</button>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
