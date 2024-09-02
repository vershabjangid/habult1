import React from 'react'
import { Header } from '../common/Header'
import bannerimg from "../images/bannerimg.png"

export function Home() {
  return (
    <>
      <section className='main'>
        <section className='main_inner '>
          <Header />

          <section className='landing_banner_main  mt-4 d-flex justify-content-evenly'>
            <section className='left_writing_content '>
              <h1 className=' landing_heading '>"Become a Startup Investor Invest in tomorrow".</h1>
              <p className='landing_subheading '>Hubalt Venture Private Limited helps investors to come together and back startups & entrepreneur.</p>


              <div className='landing_page_banner_buttons d-flex mt-4'>
                <button className='become_an_investor'>Become an Investor</button>
                <button className='submit_pitch_deck'>Submit Pitch Deck</button>
              </div>
            </section>
            <section className='right_image_content '>
              <img src={bannerimg} alt="" className='banner_img' />
            </section>
          </section>

          <section className='counter_landing border border-1 border-black my-4'>
            <div className=' counter_elements d-flex justify-content-center align-items-center flex-column'>
              <div className='fs-2 fw-bolder'>100<span className='counter_letters'>M</span></div>
              <div>Client Satisfaction</div>
            </div>

            <div className='counter_elements d-flex justify-content-center align-items-center flex-column'>
              <div className='fs-2 fw-bolder'>24<span className='counter_letters'>h</span></div>
              <div>Expert Support Team</div>
            </div>

            <div className='counter_elements d-flex justify-content-center align-items-center flex-column'>
              <div className='fs-2 fw-bolder'>208<span className='counter_letters'>+</span></div>
              <div>Client Worldwide</div>
            </div>

            <div className='counter_elements d-flex justify-content-center align-items-center flex-column'>
              <div className='fs-2 fw-bolder'>98<span className='counter_letters'>k+</span></div>
              <div>Sales Count</div>
            </div>
          </section>
        </section>
      </section>
    </>
  )
}
