const mongoose = require("mongoose");
const path = require("path");
const { User } = require("./models/UserModel");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = require("./app");

const PORT = process.env.PORT || 8000;
const DOMAIN = process.env.DOMAIN || "127.0.0.1";

const DB = "mongodb+srv://chaudharyshyam1355:Shyam@123@todolist.obrusa9.mongodb.net/?retryWrites=true&w=majority"

if (DB) {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(async () => {
      console.log("DB Connected SuccessFully");
    });
} else {
  console.log("No DB Connection String");
}

const server = app.listen(PORT, () => {
  console.log(`Server Running On: ${DOMAIN}:${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED_REJECTION!   Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
