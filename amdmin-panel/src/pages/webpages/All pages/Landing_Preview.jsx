import React, { useState } from 'react'
import preview_img from '../../../images/landingpreview.png'



export function Landing_Preview() {
    let [preview, setpreview] = useState(false)
    return (
        <>
            <button className='bg-[navy] p-3 rounded me-3 text-white' onClick={() => setpreview(true)}>About Section</button>

            {
                preview ? <section onClick={()=>setpreview(false)} className='w-[100%] h-[100vh] fixed bg-[#00000073] top-0 right-0'>

                    <div className='w-[100%] h-[100%] flex justify-center items-center'>
                        <img src={preview_img} alt="" />
                    </div>
                </section> : null
            }
        </>
    )
}
