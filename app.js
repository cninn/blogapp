import express from "express";
import dotenv from "dotenv"; //env config dosyamızı sync etmek için
import conn from "./db.js";
import cookieParser from "cookie-parser"; //tokeni çerezlerde tutmak için
import pageRoute from "./routes/pageRoute.js";
import blogRoute from "./routes/blogRoute.js";
import userRoute from "./routes/userRoute.js";
import { checkUser } from "./middlewares/authMiddleware.js";
import fileUpload from "express-fileupload"; //dosya yükleme için gerekli exp modulu
import { v2 as cloudinary } from "cloudinary"; //online tabanlı upload arşivi

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
});
//veri tabanı bağlantısı ekliyoruz
conn();

const app = express();
const PORT = 4100;

//ejs npm template engine kullanımı bu modul html sayfalarını sunucumuzda göstermemizi sağlar
app.set("view engine", "ejs");

//Static files middleware
app.use(express.static("public")); //statik dosyalarımızı tanımladık. css js veya html dosyalarımız için.
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //bodyden gelecek verileri almak için gerekli express fonksiyonu
app.use(cookieParser()); //cookieparser call
app.use(fileUpload({ useTempFiles: true }));

//GENERAL ROUTİNGS

app.use("*", checkUser);
app.use("/", pageRoute);

app.use("/blogs", blogRoute);
app.use("/blog", pageRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Zaman Makinası Yola Çıkıyor! http://localhost:${PORT}`);
});
