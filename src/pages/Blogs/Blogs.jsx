import React from 'react'
import { Link } from 'react-router-dom'

 const Blogs = (props) => {
  return (
    <div className="row">
        {props.blogs.map((blog) => 
            <div className="col-sm-6">
            <div className="card">
              <div className="card-header">
                  {blog.author.name}
              </div>
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content.substring(0,30)}...</p>
                {
                (props.user.profile === blog.author._id) && <button className="btn btn-danger" onClick={() => props.handleDeleteBlog(blog._id)}>Delete</button>
                }
                <Link to='/blogDetails' key={blog._id} className='btn btn-warning' user={props.user} state={blog}>Details</Link>
              </div>
            </div>
          </div>


        )}
    
  </div>
  )
}

export default Blogs
