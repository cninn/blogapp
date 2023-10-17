import express from "express";
import * as pageController from "../controllers/pageController.js";
import * as blogController from "../controllers/blogController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";

//sayfaların routing olması için gerekli express fonksiyonunu çağırıyoruz
const router = express.Router();

router.route("/").get(pageController.getIndexPage);

router.route("/discover").get(pageController.getDiscoverPage);

router.route("/register").get(pageController.getRegisterPage);
router.route("/login").get(pageController.getLoginPage);

router.route("/logout").get(pageController.getLogOut);

export default router;
