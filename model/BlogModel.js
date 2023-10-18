import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema({
  blogtitle: {
    type: String,
    required: true,
    trim: true,
  },
  blogtext: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now // Yaratıldığında otomatik olarak güncellenir.
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },

  url:{
    type:String,
    required:true,
  },
  image_id:{
    type:String
  }
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;

