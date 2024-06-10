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
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
    <script src="./js/guests.js" type="module"></script>
  `;
  props.css = `<link rel="stylesheet" href="./css/guests.css">`;
  
  let guestsCount = props.guests.length;

  const guestsHTML = props.guests.map(guest => {
    if (guest.companion === "Sí") guestsCount += guest.companionName.length;
    const companionList = guest.companionName.map(p => `<li>${p}</li>`).join("");
    return `
    <div class="guest-card">
      <div>
        <div><b>${guest.guestName}</b></div>
        <ul>
          ${guest.companion === "Sí" ? `<li>Le acompaña:<ul>${companionList}</ul></li>` : ``}
          ${guest.contact ? `<li>Contactar: ${guest.contact}</li>` : ``}
          ${guest.message ? `<li>Mensaje: ${guest.message}</li>` : ``}
        </ul>
      </div>
      <div><span data-guest-id="${guest.id}" data-guest-name="${guest.guestName}" class="delete-btn">X<span></div>
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
    <section id="modalWrapper" class="modal-wrapper hidden">
      <div class="modal">
        <h2>¿Quieres eliminar?</h2>
        <div id="modalInfo"></div>
        <p class="text-small">Esta acción no se puede deshacer.</p>
        <div class="modal-btns">
          <a id="confirmBtn" class="btn">Sí</a>
          <a id="cancelBtn" class="secondary-btn">No</a>
        </div>
      </div>
    </section>
  ${footerView(props)}
  `;
}