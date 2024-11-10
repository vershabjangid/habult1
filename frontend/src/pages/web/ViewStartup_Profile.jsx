import React, { useState } from 'react'
import { FaDownload, FaEarthAsia, FaLinkedin, FaPersonWalkingLuggage } from 'react-icons/fa6'
import { Sidebar } from '../../common/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useFormik } from 'formik';

export function ViewStartup_Profile() {

    let location = useLocation();
    let data = location.state


    let naviget = useNavigate()
    let [acceptmodal, setacceptmodal] = useState(false)
    let [rejecttmodal, setrejecttmodal] = useState(false)
    let [trendingmodal, settrendingmodal] = useState(false)

    var [rejectapplication, setrejectapplication] = useState('')
    let formik = useFormik({
        initialValues: {
            _id: data.data._id,
            Activestatus: "",
            Message: "",
            Email: data.data.Email
        },

        onSubmit: (() => {
            updatestartups(formik.values)
        })
    })
    let updatestartups = (value) => {
        axios.put('http://147.79.71.69:5000/update-startup', value)
            .then((res) => {
                naviget('/dashboard-panel')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>

            {
                acceptmodal ? <section className='w-[100%] h-[100vh] fixed flex justify-center items-center bg-[#00000064]'>
                    <form onSubmit={formik.handleSubmit}>
                        <section className='w-[600px] border-[3px] p-[5px] py-[20px] rounded-[15px] bg-[white]'>
                            <h1 className='text-center text-[25px]'>Are you sure you want to accept</h1>

                            <div className='flex justify-evenly my-[15px]'>
                                <button className='bg-[red] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => setacceptmodal(false)}>Cancel</button>
                                <button type='submit' className='bg-[green] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => formik.setFieldValue('Activestatus', "ok")}>Accept</button>
                            </div>
                        </section>
                    </form>
                </section> : null
            }


            {
                rejecttmodal ? <section className='w-[100%] h-[100vh] fixed flex justify-center items-center bg-[#00000064]'>
                    <form onSubmit={formik.handleSubmit}>
                        <section className='w-[600px] border-[3px] p-[5px] py-[20px] rounded-[15px] bg-[white]'>
                            <h1 className='text-center text-[25px]'>Are you sure you want to Reject</h1>
                            <div className='flex items-center justify-center flex-col my-[20px]'>
                                <div className='w-[95%]'>
                                    <p>Reason for rejection</p>
                                </div>
                                <input type="text" name='Message' className='border-[1px] border-black p-2 rounded my-[10px] w-[95%] ' onChange={(e) => formik.setFieldValue('Message', e.target.value)} />
                            </div>
                            <div className='flex justify-evenly my-[15px]'>
                                <button className='bg-[red] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => setrejecttmodal(false)}>Cancel</button>
                                <button type='submit' className='bg-[green] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => formik.setFieldValue('Activestatus', "reject")}>Reject</button>
                            </div>
                        </section>
                    </form>
                </section> : null
            }


            {
                trendingmodal ? <section className='w-[100%] h-[100vh] fixed flex justify-center items-center bg-[#00000064]'>
                    <form onSubmit={formik.handleSubmit}>
                        <section className='w-[600px] border-[3px] p-[5px] py-[20px] rounded-[15px] bg-[white]'>
                            <h1 className='text-center text-[25px]'>Are you sure you want to make it trending</h1>

                            <div className='flex justify-evenly my-[15px]'>
                                <button className='bg-[red] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => settrendingmodal(false)}>Cancel</button>
                                <button type='submit' className='bg-[green] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => formik.setFieldValue('Activestatus', "trending")}>Trending</button>
                            </div>
                        </section>
                    </form>
                </section> : null
            }



            <section className='dashboard_main w-[100%] h-[100vh] bg-[#ccfecc] flex justify-between '>
                <Sidebar />

                <div className='dashboard_inner h-[100vh] bg-white pt-[40px] px-[40px] overflow-y-scroll'>




                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className=''>
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>{data.data.Company_Name}</h1>
                        </div>


                        {/* <div className='icons_section text-[30px]'>
                            <IoIosNotificationsOutline />
                        </div> */}
                    </section>


                    <section className='w-[100%] flex justify-between my-[40px] flex-wrap'>
                        <section className='page_label p-[10px] rounded-[8px] w-[100%] mt-[30px]'>
                            <section className='flex justify-evenly items-center'>
                                <div className='w-[200px]'>
                                    <img src={data.imgurl + data.data.Logo} className=' rounded' alt="" />
                                </div>

                                <div className='w-[calc(100%-300px)]'>
                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Company Name : {data.data.Company_Name}</h4>
                                    </div>

                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Industry : {data.data.Industry}</h4>
                                    </div>

                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Email : {data.data.Email}</h4>
                                    </div>

                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Phone : {data.data.Phone}</h4>
                                    </div>

                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Name : {data.data.FirstName + " " + data.data.LastName}</h4>
                                    </div>


                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Stage : {data.data.Stage}</h4>
                                    </div>


                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Funding Ask : {data.data.Funding_Ask}</h4>
                                    </div>

                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Equity Dilution : {data.data.Equity_Dilution}</h4>
                                    </div>
                                </div>
                            </section>

                            <section className='flex justify-evenly items-center'>

                                <div className='w-[95%]'>
                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500]'>Description : {data.data.Company_Description}</h4>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                        <h4 className='font-[500]'>Highlight1 : {data.data.Highlight1}</h4>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                        <h4 className='font-[500]'>Highlight2 : {data.data.Highlight2}</h4>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                        <h4 className='font-[500]'>Highlight3 : {data.data.Highlight3}</h4>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                        <h4 className='font-[500]'>Highlight4 : {data.data.Highlight4}</h4>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                        <h4 className='font-[500]'>Highlight5 : {data.data.Highlight5}</h4>
                                    </div>
                                </div>
                            </section>




                            <section className='flex justify-evenly items-center'>

                                <div className='w-[95%]'>
                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500] text-[30px]'>Backers</h4>
                                    </div>

                                    <div className='w-[100%] my-4 flex'>
                                        <div className='w-[300px] border p-2 rounded-[15px] bg-[#c1f5c1] mx-3'>
                                            <div className='w-[100%]'>
                                                <img src={data.imgurl + data.data.BackersProfile1} alt="" />
                                            </div>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.BackersName1}</h3>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.BackersDesignation1}</h3>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.BackersExperience1}</h3>
                                        </div>

                                        <div className='w-[300px] border p-2 rounded-[15px] bg-[#c1f5c1] mx-3'>
                                            <div className='w-[100%]'>
                                                <img src={data.imgurl + data.data.BackersProfile2} alt="" />
                                            </div>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.BackersName2}</h3>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.BackersDesignation2}</h3>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.BackersExperience2}</h3>
                                        </div>
                                    </div>
                                </div>
                            </section>


                            <section className='flex justify-evenly items-center'>

                                <div className='w-[95%]'>
                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500] text-[30px]'>Team</h4>
                                    </div>

                                    <div className='w-[100%] my-4 flex'>
                                        <div className='w-[300px] border p-2 rounded-[15px] bg-[#c1f5c1] mx-3'>
                                            <div className='w-[100%]'>
                                                <img src={data.imgurl + data.data.TeamProfile1} alt="" />
                                            </div>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.TeamName1}</h3>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.TeamDesignation1}</h3>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.TeamExperience1}</h3>
                                        </div>

                                        <div className='w-[300px] border p-2 rounded-[15px] bg-[#c1f5c1] mx-3'>
                                            <div className='w-[100%]'>
                                                <img src={data.imgurl + data.data.TeamProfile2} alt="" />
                                            </div>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.TeamName2}</h3>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.TeamDesignation2}</h3>
                                            <h3 className='p-3 bg-white my-3 text-[20px] font-[500]'>{data.data.TeamExperience2}</h3>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='flex justify-evenly items-center '>

                                <div className='w-[95%]'>
                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500] text-[30px]'>Problem</h4>
                                        <h4 className='font-[500]'>{data.data.Problem}</h4>
                                    </div>

                                    <div className='w-[100%] my-2'>
                                        <h4 className='font-[500] text-[30px]'>Solution</h4>
                                        <h4 className='font-[500]'>{data.data.Solution}</h4>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                        <h4 className='font-[500]  text-[30px]'>Market size</h4>
                                        <h4 className='font-[500]'> {data.data.Market_Size}</h4>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                    </div>

                                    <div className='w-[100%] my-4'>
                                        <h4 className='font-[500]  text-[30px]'>Competitors</h4>
                                        <h4 className='font-[500]'>{data.data.Competition}</h4>
                                    </div>

                                </div>
                            </section>


                            <section className='w-[100%] flex  justify-center'>
                                <div className='w-[95%]'>
                                    <h4 className='font-[500]  text-[30px]'>Youtube Video</h4>
                                    <iframe frameborder="0" className='youtube' allowFullScreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Credresolve Overview" src={data.data.Video_Link} id="widget2" data-gtm-yt-inspected-13="true"></iframe>
                                </div>
                            </section>


                            <section className='w-[100%] flex  justify-center'>
                                <div className='w-[95%] flex justify-between flex-wrap my-3'>

                                    <div className='my-2'>
                                        <a href={data.imgurl + data.data.Pitch_Deck} download={data.imgurl + data.data.Pitch_Deck} className='bg-[#c6f4c6] w-[250px] p-4 rounded-[25px] font-[600] text-[black] text-[20px] flex justify-between items-center'>Pitch Deck
                                            <div>
                                                <FaDownload />
                                            </div>
                                        </a>
                                    </div>


                                    <div className='my-2'>
                                        <a href={data.imgurl + data.data.Incorporation_Certificate} download={data.imgurl + data.data.Incorporation_Certificate} className='bg-[#c6f4c6] w-[250px] p-4 rounded-[25px] font-[600] text-[black] text-[20px] flex justify-between items-center'>Incorporation Certificate
                                            <div>
                                                <FaDownload />
                                            </div>
                                        </a>
                                    </div>

                                    <div className='my-2'>
                                        <a href={data.data.Website} className='bg-[#c6f4c6] w-[250px] p-4 rounded-[25px] font-[600] text-[black] text-[20px] flex justify-between items-center'>Website
                                            <div>
                                                <FaEarthAsia />
                                            </div>
                                        </a>
                                    </div>

                                    <div className='my-2'>
                                        <a href={data.data.LinkedinUrl} className='bg-[#c6f4c6] w-[250px] p-4 rounded-[25px] font-[600] text-[black] text-[20px] flex justify-between items-center'>Linkedin
                                            <div>
                                                <FaLinkedin />
                                            </div>
                                        </a>
                                    </div>

                                    <div className='my-2'>
                                        <a href={data.imgurl + data.data.Company_Pan} download={data.imgurl + data.data.Company_Pan} className='bg-[#c6f4c6] w-[250px] p-4 rounded-[25px] font-[600] text-[black] text-[20px] flex justify-between items-center'>PanCard
                                            <div>
                                                <FaDownload />
                                            </div>
                                        </a>
                                    </div>


                                    <div className='my-2'>
                                        <a href={data.imgurl + data.data.Financial_Projection} download={data.imgurl + data.data.Financial_Projection} className='bg-[#c6f4c6] w-[250px] p-4 rounded-[25px] font-[600] text-[black] text-[20px] flex justify-between items-center'>Financials and Projections
                                            <div>
                                                <FaDownload />
                                            </div>
                                        </a>
                                    </div>

                                    <div className='my-2 w-[200px]'>

                                    </div>

                                    <div className='my-2 w-[200px]'>

                                    </div>


                                    <div className='my-2 w-[2x0px]'>

                                    </div>
                                </div>
                            </section>

                            <section className='w-[100%] flex  justify-center'>
                                <div className='w-[95%] flex justify-center flex-wrap my-5'>

                                    <button className='m-2 bg-[red] py-[10px] px-[25px] rounded-[10px] text-[white] text-[20px] font-[500]' onClick={() => setrejecttmodal(true)}>
                                        Reject
                                    </button>


                                    <button className='m-2 bg-[green] py-[10px] px-[25px] rounded-[10px] text-[white] text-[20px] font-[500]' onClick={() => setacceptmodal(true)}>
                                        Accept
                                    </button>

                                    <button className='m-2 bg-[#1e4454] py-[10px] px-[25px] rounded-[10px] text-[white] text-[20px] font-[500]' onClick={() => settrendingmodal(true)}>
                                        Trending
                                    </button>
                                </div>
                            </section>
                        </section>

                    </section>

                </div >
            </section >
        </>
    )
}
