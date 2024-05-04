import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  _id: String,
  ref_id: String,
  Para1: String,
  pdfaddress: String,
});

const Blog = mongoose.models.Blog ? mongoose.model.Blog : mongoose.model("Blog", BlogSchema);
// const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);


// console.log(mongoose.models);

export default Blog;
