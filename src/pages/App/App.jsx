import React, { useState,useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import * as authService from '../../services/authService.js'
import AddBlog from '../../pages/AddBlog/AddBlog'
import Blogs from '../Blogs/Blogs'
import EditBlog from '../EditBlog/EditBlog'

import BlogDetails from '../BlogDetails/BlogDetails'

import * as blogService from '../../services/blogService.js'

const App = () => {
	const [blogs, setBlog] = useState([])
	const [user, setUser] = useState(authService.getUser())
	const navigate = useNavigate()

	useEffect(() => {
		blogService.getBlogs()
		.then(blogs => setBlog(blogs))
	},[])

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	const handleCreateBlog = blogData => {
		blogService.createBlog(blogData)
		.then(newBlogData => setBlog([...blogs, newBlogData]))
		
	}

	const handleDeleteBlog = (id) => {
		console.log("You pushed delete button", id)
		blogService.deleteBlog(id)
		.then(deletedBlog => {
			setBlog(blogs.filter(blog => blog._id !== deletedBlog._id))
		})
		navigate('/blogs');
	}

	return (
		<>
			<NavBar user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users /> : <Navigate to='/login' />} />
				<Route path='/addBlog' element={<AddBlog handleCreateBlog={handleCreateBlog} />} />
				<Route path='/blogs'
				element={user ? <Blogs user={user} blogs={blogs}
				handleDeleteBlog={handleDeleteBlog} /> : 
			    <Navigate to='/login' />} />
				<Route path='/blogDetails'  element={<BlogDetails user={user} />} />
				<Route path='/editBlog' element={<EditBlog />} />
			</Routes>
		</>
	);
}
 
export default App;