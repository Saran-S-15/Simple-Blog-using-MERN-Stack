import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import BasicSelect from '../Appbar/BasicSelect';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "./createBlog.css";
import { BASE_URL } from '../URL/Config';


function CreateBlog() {
    const navigate = useNavigate();

    const { id } = useParams();



    useEffect(() => {
        if (id) {
            const fetchEdit = async () => {
                try {
                    const blog = await axios.get(`${BASE_URL}/blogId/${id}`,{
                        headers: {
                            "Authorization" : window.localStorage.getItem("myapp")
                        }
                    });
                    formik.setValues(blog.data)
                } catch (error) {
                    alert("Something went wrong while fetching the blog data.")
                }
            }
            fetchEdit();
        }
    }, [id])


    const formik = useFormik({
        initialValues: {
            Title: "",
            Content: "",
            Tag: "",
        },
        enableReinitialize: true,
        validate: values => {
            let error = {}

            if (values.Title === "") {
                error.Title = "Title is required"
            }
            if (values.Content === "") {
                error.Content = "Your Blog is required"
            }
            if (values.Tag === "") {
                error.Tag = "Select a Tag"
            }


            return error
        },
        onSubmit: async (values) => {
            try {
                navigate("/web/Home");
                formik.resetForm();
                if (id) {
                    await axios.put(`${BASE_URL}/editBlog/${id}`, values,{
                        headers: {
                            "Authorization" : window.localStorage.getItem("myapp")
                        }
                    })
                    navigate(`/web/blog/${id}`)
                }
                else {
                    const response = await axios.post(`${BASE_URL}/blog`, values,{
                        headers: {
                            "Authorization" : window.localStorage.getItem("myapp")
                        }
                    });
                    console.log("Create response:", response);
                }
            } catch (error) {
                console.error("Submission error:", error);
                alert(`Something went wrong ${error}`)
            }
        }
    });
    return (
        <section className='createBlog'>
            <div className='container min-vh-100 d-flex flex-row justify-content-center'>
                <form onSubmit={formik.handleSubmit} className='mx-auto'>
                    <div className='row blogform mt-3 mx-auto'>
                        <div className='col-lg-12'>
                        <h1 className='fw-bold text-center'>{id ? "Edit Blog" : "Create Blog"}</h1>
                        </div>
                        <div className='col-lg-12'>
                            <TextField fullWidth
                                label="Title"
                                id="Title"
                                name="Title"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.Title} />
                        </div>
                        {
                            formik.touched.Title ? <span style={{ color: "black", marginLeft: "10px", marginTop: "10px" }}>{formik.errors.Title}</span> : null
                        }
                        <div className='col-lg-12'>
                            <TextField
                                className='mt-3 mb-3'
                                fullWidth
                                id="Content"
                                name="Content"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.Content}
                                label="Content"
                                multiline
                                rows={10}
                                placeholder='Your Blog'
                            />
                            {
                                formik.touched.Content ? <span style={{ color: "black", marginLeft: "10px" }}>{formik.errors.Content}</span> : null
                            }
                        </div>
                        <div className='col-lg-12 mt-2'>
                            <BasicSelect formik={formik} />
                        </div>
                        <div className='col-lg-12'>
                            <Button type='submit' className='mt-3 mb-2' sx={{ backgroundColor: "darkblue", width: "100%", borderRadius: "20px" }} variant="contained">{id ? "Update Blog" : "Create Blog"}</Button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CreateBlog;