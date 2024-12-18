import axios, { toFormData } from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { toast, ToastContainer } from 'react-toastify';

export function DashhomeComponent() {
    let formik = useFormik({
        initialValues: {
          Heading: "",
          SubHeading: "",
          Paragraph: "",
          BannerImage: ""
        },
    
        onSubmit: () => {
          insertdata(formik.values);
        },
      });
    
      let notifyerror = (error) => toast.error(error);
      let notifysuccess = (success) => toast.success(success);
    
      let insertdata = (value) => {
        axios.post("http://localhost:5000/add-homebanner", toFormData(value))
        .then((res) => {
            if (res.data.Status === 1) {
              notifysuccess(res.data.Message);
            } else {
              notifyerror(res.data.Message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
  return (
    <>
      <ToastContainer/>
    </>
  )
}
