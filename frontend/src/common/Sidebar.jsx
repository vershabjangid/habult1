import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { sidebardata } from './Sliderdata';

export function Sidebar() {

    let data = sidebardata;
    let [sidedataid, setsidedataid] = useState(data.id);
    let [sidedata, setsidedata] = useState(data)

    return (
        <>
            <section className='sidebar_main w-[100px] h-[100vh] bg-white overflow-hidden'>
                {/* <section className=''><Image src={logo} className='text-[30px] text-center mb-5 mt-[50px] px-5'/></section> */}


                <section className=''>
                    {
                        sidedata.map((items, index) => {
                            return (
                                <>
                                    <Link to={`${items.path}`}>
                                        <div className='side_options flex justify-center w-[100%] text-[#113c11] py-4 my-2 '>
                                            <div className=' w-[30%]  text-[25px] flex justify-center'>{items.icon}</div>
                                            <div className='sidebar_option w-[70%]  flex items-center  text-[18px]'>{items.name}</div>
                                        </div>
                                    </Link>
                                </>
                            )
                        })
                    }
                </section>
            </section>
        </>
    )
}
