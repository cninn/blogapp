import express from "express";
import * as blogController from "../controllers/blogController.js";
import * as userController from '../controllers/userController.js';

//sayfaların routing olması için gerekli express fonksiyonunu çağırıyoruz
const router = express.Router();

router
  .route("/")
  .post(blogController.createBlog)
  .get(blogController.getAllBlogs);

  router.route('/:id').delete(blogController.deleteBlog);
 



  

  



export default router;
