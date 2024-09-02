import React from 'react'
import { FaBars } from 'react-icons/fa'

export function Header() {
    return (
        <>
            <header className=' d-flex justify-content-between'>
                <div className='col-2 h-100 rounded-start-3 d-flex justify-content-center align-items-center'>
                    <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                        logo
                    </div>
                </div>


                <div className='options_section col-7 h-100 '>
                    <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                        <button className='options'>HOME</button>
                        <button className='options'>INVEST</button>
                        <button className='options'>STARTUP</button>
                        <button className='options'>ABOUT US</button>
                        <button className='options'>CONTACT</button>
                    </div>
                </div>


                <div className=' h-100 rounded-end-3  d-flex justify-content-center align-items-center'>
                    <div className='login_sign_in_btn_section w-100 h-100'>
                        <button className='login_btn me-2'>Login</button>
                        <button className='signin_btn '>Signup</button>
                    </div>

                    <div className='menubar fs-4 ms-4'>
                        <FaBars/>
                    </div>
                </div>
            </header>
        </>
    )
}
