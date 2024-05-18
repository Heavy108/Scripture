import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI), {
      autoIndex: true
    };
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongodb connected sucessfully");
    });

    connection.on("error", (err) => {
      console.log(
        "Mongodb connection error . Please make sure mongobd is running " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something Went wrong!");
    console.log(error);
  }
}

// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://Heavy108:Heavy1089@scripture.wz3mdfo.mongodb.net/?retryWrites=true&w=majority&appName=Scripture";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
