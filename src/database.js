import mongoose from "mongoose";

const URL_DB = process.env.URL_DB;

export default function dbConnect() {
  try {
    console.log(`Trying to connect database to: ${URL_DB}`);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "db connection error: "));
    return mongoose.connect(URL_DB, { useNewUrlParser: true });
  } catch (error) {
    console.error(`DATABASE CONNECTION ERROR: ${error}`);
  }
}