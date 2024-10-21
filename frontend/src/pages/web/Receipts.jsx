import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router-dom'

export function Receipts() {

    let location = useLocation();
    let data = location.state;

    const getsessionId = async () => {
        try {
            let res = await axios.get('http://147.79.71.69:5000/payment')

            if (res.data && res.data.Payment_sessionId) {
                console.log(res.data.Payment_sessionId)
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    let handleclick = async (e) => {

        e.preventDefault()
        try {
            let sessionId = await getsessionId()
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section className='login_main w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <form className='login_inner w-[1002px] p-[35px] bg-white rounded-[12px]'>

                    <div className='login_input_section flex justify-center'>
                        <section className='w-[65%] py-5 px-4 border-[3px] border-[purple]  rounded-[5px]'>
                            <h1 className='text-center text-[30px] font-[bold]'> Business Informmation Preview</h1>

                            <section className='my-5'>
                                <div>
                                    <div className='my-3'>Join as : &nbsp; {data.Join_as}</div>
                                    <div className='my-3'>Company Name : &nbsp; {data.Company_Name} </div>
                                    <div className='my-3'>Email : &nbsp; {data.Email}</div>
                                    <div className='my-3'>Phone : &nbsp; {data.Phone}</div>
                                    <div className='my-3'>Password : &nbsp; {data.Password}</div>
                                    <div className='my-3'>Startup Sector : &nbsp; {data.Startup_Sector}</div>
                                </div>

                                <div className='flex justify-center'>
                                    <button className='w-[90%] border bg-purple-600 text-white py-3 mt-3 rounded' onClick={handleclick}>Pay Now</button>
                                </div>
                            </section>
                        </section>
                    </div>

                </form>
            </section>
        </>
    )
}
