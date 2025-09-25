import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
let db;

async function connectDB() {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    db = client.db(process.env.MONGODB_DBNAME);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect: ", err);
  }
}

const app = express();
app.use(express.json);
const PORT = process.env.PORT || 3000;

//get, post, put, patch, delete

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  app.get("/", (req, res) => {
    res.status(200).json({
      message: "Welcome to Web Programming.",
    });
  });

  app.post("/customer", async (req, res) => {
    //name, address, email, contact
    const { name, address, email, contact } = req.body; //null

    console.log("post: ", name, address, email, contact);
    //   const client = MongoClient(process.env.MONGODB_URI);
    //   await client.connect();
    //   const db = client.db(process.env.MONGODB_DBNAME);
    //   const collection = db.collection("customers");

    //   const customer = await collection.insertOne({
    //     name,
    //     address,
    //     email,
    //     contact,
    //   });

    res.status(201).json({
      message: "Customer successfully created",
      data: customer,
    });
  });
});
