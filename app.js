
// BODY PARSER (JSON)
// app level middleware 

// Controllers should NOT do everything.
// Repeated logic goes into middlewares
const express = require("express");
const userRouter = require("./routes/users.routes.js");

const app = express();

app.use(express.json());

// Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("User Management API is Running");
});

app.use("/api/users", userRouter);

module.exports = app;


