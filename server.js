const app = require("./app.js");
const connectDB = require("./DB/db.js");
const dotenv = require("dotenv");

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running");
});
