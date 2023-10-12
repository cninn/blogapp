
import Blog from "../model/BlogModel.js";

const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({
      success: true,
      message: "Blog Yüklemesi Yapıldı.",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getAllBlogs = async (req, res) => {
  
  try {
    const blogs = await Blog.find({});

  
    res.status(200).render('blogs',{
        blogs,
        link:'blogs',
       
    })
  

  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};



export { createBlog, getAllBlogs};
