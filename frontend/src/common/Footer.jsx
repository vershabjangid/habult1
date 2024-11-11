import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import Logo from '../../src/images/Hive_XV_Logo-removebg-preview.png'
import istart from '../images/nw6o7plxlj6ehfcwwddx.webp'
import facebook from '../images/Link.png'
import linkdin from '../images/Link_margin (1).png'
import { FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'



export function Footer() {
    return (
        <>
            <footer className='w-[100%] mt-[30px]  py-5 bg-[#e6d3ff]'>
                <div className='flex justify-evenly px-5 my-[20px] flex-wrap'>
                    <div className='footer_logo_section w-[250px]  flex justify-center items-center'>
                        <div className='w-[100%] flex flex-col '>
                            <div className=''>
                            <div className='w-[150px]'>
                                <img src={Logo} alt="" />
                            </div>

                            <div className='social_links_section my-3 mx-auto'>
                                <p className='font-[600]'>SOCIAL MEDIA</p>
                                <div className='social_links_section flex justify-between w-[50%]'>
                                    <img src={facebook} alt="" className='w-[30px]' />
                                    <a href="https://www.youtube.com/@HubAltVenture"><div className='w-[30px] h-[30px] bg-white rounded-[50%] flex justify-center items-center'>
                                        <FaYoutube className='text-[#8637F8]' /></div></a>
                                    {/* <img src={facebook} alt="" className='w-[30px]' /> */}
                                    <a href="https://www.linkedin.com/company/hubalt/"><img src={linkdin} alt="" className='w-[40px]' /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='multiple_pages_links w-[250px] mx-[15px] flex justify-evenly items-center'>
                        <div className='flex justify-between w-[100%]'>
                            <ul>
                                <Link to={"/"}><li>Home</li></Link>
                                <Link to={"/about"}><li>About Us</li></Link>
                                <Link to={"/faq"}><li>FAQ</li></Link>
                            </ul>

                            <ul>
                                <Link to={"/privacy"}><li>Privacy Policy</li></Link>
                                <Link to={"/terms"}> <li>Terms & Conditions</li></Link>
                                <Link to={"/disclaimer"}><li>Disclaimer</li></Link>
                            </ul></div>
                    </div>
                    <div className='istart_section w-[450px]  flex justify-center'>
                        <div className='h-auto'>
                            <img src={istart} alt="" className='w-[50%] h-[150px] m-auto' />
                            <p className='font-[600] text-[14px]'>Registration ID NO :- 5F63239</p>
                            <p className='font-[600] text-[14px]'>Approved by Department of IT and Communication Govt of Rajasthan</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] border-t-[1px] border-[black] flex items-center justify-center'>
                    <BiCopyright className='mx-2' />     <p className=''>All Rights Reserved by Hubalt Venture Private Limited</p>
                </div>
            </footer>
        </>
    )
}
