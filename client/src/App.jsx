import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Web from './components/Web/Web';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Blog from './components/Blogs/Blog';
import CreateBlog from './components/Blogs/CreateBlog';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/web' element={<Web />}>
          <Route path='Home' element={<Home/>}/>
          <Route path='blog/:id' element={<Blog/>}/>
          <Route path='createBlog' element={<CreateBlog/>}/>
          <Route path='editBlog/:id' element={<CreateBlog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
