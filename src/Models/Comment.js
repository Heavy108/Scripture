import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  blogId: { type: String, required: true },
  name: String,
  email: String,
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
