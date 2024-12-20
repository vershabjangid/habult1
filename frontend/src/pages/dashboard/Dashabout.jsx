import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Sidebar } from '../../common/Sidebar'
import { useFormik } from 'formik'
import { DashAboutBanner } from './DashAbout/DashAboutBanner'
import { DashAboutContent } from './DashAbout/DashAboutContent'
import { DashAboutOurMission } from './DashAbout/DashAboutOurMission'
import { DashAboutOurVision } from './DashAbout/DashAboutOurVision'
import { DashMeetFounder } from './DashAbout/DashMeetFounder'

export function DashAbout() {

  let formik = useFormik({

  })
  return (
   <>
         <section className="main border-[1px] border-[black] bg-[black]">
           <section className="dashboard_inner w-[100%] flex justify-between">
             <Sidebar />
   
             <section className="w-[90%] h-[100vh] rounded-s-[35px] flex items-center flex-col bg-[white] border-[1px] border-[white] overflow-y-scroll">
               <section className="page_label w-[90%] my-5 rounded-[10px] p-2 text-[#e02708] font-[600] text-[30px]">
                 <h1>About</h1>
               </section>

               <DashAboutBanner/>
               <DashAboutContent/>
               <DashAboutOurMission/>
               <DashAboutOurVision/>
               <DashMeetFounder/>
             </section>
           </section>
         </section>
         <ToastContainer />
   </>
  )
}