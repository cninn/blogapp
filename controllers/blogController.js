import Blog from "../model/BlogModel.js";
import User from "../model/userModel.js";
import { v2 as cloudinary } from "cloudinary"; //online tabanlı upload arşivi
import fs from "fs";

const createBlog = async (req, res, next) => {



  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "blogapp",
    }
  );

  // console.log("result : ",result);

  try {
    await Blog.create({
      blogtitle: req.body.blogtitle,
      blogtext: req.body.blogtext,
      user: res.locals.user._id,
      url: result.secure_url,
      image_id: result.public_id,
    });

    fs.unlinkSync(req.files.image.tempFilePath);

    res.status(201).redirect("/users/dashboard");
  } catch (error) {

      if (!req.body.blogtitle && !req.body.blogtext){
     res.status(500).send(`<body style="width: 100%;
    height: 100vh;
    z-index: 999;
    margin:0;
    background-color:black;
    color:darkred;
    display: flex;
    text-align:center;
    justify-content: center;
    flex-direction:column;
    align-items: center;">
    <h1>Tüm Alanları Doldurmalısınız</h1>
    <h2>Örn:(Blog başlık,blog içeriği ve resim)</h2>
    <a style="font-size:30px; color:white; font-weight:bold;" href="/users/dashboard">Geri Dön</a>
</body>`);
  }
  }
};
const createAbout = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.photo.tempFilePath,
    {
      use_filename: true,
      folder: "blogapp",
    }
  );

  // console.log("result : ",result);
  const UserId = res.locals.user._id;
  try {
    await User.findByIdAndUpdate(
      UserId,
      {
        aboutTitle: req.body.aboutTitle,
        aboutText: req.body.aboutText,
        photo: result.secure_url,
      },
      { new: true }
    );

    fs.unlinkSync(req.files.photo.tempFilePath);

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
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).populate("user");
    const users = await User.find({});
    res.status(200).render("blogs", {
      blogs,
      link: "blogs",
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    const blogId = blog.image_id;

    await cloudinary.uploader.destroy(blogId);

    await Blog.findOneAndRemove({ _id: req.params.id });

    res.status(200).redirect("/users/dashboard");
  } catch (error) {
    console.log(error, "silme işlemi başarısız");
  }
};

export { createBlog, getAllBlogs, deleteBlog, createAbout };
