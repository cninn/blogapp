import express from "express";

const app = express();
const PORT =4100;

app.get('/',(req,res)=>{
    res.send("İNDEX PAGE")
})

app.listen(PORT,()=>{
    console.log(`Zaman Makinası Yola Çıkıyor! http://localhost:${PORT}`);
});