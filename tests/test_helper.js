const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const initialBlogs = [
  {
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
  },
  {
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
  },
]


const initialUser = {
  "username": "vruuska",
  "name": "Venla Ruuska",
  "password": "salasana",
  "adult": true
}

const filter = (blog) => {
  return {
    title: blog.title,
    author: blog.author,
    likes: blog.likes,
    url: blog.url,
    comments: blog.comments
  }
}

const blogsInDb = async () => {
  return await Blog.find({})
}

const filterUser = (user) => {
  return {
    name: user.name,
    username: user.username,
    adult: user.adult
  }
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(filterUser)
}

const getToken = (user) => {
  const userForToken = {
    username: user.username,
    id: user._id
  }
  const token = jwt.sign(userForToken, process.env.SECRET)
  return token
}

module.exports = {
  filter, blogsInDb, initialBlogs, usersInDb, initialUser, getToken
}