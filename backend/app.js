const express = require("express");
const app = express();
require("dotenv").config();
const database = require("./config/db");
const cors = require("cors");
const authRouter = require("./routers/authRouter");
const productRouter = require("./routers/productRouter");

const port = process.env.PORT || 5000;

database();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.get("/health-check", (_, res) =>
  res.json({ message: "Everything is okay!" })
);

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);

app.listen(port, () => console.log(`App is listening on port: ${port}`));
