import * as tokenService from '../services/tokenService.js'
const BASE_URL = '/api/'

function createBlog(blogData) {
  return fetch(`${BASE_URL}/blogs`, {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(blogData)
   
  })
  .then(res => res.json())
}

function getBlogs() {
  return fetch(`${BASE_URL}blogs`, {
    method: 'GET',
    headers: {Authorization: `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

function deleteBlog(id) {
  return fetch(`${BASE_URL}/blogs/${id}`, {
    method: "DELETE",
    headers: {Authorization: `Bearer ${tokenService.getToken()}`},
  })
  .then(res => res.json)
}

export {
  createBlog,
  getBlogs,
  deleteBlog
}