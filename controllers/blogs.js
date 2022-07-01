import { Blog } from '../models/blog.js'

function create(req,res) {
    console.log(req.user.profile)
    req.body.author = req.user.profile
    console.log(req.body.author)
    Blog.create(req.body)
    .then(newBlog => {
        newBlog.populate('author')
        .then(blog => {
            res.json(blog)
        })
    })
};

function index(req,res) {
    console.log("BLOG.FIND()")
    Blog.find({})
    .populate('author')
    .then(blogs => {
         res.json(blogs)
    })
}

function deleteBlog(req, res) {
    Blog.findByIdAndDelete(req.params.id)
    .then(blog => {
        res.json(blog)
    })
}

export {
    create,
    index,
    deleteBlog
}