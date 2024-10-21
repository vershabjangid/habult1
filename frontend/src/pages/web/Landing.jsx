import React, { useState } from 'react'
import { Header } from '../../common/Header'
import banner_img from "../../images/bannerimg.png"
import { Logo } from '../../common/Logo'
import about from '../../images/about_us.png'
import dots from "../../images/Frame 6847.png"
import { SiGoogleanalytics } from "react-icons/si";
import { FaHandHoldingUsd } from 'react-icons/fa'
import { FcDataProtection, FcStatistics } from "react-icons/fc";
import { BiSupport } from "react-icons/bi";
import our_services from "../../images/box-search 1.svg"
import investor from '../../images/investor_img.png'
import startup from '../../images/startup_our.png'
import { Faq } from '../../common/Faq'
import { FaPhone, FaXmark } from 'react-icons/fa6'
import { MdConnectWithoutContact, MdOutlineLocalPostOffice } from 'react-icons/md'
import { IoLocationOutline } from 'react-icons/io5'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { Footer } from '../../common/Footer'
import { useNavigate } from 'react-router-dom'
import { IoMdSchool } from 'react-icons/io'


export function Landing() {

    let notifysuccess = (success) => toast.success(success)
    let notifyerror = (error) => toast.error(error)

    let contactinfo = (value) => {
        axios.post('http://147.79.71.69:5000/contact', value)
            .then((res) => {
                if (res.data.Status === "1") {
                    console.log(res)
                    notifysuccess(res.data.Message)
                }

                else {
                    notifyerror(res.data.Message)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    let naviget = useNavigate()
    let loginnaviget = () => {
        naviget('/login')
    }

    let registernaviget = () => {
        naviget('/register')
    }
    return (
        <>


            <section className='w-[100%] main'>

                <section className='landing_inner w-[100%] bg-gradient-to-tr from-[#f0eff1] to-[#dfcef8] pt-4'>
                    <Header />

                    <section className='w-[100%] py-5 mt-[30px]'>
                        <section className='landing_banner_section w-[90%] h-[100%] m-auto flex'>
                            <div className=' w-[50%] landing_banner_heading_section flex items-center'>
                                <div className='w-[100%]'>
                                    <h1 className='text-[40px] font-[600] leading-[45px] mb-5'>Startups- Educate-Connect-Invest-Update <br className='extra_br' /></h1>
                                    <p className='text-[20px] mb-5'>We are a member only marketplace for Startup education, awareness and Investor community</p>
                                    <div className='landing_banner_btn w-[100%] flex'>
                                        <button className='bg-[#8637F8] me-1 text-white w-[50%] py-[16px] rounded-[8px]' onClick={loginnaviget}>
                                            Become an Investor
                                        </button>

                                        <button className='bg-[#EFEFEF] text-[grey] ms-1 w-[50%] py-[16px] rounded-[8px]' onClick={loginnaviget}>
                                            Submit Pitch Deck
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-[50%] landing_banner_img_section flex justify-center items-center'>
                                <img src={banner_img} alt="" />
                            </div>
                        </section>




                        {/* <section className='landing_counter w-[80%] my-6 py-3 bg-white rounded-[8px] m-auto flex'>
                            <div className='w-[25%] text-center'>
                                <h2 className='text-[30px] font-[700]'>100<span className='text-[#8637F8]'>M</span></h2>
                                <p>Client Satisfcation</p>
                            </div>

                            <div className='w-[25%] text-center'>
                                <h2 className='text-[30px] font-[700]'>24<span className='text-[#8637F8]'>h</span></h2>
                                <p>Expert Support Team</p>
                            </div>

                            <div className='w-[25%] text-center'>
                                <h2 className='text-[30px] font-[700]'>100<span className='text-[#8637F8]'>M</span></h2>
                                <p>Startups</p>
                            </div>

                            <div className='w-[25%] text-center'>
                                <h2 className='text-[30px] font-[700]'>100<span className='text-[#8637F8]'>M</span></h2>
                                <p>Live Campaign</p>
                            </div>
                        </section> */}
                    </section>

                    <marquee behavior="smooth" className="w-[100%] h-[100px] bg-[#FBF8FF] mt-6 flex items-center">

                        <div className='flex'>
                            <span className='w-[400px] flex'>
                                <div className='w-[30%] flex justify-center items-center'>
                                    <Logo />
                                </div>
                                <div className='w-[70%] text-[25px] font-[600] px-2'>Hubalt Ventures</div>
                            </span>


                            <span className='w-[400px] flex'>
                                <div className='w-[30%] flex justify-center items-center'>
                                    <Logo />
                                </div>
                                <div className='w-[70%] text-[25px] font-[600] px-2'>Hubalt Ventures</div>
                            </span>


                            <span className='w-[400px] flex'>
                                <div className='w-[30%] flex justify-center items-center'>
                                    <Logo />
                                </div>
                                <div className='w-[70%] text-[25px] font-[600] px-2'>Hubalt Ventures</div>
                            </span>


                            <span className='w-[400px] flex'>
                                <div className='w-[30%] flex justify-center items-center'>
                                    <Logo />
                                </div>
                                <div className='w-[70%] text-[25px] font-[600] px-2'>Hubalt Ventures</div>
                            </span>
                        </div>


                    </marquee>
                </section>

                <section className=' about_us_section w-[90%] h-[100vh] m-auto flex'>
                    <section className='about_us_image_section w-[50%] h-[100%] flex justify-center items-center'>
                        <div className='relative w-[100%] h-[100%] flex justify-center items-center'>
                            <img src={about} alt="" className='about_img absolute z-[9] w-[100%]' />
                            <img src={dots} alt="" className='dots_img absolute top-[20%] right-0 w-[50%]' />
                        </div>
                    </section>
                    <section className='about_us_content_section w-[50%]'>
                        <section className='w-[100%] h-[100%] flex justify-center items-center'>
                            <div className='w-[90%]'>
                                <h2 className='text-[35px] font-[600]'>About Us</h2>
                                <p className='my-2 text-[18px] about_us_content'>HubAlt,A digital marketplace strives to make the Startup investment space more inclusive by granting retail investors access to the opportunities that were previously available only to the wealthy 1%. <br /><br /> At the same time, we want to make it hassle free for founders to raise funds from registered users. We are on a mission to transform the landscape of Startup investments in India We are a bridge between Investor and Investee. We believe that stability and growth can go hand in hand, and we are dedicated to helping you achieve both with our innovative approach by bringing promising Startup investment opportunities.</p>
                            </div>
                        </section>
                    </section>
                </section>


                <section className='why_choose_section w-[90%] h-[100vh] m-auto relative'>

                    <section className='w-[50%]  h-[100%] flex items-center justify-center absolute'>
                        <div className='w-[80%] h-[350px] absolute flex items-center'>
                            <div className='corner_cut w-[160px] h-[160px] absolute bg-[#ede2fc]'></div>
                            <h2 className='text-[45px] font-[600]'>Why Choose Us ?</h2>
                            {/* <p className='my-2 text-[18px] about_us_content'>HubAlt,A digital marketplace strives to make the Startup investment space more inclusive by granting retail investors access to the opportunities that were previously available only to the wealthy 1%. At the same time, we want to make it hassle free for founders to raise funds from registered users. We are on a mission to transform the landscape of Startup investments in India We are a bridge between Investor and Investee. We believe that stability and growth can go hand in hand, and we are dedicated to helping you achieve both with our innovative approach by bringing promising Startup investment opportunities.</p> */}
                        </div>
                    </section>


                    <section className='w-[60%]  h-[100%] absolute end-0'>
                        <div className='rounded_element w-[100%] h-[500px]  absolute top-[50%] translate-y-[-50%] bg-[#ede2fc]'>
                            <div className='why_choose_four_secction_outer h-[120%] w-[60%] absolute end-[15%] top-[-10%]'>
                                <div className='absolute w-[100%] h-[50%]'>

                                    <div className='absolute rounded-[15px] w-[48%] h-[90%] bg-[white] bottom-0'>
                                        <div className='w-[100%] h-[45%] flex justify-center items-center'>
                                            <div className='icon_section w-[70px] h-[70px] bg-[#4143E30D] rounded-[10px] flex justify-center items-center'>
                                                <IoMdSchool className='text-[25px] text-[#8637F8]' />
                                            </div>
                                        </div>
                                        <div className='w-[100%] h-[55%]'>
                                            <h1 className='text-center mt-3 text-[20px] font-[500]'>
                                                Startup Education &amp; Awareness Program
                                            </h1>
                                        </div>
                                    </div>
                                    <div className='absolute rounded-[15px] w-[48%] h-[90%] bg-[white] end-0'>
                                        <div className='w-[100%] h-[45%] flex justify-center items-center'>
                                            <div className='icon_section w-[70px] h-[70px] bg-[#4143E30D] rounded-[10px] flex justify-center items-center'>
                                                <FcStatistics className='text-[25px] text-[#8637F8]' />
                                            </div>
                                        </div>
                                        <div className='w-[100%] h-[55%]'>
                                            <h1 className='text-center mt-3 text-[20px] font-[500]'>
                                                Access to available Startups
                                            </h1>
                                        </div>
                                    </div>
                                </div>

                                <div className='absolute w-[100%] h-[50%] bottom-0'>
                                    <div className='absolute rounded-[15px] w-[48%] h-[90%] bg-[white] bottom-0'>
                                        <div className='w-[100%] h-[45%] flex justify-center items-center'>
                                            <div className='icon_section w-[70px] h-[70px] bg-[#4143E30D] rounded-[10px] flex justify-center items-center'>
                                                <MdConnectWithoutContact className='text-[25px] text-[#8637F8]' />
                                            </div>
                                        </div>
                                        <div className='w-[100%] h-[55%]'>
                                            <h1 className='text-center mt-3 text-[20px] font-[500]'>
                                                Connect with Founders
                                            </h1>
                                        </div>
                                    </div>
                                    <div className='absolute rounded-[15px] w-[48%] h-[90%] bg-[white] end-0'>
                                        <div className='w-[100%] h-[45%] flex justify-center items-center'>
                                            <div className='icon_section w-[70px] h-[70px] bg-[#4143E30D] rounded-[10px] flex justify-center items-center'>
                                                <BiSupport className='text-[25px] text-[#8637F8]' />
                                            </div>
                                        </div>
                                        <div className='w-[100%] h-[55%]'>
                                            <h1 className='text-center mt-3 text-[20px] font-[500]'>
                                                Regular updates &amp; Support
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* <section className='why_choose_section_two hidden w-[100%] my-[25px]'>
                    <section className='w-[100%] flex justify-evenly flex-wrap'>
                        <div className='w-[250px]  rounded-[12px] bg-white'>
                            <div className='w-[100%] p-3'>
                                <div className='w-[100%] h-[45%] flex justify-center items-center'>
                                    <div className='icon_section w-[70px] h-[70px] bg-[#4143E30D] rounded-[10px] flex justify-center items-center'>
                                        <SiGoogleanalytics className='text-[25px] text-[#8637F8]' />
                                    </div>
                                </div>
                                <div className='w-[100%] h-[55%]'>
                                    <h1 className='text-center mt-3 text-[20px] font-[500]'>
                                        Bright Future of Indian Startup ecosystem
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className='w-[250px]  rounded-[12px] bg-white'>
                            <div className='w-[100%] p-3'>
                                <div className='w-[100%] h-[45%] flex justify-center items-center'>
                                    <div className='icon_section w-[70px] h-[70px] bg-[#4143E30D] rounded-[10px] flex justify-center items-center'>
                                        <FaHandHoldingUsd className='text-[25px] text-[#8637F8]' />
                                    </div>
                                </div>
                                <div className='w-[100%] h-[55%]'>
                                    <h1 className='text-center mt-3 text-[20px] font-[500]'>
                                        Benefits of Startup Investing
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className='w-[250px]  rounded-[12px] bg-white'>
                            <div className='w-[100%] p-3'>
                                <div className='w-[100%] h-[45%] flex justify-center items-center'>
                                    <div className='icon_section w-[70px] h-[70px] bg-[#4143E30D] rounded-[10px] flex justify-center items-center'>
                                        <FcDataProtection className='text-[25px] text-[#8637F8]' />
                                    </div>
                                </div>
                                <div className='w-[100%] h-[55%]'>
                                    <h1 className='text-center mt-3 text-[20px] font-[500]'>
                                        Enhanced Investor Protection
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className='w-[250px]  rounded-[12px] bg-white'>
                            <div className='w-[100%] p-3'>
                                <div className='w-[100%] h-[45%] flex justify-center items-center'>
                                    <div className='icon_section w-[70px] h-[70px] bg-[#4143E30D] rounded-[10px] flex justify-center items-center'>
                                        <BiSupport className='text-[25px] text-[#8637F8]' />
                                    </div>
                                </div>
                                <div className='w-[100%] h-[55%]'>
                                    <h1 className='text-center mt-3 text-[20px] font-[500]'>
                                        HubAlt Solutions
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='w-[90%] m-auto my-[50px]'>
                        <h2 className='text-[35px] font-[600]'>Why Choose Us ?</h2>
                        <p className='my-2 text-[18px] about_us_content'>HubAlt,A digital marketplace strives to make the Startup investment space more inclusive by granting retail investors access to the opportunities that were previously available only to the wealthy 1%. At the same time, we want to make it hassle free for founders to raise funds from registered users. We are on a mission to transform the landscape of Startup investments in India We are a bridge between Investor and Investee. We believe that stability and growth can go hand in hand, and we are dedicated to helping you achieve both with our innovative approach by bringing promising Startup investment opportunities.</p>
                    </section>
                </section> */}


                {/* <section className='w-[90%] m-auto flex justify-center items-center'>
                    <section className='w-[100%] mb-[50px]'>
                        <h2 className='text-[35px] font-[600] text-center'>Our Services</h2>
                        <div className='w-[100%] mt-4 flex justify-evenly  flex-wrap my-2'>
                            <div className='our_services_cards w-[330px] bg-white px-6 py-4 rounded-[20px] my-2'>
                                <div className=''>
                                    <img src={our_services} alt="" />
                                </div>

                                <div className='my-2'>
                                    <h2 className='text-[25px] font-[600]'>Lorem, ipsum.</h2>
                                </div>

                                <div className=''>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid aliquam, a voluptatum iusto ad voluptatibus laboriosam. Neque, quod numquam, vel nostrum cum blanditiis ratione optio perspiciatis porro eveniet doloremque.</p>
                                </div>
                            </div>


                            <div className='our_services_cards w-[330px] bg-white px-6 py-4 rounded-[20px] my-2'>
                                <div className=''>
                                    <img src={our_services} alt="" />
                                </div>

                                <div className='my-2'>
                                    <h2 className='text-[25px] font-[600]'>Lorem, ipsum.</h2>
                                </div>

                                <div className=''>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid aliquam, a voluptatum iusto ad voluptatibus laboriosam. Neque, quod numquam, vel nostrum cum blanditiis ratione optio perspiciatis porro eveniet doloremque.</p>
                                </div>
                            </div>

                            <div className='our_services_cards w-[330px] bg-white px-6 py-4 rounded-[20px] my-2'>
                                <div className=''>
                                    <img src={our_services} alt="" />
                                </div>

                                <div className='my-2'>
                                    <h2 className='text-[25px] font-[600]'>Lorem, ipsum.</h2>
                                </div>

                                <div className=''>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid aliquam, a voluptatum iusto ad voluptatibus laboriosam. Neque, quod numquam, vel nostrum cum blanditiis ratione optio perspiciatis porro eveniet doloremque.</p>
                                </div>
                            </div>

                            <div className='our_services_cards w-[330px] bg-white px-6 py-4 rounded-[20px] my-2'>
                                <div className=''>
                                    <img src={our_services} alt="" />
                                </div>

                                <div className='my-2'>
                                    <h2 className='text-[25px] font-[600]'>Lorem, ipsum.</h2>
                                </div>

                                <div className=''>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid aliquam, a voluptatum iusto ad voluptatibus laboriosam. Neque, quod numquam, vel nostrum cum blanditiis ratione optio perspiciatis porro eveniet doloremque.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section> */}

                {/* <section className='investor_or_startup_section w-[100%] my-[20px] bg-[#fbf7ff] flex justify-center py-[100px]'>
                    <div className='w-[90%] bg-white investor_or_startup_section_inner'>
                        <div className='w-[100%] investor_section flex py-[30px] px-[25px]'>
                            <div className='w-[50%] flex justify-center items-center'>
                                <div className='investor_content'>
                                    <h2 className='text-[35px] font-[600] my-3'>Investor</h2>
                                    <p className='my-3'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dignissimos eos iusto, aliquid quidem libero quos fugit facilis porro natus tempore a perferendis, praesentium accusantium deserunt? Quaerat harum exercitationem ut.
                                    </p>
                                    <button className='bg-[#8637F8] my-3 text-white w-[50%] py-[16px] rounded-[8px]' onClick={loginnaviget}>
                                        Become an Investor
                                    </button>
                                </div>
                            </div>
                            <div className='w-[50%] flex justify-center items-center'>
                                <img src={investor} alt="" />
                            </div>
                        </div>

                        <div className='startup_section w-[100%] flex py-[30px] px-[25px]'>
                            <div className='w-[50%] flex justify-center items-center'>
                                <img src={startup} alt="" />
                            </div>
                            <div className=' w-[50%] flex justify-center items-center'>
                                <div className='startup_content'>
                                    <h2 className='text-[35px] font-[600] my-3'>Startup</h2>
                                    <p className='my-3'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dignissimos eos iusto, aliquid quidem libero quos fugit facilis porro natus tempore a perferendis, praesentium accusantium deserunt? Quaerat harum exercitationem ut.
                                    </p>
                                    <button className='bg-[#8637F8] my-3 text-white w-[50%] py-[16px] rounded-[8px]' onClick={loginnaviget}>
                                        Submit a Pitchdeck
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}

                {/* <Faq /> */}


                {/* <section className=" w-[100%]">
                    <section className="contact_us_inner w-[90%] m-auto  flex items-center justify-center bg-[#eae3f6] py-[50px]">
                        <section className='contact_us_inner_section w-[90%] flex'>
                            <div className='contact_us_section1 w-[50%]'>
                                <h1 className='text-[48px] font-[600]'>Contact Us</h1>
                                <ul>
                                    <li className='flex items-center h-[20px] my-[20px] text-[20px]'><FaPhone /><span>&nbsp; +91 9351858094</span></li>
                                    <li className='flex items-center h-[20px] my-[20px] text-[20px]'><MdOutlineLocalPostOffice /><span>&nbsp; jangidvershab232gmail.com</span></li>
                                    <li className='flex items-center h-[20px] my-[20px] text-[20px]'><IoLocationOutline /><span>&nbsp;i start jodhpur</span></li>
                                </ul>
                            </div>
                            <div className='w-[50%] contact_us_section2'>
                                <Formik
                                    initialValues={{
                                        Name: "",
                                        Mobile: ""
                                    }}

                                    onSubmit={(values) => {
                                        contactinfo(values)
                                    }}
                                >
                                    <Form className=' w-[100%] flex items-center justify-center flex-col'>
                                        <div className='w-[60%] contact_us_input'>
                                            <div>Name</div>
                                            <Field as="input" type="text" name="Name" className=" w-[100%] p-2 my-1 rounded" placeholder="Enter your Name" />
                                        </div>

                                        <div className='w-[60%] mt-[10px] contact_us_input'>
                                            <div>Mobile.No</div>
                                            <Field as="input" type="number" name="Mobile" className=" w-[100%] p-2 my-1 rounded" placeholder="Enter your Mobile.No" />
                                        </div>

                                        <div className='w-[60%] contact_us_input'>
                                            <button type='submit' className='py-3 px-3 my-3 rounded-[5px] text-white bg-[#8637F8]'>Submit</button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </section>
                    </section>
                </section> */}
                <Footer />
            </section>
            <ToastContainer />
        </>
    )
}