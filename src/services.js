import Guest from "./models/guest.js";
import TrashGuest from "./models/trash-guest.js";

export async function registerNewGuestContact(data) {
  try {
    const { guestName, companion, companionName, contact, message } = data;

    if (data.guestUsername) {
      throw new Error("SPAM IN GUEST CREATION");
    }

    const newGuest = new Guest({
      guestName,
      companion,
      companionName,
      contact,
      message
    });

    await newGuest.save();
    return newGuest;
  } catch (error) {
    console.error(`NEW GUEST CREATION ERROR: ${error}`);
  }
}

export async function getAllGuests() {
  const guests = Guest.find({});
  return guests;
}

export async function deleteGuest(id) {
  try {
    const result = await Guest.findByIdAndDelete(id);
    if (result) {
      await guestToTrash(result);
      return result;
    }
  } catch (error) {
    console.error(`GUEST DELETE ERROR: ${error}`)
  }
}

async function guestToTrash(guest) {
  const guestToTrash = new TrashGuest({
    guestName: guest.guestName,
    companion: guest.companion,
    companionName: guest.companionName,
    contact: guest.contact,
    message: guest.message,
  });
  await guestToTrash.save();
}