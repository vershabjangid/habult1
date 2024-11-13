import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { sidebardata } from './Sliderdata';

export function Sidebar() {

    let data = sidebardata;
    let [sidedataid, setsidedataid] = useState(null);
    console.log(sidedataid)
    let [sidedata, setsidedata] = useState(data)

    return (
        <>
            <section className='sidebar_main w-[100px] h-[100vh] bg-white overflow-hidden'>
                {/* <section className=''><Image src={logo} className='text-[30px] text-center mb-5 mt-[50px] px-5'/></section> */}


                <section className=''>
                    {
                        sidedata.map((items, index) => {

                            if (items.subcategory) {
                                return (
                                    <>

                                        <div className=' text-[#113c11] my-2 '>
                                            <div className=' flex justify-center w-[100%] text-[#113c11] py-4 my-2 ' onClick={() => setsidedataid(items.id)}>
                                                <div className=' w-[30%]  text-[25px] flex justify-center'>{items.icon}</div>
                                                <div className='sidebar_option w-[70%]  flex items-center  text-[18px]'>{items.name}</div>
                                            </div>


                                            {
                                                sidedataid == items.id ? items.subcategory.map((items, index) => {
                                                    return (
                                                        <>
                                                            <div className='side_options_inner text-center py-2 border'>
                                                                <Link to={items.path}>
                                                                    <div className=''>{items.name}</div>
                                                                </Link>
                                                            </div>
                                                        </>
                                                    )
                                                }) : null
                                            }
                                        </div>

                                    </>
                                )
                            }
                            else {
                                return (
                                    <>
                                        <Link to={`${items.path}`}>
                                            <div className=' flex justify-center w-[100%] text-[#113c11] py-4 my-2 '>
                                                <div className=' w-[30%]  text-[25px] flex justify-center'>{items.icon}</div>
                                                <div className='sidebar_option w-[70%]  flex items-center  text-[18px]'>{items.name}</div>
                                            </div>
                                        </Link>
                                    </>
                                )
                            }

                        })
                    }
                </section>
            </section>
        </>
    )
}
