import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ErrorMessage, Field, Form } from 'formik'
import { FaXmark } from 'react-icons/fa6'
import * as yup from "yup"
import axios, { toFormData } from 'axios'



export function InvestorRegister() {
    let notificationsuccess = (success) => toast.success(success)
    let notificationerror = (error) => toast.error(error)


    let getlocaldata = JSON.parse(localStorage.getItem('register-data'))


    let naviget = useNavigate()
    let [terms, setterms] = useState()


    const formik = useFormik({
        initialValues: {
            Join_as: getlocaldata.Join_as,
            Email: getlocaldata.Email,
            Phone: getlocaldata.Phone,
            Company_Name: "",
            Startup_Sector: "",
            Address: "",
            Password: "",
            Logo: "",
            Pan: "",
            AadharCard: "",
            BankDocuments: "",
            Activestatus: "pending",
            TermsAndConditions: "",
            ReferredBy: getlocaldata.ReferredBy,
        },
        validationSchema: yup.object({
            Company_Name: yup.string().required("Company Name Required"),
            Startup_Sector: yup.string().required("Startup sector Required"),
            Address: yup.string().required("Address Required"),
            Password: yup.string().required("Password Required"),
            Logo: yup.mixed().required("Logo Required"),
            Pan: yup.mixed().required("Pan Required"),
            AadharCard: yup.mixed().required("Aadhar Card Required"),
            BankDocuments: yup.mixed().required("Bank Documents Required"),
            AadharCard: yup.mixed().required("Aadhar Card Required"),
        }),

        onSubmit: () => {
            insertdata(formik.values)
        }
    })


    let insertdata = (value) => {
        axios.post('http://147.79.71.69:5000/investor-register', toFormData(value))
            .then((res) => {
                naviget('/startup-success')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    let [termsmodal, settermsmodal] = useState(false)


    return (
        <>
            <section className='login_main w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <form className='login_inner w-[872px] p-[35px] bg-white rounded-[12px]' onSubmit={formik.handleSubmit} >

                    {
                        termsmodal ? <div className='w-[100%] h-[100vh] bg-[#00000078] fixed top-0 start-0 flex justify-center items-center z-50'>
                            <div className='cross_btn_termsandcondition absolute right-[5%] top-[8%] text-white text-[25px]' onClick={() => settermsmodal(false)} ><FaXmark /></div>
                            <div className='termsmodalsection w-[60%] h-[85vh] bg-white rounded-[15px] overflow-y-scroll '>
                                <div className='p-4 border-b-[1px] border-black'>
                                    <h3 className='text-[25px] font-bold text-center'>Terms And Conditions</h3>

                                </div>
                                <p className=' text-justify p-4'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, voluptates ducimus est provident esse excepturi saepe repudiandae, laudantium numquam dolorum voluptatem aspernatur deleniti odio ea inventore totam. Facere sapiente quo pariatur, non ut rerum necessitatibus atque laboriosam quam, consectetur corrupti. Aspernatur voluptatibus aliquam perspiciatis aut doloremque odit, debitis vitae adipisci deleniti soluta ab quas nulla fugit architecto quod consequuntur ratione! Praesentium nesciunt ipsum molestiae quas doloribus! Dicta, reiciendis nulla odit eius repellendus nemo accusantium aspernatur itaque asperiores magnam quisquam excepturi ex mollitia sint tempore deleniti fugit, minima laboriosam perferendis quas. Sed aut officia, autem nam unde quibusdam, enim, ipsam aliquam provident fugiat inventore eligendi esse cupiditate quasi et omnis alias eos molestias perferendis asperiores. Cum dolore voluptatum sunt a, deserunt commodi dolorum rerum enim alias temporibus, recusandae quisquam excepturi accusamus esse aliquid voluptas nam iste perspiciatis maxime deleniti similique soluta aliquam totam. A quaerat odio incidunt in deleniti laboriosam cumque voluptatibus aut! Atque exercitationem cum amet qui provident fuga blanditiis ratione iste, rem doloribus. Animi, minima. Suscipit asperiores quis magni quas corporis aliquam, voluptatibus praesentium debitis cum quaerat esse assumenda necessitatibus beatae ratione soluta nam laboriosam adipisci tempore iure est! Temporibus beatae alias impedit repellat maiores commodi a esse, est culpa placeat blanditiis. Dignissimos ab excepturi necessitatibus possimus quibusdam! Delectus maiores unde amet repellat facilis quod, suscipit a eaque rerum soluta placeat vitae ea corrupti nulla corporis fuga doloremque dolor harum distinctio ipsa quo, magnam cumque veritatis. Mollitia praesentium dolore reprehenderit. Fugiat, ab? Dolores dignissimos optio exercitationem illo modi dolor sequi ad vel ea, aspernatur omnis eaque incidunt a deserunt inventore blanditiis ratione culpa officiis eligendi. Doloribus deserunt eligendi blanditiis nemo porro, laboriosam obcaecati ut ratione quis eum illum impedit, ducimus suscipit dignissimos accusamus commodi tenetur! Maiores maxime quasi eaque facere voluptatum excepturi consequuntur in provident id culpa, aut laboriosam quaerat molestias officia aperiam porro nulla ab pariatur temporibus inventore dolorem! Consequuntur explicabo quaerat ab consectetur exercitationem quia quidem maxime voluptatibus libero reprehenderit soluta nam deleniti praesentium, delectus nesciunt ratione deserunt. Iste at molestiae repellendus debitis nostrum deleniti beatae rerum, voluptate sunt, aliquid ad nisi vel exercitationem neque a accusantium quod hic enim, nam unde laborum? Aliquid veniam neque placeat inventore eos, quas illum illo hic aut obcaecati natus maiores voluptatum ipsum earum qui laborum temporibus laudantium debitis! Veniam, repellendus porro fuga itaque architecto similique hic recusandae illo, reprehenderit ad doloribus. Nam tempora praesentium, aspernatur consectetur blanditiis pariatur iusto totam obcaecati commodi optio, hic veritatis libero eos laboriosam enim, quod eveniet officiis? Consequatur veniam impedit nobis. Est delectus, asperiores illo neque porro itaque deleniti quae. Labore, amet nulla. Possimus consequatur ea, quidem ullam porro dolore officiis in architecto nesciunt, velit impedit obcaecati totam repudiandae aspernatur dignissimos. Ipsam temporibus nisi, ipsa dolorum laboriosam quam non neque? Nesciunt voluptatem nobis soluta ratione voluptatibus nam suscipit blanditiis sunt sit. Tempora, libero quia! Fugit ipsum ipsa autem eaque aperiam alias nostrum eius ab quas obcaecati, deleniti cupiditate excepturi deserunt earum in reprehenderit neque non voluptatem itaque quibusdam impedit aliquam. Voluptatum facilis minus vitae odit!
                                </p>
                                <div className='w-[100%] flex justify-center items-center my-5'>
                                    <input type="checkbox" className="w-[20px] h-[20px]" name="TermsAndConditions" onChange={(e) => formik.setFieldValue("TermsAndConditions", e.target.value)} />
                                    <p className='ms-3 font-bold'>Accept all Terms And Conditions</p>
                                </div>

                                <div className='w-[100%] flex justify-center items-center my-5'>
                                    <button type='submit' className='my-5 text-[20px] w-[80%] py-3 bg-purple-600 text-white rounded-[15px]'>NEXT</button>
                                </div>
                            </div>
                        </div> : null
                    }


                    <div className='login_input_section '>
                        <div className='my-[10px]'>
                            <h1 className='text-center text-[32px] font-[500]'>Investor Information</h1>
                        </div>
                        <div className='registerforms flex justify-between'>

                            <div className='registerformsleft my-[8px] text-black w-[48%]'>
                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Company Name <sup className='text-[red]'>*</sup> </p>
                                    <input type='text' name="Company_Name" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Company_Name", e.target.value)} placeholder='Company Name' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Company_Name}</div>
                                </div>



                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Company Sector <sup className='text-[red]'>*</sup></p>
                                    <select name="Startup_Sector" className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Startup_Sector", e.target.value)}>
                                        <option>Business Category</option>
                                        <option value={"Entertainment"}>Entertainment</option>
                                        <option value={"IT Services"}>IT Services</option>
                                        <option value={"Education"}>Education</option>
                                    </select>
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Startup_Sector}</div>
                                </div>



                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Address <sup className='text-[red]'>*</sup></p>
                                    <input type='text' className=' w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Address", e.target.value)} name='Address' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Address}</div>
                                </div>

                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Password <sup className='text-[red]'>*</sup></p>
                                    <input type='text' className=' w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Password", e.target.value)} name='Password' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Password}</div>
                                </div>
                            </div>

                            <div className='registerformsright my-[8px] text-black w-[48%]'>
                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Logo <sup className='text-[red]'>*</sup></p>
                                    <input name="Logo" type='file' className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Logo", e.target.files[0])} />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Logo}</div>
                                </div>

                                <div className='mb-2'>
                                    <p className='font-[500] mb-2'>Pan <sup className='text-[red]'>*</sup> </p>
                                    <input type='file' name="Pan" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("Pan", e.target.files[0])} placeholder='Enter Pan' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.Pan}</div>
                                </div>


                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Aadhar Card <sup className='text-[red]'>*</sup></p>
                                    <input type='file' className=' w-[100%] border-[1px] p-[10px] mt-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("AadharCard", e.target.files[0])} name='AadharCard' />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.AadharCard}</div>
                                </div>


                                <div className='my-[8px] text-black'>
                                    <p className='font-[500] mb-0'>Bank Proof <sup className='text-[red]'>*</sup></p>
                                    <input name="BankDocuments" type='file' className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' onChange={(e) => formik.setFieldValue("BankDocuments", e.target.files[0])} />
                                </div>
                                <div className='requires_message'>
                                    <div>{formik.errors.BankDocuments}</div>
                                </div>



                            </div>
                        </div>


                        <div className='my-[8px] text-black'>
                            <div onClick={() => settermsmodal(true)} className='border-[1px] text-center w-[100%] py-[16px] px-[32px] my-[20px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]'>Next</div>
                        </div>

                        <div className='my-[8px] text-black'>
                            <p className='text-[grey] text-center'>Already have an account?<Link to={'/login'}><span className='text-black font-[500] ms-1'>LOGIN</span></Link></p>
                        </div>
                    </div>

                </form>
            </section>
        </>
    )
}
