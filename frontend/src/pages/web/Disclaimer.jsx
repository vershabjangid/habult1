import React from 'react'
import { Footer } from '../../common/Footer'
import { Header } from '../../common/Header'

export function Disclaimer() {
    return (
        <>
            <section className='w-[100%] main'>

                <section className='landing_inner w-[100%] bg-gradient-to-tr from-[#f0eff1] to-[#ccb2f4] pt-4'>
                    <Header />

                    <section className='w-[100%] py-5 mt-[30px]'>
                        <section className='landing_banner_section w-[90%] h-[100%] m-auto'>
                            <div className='about_heading w-[100%]'>
                                <h1 className='text-[40px] font-[600] leading-[45px] text-center mb-5'>DISCLAIMER</h1>
                                <p className='text-[20px] pb-6 leading-10'>HubAlt is owned by Hubalt Venture Private Limited and reserves all rights to the assets, content, services, information, and products and graphics in the website. Company does not solicit, advertise, market any of the users registered with HubAlt, neither does it solicit investors by offering leagues/schemes/competitions etc. related to securities markets. HubAlt hereby clarifies that it does not carry any resemblance to the stock exchange nor does it facilitate trading of securities nor does it act like a broker/agent/media for raising funds. Investment through HubAlt does not carry rights of renunciation. Investors are cautioned that HubAlt operates in an unregulated space hence, investment through HubAlt is subject to investment risk. Investments in startups are highly illiquid. HubAlt would like to inform that generally there is High Risk involved in Alternate Investment opportunities. All investors, prior to making an investment decision, should carefully evaluate whether the investment is suitable for them considering one’s knowledge/experience in investment planning, investment objectives, financial ability, and risks appetite. It is necessary that before Investors make any investment decision, they should understand the following: HubAlt is not liable, and you will not hold HubAlt responsible for any delays, defaults, frauds, misrepresentations etc. on part of any counterparty(ies). HubAlt is only a facilitator of this opportunity and does not guarantee any repayment or scheduled payment under any scenario. The aforesaid list of risk factors is not intended to be exhaustive, nor a comprehensive explanation of the risks involved.
                                </p>
                            </div>

                        </section>

                    </section>
                    <Footer />
                </section>
            </section>
        </>
    )
}
