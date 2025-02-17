import {config} from "dotenv";
import express from 'express';
import logger from "./middleware/logger.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(logger);
app.get("/", (req, res) => {
    res.send("Welcome to e commerce");
  });

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });