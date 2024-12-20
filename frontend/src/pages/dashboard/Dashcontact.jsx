import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Sidebar } from '../../common/Sidebar'
import { useFormik } from 'formik'
export function Dashcontact() {
      let formik = useFormik({
    
      })
  return (
       <>
               <section className="main border-[1px] border-[black] bg-[black]">
                 <section className="dashboard_inner w-[100%] flex justify-between">
                   <Sidebar />
         
                   <section className="w-[90%] h-[100vh] rounded-s-[35px] flex items-center flex-col bg-[white] border-[1px] border-[white] overflow-y-scroll">
                     <section className="page_label w-[90%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[30px]">
                       <h1>Contact</h1>
                     </section>
                     <form className="w-[90%]" onSubmit={formik.handleSubmit}>
                       <section className="page_label w-[100%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                         <div>
                           <p>Contact Banner</p>
                         </div>
         
                         <div className="text-[black]">
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <label>Heading</label>
                             <input
                               type="text"
                               className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                               onChange={(e) =>
                                 formik.setFieldValue("Heading", e.target.value)
                               }
                             />
                           </div>
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <label>Paragraph</label>
                             <input
                               type="text"
                               className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                               onChange={(e) =>
                                 formik.setFieldValue("Paragraph", e.target.value)
                               }
                             />
                           </div>
         
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <label>Banner Image</label>
                             <input
                               type="file"
                               className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                               onChange={(e) =>
                                 formik.setFieldValue("BannerImage", e.target.files[0])
                               }
                             />
                           </div>
         
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <button
                               type="submit"
                               className="w-[200px] my-2 bg-[#e02708] text-[white] py-3 rounded"
                             >
                               Save
                             </button>
                           </div>
                         </div>
                       </section>
         
                       <section className="page_label w-[100%] mt-[50px] rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                         <p>Contact Form</p>
             
                         <div className="text-[black]">
                          
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <label>heading</label>
                             <input
                               type="text"
                               className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                               onChange={(e) =>
                                 formik.setFieldValue("About_Paragraph", e.target.value)
                               }
                             />
                           </div>
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <label>phoneNo</label>
                             <input
                               type="number"
                               className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                               onChange={(e) =>
                                 formik.setFieldValue("About_Paragraph", e.target.value)
                               }
                             />
                           </div>
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <label>Location</label>
                             <input
                               type="text"
                               className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                               onChange={(e) =>
                                 formik.setFieldValue("About_Paragraph", e.target.value)
                               }
                             />
                           </div>
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <label>Email</label>
                             <input
                               type="email"
                               className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                               onChange={(e) =>
                                 formik.setFieldValue("About_Paragraph", e.target.value)
                               }
                             />
                           </div>
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <label>Paragraph</label>
                             <input
                               type="text"
                               className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                               onChange={(e) =>
                                 formik.setFieldValue("Paragraph", e.target.value)
                               }
                             />
                           </div>
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <button
                               type="submit"
                               className="w-[200px] my-2 bg-[#e02708] text-[white] py-3 rounded"
                             >
                               Save
                             </button>
                           </div>
                         </div>
                       </section>
                       <section className="page_label w-[100%] mt-[50px] rounded-[10px] p-2 text-[#e02708] font-[600] text-[20px]">
                         <p>Get touch</p>
             
                         <div className="text-[black]">
                          
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <label>heading</label>
                             <input
                               type="text"
                               className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                               onChange={(e) =>
                                 formik.setFieldValue("About_Paragraph", e.target.value)
                               }
                             />
                           </div>
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <label>Paragraph</label>
                             <input
                               type="text"
                               className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                               onChange={(e) =>
                                 formik.setFieldValue("Paragraph", e.target.value)
                               }
                             />
                           </div>
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <label>section Image</label>
                             <input
                               type="file"
                               className=" border-[1px] border-[black] w-[100%] my-2 p-1 rounded"
                               onChange={(e) =>
                                 formik.setFieldValue("BannerImage", e.target.files[0])
                               }
                             />
                           </div>
                           <div className="w-[100%] my-2 text-[18px] font-[500] my-5">
                             <button
                               type="submit"
                               className="w-[200px] my-2 bg-[#e02708] text-[white] py-3 rounded"
                             >
                               Save
                             </button>
                           </div>
                         </div>
                       </section>
                     </form>
                   </section>
                 </section>
               </section>
               <ToastContainer />
         </>
  )
}

