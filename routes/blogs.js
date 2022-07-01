import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as blogsCtrl  from "../controllers/blogs.js"

const router = Router()

/*---------- Public Routes ----------*/
router.get('/',blogsCtrl.index);

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, blogsCtrl.create)
router.delete('/:id', checkAuth, blogsCtrl.deleteBlog)


export { router }