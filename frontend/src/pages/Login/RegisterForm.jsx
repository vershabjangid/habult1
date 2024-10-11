import React, { useState } from 'react'
import { Logo } from '../../common/Logo'
import { Link } from 'react-router-dom'
import axios, { all, toFormData } from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast, ToastContainer } from 'react-toastify'
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';

export function RegisterForm() {

    let [eye, seteye] = useState(false)


    let notificationsuccess = (success) => toast.success(success)
    let notificationerror = (error) => toast.error(error)
    let token;
    let getlocaldata = JSON.parse(localStorage.getItem('registerdata'))
    let insertdata = (value) => {
        axios.post('http://localhost:5000/add-register', [value, token = { token: JSON.parse(localStorage.getItem('authenticate')) }])
            .then((res) => {
                if (res.data.Status == 1) {
                    notificationsuccess("Data Inserted Successfully")
                }
                else {
                    notificationerror(res.data.Message)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const validationschema = Yup.object().shape({
        Firm_name: Yup.string().required("First Name Required"),
        Category: Yup.string().required("Category Required"),
        Bio: Yup.string().required("Short Bio Required"),
        Password: Yup.string().required("Password Required"),
        Phone: Yup.string().required("Phone number Required"),
        Logo: Yup.string().required("Logo Required"),
        Goal: Yup.string().required("Goal Required"),
        Raised: Yup.string().required("Raised Required"),
        PreMoneyValuation: Yup.string().required("Pre Money Valuation Required"),
        Equity: Yup.string().required("Equity Required"),
        MinimumInvestment: Yup.string().required("Minimum Investment Required"),
        Pan: Yup.string().required("Pan Card Required")
    })


    return (
        <>
            <section className='login_main w-[100%] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <Formik

                    initialValues={{
                        Email: getlocaldata.Email,
                        Join_as: getlocaldata.Join_as,
                        Phone: "",
                        Firm_name: "",
                        Category: "",
                        Bio: "",
                        Password: "",
                        Logo: "",
                        Goal: "",
                        Raised: "",
                        PreMoneyValuation: "",
                        Equity: "",
                        MinimumInvestment: "",
                        Pan: ""
                    }}


                    validationSchema={validationschema}
                    onSubmit={(value) => {
                        insertdata(value)
                    }}

                >
                    <Form className='login_inner w-[872px] p-[35px] bg-white rounded-[12px]'>
                        <div className='login_input_section h-[100%] '>
                            <div className='my-[10px]'>
                                <h1 className='text-center text-[32px] font-[500]'>Business Information</h1>
                            </div>
                            <div className='flex justify-between'>

                                <div className='my-[8px] text-black w-[48%]'>
                                    <div className='mb-2'>
                                        <p className='font-[500] mb-2'>Firm Legal Name <sup className='text-[red]'>*</sup> </p>
                                        <Field type='text' name="Firm_name" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' placeholder='Enter Entity Name' />
                                        <div className='requires_message'>
                                            <ErrorMessage name='Firm_name' className='' />
                                        </div>
                                    </div>



                                    <div className='my-[8px] text-black'>
                                        <p className='font-[500] mb-0'>Business Category <sup className='text-[red]'>*</sup></p>
                                        <Field as="select" name="Category" className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' placeholder='Enter Founder Name' >
                                            <option>Business Category</option>
                                            <option value={"Entertainment"}>Entertainment</option>
                                            <option value={"IT Services"}>IT Services</option>
                                            <option value={"Education"}>Education</option>
                                        </Field>
                                        <div className='requires_message'>
                                            <ErrorMessage name='Category' />
                                        </div>
                                    </div>

                                    <div className='my-[8px] text-black'>
                                        <p className='font-[500] mb-0'>Short Bio <sup className='text-[red]'>*</sup></p>
                                        <Field as="input" name="Bio" className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' placeholder='Enter Short Bio' />
                                    </div>
                                    <div className='requires_message'>
                                        <ErrorMessage name='Bio' />
                                    </div>

                                    <div className='my-[8px] text-black'>
                                        <p className='font-[500] mb-0'>Password <sup className='text-[red]'>*</sup></p>
                                        <Field as="input" type="password" name="Password" className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' placeholder='Enter Password' />
                                    </div>
                                    <div className='requires_message'>
                                        <ErrorMessage name='Password' />
                                    </div>

                                    <div className='my-[8px] text-black'>
                                        <p className='font-[500] mb-0'>Phone <sup className='text-[red]'>*</sup></p>
                                        <Field type='number' className=' w-[100%] border-[1px] p-[10px]  rounded-[8px]' placeholder='Phone Number' name='Phone' />
                                        <div className='requires_message'>
                                            <ErrorMessage name='Phone' className='' />
                                        </div>
                                    </div>


                                    <div className='my-[8px] text-black'>
                                        <p className='font-[500] mb-0'>Logo <sup className='text-[red]'>*</sup></p>
                                        <Field type='file' className=' w-[100%] border-[1px] p-[10px]  rounded-[8px]' placeholder='Phone Number' name='Logo' />
                                        <div className='requires_message'>
                                            <ErrorMessage name='Logo' className='' />
                                        </div>
                                    </div>




                                </div>

                                <div className='my-[8px] text-black w-[48%]'>
                                    <div className='mb-2'>
                                        <p className='font-[500] mb-2'>Goal <sup className='text-[red]'>*</sup> </p>
                                        <Field type='number' name="Goal" className=' w-[100%]  border-[1px] p-[10px]  rounded-[8px]' placeholder='Enter Goal' />
                                        <div className='requires_message'>
                                            <ErrorMessage name='Goal' className='' />
                                        </div>
                                    </div>



                                    <div className='my-[8px] text-black'>
                                        <p className='font-[500] mb-0'>Raised <sup className='text-[red]'>*</sup></p>
                                        <Field as="input" type="number" name="Raised" className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' placeholder='Enter Raised Value' />
                                        <div className='requires_message'>
                                            <ErrorMessage name='Raised' />
                                        </div>
                                    </div>

                                    <div className='my-[8px] text-black'>
                                        <p className='font-[500] mb-0'>Pre Money Valuation <sup className='text-[red]'>*</sup></p>
                                        <Field as="input" type="number" name="PreMoneyValuation" className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' placeholder='Enter Pre Money Valuation' />
                                    </div>
                                    <div className='requires_message'>
                                        <ErrorMessage name='PreMoneyValuation' />
                                    </div>

                                    <div className='my-[8px] text-black'>
                                        <p className='font-[500] mb-0'>Equity <sup className='text-[red]'>*</sup></p>
                                        <Field as="input" type="number" name="Equity" className=' w-[100%] border-[1px] mt-[10px] p-[10px]  rounded-[8px]' placeholder='Enter Equity' />
                                    </div>
                                    <div className='requires_message'>
                                        <ErrorMessage name='Equity' />
                                    </div>

                                    <div className='my-[8px] text-black'>
                                        <p className='font-[500] mb-0'>Minimum Investment <sup className='text-[red]'>*</sup></p>
                                        <Field type='number' className=' w-[100%] border-[1px] p-[10px]  rounded-[8px]' placeholder='Enter Minimum Investment' name='MinimumInvestment' />
                                        <div className='requires_message'>
                                            <ErrorMessage name='MinimumInvestment' className='' />
                                        </div>
                                    </div>

                                    <div className='my-[8px] text-black'>
                                        <p className='font-[500] mb-0'>Pan Card <sup className='text-[red]'>*</sup></p>
                                        <Field type='file' className=' w-[100%] border-[1px] p-[10px]  rounded-[8px]' placeholder='Phone Number' name='Pan' />
                                        <div className='requires_message'>
                                            <ErrorMessage name='Pan' className='' />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='my-[8px] text-black'>
                                <button className='border-[1px] w-[100%] py-[16px] px-[32px] my-[20px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]'>Next</button>
                            </div>

                            <div className='my-[8px] text-black'>
                                <p className='text-[grey] text-center'>Already have an account?<Link to={'/login'}><span className='text-black font-[500] ms-1'>LOGIN</span></Link></p>
                            </div>
                        </div>

                    </Form>
                </Formik>
            </section>
            <ToastContainer />
        </>
    )
}
