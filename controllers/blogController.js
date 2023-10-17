import Blog from "../model/BlogModel.js";
import User from "../model/userModel.js";
import { v2 as cloudinary } from "cloudinary"; //online tabanlı upload arşivi
import fs from 'fs';

const createBlog = async (req, res, next) => {
  const result = await cloudinary.uploader
    .upload(req.files.image.tempFilePath, {
      use_filename: true,
      folder: "blogapp",
    })
    .catch((err) => {
      console.log("resmi upload ederken bir sorun oluştu",err);
    });


  try {
    await Blog.create({
      blogtitle: req.body.blogtitle,
      blogtext: req.body.blogtext,
      user: res.locals.user._id,
      url:result.secure_url,
    });

    fs.unlinkSync(req.files.image.tempFilePath)

    res.status(201).redirect("/users/dashboard");
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getAllBlogs = async (req, res) => {
  try {
  
    const blogs = await Blog.find({}).populate('user');
    

    res.status(200).render("blogs", {
      blogs,
      link: "blogs"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};






export { createBlog, getAllBlogs};
