import React, { useEffect, useState } from 'react'
import { Header } from '../../common/Header'
import { Footer } from '../../common/Footer'
import startupsbanner from '../../images/image 13.png'
import logo from '../../images/download-removebg-preview.png'
import { FaShareNodes } from 'react-icons/fa6'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export function Startups() {

  let [startups, setstartups] = useState([])
  
  let [url, seturl] = useState('')
  
  let getdata = () => {
    axios.get('http://147.79.71.69/:5000/all-startup', {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token'))
      }
    })
      .then((res) => {
        setstartups(res.data.getdata)
        seturl(res.data.imgurl)
      })
  }

  useEffect(() => {
    getdata()
  }, [])

  let naviget = useNavigate();


  let briefinfo = (value) => {
    let newurl = url
    naviget('/startups-info', { state: [value, newurl] })
  }
  return (
    <>
      <section className='main'>
        <section className='w-[100%] main'>

          <section className='landing_inner w-[100%] bg-gradient-to-tr from-[#f0eff1] to-[#f2ebfd] pt-4'>
            <Header />

            <section className='w-[100%] py-5 mt-[30px]'>

              <section className='trending_startups_section w-[90%]  m-auto'>
                <h1 className='font-[600] text-[40px]'>Trending Startups</h1>

                <div className='trending_startups_cards section flex justify-between flex-wrap'>
                  <section className='w-[410px]  rounded-[10px] bg-white my-5'>
                    <div className='w-[100%] h-[230px] rounded-[10px] relative'>
                      <div className='w-[100%] h-[100%] absolute '>
                        <img src={startupsbanner} alt="" className='absolute w-[100%] h-[100%] rounded-[10px] blur-[2px]' />
                      </div>
                      <div className='card_logo_section rounded w-[120px] h-[120px] bg-white absolute bottom-[-50px] left-[50%] translate-x-[-50%] flex items-center justify-center'>
                        <img src={logo} alt="" />
                      </div>
                    </div>

                    <div className='flex justify-end px-5 pt-3 text-[20px]'>
                      {/* <FaShareNodes /> */}
                    </div>

                    <div className='mt-[45px] text-center'>
                      <h3 className='text-center text-[25px] font-[600] my-1'>Hubalt</h3>
                      <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, et obcaecati tempora eius doloribus deleniti magni! Eum blanditiis commodi ducimus odio, voluptate dolores ullam molestias facilis itaque tempora, veniam aspernatur?</p>
                    </div>

                    <div className='my-2 flex justify-evenly w-[100%] py-3'>
                      <div className='w-[45%] py-4 rounded-[15px] border-[1px] text-center font-[700] text-[18px]'>
                        <p>Goal</p>
                        <p>1,00,000</p>
                      </div>

                      <div className='w-[45%] py-4 rounded-[15px] border-[1px] text-center font-[700] text-[18px] text-green-400'>
                        <p>Raised</p>
                        <p>1,00,000</p>
                      </div>
                    </div>

                  </section>

                  <section className='w-[410px] opacity-0  rounded-[10px] bg-white border-[1px] border-[blue] my-5'>
                  </section>

                  <section className='w-[410px] opacity-0  rounded-[10px] bg-white border-[1px] border-[blue] my-5'>

                  </section>


                </div>
              </section>


              <section className='trending_startups_section w-[90%]  m-auto'>
                <h1 className='font-[600] text-[40px] text-center my-4'>All Startup</h1>
                <div className='w-[100%] border-[1px] bg-[#8637F808] flex rounded-[10px]'>
                  <div className=' px-2 border-b-4 py-2 px-[40px] text-[#8637F8] border-[#8637F8]'>
                    All
                  </div>
                </div>
                <div className='trending_startups_cards section flex justify-between flex-wrap'>
                  {

                    startups == undefined ?
                      naviget('*')
                      :
                      startups.map((items, index) => {
                        return (
                          <>
                            <section className='w-[410px]  rounded-[10px] bg-white my-5' onClick={() => briefinfo(items)}>
                              <div className='w-[100%] h-[230px] rounded-[10px] relative'>
                                <div className='w-[100%] h-[100%] absolute '>
                                  <img src={startupsbanner} alt="" className='absolute w-[100%] h-[100%] rounded-[10px] blur-[2px]' />
                                </div>
                                <div className='card_logo_section rounded w-[120px] h-[120px] bg-white absolute bottom-[-50px] left-[50%] translate-x-[-50%] flex items-center justify-center'>
                                  <img src={url + `${items.Logo}`} alt="image" className='w-[100%]' />
                                </div>
                              </div>

                              <div className='flex justify-end px-5 pt-3 text-[20px]'>
                                {/* <FaShareNodes /> */}
                              </div>

                              <div className='mt-[45px] text-center'>
                                <h3 className='text-center text-[25px] font-[600] my-1'>{items.Company_Name}</h3>
                                <p >{items.Company_Description}</p>
                              </div>

                              <div className='my-2 flex justify-evenly w-[100%] py-3'>
                                <div className='w-[45%] py-4 rounded-[15px] border-[1px] text-center font-[700] text-[18px]'>
                                  <p>Funding Ask</p>
                                  <p>{items.Funding_Ask}</p>
                                </div>

                                <div className='w-[45%] py-4 rounded-[15px] border-[1px] text-center font-[700] text-[18px] text-green-400'>
                                  <p>Equity</p>
                                  <p>{items.Equity_Dilution}%</p>
                                </div>
                              </div>

                            </section>

                          </>
                        )
                      })


                  }
                  <section className='w-[410px] opacity-0  rounded-[10px] bg-white border-[1px] border-[blue] my-5'>
                  </section>

                  <section className='w-[410px] opacity-0  rounded-[10px] bg-white border-[1px] border-[blue] my-5'>

                  </section>


                </div>
              </section>

            </section>
            <Footer />
          </section>
        </section>
      </section>
    </>
  )
}
