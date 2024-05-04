import mongoose from "mongoose";

const MagazineSchema = new mongoose.Schema({
  _id: String,
  field: String,
  tags: String,
  Date: String,
  Title: String,
  Description: String,
  image: String,
});

// const Magazine = mongoose.models.Magazine ? mongoose.model.Magazine : mongoose.model("Magazine", MagazineSchema);
const Magazine = mongoose.models.Magazine || mongoose.model("Magazine", MagazineSchema);


console.log(mongoose.models);

export default Magazine;
