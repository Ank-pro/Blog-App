const express = require('express');
const Blog = require('../model/BlogSchema');
const route = express.Router();

route.get('/',async(req,res)=>{
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blogs" });
    }
})

route.get('/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        const blog = await Blog.findById(id);
        if(!blog){
            res.status(404).json({message : 'Blog not found!'})
        }
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({ message: "Error fetching blog" });
    }
})

route.post('/',async(req,res)=>{
    const {title,summary,author} = req.body;
    try {
        const newBlog = new Blog({title,summary,author});
        await newBlog.save();
        res.status(201).json(newBlog)
    } catch (error) {
        res.status(500).json({ message: "Error creating blog" });
    }
})

route.put('/:id',async(req,res)=>{
    const {id} = req.params;
    const {title,summary,author} = req.body;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id,{title,summary,author});
        if(!updatedBlog){
            res.status(404).json({message : 'Blog not found'})
        }
        res.status(200).json(updatedBlog)
    } catch (error) {
        res.status(500).json({ message: "Error updating blog" });
    }
})

route.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedBlog = await Blog.findByIdAndDelete(id);
      if (!deletedBlog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting blog" });
    }
  });

  module.exports = route;