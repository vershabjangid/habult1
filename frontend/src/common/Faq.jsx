import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import axios from 'axios'
export function Faq() {
    let [faqid, setfaqid] = useState(0)
    let [faqdata, setfaqdata] = useState([])
    let getfaq = () => {
        axios.get('http://147.79.71.69:5000/getfaq')
            .then((res) => {
                setfaqdata(res.data)
                setfaqid(res.data)
            })
    }

    useEffect(() => {
        getfaq()
    }, [])

    return (
        <>
            <section className='w-[100%] mb-[70px]'>
                <h2 className='text-center text-[35px] font-[600] my-5'>FAQ'S</h2>
                <section className='faq_inner w-[100%] flex justify-center items-center'>
                    <div className='w-[90%]'>
                        {
                            faqdata.map((items, index) => {
                                return (
                                    <>
                                        <div className={faqid === items._id ? 'faq_outer_section rounded-[14px] border-[2px] border-[#8637F8]  my-4  p-6 ease-linear duration-500 cursor-pointer' : 'faq_outer_section_deactive cursor-pointer rounded-[14px]  my-4 p-6 relative z-10 ease-linear duration-500'} onClick={() => setfaqid(items._id)}>
                                            <div className='w-[100%] flex justify-between items-center'>
                                                <div className=''><h3 className='font-[600]'>{items.Faqquestion}</h3></div>
                                                <div className={faqid === items._id ? 'w-[30px] h-[30px] bg-[#8637F8] rounded-[50%] flex justify-center items-center rotate-[90deg] text-white p-0 m-0 ease-linear duration-500' : 'faq_outer_section_deactive_btn w-[30px] h-[30px] text-[#8637F8] bg-white rounded-[50%] flex justify-center items-center  p-0 m-0 ease-linear duration-500'}>
                                                    <IoIosArrowForward />
                                                </div>
                                            </div>

                                            <div className={faqid === items._id ? 'mt-3 w-[100%] h-auto ease-linear duration-500' : 'mt-3 w-[100%] h-[0] absolute z-0 opacity-0 transition-1 ease-linear duration-500'} >
                                                <p>
                                                    {items.Faqanswer}
                                                </p>
                                            </div>
                                        </div>


                                    </>
                                )
                            })
                        }
                    </div>
                </section>
            </section>
        </>
    )
}
