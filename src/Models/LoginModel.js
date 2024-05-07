import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  name: String,
  pass: String,
});

// const Newsletter = mongoose.models.Newsletter ? mongoose.model.Newsletter : mongoose.model("Newsletter", NewsletterSchema);
const Login = mongoose.models.Login || mongoose.model("Login",LoginSchema);


export default Login;
