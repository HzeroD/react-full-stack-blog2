import jwt from 'jsonwebtoken'

const SECRET = (process.env.SECRET).toString()

const decodeUserFromToken = (req, res, next) => {
  let someRequest = req.get('Authorization').replace('Bearer','')
  console.log("SECRET!!!  ", SECRET)
  console.log("DECODE USER FROM TOKEN   ", someRequest.split('.')[1])
  console.log("req.body.token   ", req.body.token)
  let token = req.get('Authorization') || req.query.token || req.body.token
  if (token) {
    token = token.replace('Bearer ', '')
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        console.log("DECODE USER TOKEN ERRORRR")
        next(err)
      } else {
        req.user = decoded.user
        next()
      }
    })
  } else {
    next()
  }
}

function checkAuth(req, res, next) {
  return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}

export {
  decodeUserFromToken,
  checkAuth
}