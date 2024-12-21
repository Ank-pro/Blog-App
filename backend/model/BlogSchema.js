const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        trim: true,
      },
      summary: {
        type: String,
        required: true, 
        trim: true,
      },
      author: {
        type: String,
        required: true, 
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }
})

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;