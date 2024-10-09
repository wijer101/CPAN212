const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const save_router = require("./routers/save_router");
const fetch_router = require("./routers/fetch_router");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve the uploads directory as static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/save", save_router);
app.use("/fetch", fetch_router);

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
