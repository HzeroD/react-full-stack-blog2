import * as tokenService from '../services/tokenService.js'
const BASE_URL = 'http://localhost:3003/api/users'

function getAllUsers() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {Authorization: `Bearer ${tokenService.getToken()}`},
   
  })
  .then(res => res.json())
}

export {
  getAllUsers
}