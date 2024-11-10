import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from "../URL/Config";

function Home() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get(`${BASE_URL}/blogs`,{
            headers: {
                "Authorization" : window.localStorage.getItem("myapp")
            }
        });
        setBlogs(response.data);
    }

    useEffect(() => {
        fetchBlogs();
    }, [])



    const viewBlog = (blog) => {
        navigate(`/web/blog/${blog._id}`)
    }



    return (
        <section className="blogpage">
            <div className='container-fluid yo'>
                <div className='row'>
                    <div className='col-lg-12 mt-1'>
                        <h1 className='fw-bold text-center'>Blogs</h1>
                    </div>
                </div>
                <div className='row d-flex justify-content-center blogbox'>
                    {
                        blogs.map((blog) => {
                            return <div onClick={() => viewBlog(blog)} className='col-lg-4 box'>
                                <h1 className='text-center fw-bold'>{blog.Title}</h1>
                                <p className='para'>{blog.Content}</p>
                                <p className="tag">#{blog.Tag}</p>
                            </div>
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Home;