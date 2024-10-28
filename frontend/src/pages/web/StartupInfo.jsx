import React from 'react'
import { FaDownload, FaShareNodes } from 'react-icons/fa6'
import { Header } from '../../common/Header'
import { Footer } from '../../common/Footer'
import startupsbanner from '../../images/image 13.png'
import { useLocation } from 'react-router-dom'
export function StartupInfo() {

  let location = useLocation()
  let data = location.state
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
                        <p className='text-[15px]'>{data[0].Company_Description}</p>
                      </div>
                    </div>


                    <section className='W-[100%]  py-3 my-3 flex justify-between'>
                      <div className='w-[50%] border-e-[1px] border-e-black pe-[20px]'>
                        <div className='w-[100%] rounded flex justify-center items-center'>
                          <iframe frameborder="0" allowFullScreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Credresolve Overview" width="100%" height="360px" src={data[0].Video_Link} id="widget2" data-gtm-yt-inspected-13="true"></iframe>
                        </div>
                      </div>
                      {/* -------------------------------- */}
                      <div className='w-[50%] flex justify-center items-center flex-col'>
                        <div className='w-[90%] flex justify-between'>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px] rounded border-[1px]  p-2'> Funding Ask : <span className='text-black'>₹ {data[0].Funding_Ask}</span></div>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px] rounded border-[1px]  p-2'>Equity : <span className='text-black'>{data[0].Equity_Dilution}%</span></div>
                        </div>

                        <div className='w-[90%] flex justify-between my-3'>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px]  rounded border-[1px]  p-2'> Pre Money Valuation : <span className='text-black'>₹ {data[0].PreMoneyValuation}</span></div>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px] rounded border-[1px]  p-2'>Round : <span className='text-black'>{data[0].Round}</span></div>
                        </div>

                        <div className='w-[90%] flex justify-between'>
                          <div className='w-[49%] text-[#4f4f4f] font-[600] text-[16px] rounded border-[1px]  p-2'>Industry : <span className='text-black'>{data[0].Industry}</span></div>
                        </div>

                        <div className='w-[90%]'>
                          <button className='w-[100%] bg-purple-600 py-2 text-[20px] text-white mt-[100px] rounded'>Invest Now</button>
                        </div>

                      </div>

                    </section>

                    <section className='W-[100%]  py-3 my-3 flex justify-evenly'>
                      <div className='w-[100%] flex justify-center items-center flex-col'>
                        <div className='w-[90%] py-2'>
                          <p className='font-[600] text-[30px]'>Highlights</p>
                        </div>

                        <div className='w-[90%] flex justify-between my-3'>
                          <ul className=' list-disc leading-[30px]'>
                            <li>{data[0].Highlight1}</li>
                            <li>{data[0].Highlight2}</li>
                            <li>{data[0].Highlight3}</li>
                            <li>{data[0].Highlight4}</li>
                            <li>{data[0].Highlight5}</li>
                          </ul>
                        </div>

                      </div>

                    </section>

                    <section className='W-[100%]  py-3 my-3 flex justify-evenly'>
                      <div className='w-[100%] flex justify-center items-center flex-col'>
                        <div className='w-[90%] py-2'>
                          <p className='font-[600] text-[30px]'>Backers</p>
                        </div>

                        <div className='w-[90%] flex justify-evenly flex-wrap my-3'>
                          <div className='w-[250px] border-[1px] p-1 bg-[#f2ebfd] rounded-[10px] flex justify-between flex-col'>
                            <div className='w-[100%]'>
                              <img src={data[1] + data[0].BackersProfile1} className='h-auto rounded-[10px]' alt="" />
                            </div>

                            <div className=''>
                              <h3 className='font-[600] text-[25px] my-2'> {data[0].BackersName1}</h3>
                              <p className=' text-[20px] mb-2'> <i>{data[0].BackersDesignation1}</i></p>
                            </div>
                          </div>

                          <div className='w-[250px] border-[1px] p-1 bg-[#f2ebfd] rounded-[10px]'>
                            <div className='w-[100%]'>
                              <img src={data[1] + data[0].BackersProfile2} className='rounded-[10px]' alt="" />
                            </div>

                            <div className=''>
                              <h3 className='font-[600] text-[25px] my-2'> <i>{data[0].BackersName2}</i></h3>
                              <p className=' text-[20px] mb-2'> <i>{data[0].BackersDesignation2}</i></p>
                            </div>
                          </div>


                          <div className='w-[250px] border-[1px] opacity-0 bg-[#f2ebfd] rounded-[10px]'>
                          </div>

                          <div className='w-[250px] border-[1px] opacity-0 bg-[#f2ebfd] rounded-[10px]'>
                          </div>



                        </div>

                      </div>

                    </section>



                    <section className='W-[100%]  py-3 my-3 flex justify-evenly'>
                      <div className='w-[100%] flex justify-center items-center flex-col'>
                        <div className='w-[90%] py-2'>
                          <p className='font-[600] text-[30px]'>Team</p>
                        </div>

                        <div className='w-[90%] flex justify-evenly flex-wrap my-3'>
                          <div className='w-[250px] border-[1px] p-1 bg-[#f2ebfd] rounded-[10px] flex justify-between flex-col'>
                            <div className='w-[100%]'>
                              <img src={data[1] + data[0].TeamProfile1} className='h-auto rounded-[10px]' alt="" />
                            </div>

                            <div className=''>
                              <h3 className='font-[600] text-[25px] my-2'> {data[0].TeamName1}</h3>
                              <p className=' text-[20px] mb-2'> <i>{data[0].TeamDesignation1}</i></p>
                            </div>
                          </div>

                          <div className='w-[250px] border-[1px] p-1 bg-[#f2ebfd] rounded-[10px]'>
                            <div className='w-[100%]'>
                              <img src={data[1] + data[0].TeamProfile2} className='rounded-[10px]' alt="" />
                            </div>

                            <div className=''>
                              <h3 className='font-[600] text-[25px] my-2'> <i>{data[0].TeamName2}</i></h3>
                              <p className=' text-[20px] mb-2'> <i>{data[0].TeamDesignation2}</i></p>
                            </div>
                          </div>


                          <div className='w-[250px] border-[1px] opacity-0 bg-[#f2ebfd] rounded-[10px]'>
                          </div>

                          <div className='w-[250px] border-[1px] opacity-0 bg-[#f2ebfd] rounded-[10px]'>
                          </div>
                        </div>

                      </div>

                    </section>


                    <section className='W-[100%]  py-3 my-3 flex justify-evenly'>
                      <div className='w-[100%] flex justify-center items-center flex-col'>
                        <div className='w-[90%] py-2'>
                          <p className='font-[700] text-[30px]'>Problem</p>
                        </div>

                        <div className='w-[90%]'><h4 className='text-[20px] font-[500]'>{data[0].Problem}</h4></div>
                      </div>

                    </section>


                    <section className='W-[100%] py-3 my-3 flex justify-evenly'>
                      <div className='w-[100%] flex justify-center items-center flex-col'>
                        <div className='w-[90%] py-2'>
                          <p className='font-[700] text-[30px]'>Solution</p>
                        </div>

                        <div className='w-[90%]'><h4 className='text-[20px] font-[500]'>{data[0].Solution}</h4></div>
                      </div>

                    </section>


                    <section className='my-5'>
                      <section className='W-[100%] py-3 my-3 flex justify-evenly'>
                        <div>
                          <a href={data[1] + data[0].Pitch_Deck} download={data[1] + data[0].Pitch_Deck} className='bg-[#f2ebfd] w-[250px] p-4 rounded-[25px] font-[600] text-[black] text-[20px] flex justify-between items-center'>Pitch Deck
                            <div>
                              <FaDownload />
                            </div>
                          </a>
                        </div>

                        <div>
                          <a href={data[1] + data[0].Incorporation_Certificate} download={data[1] + data[0].Incorporation_Certificate} className='bg-[#f2ebfd] w-[250px] p-4 rounded-[25px] font-[600] text-[black] text-[20px] flex justify-between items-center'>Incorporation Certificate
                            <div>
                              <FaDownload />
                            </div>
                          </a>
                        </div>

                       
                      </section>

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
