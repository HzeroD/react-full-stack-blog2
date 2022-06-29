import * as tokenService from '../services/tokenService.js'
const BASE_URL = 'http://localhost:3003/api/users'

function createBlog(blogData) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(blogData)
   
  })
  .then(res => res.json())
}

export {
  createBlog
}