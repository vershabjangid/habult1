import React, { useState } from 'react'
import { Logo } from './Logo'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
    let [sidemenu, setsidemenu] = useState(false)

    let naviget = useNavigate()
    let loginnaviget = () => {
        naviget('/login')
    }

    let registernaviget = () => {
        naviget('/register')
    }
    return (
        <>
            <section className='header w-[70%] h-[96px] bg-white m-auto px-5 rounded-[12px] flex justify-between items-center'>
                <div className='logo w-[150px] h-[100%] flex justify-center items-center'>
                    <Logo />
                </div>
                <div className='header_options_div h-[100%] flex justify-center items-center text-[#646464]'>
                    <ul className='w-[100%] flex justify-between'>
                    <Link to={"/"}><li className='px-[8px] py-[8px]  transition-[1s] cursor-pointer font-[600] rounded-[6px] text-[15px] hover:bg-[#4143E30D] hover:text-[#8637F8]'>HOME</li></Link>
                        <li className=' px-[8px] py-[8px] transition-[1s] cursor-pointer font-[600] rounded-[6px] text-[15px] hover:bg-[#4143E30D] hover:text-[#8637F8]'>INVEST</li>
                        <li className='px-[8px] py-[8px]  transition-[1s] cursor-pointer font-[600] rounded-[6px] text-[15px] hover:bg-[#4143E30D] hover:text-[#8637F8]'>STARTUP</li>
                        <Link to={"/about"}><li className='px-[8px] py-[8px]  transition-[1s] cursor-pointer font-[600] rounded-[6px] text-[15px] hover:bg-[#4143E30D] hover:text-[#8637F8]'>ABOUT US</li></Link>
                        <li className='px-[8px] py-[8px]  transition-[1s] cursor-pointer font-[600] rounded-[6px] text-[15px] hover:bg-[#4143E30D] hover:text-[#8637F8]'>CONTACT</li>
                    </ul>
                </div>
                <div className='login_btn'>
                    <button className='bg-[#8637F8] text-white px-5 py-2 rounded-[10px]' onClick={loginnaviget}>
                        Login
                    </button>

                    <button className='bg-[grey] ms-2 text-white px-5 py-2 rounded-[10px]' onClick={registernaviget}>
                        Signup
                    </button>
                </div>
                <div className='menubar hidden'>
                    <FaBars className='text-[25px]' onClick={() => setsidemenu(true)} />
                </div>
            </section>


            <section className={sidemenu ? 'sidebar w-[100%] h-[100vh] bg-white fixed overflow-y-scroll z-50 left-[0%] top-0 ease-linear duration-500' : 'sidebar w-[100%] h-[100vh] bg-white fixed overflow-y-scroll z-50 left-[-100%] top-0 ease-linear duration-500'}>
                <section className=' w-[100%] flex justify-between items-center mt-2'>
                    <div className='w-[70%] ps-2'>
                        <Logo />
                    </div>
                    <div className='text-black text-[30px] w-[15%]'><FaXmark onClick={() => setsidemenu(false)} /></div>
                </section>

                <section className='py-5 text-[18px] font-[600] bg-purple-300 mt-5 text-center'>
                    HOME
                </section>

                <section className='py-5 text-[18px] font-[600] bg-purple-300 text-center'>
                    ABOUT US
                </section>

                <section className='py-5 text-[18px] font-[600] bg-purple-300 text-center'>
                    CONTACT
                </section>

                <section className='py-5 text-[18px] font-[600] bg-purple-300 text-center'>
                    INVEST
                </section>

                <section className='py-5 text-[18px] font-[600] bg-purple-300 text-center'>
                    STARTUP
                </section>

                <section className='py-5 text-[18px] font-[600] bg-purple-300 text-center'>
                    PRIVACY POLICY
                </section>

                <section className='py-5 text-[18px] font-[600] bg-purple-300 text-center'>
                    TERMS & CONDITIONS
                </section>

                <section className='py-5 text-[18px] font-[600] bg-purple-300 text-center'>
                    DISCLAIMER
                </section>
            </section>

        </>
    )
}
