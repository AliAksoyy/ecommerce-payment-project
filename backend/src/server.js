const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
const stripe = require("./routes/stripe");
const orders = require("./routes/orders");
const productsRoute = require("./routes/products");
const path = require("path");

const products = require("./products");

const app = express();

require("dotenv").config({
  path: path.join(__dirname, "config", ".env"),
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/stripe", stripe);
app.use("/api/products", productsRoute);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const uri = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
