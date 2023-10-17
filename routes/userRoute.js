import express from "express";
import * as userController from "../controllers/userController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";


//sayfaların routing olması için gerekli express fonksiyonunu çağırıyoruz
const router = express.Router();

router.route("/register").post(userController.createAuser);
router.route("/login").post(userController.loginUser);
router.route("/dashboard").get(authMiddleware.authenticateToken,userController.getDashboardPage);
router.route("/:id").get(authMiddleware.authenticateToken,userController.getBlogUser);




export default router;
