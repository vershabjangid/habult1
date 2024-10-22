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
                    <div className='w-[100%] border-b-[1px] border-black flex justify-between items-center'>
                      <img src={data[1] + data[0].Logo} alt="" className='w-[80px] h-[80px] rounded' />

                      <div className='w-[calc(100%-100px)]'>
                        <h1 className='font-[600] text-[18px]'> {data[0].Company_Name}</h1>
                        <p className='text-[15px]'>{data[0].Short_Bio}</p>
                      </div>
                    </div>


                    <section className='W-[100%] border-[1px] border-[blue] py-3 my-3 flex justify-between'>
                      <div className='w-[50%] border-e-[1px] border-e-black pe-[20px]'>
                        <div className='w-[100%] rounded flex justify-center items-center'>
                          <img src={data[1] + data[0].Logo} alt="" className='rounded' />
                        </div>
                      </div>
                      {/* -------------------------------- */}
                      <div className='w-[50%] flex justify-center items-center flex-col'>
                        <div className='w-[90%] flex justify-between'>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px] rounded border-[1px]  p-2'> Funding Ask : <span className='text-black'>₹ {data[0].Funding_Ask}</span></div>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px] rounded border-[1px]  p-2'>Equity : <span className='text-black'>{data[0].Equity}%</span></div>
                        </div>

                        <div className='w-[90%] flex justify-between my-3'>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px]  rounded border-[1px]  p-2'> Pre Money Valuation : <span className='text-black'>₹ {data[0].PreMoneyValuation}</span></div>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px] rounded border-[1px]  p-2'>Round : <span className='text-black'>{data[0].Round}</span></div>
                        </div>

                        <div className='w-[90%] flex justify-between'>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px] rounded border-[1px]  p-2'>Category : <span className='text-black'>{data[0].Startup_Sector}</span></div>
                        </div>

                        <div className='w-[90%]'>
                          <button className='w-[100%] bg-purple-600 py-2 text-[20px] text-white mt-[100px] rounded'>Invest Now</button>
                        </div>

                      </div>

                    </section>

                    <section className='W-[100%] border-[1px] border-[blue] py-3 my-3 flex justify-between'>
                      {/* -------------------------------- */}
                      <div className='w-[100%] flex justify-center items-center flex-col'>
                        <div className='w-[90%] py-2'>
                          <p className='font-[600]'>Description</p>
                          <p>{data[0].Description}</p>
                        </div>

                        <div className='w-[90%] flex justify-between my-3'>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px]  rounded border-[1px]  p-2'> Pre Money Valuation : <span className='text-black'>₹ {data[0].PreMoneyValuation}</span></div>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px] rounded border-[1px]  p-2'>Round : <span className='text-black'>{data[0].Round}</span></div>
                        </div>

                        <div className='w-[90%] flex justify-between'>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px] rounded border-[1px]  p-2'>Category : <span className='text-black'>{data[0].Startup_Sector}</span></div>
                        </div>

                        <div className='w-[90%]'>
                          <button className='w-[100%] bg-purple-600 py-2 text-[20px] text-white mt-[100px] rounded'>Invest Now</button>
                        </div>

                      </div>

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
