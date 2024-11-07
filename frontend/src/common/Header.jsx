import React, { useState } from 'react'
import { Logo } from './Logo'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
    let getlocal = JSON.parse(localStorage.getItem('token'))
    let [sidemenu, setsidemenu] = useState(false)

    let logout = () => {
        localStorage.setItem('token', JSON.stringify(''))
        naviget('/')
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
            <section className='header w-[70%] h-[96px] bg-white m-auto px-5 rounded-[12px] flex justify-between items-center'>
                <div className='logo w-[150px] h-[100%] flex justify-center items-center'>
                    <Logo />
                </div>
                <div className='header_options_div h-[100%] flex justify-center items-center text-[#646464]'>
                    <ul className='w-[100%] flex justify-evenly'>
                        <Link to={"/"}><li className='px-[8px] py-[8px]  transition-[1s] cursor-pointer font-[600] rounded-[6px] text-[15px] hover:bg-[#4143E30D] hover:text-[#8637F8]'>HOME</li></Link>


                        {
                            getlocal == '' || getlocal == undefined || getlocal == null ?
                             
                            <Link to={"/startups-ecosystem"}><li className='px-[8px] py-[8px]  transition-[1s] cursor-pointer font-[600] rounded-[6px] text-[15px] hover:bg-[#4143E30D] hover:text-[#8637F8]'>STARTUP</li></Link>

                                :
                                <Link to={"/startups"}><li className='px-[8px] py-[8px]  transition-[1s] cursor-pointer font-[600] rounded-[6px] text-[15px] hover:bg-[#4143E30D] hover:text-[#8637F8]'>STARTUP</li></Link>

                        }
                        <Link to={"/about"}><li className='px-[8px] py-[8px]  transition-[1s] cursor-pointer font-[600] rounded-[6px] text-[15px] hover:bg-[#4143E30D] hover:text-[#8637F8]'>ABOUT US</li></Link>
                        {/* <li className='px-[8px] py-[8px]  transition-[1s] cursor-pointer font-[600] rounded-[6px] text-[15px] hover:bg-[#4143E30D] hover:text-[#8637F8]'>CONTACT</li> */}
                    </ul>
                </div>
                {
                    getlocal == '' || getlocal == undefined || getlocal == null ?
                        <div className='login_btn'>
                            <button className='bg-[#8637F8] text-white px-5 py-2 rounded-[10px]' onClick={loginnaviget}>
                                Login
                            </button>

                            <button className='bg-[grey] ms-2 text-white px-5 py-2 rounded-[10px]' onClick={registernaviget}>
                                Signup
                            </button>
                        </div> :
                        <div className='login_btn'>
                            <button className='bg-[#8637F8] text-white px-5 py-2 rounded-[10px]' onClick={logout}>
                                Logout
                            </button>
                        </div>

                }
                <div className='menubar hidden'>
                    <FaBars className='text-[25px]' onClick={() => setsidemenu(true)} />
                </div>
            </section>


            <section className={sidemenu ? 'sidebar w-[100%] h-[100vh] bg-[white] fixed overflow-y-scroll z-50 left-[0%] top-0 ease-linear duration-500' : 'sidebar w-[100%] h-[100vh] bg-white fixed overflow-y-scroll z-50 left-[-100%] top-0 ease-linear duration-500'}>
                <section className=' w-[100%] flex justify-between items-center mt-2'>
                    <div className='w-[70%] ps-2'>
                        <Logo />
                    </div>
                    <div className='text-black text-[30px] w-[15%]'><FaXmark onClick={() => setsidemenu(false)} /></div>
                </section>

                <Link to={"/"}>
                    <section className='py-5 text-[18px] font-[600] mt-5 text-center'>
                        HOME
                    </section>
                </Link>

                <Link to={"/about"}>

                    <section className='py-5 text-[18px] font-[600] text-center'>
                        ABOUT US
                    </section>
                </Link>

                {/* <section className='py-5 text-[18px] font-[600] bg-purple-300 text-center'>
                    CONTACT
                </section> */}

                {
                    getlocal == '' || getlocal == undefined || getlocal == null ?
                        <Link to={"/login"}>
                            <section className='py-5 text-[18px] font-[600]  text-center'>
                                STARTUP
                            </section>
                        </Link>
                        :
                        <Link to={"/startups"}>
                            <section className='py-5 text-[18px] font-[600]  text-center'>
                                STARTUP
                            </section>
                        </Link>
                }


                <Link to={"/privacy"}>
                    <section className='py-5 text-[18px] font-[600]  text-center'>
                        PRIVACY POLICY
                    </section>
                </Link>

                <Link to={"/terms"}>
                    <section className='py-5 text-[18px] font-[600]  text-center'>
                        TERMS & CONDITIONS
                    </section>
                </Link>

                <Link to={"/disclaimer"}>
                    <section className='py-5 text-[18px] font-[600]  text-center'>
                        DISCLAIMER
                    </section>
                </Link>
            </section >

        </>
    )
}
