import Blog from "../model/BlogModel.js";
import User from "../model/userModel.js";
const getIndexPage = async (req, res) => {
  const users = await User.find({}).sort({createdAt:-1});
  
  const blogs = await Blog.find({ user: { $not: { $eq: res.locals.user._id } } }).sort({createdAt:-1});
  res.render("index", {
    link: "index",
    users,
    blogs
  });
};
const getDiscoverPage = (req, res) => {
  res.render("blogs", {
    link: "blogs",
  });
};


const getRegisterPage = (req, res) => {
  res.render("register", {
    link: "register",
  });
};
const getLoginPage = (req, res) => {
  res.render("login", {
    link: "login",
  });
};

const getLogOut = (req, res) => {
  res.clearCookie("jwt").render("logout", {
    link: "logout",
  }); // Çerez temizleme
  // Kullanıcıyı login sayfasına yönlendirme
};


export {
  getIndexPage,
  getDiscoverPage,
  getRegisterPage,
  getLoginPage,
  getLogOut,
 
};
