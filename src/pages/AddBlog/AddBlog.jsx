import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../index.css'

function AddBlog(props) {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        title: '',
        content: '',
    })

    const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          props.handleCreateBlog(formData)
          navigate('/')
        } catch (err) {
          console.log(err)
        }
      }

      const handleDeleteblog = () => {
        // make API call to delete blog
        // update state to reflect deleted blog
      }

      const { title, content } = formData
  
      const isFormInvalid = () => {
        return !(title && content)
      }
  
    return (
        <form 
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={title}
                name="title"
                onChange={handleChange}
                />
            <textarea
                value={content}
                name="content"
                onChange={handleChange}
            />
            <button disabled={isFormInvalid()}>Submit</button>
            <Link to="/">
                <button>Cancel</button>
            </Link>
        </form>
    
  )
}

export default AddBlog