import "dotenv/config";

export default function listAllGuests(guests) {
  const GUESTS_PASSWORD = process.env.GUESTS_PASSWORD || "1234";
  let guestsCount = guests.length;

  const guestsHTML = guests.map(guest => {
    if (guest.companion === "Sí") guestsCount++;
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
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Young+Serif&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/guests.css">
    <title>Invitados | Cristina & Mario</title>
    <script>
      let password = false
      while (password != "${GUESTS_PASSWORD}") {
        password = prompt("Password");
      }
    </script>
  </head>
  <body>
    <header id="header" class="block-content">
      <img id="headerDecorator" src="./assets/images/marco-decorador.png" alt="">
      <h1 class="upper-text">Cristina y Mario</h1>
      <h3 class="upper-text">2 de noviembre de 2024. 12:00</h3>
      <p class="italic-text">Finca Puerta de Hierro</p>
    </header>
    <main class="block-content">
      <h3 class="upper-text title-content">Invitados confirmados</h3>
      <p>Conteo aproximado: ${guestsCount} invitados</p>
      <div class="guests-list">
        ${guestsHTML}
      </div>
    </main>
    <div class="footer-end"></div>
  </body>
  </html>
  `;
}