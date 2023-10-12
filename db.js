import mongoose from "mongoose";
//veri tabanı bağlantı fonksiyonu
const conn = ()=>{
    mongoose.connect(process.env.DB_URI,{
        dbName:"Blog_App",
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Veri tabanı aktif")
    }).catch(err=>{
        console.log(`${err} Veri tabanı bağlantı hatası`)
    })

}
export default conn;