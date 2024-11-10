import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";
import { BASE_URL } from '../URL/Config';

function Login() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  }
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: ""
    },
    validate: values => {
      let error = {}

      if (values.Email === "") {
        error.Email = "Please enter your Email"
      }
      else if (!/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(values.Email)) {
        error.Email = "Invalid Email"
      }
      if (values.Password === "") {
        error.Password = "Please enter your Password"
      }

      return error
    },
    onSubmit: async values => {
      try {
        const logindata = await axios.post(`${BASE_URL}/login`, values);
        window.localStorage.setItem("myapp", logindata.data.token)
        navigate("/web/home");
      } catch (error) {
        alert("Invalid User or Invalid Password");
      }
    }
  })
  return (
    <section className='login'>
      <div className='container min-vh-100 d-flex flex-column justify-content-center align-items-center'>
        <form className='loginform' onSubmit={formik.handleSubmit}>
          <h1 className='text-center'>Login</h1>
          <TextField fullWidth label="Email" id="Email" name='Email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Email} />
          {
            formik.touched.Email ? <span style={{ color: "red" }}>{formik.errors.Email}</span> : null
          }
          <TextField className='mt-3' type='password' fullWidth label="Password" id="Password" name='Password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Password} />
          {
            formik.touched.Password ? <span style={{ color: "red" }}>{formik.errors.Password}</span> : null
          }
          <p style={{ cursor: "pointer" }} className='fw-bold mt-3' onClick={handleRegister}>New user? Register.</p>
          <Button type='submit' className='mt-1' sx={{ width: "100%", backgroundColor: "darkblue" }} variant="contained">LOGIN</Button>
        </form>
      </div>
    </section>
  )
}

export default Login;