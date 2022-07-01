import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function EditBlog() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        title: location.state.title,
        content: location.state.content
    })
  return (
    <div>EditBlog</div>

  )
}

export default EditBlog