import React from 'react'
import { useLocation, Link } from 'react-router-dom'


function BlogDetails(props) {
   const location = useLocation()
  return (
    <>
    <div>{location.state.title}</div>
    
    <h2>Author: {location.state.author.name}</h2>

    <h4>{location.state.content}</h4>

     {props.user.profile === location.state.author._id && <Link to="/editBlog" >Edit Blog</Link>} 

    </>
    

  );
}

export default BlogDetails