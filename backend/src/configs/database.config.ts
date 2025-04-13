import mongoose from 'mongoose';

export const dbconnect = () => {
  const mongoUri = process.env.MONGO_URI || "";
  mongoose
    .connect(mongoUri)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection error:", err));
};