import mongoose from "mongoose";
import bcrypt from "bcrypt";//parola hasleme için gerekli paket
import validator  from "validator";// register giriş ekranı hata yakalama

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
    
    // // Profil resmi yoksa veya boşsa, varsayılan resmi ata
    // if (!user.photo) {
    //   user.photo = 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/c50a4a55883023.5996f8afa3f5c.gif';
    // }

    next();
  });
});








const User = mongoose.model("User", userSchema);

export default User;
