import mongoose from "mongoose";

const MagazineSchema = new mongoose.Schema({
  _id: String,
  field: String,
  tags: String,
  Date: Date,
  Title: String,
  Description: String,
  image: String,
  Para1 : String,
  pdfaddress : String,
});

// const Magazine = mongoose.models.Magazine ? mongoose.model.Magazine : mongoose.model("Magazine", MagazineSchema);
const Magazine = mongoose.models.OneMagazine || mongoose.model("OneMagazine", MagazineSchema);


// console.log(mongoose.models);

export default Magazine;
