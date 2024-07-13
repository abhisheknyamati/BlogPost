import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";
dotenv.config();

const app = express();
const corsOptions = {
  origin: ['http://localhost:5173', 'http://192.168.1.6:5173'],// Replace with your React app's URL or '*' for any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
app.use(express.json());

const PORT = 5000 || process.env.PORT;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    app.listen(PORT , () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

startServer().catch((error) => {
  console.error(
    "An error occurred while starting the server:",
    error
  );
});

app.get("/", (req, res) => {
  res.send("hello world!");
});


//routes
app.use("/api", blogRoutes);

export default app;