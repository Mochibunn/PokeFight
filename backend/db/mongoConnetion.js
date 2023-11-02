import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGO_URI);
let conPool;
try {
  conPool = await client.connect();
  console.log("Connected to MongoDB!");
} catch (error) {
  console.log(error);
}

export default conPool;
