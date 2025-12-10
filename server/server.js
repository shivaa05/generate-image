import express from "express";
import cors from "cors";
import imageRoutes from "./routes/imageRoutes.js";
import connectDB from "./utils/connectDB.js";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);app.use(express.json());
connectDB();

app.use("/api", imageRoutes);

app.use("/", (req, res) => {
  res.send("Hello");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
