import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../common/Sidebar'
import { useFormik } from 'formik'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export function Industry() {

    let industrynotification = (success) => toast.success(success)
    let industrynotificationerror = (error) => toast.error(error)

    let [acceptmodal, setacceptmodal] = useState(false)
    let [acceptmodaldata, setacceptmodaldata] = useState([])

    let [deletemodal, setdeletemodal] = useState(false)
    let [deletedata, setdeletedata] = useState([])


    let formik = useFormik({
        initialValues: {
            Industry: ""
        },

        onSubmit: () => {
            insertindustry(formik.values)
        }
    });

    let insertindustry = (value) => {
        axios.post('https://api.hivexv.com/add-industry', value)
            .then((res) => {
                if (res.data.Status == 1) {
                    industrynotification(res.data.Message)
                    viewindustry()
                }
                else {
                    industrynotificationerror(res.data.Message)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }


    let updateindustry = (value) => {
        let data = {
            _id: acceptmodaldata._id,
            Industry: value.target.Industry.value
        }

        console.log(data)
        axios.put('https://api.hivexv.com/update-industry', data)
            .then((res) => {
                if (res.data.Status == 1) {
                    industrynotification(res.data.Message)
                    viewindustry()
                    setacceptmodal(false)
                }
                else {
                    industrynotificationerror(res.data.Message)
                }
            })
            .catch((error) => {
                console.log(error)
            })


        value.preventDefault()
    }


    let [getindustry, setgetindustry] = useState([])
    let viewindustry = () => {
        axios.get('https://api.hivexv.com/view-industry')
            .then((res) => {
                console.log(res.data)
                setgetindustry(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        viewindustry()
    }, [])




    let removeindustry = (value) => {
        let data = {
            _id: value
        }

        console.log(data)

        axios.delete('https://api.hivexv.com/delete-industry', { data })
            .then((res) => {
                console.log(res.data)
                viewindustry()
            })
            .catch((error) => {
                console.log(error)
            })

        value.preventDefault()
    }


    return (
        <>

            {
                acceptmodal ? <section className='w-[100%] h-[100vh] fixed flex justify-center items-center bg-[#00000064]'>
                    <form onSubmit={updateindustry}>
                        <section className='w-[600px] border-[3px] p-[5px] py-[20px] rounded-[15px] bg-[white]'>
                            <h1 className='text-center text-[25px]'>Update Industry</h1>
                            <div className='w-[100%] flex justify-center my-3'>
                                <input type="text" defaultValue={acceptmodaldata.Industry} className='border-[1px] border-black w-[95%] m-auto p-2 rounded-[15px]' name='Industry' />
                            </div>
                            <div className='flex justify-evenly my-[15px]'>
                                <button className='bg-[red] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => setacceptmodal(false)}>Cancel</button>
                                <button type='submit' className='bg-[green] w-[47%] text-[20px] py-[10px] rounded text-white'>Update</button>
                            </div>
                        </section>
                    </form>
                </section> : null
            }


            {
                deletemodal ? <section className='w-[100%] h-[100vh] fixed flex justify-center items-center bg-[#00000064]'>
                    <form onSubmit={updateindustry}>
                        <section className='w-[600px] border-[3px] p-[5px] py-[20px] rounded-[15px] bg-[white]'>
                            <h1 className='text-center text-[25px]'>Are you sure to want delete Industry</h1>

                            <div className='flex justify-evenly my-[15px]'>
                                <button className='bg-[red] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => setdeletemodal(false)}>Cancel</button>
                                <button type='submit' className='bg-[green] w-[47%] text-[20px] py-[10px] rounded text-white' onClick={() => removeindustry(deletedata)}>Delete</button>
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
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>Industry</h1>
                        </div>


                        {/* <div className='icons_section text-[30px]'>
                            <IoIosNotificationsOutline />
                        </div> */}
                    </section>


                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className='w-[100%]'>
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>Add Industry</h1>

                            <form className='w-[100%] my-5' onSubmit={formik.handleSubmit}>
                                <h2 className='text-[#113c11] text-[20px] font-[500]'> Industry Name</h2>
                                <input type="text" className='border-[1px] border-black my-2 p-2 rounded-[10px] w-[100%] ' onChange={(e) => formik.setFieldValue('Industry', e.target.value)} placeholder='Enter industry name' />

                                <div className='flex justify-end my-[15px]'>
                                    <button type='submit' className='bg-[#113c11] text-[20px] py-2 px-10 rounded-[15px] text-white'>Save</button>
                                </div>
                            </form>
                        </div>

                    </section>


                    <section className='page_label p-3 rounded-[8px] mb-[25px] bg-white flex justify-between items-center '>
                        <div className='w-[100%]'>
                            <h1 className=' text-[#113c11] text-[25px] font-[500]'>View Industry</h1>

                            <form className='w-[100%] my-5' onSubmit={formik.handleSubmit}>
                                <table className='w-[100%] border-[1px] border-black'>
                                    <tr className=''>
                                        <th className='text-[#113c11] text-[15px] font-[500]'> Industry Name</th>
                                        <th className='text-[#113c11] text-[15px] font-[500]'> Edit</th>
                                        <th className='text-[#113c11] text-[15px] font-[500]'> Delete</th>
                                    </tr>
                                    {
                                        getindustry.map((items) => {
                                            return (
                                                <>
                                                    <tr className='border-t-[1px] border-black'>
                                                        <td className=' text-center text-[#113c11] text-[15px] font-[500]'>{items.Industry}</td>
                                                        <td className=' text-center text-[#113c11] text-[15px] font-[500]'> <div className='w-[150px] mx-auto my-2 py-2 px-6 rounded-[15px] text-white bg-[green]' onClick={(() => setacceptmodal(true) || setacceptmodaldata(items))}>Edit</div></td>
                                                        <td className=' text-center text-[#113c11] text-[15px] font-[500]'> <div className='w-[150px] mx-auto my-2 py-2 px-6 rounded-[15px] text-white bg-[#f34141]' onClick={(() => setdeletedata(items._id) || setdeletemodal(true))}>Delete</div></td>
                                                    </tr >
                                                </>
                                            )
                                        })
                                    }
                                </table>
                            </form>
                        </div>

                    </section>
                </div >



            </section >
            <ToastContainer />
        </>
    )
}
