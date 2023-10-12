import express from "express";
import * as pageController from "../controllers/pageController.js";

//sayfaların routing olması için gerekli express fonksiyonunu çağırıyoruz
const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/discover").get(pageController.getDiscoverPage);
router.route("/dashboard").get(pageController.getDashboardPage);
router.route("/blog").get(pageController.getBlogPage);


export default router;
