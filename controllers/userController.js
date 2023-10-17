import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Blog from "../model/BlogModel.js";

//!BURADA CLOUDİNARY İŞLEMİ YAPAMADIN ÇÜNKÜ İNPUTUN BOŞ DEĞER DÖNÜYORDU.BAŞKA BİR YÖNTEM DENEYECEĞİM. FAKAT YARIN ARTIK ÇOK YORULDUM. registerdeki profil resmini kaldır ve dashboarda ek olarak bir fileselect button koy ve modelini ona göre güncelle.
const createAuser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    // res.redirect('/login')
    return res.status(201).json({ user: user._id });
  } catch (error) {
    let errors2 = {};

    if (error.code === 11000) {
      errors2.email = "Farkı bir email ya da kullanıcı adı girmelisiniz";
    }

    if (error.name === "ValidationError") {
      Object.keys(error.errors).forEach((key) => {
        errors2[key] = error.errors[key].message;
      });
    }

    res.status(500).json(errors2);
    next();
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username });
    let same = false;

    if (user) {
      same = await bcrypt.compare(password, user.password);
    } else {
      return res.status(401).json({
        success: false,
        error: "Böyle bir kullanıcı yok",
      });
    }

    if (same) {
      const token = createToken(user._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      });

      res.redirect("/users/dashboard");
    } else {
      res.status(401).json({
        success: false,
        error: "Parola uyuşmuyor",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "token sorunlu",
    });
    console.log(error);
  }
};

// jsonwebtoken yardımıyla kullanıcıya bir authentication veriyoruz
const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const getDashboardPage = async (req, res) => {
  const blogs = await Blog.find({ user: res.locals.user._id });
  res.render("dashboard", {
    link: "dashboard",
    blogs,
  });
};

const getBlogUser = async (req, res) => {
  
  const user = await User.findById({ _id: req.params.id });
  const blogs = await Blog.find({ user: req.params.id });
  res.render("user", {
    user,
    blogs,
    link: "user",
  });
};



export { createAuser, loginUser, createToken, getDashboardPage, getBlogUser};
