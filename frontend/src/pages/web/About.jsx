import React from 'react'
import { Header } from '../../common/Header'
import { FaLinkedin, FaUserSecret } from 'react-icons/fa'
import { Footer } from '../../common/Footer'
import { MdLocationPin } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import { CiMail } from "react-icons/ci";


export function About() {
    return (
        <>
            <section className='w-[100%] main'>

                <section className='landing_inner w-[100%] bg-gradient-to-tr from-[#f0eff1] to-[#ccb2f4] pt-4'>
                    <Header />

                    <section className='w-[100%] py-5 mt-[30px]'>
                        <section className='landing_banner_section w-[90%] h-[100%] m-auto'>
                            <div className='about_heading text-center w-[100%]'>
                                <h1 className='text-[40px] font-[600] leading-[45px] mb-5'>About Us</h1>
                                <p className='text-[20px]'>HubAlt,A digital marketplace strives to make the Startup investment space more inclusive by granting retail investors access to the opportunities that were previously available only to the wealthy 1%. At the same time, we want to make it hassle free for founders to raise funds from registered users. We are on a mission to transform the landscape of Startup investments in India We are a bridge between Investor and Investee. We believe that stability and growth can go hand in hand, and we are dedicated to helping you achieve both with our innovative approach by bringing promising Startup investment opportunities.</p>
                            </div>

                            <div className='about_heading text-center w-[100%] my-[60px]'>
                                <h1 className='text-[40px] font-[600] leading-[45px] mb-5'>Our Mission</h1>
                                <p className='text-[20px]'>Our mission is to bridge the gap between promising startups and investors, empowering entrepreneurs to secure the funding required to bring their innovative ideas to life</p>
                            </div>


                            <div className='about_heading text-center w-[100%] my-[60px]'>
                                <h1 className='text-[40px] font-[600] leading-[45px] mb-5'>Our Founder</h1>
                                <div className='w-[100%]  flex my-[100px] founder_cofounder'>
                                    <div className='founder_section w-[50%] border-e-2 border-[black]  h-[400px] flex justify-center  items-center'>
                                        <div className='text-center'>
                                            <FaUserSecret className='text-[50px] m-auto' />
                                            <h2 className='text-[25px] font-[700]'>Prakash Sharma</h2>
                                            <p className='text-[18px] font-[500]'>Founder & Chief Executive Officer</p>
                                            <FaLinkedin className='text-[25px] m-auto text-[navy]' />
                                        </div>
                                    </div>
                                    <div className='cofounder_section w-[50%]  h-[400px] flex justify-center  items-center'>
                                        <div className='text-center'>
                                            <FaUserSecret className='text-[50px] m-auto' />
                                            <h2 className='text-[25px] font-[700]'>Rakesh Shankar</h2>
                                            <p className='text-[18px] font-[500]'>CO-Founder & Channel Head</p>
                                            <FaLinkedin className='text-[25px] m-auto text-[navy]' />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='about_heading text-center w-[100%] my-[60px]'>
                                <h1 className='text-[40px] font-[600] leading-[45px] mb-5'>We are Hiring</h1>
                                <p className='text-[30px]'>Are you ready to reshape fund raising for Startups in India with us.</p>
                                <p className='text-[30px]'>We are eagar to hire fresh talent.</p>
                                <p className='text-[30px] underline'>Email at info@hubalt.in</p>
                            </div>


                            <div className='about_heading text-center w-[100%] my-[100px]'>
                                <h1 className='text-[40px] font-[600] leading-[45px] mb-5'> Get in touch</h1>
                                <p className='text-[30px] flex justify-center items-center'> <MdLocationPin className='me-6' /> 18/CHB Jodhpur , (Raj) , 342003 India</p>
                                <p className='text-[30px]  flex justify-center items-center'><FaPhone className='me-6'/> +91 8005960160</p>
                                <p className='text-[30px] flex justify-center items-center'><CiMail  className='me-6'/> info@hubalt.in</p>
                            </div>
                        </section>

                    </section>
                    <Footer />
                </section>
            </section>
        </>
    )
}
