import jwt from 'jsonwebtoken'

const SECRET = (process.env.SECRET).toString()

const decodeUserFromToken = (req, res, next) => {
  let token = req.get('Authorization') || req.query.token || req.body.token
  if (token) {
    token = token.replace('Bearer ', '')
    jwt.verify(JSON.parse(token), SECRET, (err, decoded) => {
      if (err) {
        console.log("DECODE USER TOKEN ERROR")
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