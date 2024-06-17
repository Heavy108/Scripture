import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
  Username: String,
  Email: String,
  Date: Date,
  IsVerified: Boolean,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// const Newsletter = mongoose.models.Newsletter ? mongoose.model.Newsletter : mongoose.model("Newsletter", NewsletterSchema);
const Newsletter =
  mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema);

export default Newsletter;
