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
  let [startupstrending, setstartupstrending] = useState([])

  let [url, seturl] = useState('')

  let getdata = () => {
    axios.get('https://api.hivexv.com/all-startup', {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token'))
      }
    })
      .then((res) => {
        setstartups(res.data.getdata.filter((items) => items.Activestatus == "ok" || "trending"))
        setstartupstrending(res.data.getdata.filter((items) => items.Activestatus == "trending"))
        seturl(res.data.imgurl)
      })
  }


  let [industry, setindustry] = useState([])
  let [industryfilter, setindustryfilter] = useState()
  console.log(industryfilter)
  let [choosecategory, setchoosecategory] = useState("All")
  let getindustry = () => {
    axios.get('https://api.hivexv.com/view-industry')
      .then((res) => {
        setindustry(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let filter = (event) => {
    if (event != "All") {
      setindustryfilter(industry.filter((items) => items.Industry.includes(event)))
    }

    else {
      setindustryfilter(event)
    }
  }

  useEffect(() => {
    getdata()
    getindustry()
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
                  {

                    startups == undefined ?
                      naviget('*')
                      :
                      startupstrending.map((items, index) => {
                        return (
                          <>
                            <section className='startupcard w-[410px] rounded-[10px] bg-white my-5 mx-2' onClick={() => briefinfo(items)}>
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


              <section className='trending_startups_section w-[90%]  m-auto'>
                <h1 className='font-[600] text-[40px] text-center my-4'>All Startup</h1>
                <div className='w-[100%] border-[1px] bg-[#8637F808] flex rounded-[10px]'>
                  <div className={choosecategory == "All" ? 'px-2 border-b-4 py-2 px-[40px] text-[#8637F8] border-[#8637F8] cursor-pointer' : 'px-2 border-b-4 py-2 px-[40px] cursor-pointer'} onClick={(() => setchoosecategory("All") || filter("All"))}>
                    All
                  </div>

                  {
                    industry.map((items, index) => {
                      return (
                        <>
                          <div className={choosecategory == items.Industry ? 'px-2 border-b-4 py-2 px-[40px] text-[#8637F8] border-[#8637F8] cursor-pointer' : 'px-2 border-b-4 py-2 px-[40px] cursor-pointer'} onClick={(() => setchoosecategory(items.Industry) || filter(items.Industry))}>
                            {items.Industry}
                          </div>
                        </>
                      )
                    })
                  }
                </div>
                <div className='trending_startups_cards section flex justify-between flex-wrap'>
                  {

                    startups == undefined ?
                      naviget('*')
                      :
                      startups.map((items, index) => {
                        console.log(items)
                        return (
                          <>
                            {
                              industryfilter != undefined ?

                                industryfilter[0].Industry == items.Industry ?

                                  <section className='startupcard w-[410px] rounded-[10px] bg-white my-5 mx-2' onClick={() => briefinfo(items)}>
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

                                  :
                                  (industryfilter == "All") ?

                                    <>
                                      <section className='startupcard w-[410px] rounded-[10px] bg-white my-5 mx-2' onClick={() => briefinfo(items)}>
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
                                    : null

                                :
                                <section className='startupcard w-[410px] rounded-[10px] bg-white my-5 mx-2' onClick={() => briefinfo(items)}>
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

                            }
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
