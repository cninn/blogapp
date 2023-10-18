import mongoose from "mongoose";
import bcrypt from "bcrypt";//parola hasleme için gerekli paket
import validator  from "validator";// register giriş ekranı hata 



const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required:[
        true,"OPs! Username bilgisi zorunludur"
      ],
      trim: true,
      lowercase:true,
      validate:[validator.isAlphanumeric,"OPs! Kullanıcı adınız özel karakter içeremez"]
    },
    email: {
      type: String,
      required:[
        true,"OPs! Email adres zorunludur."
      ],
      trim: true,
      unique: true,
      validate:[validator.isEmail,"OPs! Hatalı bir email girdiniz."]
    },
    password: {
      type: String,
      required:[
        true,"OPs! Parola bilgisi zorunludur."
      ],
      trim: true,
      minlength:[5,"OPs! Parolanız en az 5 karakterden oluşmalıdır"]
    },
    photo:{
      type:String,
 /*      default:"https://www.vippng.com/png/full/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png" */
    },
    aboutTitle:{
      type:String,
      default:"Kendimi nasıl tanıtsam"
    },
    aboutText:{
      type:String,
      default:"Hakkımda neler yazsam"
    },
    followers:[
      {
        type:Schema.Types.ObjectId,
        ref:"User"
      }
    ],
    followings:[
      {
        type:Schema.Types.ObjectId,
        ref:"User"
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now // Yaratıldığında otomatik olarak güncellenir.
    },


    
  },
  
  {
    timestamps: true,
  }
);
//parola hashleme methodu
userSchema.pre("save", function (next) {
  const user = this;

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }

    user.password = hash;
    
    // Profil resmi yoksa veya boşsa, varsayılan resmi ata
/*     if (!user.photo) {
      user.photo = 'https://www.vippng.com/png/full/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png';
    } */
    if (!user.aboutTitle) {
      user.aboutTitle = "Kendimi nasıl tanıtsam";
    }
    if (!user.aboutText) {
      user.aboutText= "Hakkımda neler yazsam";
    }

    next();
  });
});








const User = mongoose.model("User", userSchema);

export default User;
