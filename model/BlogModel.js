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
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
