import Guest from "./models/guest.js";

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

export async function deleteGuest(data) {
  try {
    const { id, confirmation } = data;
    const deleteError = new Error("GUEST DELETE ERROR");

    if (confirmation) {
      const result = await Guest.findByIdAndDelete(id);
      if (result) {
        return result;
      }
    } else {
      throw deleteError;
    }
  } catch (error) {
    console.error(`GUEST DELETE ERROR: ${error}`)
  }
}