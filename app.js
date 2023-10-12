import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js";
import blogRoute from "./routes/blogRoute.js";

dotenv.config();
//veri tabanı bağlantısı ekliyoruz
conn();

const app = express();
const PORT = 4100;

//ejs npm template engine kullanımı bu modul html sayfalarını sunucumuzda göstermemizi sağlar
app.set("view engine", "ejs");

//Static files middleware
app.use(express.static("public")); //statik dosyalarımızı tanımladık. css js veya html dosyalarımız için.
app.use(express.json());

//GENERAL ROUTİNGS

/* app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/dashboard',(req,res)=>{
    res.render('dashboard');
})
app.get('/discover',(req,res)=>{
    res.render('discover');
})
app.get('/login',(req,res)=>{
    res.render('login');
})
app.get('/register',(req,res)=>{
    res.render('register');
}) */

app.use("/", pageRoute);
app.use("/dashboard", pageRoute);
app.use('/blogs', blogRoute);
app.use('/blog',pageRoute);

app.listen(PORT, () => {
  console.log(`Zaman Makinası Yola Çıkıyor! http://localhost:${PORT}`);
});
