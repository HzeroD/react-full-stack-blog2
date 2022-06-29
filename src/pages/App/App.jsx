import React, { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import * as authService from '../../services/authService.js'
import AddBlog from '../../pages/AddBlog/AddBlog'

import { createBlog } from '../../services/blogService.js'

const App = () => {
	const [blogs, setBlog] = useState([])
	const [user, setUser] = useState(authService.getUser())
	const navigate = useNavigate()

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	const handleCreateBlog = blogData => {
		// createBlog(blogData)
		// .then(newBlogData => setBlog(newBlogData))
		setBlog([...blogs,blogData])
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
			</Routes>
		</>
	);
}
 
export default App;