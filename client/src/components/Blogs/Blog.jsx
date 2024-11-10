import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import "./Blog.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { BASE_URL } from '../URL/Config';

function Blog() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState(null);
    const getBlogs = async () => {
        const blog = await axios.get(`${BASE_URL}/blogId/${id}`, {
            headers: {
                "Authorization" : window.localStorage.getItem("myapp")
            }
        });
        setBlogs(blog.data)
    }
    useEffect(() => {
        getBlogs();
    }, [id])

    const deleteBlog = async () => {
        try {
            await axios.delete(`${BASE_URL}/deleteBlog/${id}`,{
                headers: {
                    "Authorization" : window.localStorage.getItem("myapp")
                }
            });
            navigate("/web/home")
        } catch (error) {
            alert("Something went wrong");
        }
    }

    const handleEdit = (id) => {
        navigate(`/web/editBlog/${id}`)
    }

    return (
        <div className='container blog'>
            <div className='row'>
                <div className='col-lg-12 mt-3'>
                    {blogs ? (
                        <>
                            <h1 className='text-center fw-bold'>{blogs.Title}</h1>
                            <p style={{ textAlign: "justify", fontFamily:"-moz-initial", fontSize:"20px" }}>{blogs.Content}</p>
                            <Button variant="outlined" color="error" className='mb-2' onClick={deleteBlog}>
                                <DeleteIcon sx={{ cursor: "pointer",marginRight:"5px" }} />  Delete Blog
                            </Button>
                            <Button sx={{ marginLeft: "15px", borderRadius:"20px" }} onClick={() => handleEdit(blogs._id)} variant="contained" color="success">
                                <ModeEditIcon sx={{ cursor: "pointer",marginRight:"5px" }}/>Edit Blog
                            </Button>
                        </>
                    ) : (<p>Loading...</p>)}
                </div>
            </div>
        </div>
    )
}

export default Blog;