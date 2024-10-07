import React from 'react'
import { Logo } from '../common/Logo'

export function Error() {
    return (
        <>
            <section className='main h-[100vh] w-[100%] bg-[skyblue] flex justify-center items-center flex-col'>
                <div className='w-[500px]'>
                <Logo/>
                </div>
                <p className='text-[50px]'>Website in Maintainance</p>
                <p className='text-[50px]'>that may take a several time</p>
            </section>
        </>
    )
}
