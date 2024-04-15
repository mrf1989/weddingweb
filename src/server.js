import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import router from "./router.js";

const PORT = process.env.PORT || 3000;

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function startServer() {
  app.use(express.static("./public"));
  app.use("/", router);



  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}