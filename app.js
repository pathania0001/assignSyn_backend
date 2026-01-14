const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const config = require("./configs");

const app = express();

app.use(cors("*"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(config.API_PREFIX, routes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "User Management API Server",
    version: "1.0.0"
  });
});

module.exports = app;
