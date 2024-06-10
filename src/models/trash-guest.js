import { Schema, model } from "mongoose";

const trashGuestSchema = new Schema({
  guestName: { type: String, require: true },
  companion: { type: String, require: true },
  companionName: { type: [String] },
  contact: { type: String },
  message: { type: String },
  date: { type: Date, default: Date.now }
});

const TrashGuest = model("TrashGuest", trashGuestSchema);

export default TrashGuest;