import express from "express";
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

const app = express();
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", bookRoutes);
app.use("/api", reviewRoutes);

app.get("/", (req, res) => res.send("Book Review API is running"));
export default app;