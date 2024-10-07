import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../../common/Slider/Sidebar'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { Landingpage, Viewlanding } from './Landingpage'
import { Landing_Preview } from './Landing_Preview';
import axios from 'axios';
import profile from '../../../images/profile.jpeg'
export function All_Pages() {


  let [landing, setlanding] = useState(false);

  let insertlanding = (event) => {

    let allinputs = new FormData(event.target)


    axios.post('http://localhost:5000/add-landing', allinputs)
      .then((res) => {
        console.log(res.data.message)
      })

      .catch((error) => {
        console.log(error)
      })

  }



  let [data, setdata] = useState([])
  let [imageurl, setimageurl] = useState([])


  let viewdata = () => {
    axios.get('http://localhost:5000/landing-page')
      .then((req) => {
        console.log(req.data.data)
        setdata(req.data.viewdata)
        setimageurl(req.data.ImageUrl)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  console.log(data)

  useEffect(() => {
    viewdata();
  }, [])
  return (
    <>
      <section className='dashboard_main w-[100%] h-[100vh] bg-[#ccfecc] flex justify-between ' onLoad={() => All_Pages}>
        <Sidebar />

        <div className='dashboard_inner h-[100vh] bg-white pt-[40px] px-[40px] overflow-y-scroll'>
          <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
            <div className=''>
              <h1 className=' text-[#113c11] text-[25px] font-[500]'>All Web Pages</h1>
            </div>


            <div className='icons_section text-[30px]'>
              <IoIosNotificationsOutline />
            </div>
          </section>


          <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
            <div className='p-5 w-[100%]'>
              <div className='flex justify-between items-center'>
                <h2 className=' text-[#113c11] text-[25px] font-[500] mb-5'>Landing Banner</h2>
                <div className=''>
                  <Landing_Preview />
                  <button className={landing ? 'bg-[red] py-3 px-5 rounded text-white' : 'bg-[#4f94d5] py-3 px-5 rounded text-white'} onClick={() => setlanding(!landing)} >{landing ? "Add Content" : "View Content"}</button>
                </div>
              </div>

              {landing == false ? <form onSubmit={insertlanding}>
                <div className='w-[100%]'>
                  <div className=''>
                    <h3 className=' text-[20px] font-[500]'>
                      Heading
                    </h3>

                    <input type="text" className='border-[1px] border-black w-[100%] my-2 p-2 rounded' placeholder='Enter main heading' name="Heading" />
                  </div>
                </div>


                <div className='w-[100%]'>
                  <div className=''>
                    <h3 className=' text-[20px] font-[500]'>
                      Content
                    </h3>

                    <input as="textarea" className='border-[1px] border-black w-[100%] my-2 p-2 rounded' placeholder='Enter Content' name="Content" />
                  </div>
                </div>


                <div className='w-[100%]'>
                  <div className='flex w-[100%]'>
                    <div className='w-[80%] me-2'>
                      <h3 className=' text-[20px] font-[500]'>
                        Image Banner
                      </h3>

                      <input type="file" className='border-[1px] border-black w-[100%] my-2 p-2 rounded' placeholder='Enter Content' name='Img_Banner' />
                    </div>

                    <div className='w-[20%]'>
                      <h3 className=' text-[20px] font-[500]'>
                        Banner Position
                      </h3>

                      <select className='border-[1px] border-black w-[100%] my-2 p-2 rounded' placeholder='Enter Content' name='Banner_Position' >
                        <option value="1">Right</option>
                        <option value="0">Left</option>
                      </select>
                    </div>
                  </div>
                </div>


                <div className='w-[100%]'>
                  <div className=''>
                    <h3 className=' text-[20px] font-[500]'>
                      Status
                    </h3>

                    <select className='border-[1px] border-black w-[100%] my-2 p-2 rounded' placeholder='Enter Content' name='Status' >
                      <option value="1">Activate</option>
                      <option value="0">De-Activate</option>
                    </select>
                  </div>
                </div>

                <button type='submit' className='my-4 bg-[green] py-3 px-5 rounded text-white'>UPLOAD</button>
              </form>


                :

                <div className=' overflow-y-scroll h-[450px] '>
                  {
                    data.map((items, index) => {
                      console.log(items)
                      return (
                        <>
                          <div className='border-[1px] p-4 rounded bg-[white]'>
                            <div className='w-[100%] flex justify-between'>

                              <div className='w-[100%]'>
                                <div className=''>
                                  <h3 className=' text-[20px] font-[500]'>
                                    Heading
                                  </h3>

                                  <h1 className='w-[100%] my-2 p-2 rounded'>{items.Heading}</h1>
                                </div>
                              </div>


                              <div className='w-[100%]'>
                                <div className=''>
                                  <h3 className=' text-[20px] font-[500]'>
                                    Content
                                  </h3>

                                  <p className=' w-[100%] my-2 p-2 rounded'>
                                    {items.Content}
                                  </p>
                                </div>
                              </div>

                            </div>


                            <div className='w-[62.5%] my-5'>
                              <div className='flex justify-between w-[100%]'>
                                <div className=' me-2'>
                                  <h3 className=' text-[20px] font-[500]'>
                                    Image Banner
                                  </h3>

                                  <img src={imageurl+items.Image} className='w-[300px]' />
                                </div>

                                <div className='w-[20%]'>
                                  <h3 className=' text-[20px] font-[500]'>
                                    Banner Position
                                  </h3>

                                  <p>{items.Banner_Position == 1 ? "left" :"right"}</p>
                                </div>
                              </div>
                            </div>


                            <div className='flex justify-between mt-4'>
                              <div className='w-[100%]'>
                                <div className=''>
                                  <h3 className=' text-[20px] font-[500]'>
                                    Status
                                  </h3>

                                  <p type="file" className=' w-[100%] my-2 p-2 rounded' placeholder='Enter Content' >
                                  {items.Status == 1 ? "Active" :"De-active"}
                                  </p>
                                </div>
                              </div>

                              <button className='my-4 bg-[red] h-[50px] py-3 px-5 rounded text-white'>Delete</button>
                              <button className='my-4 bg-[#4385ff] h-[50px] py-3 px-5 rounded text-white ms-3'>Edit</button>
                            </div>

                          </div>

                        </>
                      )
                    })
                  }
                </div>
              }
            </div>
          </section>

        </div>



      </section>
    </>
  )
}
