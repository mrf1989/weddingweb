import { Schema, model } from "mongoose";

const guestSchema = new Schema({
  guestName: { type: String, require: true },
  companion: { type: String, require: true },
  companionName: { type: [String] },
  contact: { type: String },
  message: { type: String }
});

const Guest = model("Guest", guestSchema);

export default Guest;