import React from 'react'
import { Logo } from '../../common/Logo'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

export function Payment() {

    let location = useLocation()
    let data = location.state
    console.log(data)

    const getsessionId = async () => {
        try {
            let res = await axios.get("http://localhost:5000/payment")
            if (res.data && res.data.SessionId) {
                console.log(res.data)
            }

        }

        catch (error) {
            console.log(error)
        }
    }

    let handleclick = async (e) => {
        try {
            let sessionId = await getsessionId()
        }
        catch (error) {
            console.log(error)
        }
        e.preventDefault()

    }
    return (
        <>
            <section className='login_main w-[100%] p-[15px]  bg-[#FCFAFF] flex flex-col justify-center items-center'>
                <div className='login_inner w-[872px] py-2 my-[10px] px-[35px] rounded-[12px] bg-white flex items-center'>
                    {/* <MdVerified className='text-[blue] text-[50px]' /> */}
                    <div className='w-[100px]'>
                        <Logo />
                    </div>
                    <div>
                        <p className='mx-2 text-[23px] font-[700] text-[#8637F8]'>Become An Verified Member</p>
                        <p className='mx-2  text-[16px] font-[700]'>In 4 simple steps</p>
                    </div>
                </div>

                <div className=' w-[872px] py-2 my-[10px] px-[35px] rounded-[12px] flex items-center'>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='bg-[#8637F8] text-white w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>1</div>
                        <p className='font-[500] text-center'>Assessment</p>
                    </div>

                    <div className='w-[20%] border-b-[1px]'></div>
                    <div className='flex justify-center items-center flex-col mx-[10px]'>
                        <div className='bg-[#8637F8] text-white w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>2</div>
                        <p className='font-[500] text-center'>KYC</p>
                    </div>

                    <div className='w-[20%] border-b-[1px]'></div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='bg-[#8637F8] text-white w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>3</div>
                        <p className='font-[500] text-center'>Bank Verification</p>
                    </div>
                    <div className='w-[20%] border-b-[1px]'></div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='bg-[#8637F8] text-white w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>4</div>
                        <p className='font-[500]'>Payment</p>
                    </div>
                </div>


                <form className='login_inner w-[872px] py-[35px] bg-white rounded-[12px]' >



                    <div className='login_input_section '>


                        <div className='pb-[25px] px-[35px] mb-[12px] border-b-[1px] flex justify-center flex-col'>
                            <h1 className=' text-[32px] font-[500]'>Payment Summary</h1>
                        </div>


                        {/* <div className=' px-[35px] py-[10px] flex'>
                            <div className='flex items-center'>
                                <input checked={check ? true : ""} onChange={() => setcheckbox(true)} type="checkbox" className='w-[30px] h-[20px] bg-[#be7fbe]' />
                                <p className=' font-[600]'>Individual Investor</p>
                            </div>

                            <div className='flex items-center ms-[30px]'>
                                <input type="checkbox" checked={check ? false : true} onChange={() => setcheckbox(false)} className='w-[30px] h-[20px] bg-[#be7fbe]' />
                                <p className=' font-[600]'>Company Representative</p>
                            </div>
                        </div> */}


                        <div className='registerforms flex justify-between px-[35px]'>
                            <div className='registerformsleft  my-[8px] text-black w-[100%]'>

                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Bank Name</p>
                                    {data.BankName}
                                </div>


                                <div className='my-[20px] text-black'>
                                    <p className='font-[500] mb-0'>IFSC Code</p>
                                    {data.IFSC_Code}
                                </div>

                                <div className='my-[20px] text-black'>
                                    <p className='font-[500] mb-0'>Account Number</p>
                                    {data.AccountNumber}
                                </div>

                                <div className='my-[20px] w-[100%] border-[1px] text-black'>
                                </div>

                                <div className='my-[20px] w-[100%] flex justify-between text-black'>
                                    <p className='font-[500] mb-0 text-[25px]'>Total</p>
                                    <p className='font-[500] mb-0 text-[25px]'>-/5999</p>
                                </div>
                            </div>
                        </div>



                        <div className='my-[8px] text-black px-[35px]'>
                            <div className='border-[1px] text-center w-[100%] py-[16px] px-[32px] my-[20px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]' onClick={handleclick} >Pay Now</div>
                        </div>

                        <div className='my-[8px] text-black'>
                            <p className='text-[grey] text-center'>Already have an account?<Link to={'/login'}><span className='text-black font-[500] ms-1'>LOGIN</span></Link></p>
                        </div>
                    </div>

                </form>
            </section>
        </>
    )
}
