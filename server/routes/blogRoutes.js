import express from 'express';
import mongoose from 'mongoose';
import Blog from '../models/Blog.js';

const router = express.Router();

router.post("/createBlog", async (req, res) => {
    try {
        const { title, desc, author } = req.body;
        const newBlog = new Blog({ title, desc, author });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        console.log("Error creating a Blog", error.message);
        res.status(500).json({error:"Internal server error"});        
    }
});

router.get("/blogs", async (req, res) => {
    try {
        const blogs = await  Blog.find({});
        res.status(200).json(blogs);
    } catch (error) {
        console.log("Error in fetching blog",error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/blog/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid blog ID" });
    }
    
    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error("Error retrieving blog:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.delete("/blog/:id", async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid blog id"});
    }
    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json(deletedBlog);
    } catch (error) {
        console.error("Error while deleting blog:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.put("/blog/:id", async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid blog id"});
    }

    try {
        const { title, desc, author } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(id, { title, desc, author });
        if (!updatedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json(updatedBlog);
    } catch (error) {
        console.error("Error while updating blog:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});



export default router;

