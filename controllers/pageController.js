import Blog from "../model/BlogModel.js";
import User from "../model/userModel.js";
const getIndexPage = (req, res) => {
  res.render("index", {
    link: "index",
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
