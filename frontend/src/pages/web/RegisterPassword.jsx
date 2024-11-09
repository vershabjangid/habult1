import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Logo } from '../../common/Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { toast, ToastContainer } from 'react-toastify';
export function RegisterPassword() {
    let [joinstatus, setjoinstatus] = useState('Member');

    let location = useLocation();
    let logininfo = location.state

    const validationschema = Yup.object().shape({
        Join_as: Yup.string().required("Join as Required"),
        Password: Yup.string().required("Password Required"),
    })

    let naviget = useNavigate();

    let insertdata = (value) => {
        let data = {
            FirstName: logininfo.FirstName,
            LastName: logininfo.LastName,
            Email: logininfo.Email,
            Phone: logininfo.Phone,
            Join_as: value.Join_as,
            Password: value.Password,
        }

        localStorage.setItem('register-data', JSON.stringify(data))
        naviget('/register-otp', { state: data })
    }

    let notifyerror = (error) => toast.error(error)


    return (
        <>
            <section className='login_main w-[100%] h-[100vh] p-[15px]  bg-[#FCFAFF] flex justify-center items-center'>
                <section className='login_inner w-[572px] p-[35px] bg-white rounded-[12px]'>
                    <div className='login_input_section h-[100%] '>
                        <Formik

                            initialValues={{
                                Join_as: joinstatus,
                                Password: "",
                                ReferredBy: "",
                                ConfirmPassword: ""
                            }}

                            validationSchema={validationschema}
                            onSubmit={(values) => {
                                if (values.Password == values.ConfirmPassword) {
                                    values.Join_as = joinstatus
                                    insertdata(values);
                                }
                                else {
                                    notifyerror("Password Unmatched")
                                }
                            }}
                        >
                            <Form>
                                <div className='logo_section w-[200px] m-auto flex justify-center'>
                                    <Logo />
                                </div>
                                <div className='my-[20px]'>
                                    <h1 className='text-center text-[25px] font-[500]'>SIGNUP</h1>
                                </div>

                                <div className='w-[100%] h-[] my-[3px] text-black mb-8'>
                                    <p className='mb-1 text-[grey]'>Join as</p>
                                    <div className='w-[100%] h-[62px] bg-[#f9f4ff] rounded flex'>
                                        <div onClick={() => setjoinstatus("Member")} className={joinstatus == "Member" ? ' w-[50%] border-b-[5px] border-[var(--button-color--)] text-[var(--button-color--)] flex items-center justify-center font-[500]' : ' w-[50%] text-[grey] flex items-center justify-center font-[500]'}>Member</div>
                                        <div onClick={() => setjoinstatus("startup")} className={joinstatus == "startup" ? ' w-[50%] border-b-[5px] border-[var(--button-color--)] text-[var(--button-color--)] flex items-center justify-center font-[500]' : ' w-[50%] text-[grey] flex items-center justify-center font-[500]'}>Startups</div>
                                    </div>
                                </div>

                                <div className='my-[8px] text-black'>
                                    <label className=''>Password</label>
                                    <Field type='text' className=' w-[100%] my-1 border-[1px] p-[10px]  rounded-[8px]' placeholder='Password' name='Password' />
                                    <div className='requires_message'>
                                        <ErrorMessage name='Password' className='' />
                                    </div>


                                    <label className=''>Confirm Password</label>
                                    <Field type='text' className=' w-[100%] my-1 border-[1px] p-[10px]  rounded-[8px]' placeholder='Confirm Password' name='ConfirmPassword' />
                                    <div className='requires_message'>
                                    </div>


                                    <label className=''>Referred By</label>
                                    <Field type='text' className=' w-[100%] my-1 border-[1px] p-[10px]  rounded-[8px]' placeholder='Referred By' name='ReferredBy' />
                                    <div className='requires_message'>
                                        <ErrorMessage name='ReferredBy' className='' />
                                    </div>

                                </div>




                                <div className='my-[8px] text-black'>
                                    <button type='submit' className='border-[1px] w-[100%] py-[16px] px-[32px] my-[10px] bg-[var(--button-color--)] rounded-[8px] text-[20px] text-white font-[500]'>Next</button>
                                </div>

                                {/* <div className='w-[100%] flex items-center justify-between my-3'>
                                    <div className='w-[50%] border-b-[1px] border-[black]'></div>
                                    <p className='mx-5'>OR</p>
                                    <div className='w-[50%] border-b-[1px] border-[black]'></div>
                                </div> */}

                            </Form>
                        </Formik>
                        {/* <div className=' text-black'>
                            <button onClick={(e) => loginWithRedirect()} className='border-[1px] w-[100%] py-[16px] px-[32px] my-[2px] bg-[white] rounded-[8px] text-[20px] text-black font-[500] flex items-center justify-center'> <FcGoogle className='text-[35px] me-3' /> Continue with Google</button>
                        </div> */}


                        <div className='my-[8px] text-black'>
                            <p className='text-[grey] text-center'>Already have an account? <Link to={"/login"}><span className='text-black font-[500]'>LOGIN</span></Link></p>
                        </div>
                    </div>

                </section>
            </section>
            <ToastContainer />
        </>
    )
}
