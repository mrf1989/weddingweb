import "dotenv/config";
import express from "express";
import router from "./router.js";
import dbConnect from "./database.js";

const PORT = process.env.PORT || 3000;

const app = express();

export default function startServer() {
  app.use(express.urlencoded({ extended: true }));
  app.use("/", router);
  app.use(express.static("./public"));

  dbConnect().then(() => {
    console.log("⚡️ Database connect well done!");
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}