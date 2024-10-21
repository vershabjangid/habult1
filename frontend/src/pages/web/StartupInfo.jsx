import React from 'react'
import { FaShareNodes } from 'react-icons/fa6'
import { Header } from '../../common/Header'
import { Footer } from '../../common/Footer'
import startupsbanner from '../../images/image 13.png'
import { useLocation } from 'react-router-dom'
export function StartupInfo() {

  let location = useLocation()
  let data = location.state

  console.log(data)
  return (
    <>
      <section className='main'>
        <section className='w-[100%] main'>

          <section className='landing_inner w-[100%] bg-gradient-to-tr from-[#f0eff1] to-[#f2ebfd] pt-4'>
            <Header />

            <section className='w-[100%] py-5 mt-[30px]'>

              <section className='trending_startups_section w-[90%]  m-auto'>

                <div className='trending_startups_cards section flex justify-between flex-wrap'>
                  <section className='w-[100%]  rounded-[15px] bg-white my-5 px-4 py-2'>
                    <div className='w-[100%] border-b-[1px] border-black flex'>
                      <img src={data[1] + data[0].Logo} alt="" className='w-[70px]' />

                      <div className=''>
                        <h1 className='font-[600] text-[18px]'> {data[0].Company_Name}</h1>
                        <p className='text-[15px]'>{data[0].Short_Bio}</p>
                      </div>
                    </div>


                    <section className='W-[100%] border-[1px] border-[blue] py-3 my-3 flex justify-between'>
                      <div className='w-[49%] border-[1px] border-[red]'></div>
                      {/* -------------------------------- */}
                      <div className='w-[49%] border-[1px] border-[red]'></div>

                    </section>



                  </section>
                </div>
              </section>

            </section>
            <Footer />
          </section>
        </section>
      </section >
    </>
  )
}
