import express from "express";
import * as blogController from "../controllers/blogController.js";

//sayfaların routing olması için gerekli express fonksiyonunu çağırıyoruz
const router = express.Router();

router
  .route("/")
  .post(blogController.createBlog)
  .get(blogController.getAllBlogs);



export default router;
