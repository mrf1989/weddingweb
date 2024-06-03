import "dotenv/config";
import headerView from "./templates/header.js";
import footerView from "./templates/footer.js";

const GUESTS_PASSWORD = process.env.GUESTS_PASSWORD || "1234";

export default function listAllGuests(props) {
  props.js = `
    <script>
      let password = false
      while (password != "${GUESTS_PASSWORD}") {
        password = prompt("Password");
      }
    </script>
  `;
  props.css = `<link rel="stylesheet" href="./css/guests.css">`;
  
  let guestsCount = props.guests.length;

  const guestsHTML = props.guests.map(guest => {
    if (guest.companion === "Sí") guestsCount += guest.companionName.length;
    return `
    <div class="guest-card">
      <div><b>${guest.guestName}</b></div>
      <ul>
        ${guest.companion === "Sí" ? `<li>Le acompaña: ${guest.companionName}</li>` : ``}
        ${guest.contact ? `<li>Contactar: ${guest.contact}</li>` : ``}
        ${guest.message ? `<li>Mensaje: ${guest.message}</li>` : ``}
      </ul>
    </div>`;
    
  }).join("");
  
  return `
  ${headerView(props)}
    <main class="block-content">
      <h3 class="upper-text title-content">Invitados confirmados</h3>
      <p>Conteo: ${guestsCount} invitados</p>
      <div class="guests-list">
        ${guestsHTML}
      </div>
    </main>
  ${footerView(props)}
  `;
}