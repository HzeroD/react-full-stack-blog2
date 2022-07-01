import * as tokenService from './tokenService.js'
const BASE_URL = "http://localhost:3003"

function signup(user) {
  return fetch(`${BASE_URL}/api/auth/signup`, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user),
  }).then(res => {
    return res.json()
  }).then(res => console.log(res))
  .then(({ token }) => tokenService.setToken(token))
  .catch(err => {
    console.log(err)
  })
};

function getUser() {
  return tokenService.getUserFromToken()
}

function logout() {
  console.log("LOGOUT FUNCTION")
  tokenService.removeToken()
}

function login(credentials) {
  console.log("AuthService LOGIN")
  return fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json'}),
    body: JSON.stringify(credentials)
  })
  .then(res => {
    if (res.ok) return res.json()
    throw new Error('Bad Credentials!')
  })
  .then(({ token }) => tokenService.setToken(token))
  .catch(err => {
    console.log(err)
  })
}

export {
  signup,
  getUser,
  logout,
  login
}
