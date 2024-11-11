import React from 'react'
import { Sidebar } from '../../common/Sidebar'
import { useFormik } from 'formik';

export function Team() {
    let formik = useFormik({
        initialValues: {
            Industry: ""
        }
    });
    return (
        <>
            <section className='dashboard_main w-[100%] h-[100vh] bg-[#ccfecc] flex justify-between '>
                <Sidebar />

                <div className='dashboard_inner h-[100vh] bg-white pt-[40px] px-[40px] overflow-y-scroll'>




                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className=''>
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>Team</h1>
                        </div>


                        {/* <div className='icons_section text-[30px]'>
                            <IoIosNotificationsOutline />
                        </div> */}
                    </section>
                </div>



            </section>
        </>
    )
}
