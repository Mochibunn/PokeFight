import mongoose from "mongoose";
import chalk from "../lib/chalk.js";

try {
  const client = await mongoose.connect(process.env.MONGO_URI);
  chalk(`green`, `\n🟢🐰 Connected to MongoDB @ ${client.connection.host}`);
  client.connection.on('disconnect', () => {
    throw new Error(`\n❌🐰 Lost connection to MongoDB @ ${client.connection.host}`);
  });
} catch (error) {
  chalk(`red`, `\n🛑🐰 Error!\n` + error);
  process.exit(0);
}
