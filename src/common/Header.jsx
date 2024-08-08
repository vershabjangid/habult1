import React from 'react'

export function Header() {
    return (
        <>
            <header className='m-auto d-flex justify-content-between'>
                <div className='col-2 h-100 rounded-start-3 d-flex justify-content-center align-items-center'>
                    <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                        logo
                    </div>
                </div>


                <div className='col-7 h-100 d-flex justify-content-center align-items-center'>
                    <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                        <button className='options'>HOME</button>
                        <button className='options'>INVEST</button>
                        <button className='options'>STARTUP</button>
                        <button className='options'>ABOUT US</button>
                        <button className='options'>CONTACT</button>
                    </div>
                </div>


                <div className='col-3 h-100 rounded-end-3  d-flex justify-content-center align-items-center'>
                    <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                        <button className='login_btn '>Login</button>
                        <button className='signin_btn '>Signup</button>
                    </div>
                </div>
            </header>
        </>
    )
}
