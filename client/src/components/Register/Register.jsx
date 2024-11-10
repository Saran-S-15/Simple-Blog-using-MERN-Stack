import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.css";
import { BASE_URL } from '../URL/Config';

function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Password: ""
    },
    validate: values => {
      let error = {}

      if (values.Name === "") {
        error.Name = "Enter your Name"
      }
      if (values.Email === "") {
        error.Email = "Enter your Email"
      }
      else if(!/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(values.Email)){
        error.Email = "Invalid Email"
      }
      if (values.Password === "") {
        error.Password = "Enter your Password"
      }
      return error
    },
    onSubmit: async values => {
      try {
        await axios.post(`${BASE_URL}/register`, values);
        formik.resetForm();
        navigate("/");
      } catch (error) {
        alert("Something went wrong");
      }
    }
  })
  return (
    <section className='register'>
      <div className='container min-vh-100 d-flex flex-column justify-content-center align-items-center'>
        <form className='registerform' onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-12'>
              <h1 className='text-center'>Register</h1>
              <TextField className='mt-2' fullWidth label="Full Name" id="Name" name='Name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Name} />
              {
                formik.touched.Name ? <span style={{ color: "red" }}>{formik.errors.Name}</span> : null
              }
              <TextField className='mt-4' fullWidth label="Email" id="Email" name='Email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Email} />
              {
                formik.touched.Email ? <span style={{ color: "red" }}>{formik.errors.Email}</span> : null
              }
              <TextField type='password' className='mt-4' fullWidth label="Password" id="Password" name='Password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Password} />
              {
                formik.touched.Password ? <span style={{ color: "red" }}>{formik.errors.Password}</span> : null
              }
              <Button type='submit' className='mt-3 mb-2' sx={{ width: "100%", backgroundColor: "darkblue" }} variant="contained">REGISTER</Button>
            </div>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Register;